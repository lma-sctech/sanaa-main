$ErrorActionPreference = "Stop"

$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$artifactRoot = Join-Path $root ".cpanel-artifacts"
$mainArtifact = Join-Path $artifactRoot "main"
$premiumArtifact = Join-Path $artifactRoot "premium-travel"

function Reset-Directory($path) {
  if (Test-Path $path) {
    Remove-Item -LiteralPath $path -Recurse -Force
  }
  New-Item -ItemType Directory -Path $path | Out-Null
}

Push-Location $root
try {
  $env:NEXT_TELEMETRY_DISABLED = "1"
  $env:NEXT_PUBLIC_MAIN_URL = if ($env:NEXT_PUBLIC_MAIN_URL) { $env:NEXT_PUBLIC_MAIN_URL } else { "https://www.mbk.ma" }
  $env:NEXT_PUBLIC_TRAVEL_URL = if ($env:NEXT_PUBLIC_TRAVEL_URL) { $env:NEXT_PUBLIC_TRAVEL_URL } else { "https://www.mbk.ma/premium-travel" }
  $env:NEXT_PUBLIC_PREMIUM_TRAVEL_URL = if ($env:NEXT_PUBLIC_PREMIUM_TRAVEL_URL) { $env:NEXT_PUBLIC_PREMIUM_TRAVEL_URL } else { "https://www.mbk.ma/premium-travel" }

  $env:NEXT_PUBLIC_BASE_PATH = ""
  corepack pnpm --filter "@sanaa/main" build

  $env:NEXT_PUBLIC_BASE_PATH = "/premium-travel"
  corepack pnpm --filter "@sanaa/premium-travel" build

  Reset-Directory $mainArtifact
  Reset-Directory $premiumArtifact

  Copy-Item -Path (Join-Path $root "apps/main/out/*") -Destination $mainArtifact -Recurse -Force
  Copy-Item -Path (Join-Path $root "apps/premium-travel/out/*") -Destination $premiumArtifact -Recurse -Force

  Write-Host "cPanel artifacts prepared in $artifactRoot"
}
finally {
  Pop-Location
}
