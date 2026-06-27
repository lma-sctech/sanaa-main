import Link from "next/link";
import { notFound } from "next/navigation";
import { asset } from "@/lib/base-path";
import { destinations, getDestination, journeysForDestination, previewNotice } from "@/lib/premium-data";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const destination = getDestination(params.slug);
  if (!destination) return {};
  return {
    title: destination.name,
    description: destination.introduction,
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = getDestination(params.slug);
  if (!destination) notFound();
  const relatedJourneys = journeysForDestination(destination.slug);

  return (
    <>
      <div className="notice">{previewNotice}</div>
      <section className="detail-hero">
        <div className="shell detail-hero__grid">
          <div>
            <p className="eyebrow">{destination.region}</p>
            <h1>{destination.name}</h1>
            <p>{destination.introduction}</p>
            <ul className="pill-list">
              {destination.themes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </div>
          <div className="detail-hero__image">
            <img src={asset(destination.asset.source)} alt={destination.asset.alt} />
            <span className="asset-status">{destination.asset.provenance}</span>
          </div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Related concepts</p>
              <h2>Ideas attached to this destination.</h2>
            </div>
            <p>Still illustrative, still non-bookable.</p>
          </div>
          <div className="grid grid--3">
            {relatedJourneys.map((journey) => (
              <article className="card" key={journey.slug}>
                <div className="card__body">
                  <p className="eyebrow">{journey.rhythm}</p>
                  <h3>{journey.name}</h3>
                  <p>{journey.intention}</p>
                  <Link className="text-link" href={`/journeys/${journey.slug}`}>
                    Read concept
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
