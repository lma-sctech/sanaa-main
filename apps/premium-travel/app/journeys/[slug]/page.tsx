import Link from "next/link";
import { notFound } from "next/navigation";
import { asset } from "@/lib/base-path";
import { destinations, getJourney, journeys, previewNotice } from "@/lib/premium-data";

export function generateStaticParams() {
  return journeys.map((journey) => ({ slug: journey.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const journey = getJourney(params.slug);
  if (!journey) return {};
  return {
    title: journey.name,
    description: journey.intention,
  };
}

export default function JourneyPage({ params }: { params: { slug: string } }) {
  const journey = getJourney(params.slug);
  if (!journey) notFound();
  const destination = destinations.find((item) => item.slug === journey.destination);

  return (
    <>
      <div className="notice">{previewNotice}</div>
      <section className="detail-hero">
        <div className="shell detail-hero__grid">
          <div>
            <p className="eyebrow">{destination?.name ?? journey.destination}</p>
            <h1>{journey.name}</h1>
            <p>{journey.intention}</p>
            <ul className="pill-list">
              <li>{journey.rhythm}</li>
              <li>{journey.mood}</li>
              {journey.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
          <div className="detail-hero__image">
            <img src={asset(journey.asset.source)} alt={journey.asset.alt} />
            <span className="asset-status">{journey.asset.provenance}</span>
          </div>
        </div>
      </section>
      <section className="section section--paper">
        <div className="shell grid grid--2">
          <article className="card">
            <div className="card__body">
              <p className="eyebrow">Indicative route</p>
              <h2>A possible flow.</h2>
              <ul className="route-list">
                {journey.indicativeRoute.map((stop, index) => (
                  <li key={stop}>
                    {String(index + 1).padStart(2, "0")} - {stop}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <article className="card">
            <div className="card__body">
              <p className="eyebrow">Experiences</p>
              <h2>What the concept protects.</h2>
              <ul className="route-list">
                {journey.experiences.map((experience) => (
                  <li key={experience}>{experience}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>
      <section className="section">
        <div className="shell preview-panel">
          <p className="eyebrow">Accommodation approach</p>
          <h2>{journey.accommodationApproach}</h2>
          <p>
            Specific hotels, camps, lodges and partners will only appear after
            rights, policies and commercial data are validated.
          </p>
          <Link className="button" href="/request-a-journey">
            Understand the future request path
          </Link>
        </div>
      </section>
    </>
  );
}
