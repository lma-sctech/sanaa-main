import Link from "next/link";
import { asset } from "@/lib/base-path";
import { destinations, journeys, previewNotice } from "@/lib/premium-data";
import { JourneyFinder } from "@/components/journey-finder";

export const metadata = {
  title: "Journeys",
  description: "Illustrative private journey concepts for Signature Journey.",
};

export default function JourneysPage() {
  return (
    <>
      <div className="notice">{previewNotice}</div>
      <section className="detail-hero">
        <div className="shell">
          <p className="eyebrow">Journeys</p>
          <h1>Six concepts, not commercial offers.</h1>
          <p>
            Each concept is a narrative direction. Prices, dates, capacity, reviews,
            suppliers and availability are deliberately excluded.
          </p>
        </div>
      </section>
      <section className="section section--paper">
        <div className="shell grid grid--3">
          {journeys.map((journey) => {
            const destination = destinations.find((item) => item.slug === journey.destination);
            return (
              <article className="card" key={journey.slug}>
                <div className="card__image">
                  <img src={asset(journey.asset.source)} alt={journey.asset.alt} />
                  <span className="asset-status">{journey.asset.provenance}</span>
                </div>
                <div className="card__body">
                  <p className="eyebrow">{destination?.name ?? journey.destination}</p>
                  <h2>{journey.name}</h2>
                  <p>{journey.intention}</p>
                  <ul className="pill-list">
                    {journey.interests.map((interest) => (
                      <li key={interest}>{interest}</li>
                    ))}
                  </ul>
                  <p>
                    <Link className="text-link" href={`/journeys/${journey.slug}`}>
                      Read concept
                    </Link>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <JourneyFinder />
    </>
  );
}
