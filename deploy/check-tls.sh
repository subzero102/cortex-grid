#!/usr/bin/env bash
# Post-deploy TLS assertions for cortexgridconsulting.com.
#
# Usage:
#   ./deploy/check-tls.sh                       # checks the production domain
#   ./deploy/check-tls.sh example.com           # override the domain
#
# Requires: curl, openssl (1.1.1+), getent or nslookup.
# Exit code 0 = all checks passed, 1 = at least one failure.

set -uo pipefail

HOST="${1:-cortexgridconsulting.com}"
WWW="www.${HOST}"
PORT=443
FAILURES=0
NOTE_COLOR=""
RESET=""

if [ -t 1 ]; then
  NOTE_COLOR=$'\033[1;32m'
  FAIL_COLOR=$'\033[1;31m'
  RESET=$'\033[0m'
else
  FAIL_COLOR=""
fi

pass() { printf '%s  ok  %s%s\n' "${NOTE_COLOR:-}" "$1" "$RESET"; }
fail() {
  printf '%sFAIL  %s%s\n' "$FAIL_COLOR" "$1" "$RESET"
  FAILURES=$((FAILURES + 1))
}
info() { printf '      %s\n' "$1"; }

# Runs `openssl s_client` and echoes the negotiated cipher, or "FAILED".
s_client_probe() {
  local servername="$1"
  shift
  local out
  out=$(openssl s_client -connect "${HOST}:${PORT}" -servername "${servername}" \
        "$@" </dev/null 2>&1)
  printf '%s' "${out}" | grep -Eo 'Cipher is [A-Za-z0-9_-]+' | head -1 |
    sed 's/^Cipher is //'
}

echo "Checking https://${HOST} (and ${WWW})"
echo

# --- DNS ---------------------------------------------------------------------
ip=$(getent ahostsv4 "${HOST}" 2>/dev/null | awk 'NR==1{print $1}')
if [ -z "${ip}" ] && command -v nslookup >/dev/null 2>&1; then
  ip=$(nslookup "${HOST}" 2>/dev/null | awk '/^Address: /{print $2; exit}')
fi
if [ -n "${ip}" ]; then
  pass "DNS resolves ${HOST} -> ${ip}"
else
  fail "DNS does not resolve ${HOST}"
fi

# --- HTTP -> HTTPS -----------------------------------------------------------
code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 15 "http://${HOST}/" 2>/dev/null)
location=$(curl -sSI --max-time 15 "http://${HOST}/" 2>/dev/null |
  awk 'tolower($1)=="location:"{print $2}' | tr -d '\r')
if [ "${code}" = "301" ] || [ "${code}" = "308" ]; then
  case "${location}" in
    https://*) pass "HTTP redirects to ${location}" ;;
    *) fail "HTTP redirects to a non-HTTPS location: ${location:-<none>}" ;;
  esac
else
  fail "HTTP returned ${code:-no response} instead of a redirect"
fi

# --- HTTPS availability ------------------------------------------------------
for name in "${HOST}" "${WWW}"; do
  code=$(curl -sS -o /dev/null -w '%{http_code}' --max-time 20 \
    --resolve "${name}:${PORT}:${ip:-${HOST}}" "https://${name}/" 2>/dev/null)
  if [ "${code}" = "200" ]; then
    pass "https://${name} -> 200"
  else
    fail "https://${name} -> ${code:-no response}"
  fi
done

# --- Protocol coverage -------------------------------------------------------
for version in tls1_2 tls1_3; do
  cipher=$(s_client_probe "${HOST}" "-${version}")
  if [ -n "${cipher}" ]; then
    pass "${version/-/ } handshake (${cipher})"
  else
    fail "${version/-/ } handshake rejected"
  fi
done

# TLS 1.0/1.1 are expected to be refused; a success here is a regression.
for version in tls1 tls1_1; do
  cipher=$(s_client_probe "${HOST}" "-${version}" 2>/dev/null)
  if [ -z "${cipher}" ]; then
    pass "${version/-/ } correctly refused"
  else
    fail "${version/-/ } is still enabled (${cipher})"
  fi
done

# --- Certificate -------------------------------------------------------------
cert=$(openssl s_client -connect "${HOST}:${PORT}" -servername "${HOST}" \
       </dev/null 2>/dev/null | openssl x509 -noout -subject -dates -ext subjectAltName 2>/dev/null)
if [ -n "${cert}" ]; then
  pass "certificate presented for SNI ${HOST}"
  info "$(printf '%s' "${cert}" | tr '\n' ' ' | sed 's/  */ /g')"
else
  fail "no certificate presented for SNI ${HOST}"
fi

san=$(openssl s_client -connect "${HOST}:${PORT}" -servername "${HOST}" \
      </dev/null 2>/dev/null | openssl x509 -noout -ext subjectAltName 2>/dev/null)
for name in "${HOST}" "${WWW}"; do
  if printf '%s' "${san}" | grep -q "DNS:${name}"; then
    pass "SAN covers ${name}"
  else
    fail "SAN does not cover ${name}"
  fi
done

# --- Dual certificate lineages ----------------------------------------------
# A RSA-only client must be offered an RSA certificate; an ECDSA-only client an
# ECDSA one. Both failing means only one lineage is installed.
# Pinned to TLS 1.2 on purpose: TLS 1.3 forbids PKCS#1 RSA signatures (RSA+SHA256
# must be RSA-PSS there), so probing over 1.3 would make a healthy RSA lineage
# look broken. Legacy clients that lack ECDSA negotiate TLS 1.2 anyway.
for sigalg in RSA+SHA256 ECDSA+SHA256; do
  cert=$(openssl s_client -connect "${HOST}:${PORT}" -servername "${HOST}" \
        -tls1_2 -sigalgs "${sigalg}" </dev/null 2>/dev/null)
  if [ -z "${cert}" ]; then
    fail "handshake with -sigalgs ${sigalg} failed"
    continue
  fi
  key_type=$(printf '%s' "${cert}" | openssl x509 -noout -text 2>/dev/null |
    awk -F': ' '/Public Key Algorithm/{print $2; exit}')
  case "${key_type}" in
    *rsaEncryption*) want=RSA ;;
    *id-ecPublicKey*) want=ECDSA ;;
    *) want="" ;;
  esac
  expected=${sigalg%%+*}
  if [ -n "${want}" ] && [ "${want}" = "${expected}" ]; then
    pass "${expected} client receives ${want} certificate"
  else
    fail "${expected} client received ${key_type:-no} certificate (single-lineage setup)"
  fi
done

echo
if [ "${FAILURES}" -eq 0 ]; then
  printf '%sAll checks passed.%s\n' "${NOTE_COLOR}" "${RESET}"
  exit 0
fi

printf '%s%d check(s) failed.%s\n' "${FAIL_COLOR}" "${FAILURES}" "${RESET}"
exit 1
