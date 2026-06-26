import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { JourneyCard } from "@/components/journey-card";
import { journeys } from "@/lib/data";
import type { Journey } from "@/lib/data";

export const metadata = { title: "Offres & départs | Sanaa" };

export default function OffersPage() {
  const offerJourneys = [journeys[2], journeys[1], journeys[4]].filter(
    (journey): journey is Journey => Boolean(journey),
  );

  return (
    <>
      <PageHero image="/images/wadi-rum-camp.webp" eyebrow="Départs privilégiés" title={<>Une occasion juste.<br />Jamais une fausse urgence.</>} text="Départs confirmés, nouvelles ouvertures et avantages négociés avec nos partenaires." compact />
      <section className="offers-intro section-shell">
        <div><strong>Prix clairs</strong><span>La valeur de l’avantage est affichée.</span></div>
        <div><strong>Stock réel</strong><span>Les places seront synchronisées avec les fournisseurs.</span></div>
        <div><strong>Mêmes garanties</strong><span>Conseiller, assistance et espace client inclus.</span></div>
      </section>
      <section className="offers-list section-shell">
        <div className="journey-section-title"><div><p className="eyebrow">En ce moment</p><h2>Trois raisons de partir bientôt.</h2></div><Link href="/voyages" className="text-link">Voir toute la collection</Link></div>
        <div className="journey-grid journey-grid--three">
          {offerJourneys.map((journey) => <JourneyCard journey={journey} key={journey.slug} compact />)}
        </div>
      </section>
    </>
  );
}
