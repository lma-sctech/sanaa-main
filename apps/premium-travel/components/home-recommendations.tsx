"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { destinations, journeys } from "@/lib/data";
import { JourneyCard } from "@/components/journey-card";
import { Arrow } from "@/components/icons";
import { asset } from "@/lib/base-path";

const tabs = ["Destinations", "Voyages disponibles", "Offres", "Nouveautés"] as const;

export function HomeRecommendations() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Voyages disponibles");
  const selectedJourneys =
    tab === "Offres"
      ? journeys.filter((journey) => journey.edit === "Offre")
      : tab === "Nouveautés"
        ? journeys.filter((journey) => journey.edit === "Nouveau")
        : journeys.slice(0, 3);

  return (
    <section className="recommendations section-shell">
      <div className="recommendations__top">
        <div>
          <p className="eyebrow">Une porte d&apos;entrée, plusieurs chemins</p>
          <h2>Que souhaitez-vous découvrir&nbsp;?</h2>
        </div>
        <div className="recommendations__tabs" role="tablist" aria-label="Suggestions">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              className={tab === item ? "is-active" : ""}
              onClick={() => setTab(item)}
              role="tab"
              aria-selected={tab === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {tab === "Destinations" ? (
        <div className="destination-strip">
          {destinations.slice(0, 3).map((destination) => (
            <Link href={`/destinations/${destination.slug}`} key={destination.slug} className="destination-strip__card">
              <Image src={asset(destination.image)} alt="" fill sizes="(max-width: 700px) 82vw, 33vw" />
              <div>
                <span>{destination.region}</span>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : selectedJourneys.length ? (
        <div className="journey-grid journey-grid--three">
          {selectedJourneys.map((journey) => <JourneyCard journey={journey} compact key={journey.slug} />)}
        </div>
      ) : (
        <div className="empty-state">
          <p>Nos offres privées sont préparées en ce moment.</p>
          <Link href="/voyages" className="button button--dark">Voir tous les voyages</Link>
        </div>
      )}
      <div className="recommendations__footer">
        <Link href={tab === "Destinations" ? "/destinations" : "/voyages"} className="text-link">
          Tout explorer <Arrow />
        </Link>
      </div>
    </section>
  );
}
