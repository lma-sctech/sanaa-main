import { Suspense } from "react";
import { PageHero } from "@/components/page-hero";
import { JourneyExplorer } from "@/components/journey-explorer";

export const metadata = {
  title: "Voyages | Sanaa",
  description: "Explorez les voyages privés, départs en petit groupe et créations signature Sanaa.",
};

export default function VoyagesPage() {
  return (
    <>
      <PageHero
        image="/images/tanzania-walk.webp"
        eyebrow="La collection Sanaa"
        title={<>Des voyages déjà pensés.<br />Jamais figés.</>}
        text="Filtrez par région, envie ou format. Chaque itinéraire reste ajustable avec votre conseiller."
        compact
      />
      <Suspense fallback={<div className="section-shell catalog-empty"><p>Chargement de la collection...</p></div>}>
        <JourneyExplorer />
      </Suspense>
    </>
  );
}
