import Link from "next/link";
import { asset } from "@/lib/base-path";
import {
  accommodationPrinciples,
  approvalGate,
  destinations,
  experiences,
  journeys,
  previewNotice,
} from "@/lib/premium-data";
import { EditorialHero } from "@/components/editorial-hero";
import { JourneyFinder } from "@/components/journey-finder";

const heroScenes = [
  {
    eyebrow: "Private Morocco",
    title: "Travel shaped around rhythm, context and restraint.",
    text: "Signature Journey is the editorial preview for Sanaa Services private travel.",
    image: "/images/hero-atlantic.webp",
  },
  {
    eyebrow: "Walking Tanzania",
    title: "Approach the living world with patience.",
    text: "Concepts are built around fewer claims, clearer intentions and human guidance.",
    image: "/images/tanzania-walk.webp",
  },
  {
    eyebrow: "Wadi Rum nights",
    title: "Let silence become part of the itinerary.",
    text: "Every journey remains illustrative until content and commercial data are approved.",
    image: "/images/wadi-rum-camp.webp",
  },
];

export default function HomePage() {
  const selectedJourneys = journeys.slice(0, 3);

  return (
    <>
      <div className="notice">{previewNotice}</div>
      <EditorialHero scenes={heroScenes} />

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Selected concepts</p>
              <h2>Six ideas, no booking promise.</h2>
            </div>
            <p>
              The historic prototype has been rewritten as editorial concepts only:
              no prices, reviews, dates, capacities, partners or availability.
            </p>
          </div>
          <div className="grid grid--3">
            {selectedJourneys.map((journey) => (
              <article className="card" key={journey.slug}>
                <div className="card__image">
                  <img src={asset(journey.asset.source)} alt={journey.asset.alt} />
                  <span className="asset-status">{journey.asset.provenance}</span>
                </div>
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

      <JourneyFinder />

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Destinations</p>
              <h2>Four editorial territories.</h2>
            </div>
            <p>Each destination page explains the lens before any product is offered.</p>
          </div>
          <div className="grid grid--2">
            {destinations.map((destination) => (
              <article className="card" key={destination.slug}>
                <div className="card__image">
                  <img src={asset(destination.asset.source)} alt={destination.asset.alt} />
                  <span className="asset-status">{destination.asset.provenance}</span>
                </div>
                <div className="card__body">
                  <p className="eyebrow">{destination.region}</p>
                  <h3>{destination.name}</h3>
                  <p>{destination.introduction}</p>
                  <Link className="text-link" href={`/destinations/${destination.slug}`}>
                    Open destination
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="shell grid grid--2">
          <div>
            <p className="eyebrow">Experiences</p>
            <h2>One meaningful encounter over a crowded list.</h2>
            <ul className="check-list">
              {experiences.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Accommodation approach</p>
            <h2>Houses are described by principles first.</h2>
            <ul className="check-list">
              {accommodationPrinciples.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <div>
              <p className="eyebrow">Why Sanaa</p>
              <h2>Human guidance before automation.</h2>
            </div>
            <p>
              Premium Travel remains a preview until the release gate is complete.
              The current gate is intentionally visible.
            </p>
          </div>
          <div className="grid grid--3">
            {approvalGate.map((item) => (
              <article className="card" key={item}>
                <div className="card__body">
                  <p className="eyebrow">Gate</p>
                  <h3>{item}</h3>
                </div>
              </article>
            ))}
          </div>
          <div className="hero__actions">
            <Link className="button" href="/request-a-journey">
              Understand the future request path
            </Link>
            <Link className="button button--ghost" href="/contact">
              Contact information
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
