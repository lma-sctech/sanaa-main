# SANAASERVICES-V3

Monorepo for the Sanaa Services digital ecosystem, based in Astoria, Queens, New York.

## Applications

| App | Role | Port |
|---|---|---:|
| `apps/main` | Institutional portal and entry point | 3000 |
| `apps/premium-travel` | Premium travel and tailor-made journeys | 3001 |

## Structure

```text
SanaaServices-V3/
|-- apps/
|   |-- main/              Next.js static site
|   `-- premium-travel/    Next.js static site
|-- packages/
|   |-- eslint-config/     Shared ESLint configuration
|   `-- typescript-config/ Shared TypeScript configuration
|-- docs/                  Strategy, content briefs, design rules, QA checklists
|-- scripts/               Turbo launcher and deployment helpers
|-- Dockerfile             Multi-stage build to nginx
|-- compose.yaml           Docker Compose for local preview
`-- turbo.json             Turborepo task configuration
```

## Commands

```powershell
corepack pnpm install
corepack pnpm dev
corepack pnpm build
corepack pnpm lint
corepack pnpm typecheck
```

The Next.js apps use static export. Production files are generated in:

- `apps/main/out`
- `apps/premium-travel/out`

## Docker

```powershell
docker compose up --build --detach
docker compose ps
docker compose down
```

Local URLs:

- Main: `http://localhost:3000`
- Premium Travel: `http://localhost:3001`

## Heberjahiz / cPanel Deployment

The repository includes `.cpanel.yml` for cPanel Git deployment.

Default deployment targets:

- Main to `$HOME/public_html`
- Premium Travel to `$HOME/public_html/premium-travel`

Recommended Heberjahiz setup:

1. Configure the main domain document root to `public_html`.
2. Configure the Premium Travel subdomain, for example `travel.sanaaservices.com`, with document root `public_html/premium-travel`.
3. Connect the Git repository in cPanel Git Version Control.
4. Deploy from cPanel. The deployment task runs `scripts/cpanel-deploy.sh`.

The cPanel host must provide Node.js `>=20.19.0` and either `corepack` or `pnpm`.

If Premium Travel is served under a path such as `https://sanaaservices.com/premium-travel` instead of a subdomain, set this environment variable before deployment:

```bash
PREMIUM_BASE_PATH=/premium-travel
```

## Deployment Notes

- `_backup/`, caches, local runtime folders and spreadsheet source files are not committed.
- `.turbo/`, `.runtime/`, `.next/`, `out/` and `node_modules/` are local/generated folders.
- The root-level SVG and Excel staging files are ignored; the assets used by the sites live under `apps/*/public`.
