#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ARTIFACT_ROOT="${CPANEL_ARTIFACT_ROOT:-${ROOT_DIR}/.cpanel-artifacts}"
MAIN_DEPLOY_PATH="${1:-${HOME}/public_html}"
PREMIUM_DEPLOY_PATH="${2:-${HOME}/public_html/premium-travel}"

fail() {
  echo "cpanel-deploy: $*" >&2
  exit 1
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

copy_static() {
  local source_dir="$1"
  local target_dir="$2"

  [ -d "$source_dir" ] || fail "Missing static artifact directory: $source_dir"
  [ -f "$source_dir/index.html" ] || fail "Missing index.html in artifact directory: $source_dir"
  assert_safe_target "$target_dir"

  mkdir -p "$target_dir"
  find "$target_dir" -mindepth 1 -maxdepth 1 \
    ! -name ".well-known" \
    ! -name "cgi-bin" \
    -exec rm -rf {} +
  cp -R "$source_dir"/. "$target_dir"/
}

echo "Deploying static artifacts for Heberjahiz domain: www.mbk.ma"
copy_static "$ARTIFACT_ROOT/main" "$MAIN_DEPLOY_PATH"
copy_static "$ARTIFACT_ROOT/premium-travel" "$PREMIUM_DEPLOY_PATH"

echo "Main deployed to: $MAIN_DEPLOY_PATH"
echo "Premium Travel deployed to: $PREMIUM_DEPLOY_PATH"
