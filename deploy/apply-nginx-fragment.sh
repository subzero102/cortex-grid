#!/usr/bin/env bash
# Installs the Cortex Grid server blocks into /opt/vps-infra/nginx.conf,
# validates the config inside the running proxy container, and reloads it.
#
# Any existing server block whose server_name mentions cortexgridconsulting.com
# is REPLACED by this fragment. Appending would not work: nginx serves the first
# matching server_name and would keep using the stale block.
#
# Run this ON THE VPS, after the RSA certificate lineage has been issued:
#
#   sudo ./deploy/apply-nginx-fragment.sh
#   sudo INFRA_DIR=/opt/vps-infra ./deploy/apply-nginx-fragment.sh
#
# Safe to re-run. On a failed config test the previous nginx.conf is restored.

set -euo pipefail

INFRA_DIR="${INFRA_DIR:-/opt/vps-infra}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
FRAGMENT="${FRAGMENT:-${SCRIPT_DIR}/nginx/cortexgridconsulting.com.conf}"
CONF="${INFRA_DIR}/nginx.conf"
COMPOSE=(docker compose -f "${INFRA_DIR}/docker-compose.yml")
CONTAINER="vps-reverse-proxy"
DOMAIN="cortexgridconsulting.com"
ECDSA_LINEAGE="cortexgridconsulting.com"
RSA_LINEAGE="cortexgridconsulting-rsa"
DRY_RUN=0

for arg in "$@"; do
  case "${arg}" in
    --dry-run) DRY_RUN=1 ;;
    -h|--help) sed -n '2,20p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) echo "unknown argument: ${arg}" >&2; exit 2 ;;
  esac
done


red()   { printf '\033[1;31m%s\033[0m\n' "$*"; }
green() { printf '\033[1;32m%s\033[0m\n' "$*"; }
info()  { printf '  %s\n' "$*"; }
die()   { red "$*"; exit 1; }

[ -f "${CONF}" ]     || die "not found: ${CONF}"
[ -f "${FRAGMENT}" ] || die "not found: ${FRAGMENT} (run from the cortex-grid checkout)"
command -v docker >/dev/null || die "docker is not installed"

echo "Infra dir : ${INFRA_DIR}"
echo "Conf file : ${CONF}"
echo "Fragment  : ${FRAGMENT}"
echo

# --- Runner ------------------------------------------------------------------
nginx_test() {
  "${COMPOSE[@]}" exec -T reverse-proxy nginx -t
}
nginx_reload() {
  "${COMPOSE[@]}" exec -T reverse-proxy nginx -s reload
}

# --- Preconditions -----------------------------------------------------------
if [ "${DRY_RUN}" = "0" ]; then
  if ! docker ps --format '{{.Names}}' | grep -qx "${CONTAINER}"; then
    die "container ${CONTAINER} is not running — start the stack first (docker compose up -d)"
  fi

  missing=""
  for lineage in "${ECDSA_LINEAGE}" "${RSA_LINEAGE}"; do
    "${COMPOSE[@]}" exec -T reverse-proxy \
      test -f "/etc/letsencrypt/live/${lineage}/fullchain.pem" \
      || missing="${missing} ${lineage}"
  done

  if [ -n "${missing}" ]; then
    red "missing certificate lineage(s):${missing}"
    cat <<EOF
Issue it first, from the infra directory:

  cd ${INFRA_DIR}
  docker compose run --rm --entrypoint certbot certbot certonly \\
    --webroot -w /var/www/certbot \\
    --key-type rsa --rsa-key-size 4096 \\
    -d ${DOMAIN} -d www.${DOMAIN} \\
    --cert-name ${RSA_LINEAGE} \\
    --email <you@example.com> --agree-tos --non-interactive

  docker compose run --rm --entrypoint \\
    "chmod -R a+rX /etc/letsencrypt/live /etc/letsencrypt/archive" certbot
EOF
    exit 1
  fi
  green "certificate lineages present"

  # --- Warn about repository drift ------------------------------------------
  if command -v git >/dev/null && git -C "${INFRA_DIR}" rev-parse --git-dir >/dev/null 2>&1; then
    if [ -n "$(git -C "${INFRA_DIR}" status --porcelain -- nginx.conf 2>/dev/null || true)" ]; then
      red "warning: ${CONF} has uncommitted changes in ${INFRA_DIR}/.git"
      info "a later 'git pull' there will revert this change — commit the file"
    fi
  fi
fi

# --- Remove stale cortexgrid server blocks ----------------------------------
# Walks top-level "server { ... }" blocks by brace depth and drops the ones that
# mention the domain. Everything else (other vhosts, comments) is preserved.
WORK="$(mktemp -d)"
trap 'rm -rf "${WORK}"' EXIT
NEW="${WORK}/nginx.conf"

removed=$(awk -v domain="${DOMAIN}" -v out="${WORK}/body.conf" '
  function count(s, ch,   n, i) {
    n = 0
    for (i = 1; i <= length(s); i++) if (substr(s, i, 1) == ch) n++
    return n
  }
  {
    line = $0
    if (!inblock) {
      if (line ~ /^[[:space:]]*server[[:space:]]*\{/) {
        inblock = 1; buf = line; depth = count(line, "{") - count(line, "}")
        if (depth == 0) { print buf > out; inblock = 0 }
      } else {
        print line > out
      }
      next
    }
    buf = buf "\n" line
    depth += count(line, "{") - count(line, "}")
    if (depth == 0) {
      if (buf ~ domain) {
        dropped++
        printf "# [apply-nginx-fragment] removed stale %s server block\n", domain > out
      } else {
        print buf > out
      }
      inblock = 0
    }
  }
  END {
    if (inblock) { print buf > out }   # unterminated block: keep it, nginx -t will complain
    close(out)
    print dropped + 0
  }
' "${CONF}")

cp "${WORK}/body.conf" "${NEW}"
printf '\n' >> "${NEW}"
cat "${FRAGMENT}" >> "${NEW}"

if [ "${removed:-0}" -gt 0 ]; then
  green "replaced ${removed} stale cortexgrid server block(s)"
else
  green "no existing cortexgrid blocks — installing fresh"
fi

if [ "${DRY_RUN}" = "1" ]; then
  echo
  echo "--- proposed diff (dry run, nothing written) ---"
  diff -u "${CONF}" "${NEW}" || true
  exit 0
fi

# --- Install, validate, reload ----------------------------------------------
if cmp -s "${CONF}" "${NEW}"; then
  green "nginx.conf already matches the fragment — nothing to write"
else
  BACKUP="${CONF}.bak.$(date +%Y%m%d-%H%M%S)"
  cp -p "${CONF}" "${BACKUP}"
  info "backup: ${BACKUP}"
  # cat > preserves the inode, so the bind-mounted file updates in place.
  cat "${NEW}" > "${CONF}"
  green "wrote ${CONF}"
fi

echo
echo "Validating config inside ${CONTAINER}..."
if ! nginx_test; then
  if [ -n "${BACKUP:-}" ] && [ -f "${BACKUP}" ]; then
    red "config test failed — restoring ${BACKUP}"
    cat "${BACKUP}" > "${CONF}"
    nginx_test || true
  else
    red "config test failed"
  fi
  exit 1
fi

echo
echo "Reloading nginx..."
nginx_reload
green "reloaded"

echo
green "Done. Verify:"
info "./deploy/check-tls.sh"
info "curl -sSI https://www.${DOMAIN} | head -1"
