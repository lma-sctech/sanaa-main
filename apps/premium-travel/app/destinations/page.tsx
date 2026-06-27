import Link from "next/link";
import { asset } from "@/lib/base-path";
import { destinations, previewNotice } from "@/lib/premium-data";

export const metadata = {
  title: "Destinations",
  description: "Editorial destination concepts for Signature Journey by Sanaa Services.",
};

export default function DestinationsPage() {
  return (
    <>
      <div className="notice">{previewNotice}</div>
      <section className="detail-hero">
        <div className="shell">
          <p className="eyebrow">Destinations</p>
          <h1>Four territories, held as editorial lenses.</h1>
          <p>
            These pages describe context and intention only. They do not present
            bookable products or commercial availability.
          </p>
        </div>
      </section>
      <section className="section section--paper">
        <div className="shell grid grid--2">
          {destinations.map((destination) => (
            <article className="card" key={destination.slug}>
              <div className="card__image">
                <img src={asset(destination.asset.source)} alt={destination.asset.alt} />
                <span className="asset-status">{destination.asset.provenance}</span>
              </div>
              <div className="card__body">
                <p className="eyebrow">{destination.region}</p>
                <h2>{destination.name}</h2>
                <p>{destination.introduction}</p>
                <ul className="pill-list">
                  {destination.themes.map((theme) => (
                    <li key={theme}>{theme}</li>
                  ))}
                </ul>
                <p>
                  <Link className="text-link" href={`/destinations/${destination.slug}`}>
                    Read destination
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
