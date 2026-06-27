#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ARTIFACT_ROOT="${ROOT_DIR}/.cpanel-artifacts"

cd "$ROOT_DIR"

export NEXT_TELEMETRY_DISABLED=1
export NEXT_PUBLIC_MAIN_URL="${NEXT_PUBLIC_MAIN_URL:-https://www.mbk.ma}"
export NEXT_PUBLIC_TRAVEL_URL="${NEXT_PUBLIC_TRAVEL_URL:-https://www.mbk.ma/premium-travel}"
export NEXT_PUBLIC_PREMIUM_TRAVEL_URL="${NEXT_PUBLIC_PREMIUM_TRAVEL_URL:-https://www.mbk.ma/premium-travel}"

NEXT_PUBLIC_BASE_PATH="" corepack pnpm --filter "@sanaa/main" build
NEXT_PUBLIC_BASE_PATH="/premium-travel" corepack pnpm --filter "@sanaa/premium-travel" build

rm -rf "$ARTIFACT_ROOT"
mkdir -p "$ARTIFACT_ROOT/main" "$ARTIFACT_ROOT/premium-travel"
cp -R apps/main/out/. "$ARTIFACT_ROOT/main"/
cp -R apps/premium-travel/out/. "$ARTIFACT_ROOT/premium-travel"/

echo "cPanel artifacts prepared in $ARTIFACT_ROOT"
