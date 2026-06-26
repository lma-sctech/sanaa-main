#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
MAIN_DEPLOY_PATH="${1:-${HOME}/public_html}"
PREMIUM_DEPLOY_PATH="${2:-${HOME}/public_html/premium-travel}"
PREMIUM_BASE_PATH="${PREMIUM_BASE_PATH:-}"

fail() {
  echo "cpanel-deploy: $*" >&2
  exit 1
}

assert_node() {
  command -v node >/dev/null 2>&1 || fail "Node.js is required on the cPanel host."
  node -e "const [major, minor] = process.versions.node.split('.').map(Number); if (major < 20 || (major === 20 && minor < 19)) { console.error('Node.js >= 20.19.0 is required. Current: ' + process.versions.node); process.exit(1); }"
}

run_pnpm() {
  if command -v pnpm >/dev/null 2>&1; then
    pnpm "$@"
    return
  fi

  command -v corepack >/dev/null 2>&1 || fail "pnpm or corepack is required on the cPanel host."
  corepack pnpm "$@"
}

assert_safe_target() {
  local target="$1"

  [ -n "$target" ] || fail "Empty deployment target."
  [ "$target" != "/" ] || fail "Refusing to deploy to root."
  [ "$target" != "$HOME" ] || fail "Refusing to deploy to HOME."

  if [ "${ALLOW_OUTSIDE_PUBLIC_HTML:-0}" != "1" ]; then
    case "$target" in
      "$HOME/public_html"|"$HOME/public_html"/*) ;;
      *) fail "Refusing to deploy outside $HOME/public_html: $target" ;;
    esac
  fi
}

copy_export() {
  local source_dir="$1"
  local target_dir="$2"

  [ -d "$source_dir" ] || fail "Missing export directory: $source_dir"
  assert_safe_target "$target_dir"

  mkdir -p "$target_dir"
  find "$target_dir" -mindepth 1 -maxdepth 1 ! -name ".well-known" -exec rm -rf {} +
  cp -R "$source_dir"/. "$target_dir"/
}

cd "$ROOT_DIR"

export COREPACK_ENABLE_DOWNLOAD_PROMPT=0
export NEXT_TELEMETRY_DISABLED=1

if command -v corepack >/dev/null 2>&1; then
  corepack enable || true
fi

assert_node
run_pnpm install --frozen-lockfile

NEXT_PUBLIC_BASE_PATH="" run_pnpm --filter @sanaa/main build
NEXT_PUBLIC_BASE_PATH="$PREMIUM_BASE_PATH" run_pnpm --filter @sanaa/premium-travel build

copy_export "apps/main/out" "$MAIN_DEPLOY_PATH"
copy_export "apps/premium-travel/out" "$PREMIUM_DEPLOY_PATH"

echo "Main deployed to: $MAIN_DEPLOY_PATH"
echo "Premium Travel deployed to: $PREMIUM_DEPLOY_PATH"
