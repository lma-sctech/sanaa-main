import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Check } from "@/components/icons";
import { asset } from "@/lib/base-path";

export const metadata = { title: "Pourquoi Sanaa | Sanaa" };

export default function WhySanaaPage() {
  return (
    <>
      <PageHero image="/images/hero-atlantic.webp" eyebrow="Notre raison d’être" title={<>La précision du service.<br />La liberté du voyage.</>} text="Sanaa réunit un accompagnement humain très présent et des outils numériques qui rendent chaque décision claire." />
      <section className="why-story section-shell">
        <Reveal><p className="eyebrow">Sanaa signifie éclat</p><h2>Une maison de voyage née entre Marrakech et Paris.</h2></Reveal>
        <Reveal><p>Nous avons imaginé Sanaa pour résoudre une tension simple&nbsp;: les plus beaux voyages demandent beaucoup d’organisation, mais cette organisation ne devrait jamais peser sur le voyageur.</p><p>La plateforme conserve la mémoire du projet. Le conseiller conserve la relation, le discernement et la responsabilité.</p></Reveal>
      </section>
      <section className="why-pillars">
        <div className="section-shell">
          {[["01", "Une personne responsable", "Un conseiller suit le projet du premier échange jusqu’au retour."], ["02", "Une information vérifiable", "Prix, versions, disponibilités et décisions restent lisibles."], ["03", "Un réseau local rémunéré", "La valeur reste davantage entre les mains de ceux qui font le voyage."], ["04", "Une technologie discrète", "L’outil simplifie sans remplacer la conversation." ]].map((pillar) => <Reveal key={pillar[0]}><span>{pillar[0]}</span><h3>{pillar[1]}</h3><p>{pillar[2]}</p></Reveal>)}
        </div>
      </section>
      <section className="why-platform">
        <div className="why-platform__image"><Image src={asset("/images/azalai-lodge.webp")} alt="" fill sizes="50vw" /></div>
        <Reveal className="why-platform__copy">
          <p className="eyebrow">Une vraie application derrière le voyage</p>
          <h2>Tout ce qui doit être simple, au même endroit.</h2>
          <ul><li><Check /> Devis versionnés et comparables</li><li><Check /> Itinéraire et contacts accessibles hors ligne</li><li><Check /> Documents, factures et paiements sécurisés</li><li><Check /> Messagerie directe avec votre conseiller</li><li><Check /> Préférences voyageur réutilisables</li></ul>
          <Link href="/espace-client" className="button button--dark">Voir la démonstration</Link>
        </Reveal>
      </section>
      <section className="home-final-cta"><Reveal><p className="eyebrow">La suite est une conversation</p><h2>Parlez-nous du voyage que vous ne trouvez nulle part.</h2><div><Link href="/demande-de-voyage" className="button button--terracotta">Créer mon voyage</Link></div></Reveal></section>
    </>
  );
}
