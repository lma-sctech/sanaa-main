import { Suspense } from "react";
import { QuotePageClient } from "@/components/quote-page-client";

export const metadata = {
  title: "Créer mon voyage | Sanaa",
  description: "Décrivez votre projet et recevez un premier itinéraire personnalisé.",
};

export default function QuotePage() {
  return (
    <main className="quote-page">
      <div className="quote-page__intro">
        <p className="eyebrow">Votre voyage sur mesure</p>
        <h1>Commençons par ce qui compte pour vous.</h1>
        <p>Comptez trois minutes. Une personne, pas un algorithme, reprendra ensuite votre demande.</p>
      </div>
      <Suspense fallback={<div className="quote-success"><p>Chargement de l'assistant...</p></div>}>
        <QuotePageClient />
      </Suspense>
    </main>
  );
}
