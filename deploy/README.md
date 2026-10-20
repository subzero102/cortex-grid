# Cortex Grid — VPS nginx & TLS runbook

## Architecture

```
browser ──TLS──▶ vps-reverse-proxy (nginx container, network_mode: host)
                        │  config: /opt/vps-infra/nginx.conf
                        │          mounted as /etc/nginx/conf.d/default.conf
                        ▼
                127.0.0.1:3000  (cortex-grid container, plain HTTP)
```

There is **no host-level nginx**. All TLS work happens in the `vps-infra` stack
at `/opt/vps-infra`. Changing `Dockerfile`, `docker-compose.yml` or `src/` cannot
fix a handshake error, and `sudo nginx -t` does not exist on this box.

| File | Purpose |
|---|---|
| `nginx/cortexgridconsulting.com.conf` | **Fragment** appended to `/opt/vps-infra/nginx.conf`: HTTP→HTTPS redirect, ACME webroot, dual RSA+ECDSA certificate, TLS 1.2/1.3, HSTS, HTTP/2, reverse proxy to the container |
| `nginx/optional/00-default-server.conf` | Rejects connections whose SNI matches no vhost. Optional, see below |
| `apply-nginx-fragment.sh` | Appends the fragment, tests the config inside the container, reloads, rolls back on failure |
| `check-tls.sh` | Post-deploy assertions; exits non-zero on regression |

Shared Docker volumes (external, owned by the json-path-extractor stack):

| Volume | Mounted at | Purpose |
|---|---|---|
| `json-path-extractor_certs` | `/etc/letsencrypt` (ro in proxy, rw in certbot) | all certificate lineages |
| `json-path-extractor_certbot-www` | `/var/www/certbot` (ro in proxy) | ACME HTTP-01 webroot |

## Why dual certificates

The live certificate is Let's Encrypt **ECDSA** (issuer `YE2`). Every current
browser handles that, but a client that only advertises RSA signature algorithms
has no compatible key type and aborts with `ERR_SSL_VERSION_OR_CIPHER_MISMATCH`.
Serving an RSA lineage next to the ECDSA one lets nginx pick per client with no
security loss: modern clients still get ECDSA over TLS 1.3.

TLS 1.0/1.1 stay disabled — deprecated by RFC 8996, rejected by scanners.

## Step 0 — reconcile production with git (do this first)

`/opt/vps-infra/nginx.conf` on the VPS contains a `cortexgridconsulting.com`
block that is **not** in the repo. The next `git pull` in that directory will
overwrite the live file and take the site offline.

```bash
ssh <user>@213.210.21.177
cd /opt/vps-infra
sudo cp nginx.conf /root/nginx.conf.live.$(date +%F-%H%M)
git status --short            # expect nginx.conf modified
diff -u nginx.conf /root/nginx.conf.live.$(date +%F-%H%M)
```

Copy the live file back into the repo (or at least re-apply the unique parts),
commit it, then continue. Do not append to a file that git will overwrite.

## Step 1 — issue the RSA lineage (no downtime)

The ACME challenge location already answers on `http://cortexgridconsulting.com`,
so webroot issuance works without stopping the proxy.

```bash
cd /opt/vps-infra

docker compose run --rm --entrypoint certbot certbot certonly \
  --webroot -w /var/www/certbot \
  --key-type rsa --rsa-key-size 4096 \
  -d cortexgridconsulting.com -d www.cortexgridconsulting.com \
  --cert-name cortexgridconsulting-rsa \
  --email alliances@cortexgridconsulting.com --agree-tos --non-interactive

docker compose run --rm --entrypoint \
  "chmod -R a+rX /etc/letsencrypt/live /etc/letsencrypt/archive" certbot

docker compose run --rm --entrypoint "ls -1 /etc/letsencrypt/live" certbot
```

Expected: `cortexgridconsulting.com` (ECDSA, already there) and
`cortexgridconsulting-rsa` (new).

## Step 2 — apply the vhost

On the VPS. The cortex-grid checkout must be current so the fragment and script
are present:

```bash
cd /opt/cortex-grid && git pull
sudo ./deploy/apply-nginx-fragment.sh
```

The script:

1. refuses to run if the RSA lineage is missing;
2. warns if `nginx.conf` has uncommitted changes in `/opt/vps-infra/.git`;
3. **removes every existing `server` block whose `server_name` mentions
   `cortexgridconsulting.com`** and appends the fragment in its place — appending
   alone would not work, because nginx serves the first matching `server_name`
   and would keep the stale block;
4. backs up `nginx.conf` to `nginx.conf.bak.<timestamp>`;
5. writes in place (`cat >`), so the bind-mounted inode survives;
6. runs `docker compose exec reverse-proxy nginx -t`;
7. restores the backup automatically if the test fails;
8. reloads with `nginx -s reload` (zero downtime).

Preview the exact change without writing anything — works even on the dev
laptop against a copy of the file:

```bash
INFRA_DIR=/opt/vps-infra sudo ./deploy/apply-nginx-fragment.sh --dry-run
```

Manual equivalent, if you prefer (you must delete the old block first, or nginx
will keep serving it):

