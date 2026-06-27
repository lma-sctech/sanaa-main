# Journal d'avancement SANAASERVICES-V3

Derniere mise a jour : 20 juin 2026.

Ce document recapitule les phases terminees ou en validation. Les sections suivantes restent volontairement vides et seront renseignees au fur et a mesure de l'avancement.

La Phase 0, consacree a la sauvegarde des prototypes historiques dans `_backup/`, a ete terminee avant le demarrage de cette chronologie. Les sauvegardes restent ignorees par Git, non modifiees et non importees par le nouveau code.

## Phase 1 - Fondation du monorepo

**Statut : terminee.**

- Monorepo pnpm et Turborepo initialise.
- Six emplacements applicatifs crees dans `apps/`.
- Packages TypeScript et ESLint partages configures en mode strict.
- Structure `packages/`, `shared/`, `docs/` et scripts racine mise en place.
- Lockfile unique et commandes racine `lint`, `typecheck` et `build` operationnelles.
- `_backup/`, caches, builds et environnements locaux exclus du suivi Git.

## Phase 2 - Documentation centrale

**Statut : terminee.**

- Vision produit et cartographie des six sites redigees.
- Roadmap Phases 0 a 19 formalisee.
- Briefs editoriaux par application centralises.
- Regles de design, responsive, mouvement et contenu documentees.
- Checklists accessibilite, SEO, performance, responsive et release creees.
- Decisions d'architecture initiales consignees dans les ADR.
- Regle `TBD` adoptee pour bloquer toute information commerciale non verifiee.

## Phase 3 - Design system

**Statut : terminee.**

- Package `@sanaa/design-system` implemente en TypeScript strict et CSS Modules.
- Tokens semantiques de couleur, typographie, espacement, mouvement et elevation crees.
- Composants de fondation : `Container`, `Section`, `SectionHeader` et `Button`.
- Composants structurels : `Card`, `Hero`, `Navbar`, `Footer`, `ServiceGrid`, `StatsBar`, `TestimonialCard` et `NewsletterBand`.
- Contrats, variantes et regles d'accessibilite documentes.
- Cibles interactives partagees alignees sur un minimum de 44 px.

## Phase 4 - Themes

**Statut : terminee.**

- Six themes semantiques implementes : Main, Premium Travel, Travel, Notary Legal, Insurance et Driving School.
- Identites visuelles isolees dans les tokens, sans couleur metier dans les composants.
- Contrat de theme commun conserve pour permettre la reutilisation des composants.
- Preview technique initiale creee pour verifier la composition et les variations de theme.

## Phase 5 - Socle partage

**Statut : terminee.**

- Package `@sanaa/shared` cree sans dependance d'interface.
- Registre type des six sites, routes, ports, themes et URLs centralise.
- Liens inter-sites et ancres stables centralises.
- Contacts inconnus representes par `TBD` et proteges par des gardes de publication.
- Anglais active comme locale canonique; francais et arabe prepares mais non publies.
- Helpers metadata, canonical, Open Graph, Twitter et robots implementes.
- Taxonomie analytics sans fournisseur et sans donnees personnelles definie.

## Phase 6 - Site Main

**Statut : implementation technique terminee, validation editoriale en attente.**

- Accueil institutionnel construit selon le brief Main.
- Routes `/about`, `/contact`, `/privacy` et `/accessibility` creees.
- Navigation responsive, footer, lien d'evitement et page 404 implementes.
- Metadata uniques, robots et sitemap conditionnels ajoutes.
- Docker Compose et build Next.js standalone operationnels sur `http://localhost:3000`.
- Lint, typecheck, build, smoke HTTP et controles responsive 360 a 1440 px valides.
- Aucun faux avis, chiffre, contact, formulaire, domaine ou lien vers un sous-site absent.
- Publication maintenue en `noindex` jusqu'a validation du brief, du NAP, des langues, des politiques et des assets.

## Phase 7 - Premium Travel

**Statut : implementation technique terminee, validation editoriale en attente.**

- Application `apps/premium-travel` recadree comme vitrine editoriale anglaise.
- Routes creees : `/`, `/destinations`, `/destinations/[slug]`, `/journeys`, `/journeys/[slug]`, `/request-a-journey`, `/why-sanaa` et `/contact`.
- `/client-space` et les prototypes applicatifs restent hors perimetre public.
- Quatre destinations editoriales definies : Morocco, Jordan, Tanzania et Portugal.
- Six concepts de voyage issus du prototype historique reecrits sans donnees commerciales.
- Prix, notes, avis, disponibilites, dates, capacites, partenaires et promesses non verifiees exclus.
- Images historiques conservees comme assets de preview avec provenance `unverified`.
- Message visible : `Editorial preview - journeys are illustrative and not bookable`.
- Robots en `disallow: /` et sitemap vide tant que le brief, le NAP, les politiques, les contenus et les droits image ne sont pas approuves.
- Deploiement Heberjahiz aligne sur `https://www.mbk.ma/premium-travel`.
- Phase 6 maintenue en validation editoriale.

## Phase 8 - Insurance

## Phase 9 - Travel, Visa, Immigration et Translation

## Phase 10 - Driving School et DMV

## Phase 11 - Notary Legal

## Phase 12 - Maquette Notary Online

## Phase 13 - Formulaires et conversion

## Phase 14 - Responsive multi-ecrans

## Phase 15 - SEO et structure de contenu

## Phase 16 - Performance

## Phase 17 - Accessibilite

## Phase 18 - Tests et controle qualite

## Phase 19 - Deploiement
