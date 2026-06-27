# Phase 7 - Premium Travel QA

Statut : implementation technique terminee, validation editoriale en attente.

## Portee validee techniquement

- Application anglaise `apps/premium-travel`.
- Publication preview sous `https://www.mbk.ma/premium-travel`.
- Routes statiques : `/`, `/destinations`, `/destinations/[slug]`, `/journeys`, `/journeys/[slug]`, `/request-a-journey`, `/why-sanaa`, `/contact`.
- Journey Finder local par mood, interest et rhythm, sans envoi ni stockage.
- Message visible : `Editorial preview - journeys are illustrative and not bookable`.
- Aucun prix, avis, note, date, capacite, disponibilite, partenaire nomme ou formulaire actif.
- Robots en `Disallow: /`.
- Sitemap vide en preview.

## Points a valider avant indexation

- NAP verifie pour le domaine de production.
- Politiques approuvees.
- Droits des images documentes.
- Contenus relus et approuves.
- Donnees commerciales reelles approuvees avant toute bookability.

## Verification locale requise

- `corepack pnpm lint`
- `corepack pnpm typecheck`
- `corepack pnpm build`
- `.\scripts\prepare-cpanel-artifacts.ps1`
- Verification des exports `.cpanel-artifacts/main` et `.cpanel-artifacts/premium-travel`.

## Notes Heberjahiz

`.cpanel.yml` copie les artefacts statiques versionnes. Il ne lance pas `pnpm install` ni `next build` sur cPanel.