```bash
cd /opt/vps-infra
sudo cp nginx.conf nginx.conf.bak
sudoedit nginx.conf                     # delete the old cortexgrid server blocks
sudo tee -a nginx.conf < /opt/cortex-grid/deploy/nginx/cortexgridconsulting.com.conf
docker compose exec reverse-proxy nginx -t && docker compose exec reverse-proxy nginx -s reload
```

> If you edit `nginx.conf` with an editor that writes a new file (vim/nano with
> backupcopy, `sed -i`), the container keeps reading the **old inode** and the
> reload silently does nothing. Recover with
> `docker compose up -d --force-recreate reverse-proxy`.

## Step 3 — verify

```bash
cd /opt/cortex-grid
./deploy/check-tls.sh
```

Expected: DNS ok, HTTP 301, 200 on apex and `www`, TLS 1.2 + 1.3 handshakes,
TLS 1.0/1.1 refused, SAN covers both names, and **both** "RSA client receives RSA
certificate" and "ECDSA client receives ECDSA certificate".

Spot checks:

```bash
# RSA lineage, TLS 1.2 (TLS 1.3 forbids PKCS#1 RSA signatures, so pin 1.2)
openssl s_client -connect cortexgridconsulting.com:443 \
  -servername cortexgridconsulting.com -tls1_2 -sigalgs RSA+SHA256 \
  </dev/null 2>/dev/null | openssl x509 -noout -issuer -subject

# Modern path
openssl s_client -connect cortexgridconsulting.com:443 \
  -servername cortexgridconsulting.com -tls1_3 </dev/null 2>/dev/null |
  grep 'Cipher is'
```

## Rollback

```bash
cd /opt/vps-infra
sudo cp nginx.conf.bak.<timestamp> nginx.conf     # same inode, container sees it
docker compose exec reverse-proxy nginx -t && docker compose exec reverse-proxy nginx -s reload
```

The RSA lineage can stay in the volume; an unused certificate is harmless.

## Renewal — and the reload gap

The certbot service runs `certbot renew` every 12 hours with a `chmod` deploy
hook, but **nothing reloads nginx after a renewal**. nginx only re-reads
certificate files on start or reload, so renewed certs would sit unused until
the next container restart. Add a host timer:

```bash
sudo tee /etc/cron.d/reload-nginx-certs >/dev/null <<'EOF'
17 3 * * * root docker exec vps-reverse-proxy nginx -s reload >/dev/null 2>&1
EOF
```

A daily reload is cheap (drains workers gracefully) and covers both sites.
Alternatively add it to the certbot entrypoint, which needs the Docker socket
mounted into that container.

## Optional — reject unknown SNI

Today connections without SNI fall through to the first server block in the
file, which means they can receive another site's certificate. If a client or
proxy omits SNI, that produces a handshake error. `nginx/optional/00-default-server.conf`
fixes it, but it claims the `default_server` role for the whole host.

Pre-check — every vhost must name itself explicitly:

```bash
grep -nE '^\s*(server_name|listen)' /opt/vps-infra/nginx.conf
```

All blocks currently do (`extractjsonpath.com`, `cortexgridconsulting.com`,
`213.210.21.177`), so appending it is safe — but re-check after any future vhost
is added. Append it **above** the other blocks for readability; order does not
otherwise matter.

## Troubleshooting `ERR_SSL_VERSION_OR_CIPHER_MISMATCH`

That error means client and server found no common protocol + cipher.

**1. Is the server healthy?**

```bash
./deploy/check-tls.sh
```

If it passes, the fault is on the client or its network.

**2. Compare with the other site on the same nginx.** If
`https://extractjsonpath.com` opens from the failing device but
`https://cortexgridconsulting.com` does not, TLS configuration is *not* the
differentiator — both share this nginx, the same CA chain and the same cipher
list. Look at domain-level policy instead.

**3. On the failing machine (Windows, PowerShell):**

```powershell
Resolve-DnsName www.cortexgridconsulting.com      # must answer 213.210.21.177
nslookup www.cortexgridconsulting.com 8.8.8.8     # compare against corporate DNS
curl.exe -v https://www.cortexgridconsulting.com
curl.exe -v --noproxy "*" https://www.cortexgridconsulting.com
netsh winhttp show proxy
Get-ItemProperty 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings' |
  Select-Object ProxyEnable, ProxyServer, AutoConfigURL
```

- Corporate DNS answers a different IP → DNS/web-filter policy (newly registered
  domains are commonly blocked for ~30 days; ask IT to allowlist both names).
- `--noproxy "*"` works → endpoint proxy / SSL-inspection agent.
- Plain `http://` loads but `https://` never completes → TLS interception.
- Works on a phone hotspot → office network, not the device.

**4. Only then consider protocol changes.** Re-enabling TLS 1.0/1.1 is not a
supported fix; update the client instead.

## Notes

- Private keys stay in the Docker volume. Never commit `.pem` files —
  `.gitignore` already blocks them.
- The app container is intentionally unaware of TLS. Keep it that way.
- Port 3000 is not reachable from the internet (verified: connection times out),
  so the proxy is the only entry point.
