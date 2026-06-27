import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FavoriteButton } from "@/components/favorite-button";
import { ItineraryExplorer } from "@/components/itinerary-explorer";
import { JourneyCard } from "@/components/journey-card";
import { Arrow, Calendar, Check, Message } from "@/components/icons";
import { formatDate, formatPrice } from "@/lib/format";
import { getJourney, journeys } from "@/lib/data";
import { asset } from "@/lib/base-path";

export function generateStaticParams() {
  return journeys.map((journey) => ({ slug: journey.slug }));
}

export default async function JourneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();

  const related = journeys.filter((item) => item.slug !== journey.slug).slice(0, 3);

  return (
    <>
      <section className="journey-hero">
        <Image src={asset(journey.image)} alt="" fill priority sizes="100vw" />
        <div className="journey-hero__veil" />
        <div className="journey-hero__content section-shell">
          <div>
            <p className="eyebrow">{journey.region} · {journey.mode}</p>
            <h1>{journey.title}</h1>
            <p>{journey.summary}</p>
          </div>
          <div className="journey-hero__aside">
            <FavoriteButton slug={journey.slug} />
            <span>À partir de</span>
            <strong>{formatPrice(journey.price)}</strong>
            <small>par personne · {journey.duration} jours</small>
            <Link href="#dates" className="button button--gold">Voir les dates</Link>
          </div>
        </div>
      </section>

      <nav className="journey-anchor-nav" aria-label="Sur cette page">
        <a href="#apercu">Aperçu</a>
        <a href="#itineraire">Itinéraire</a>
        <a href="#hebergements">Hébergements</a>
        <a href="#dates">Dates & prix</a>
        <Link href="/demande-de-voyage">Personnaliser</Link>
      </nav>

      <section id="apercu" className="journey-overview section-shell">
        <div className="journey-overview__main">
          <p className="eyebrow">L’intention du voyage</p>
          <h2>Prendre le temps de relier les lieux.</h2>
          <p>{journey.summary}</p>
          <p>
            Votre conseiller ajuste le rythme, les catégories de chambres et les expériences.
            Les éléments modifiés restent tracés dans chaque version de devis.
          </p>
        </div>
        <aside className="journey-facts">
          <div><span>Durée</span><strong>{journey.duration} jours</strong></div>
          <div><span>Format</span><strong>{journey.mode}</strong></div>
          <div><span>Voyageurs</span><strong>{journey.capacity}</strong></div>
          <div><span>Évaluation</span><strong>{journey.rating}/5 · {journey.reviews} avis</strong></div>
        </aside>
      </section>

      <section className="journey-highlights">
        <div className="section-shell">
          <p className="eyebrow">Ce qui rend ce voyage singulier</p>
          <div>
            <article><span>01</span><h3>Des portes ouvertes avec justesse</h3><p>Rencontres préparées, petits groupes et interlocuteurs rémunérés directement.</p></article>
            <article><span>02</span><h3>Des journées qui respirent</h3><p>Un point fort par jour et du temps réellement disponible autour.</p></article>
            <article><span>03</span><h3>Un fil numérique discret</h3><p>Documents, contacts, modifications et assistance réunis dans votre espace.</p></article>
          </div>
        </div>
      </section>

      <section id="itineraire" className="journey-itinerary section-shell">
        <div className="journey-section-title">
          <div><p className="eyebrow">Jour après jour</p><h2>Votre itinéraire, vivant et lisible.</h2></div>
          <p>Cliquez sur un jour ou un point de la carte. Dans l’application finale, transports, documents et contacts seront reliés à chaque étape.</p>
        </div>
        <ItineraryExplorer days={journey.itinerary} />
      </section>

      <section id="hebergements" className="journey-stay-feature">
        <div className="journey-stay-feature__image">
          <Image src={asset("/images/azalai-lodge.webp")} alt="" fill sizes="55vw" />
        </div>
        <div className="journey-stay-feature__copy">
          <p className="eyebrow">Les maisons du voyage</p>
          <h2>Azalaï Desert Lodge</h2>
          <p>Architecture de terre, cuisine du jardin et vue ouverte sur les reliefs. Une étape choisie autant pour l’équipe que pour le lieu.</p>
          <div><span>4.9/5</span><span>Lodge indépendant</span><span>Faible impact</span></div>
          <Link href="/hebergements/azalai-lodge" className="text-link">Découvrir la maison <Arrow /></Link>
        </div>
      </section>

      <section id="dates" className="departures section-shell">
        <div className="journey-section-title">
          <div><p className="eyebrow">Réserver ou adapter</p><h2>Dates & prix</h2></div>
          <p>Les disponibilités sont présentées comme elles le seraient depuis le futur moteur de stock fournisseurs.</p>
        </div>
        <div className="departure-table">
          {journey.departures.map((departure) => (
            <article key={departure.id}>
              <Calendar />
              <div><span>Du {formatDate(departure.startDate)}</span><small>au {formatDate(departure.endDate)}</small></div>
              <div><span className={`availability availability--${departure.availability.replaceAll(" ", "-").toLowerCase()}`}>{departure.availability}</span>{departure.seatsLeft && <small>{departure.seatsLeft} places restantes</small>}</div>
              <div><small>À partir de</small><strong>{formatPrice(departure.price)}</strong></div>
              <Link href={`/demande-de-voyage?journey=${journey.slug}&departure=${departure.id}`} className="button button--dark">Demander ce départ</Link>
            </article>
          ))}
        </div>
        <div className="bespoke-callout">
          <div><Message /><div><strong>Ces dates ne vous conviennent pas&nbsp;?</strong><p>Demandez une version privée à vos dates, avec les mêmes intentions de voyage.</p></div></div>
          <Link href={`/demande-de-voyage?journey=${journey.slug}`} className="button button--terracotta">Personnaliser ce voyage</Link>
        </div>
      </section>

      <section className="included section-shell">
        <div>
          <p className="eyebrow">Inclus</p>
          <ul><li><Check /> Conseiller dédié et assistance 24/7</li><li><Check /> Hébergements et repas indiqués</li><li><Check /> Guides, chauffeurs et expériences privées</li><li><Check /> Application et carnet de voyage</li></ul>
        </div>
        <div>
          <p className="eyebrow">À prévoir</p>
          <ul><li>Vols internationaux sauf mention</li><li>Assurances personnelles</li><li>Repas et dépenses non indiqués</li><li>Formalités selon votre nationalité</li></ul>
        </div>
      </section>

      <section className="related-journeys section-shell">
        <p className="eyebrow">Continuer à explorer</p>
        <h2>D’autres voyages dans le même esprit.</h2>
        <div className="journey-grid journey-grid--three">
          {related.map((item) => <JourneyCard journey={item} compact key={item.slug} />)}
        </div>
      </section>
    </>
  );
}
