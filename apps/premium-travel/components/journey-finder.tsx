"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { asset } from "@/lib/base-path";
import { destinations, journeys } from "@/lib/premium-data";

const allValue = "all";

export function JourneyFinder() {
  const [mood, setMood] = useState(allValue);
  const [interest, setInterest] = useState(allValue);
  const [rhythm, setRhythm] = useState(allValue);

  const moods = Array.from(new Set(journeys.map((journey) => journey.mood))).sort();
  const interests = Array.from(new Set(journeys.flatMap((journey) => journey.interests))).sort();
  const rhythms = Array.from(new Set(journeys.map((journey) => journey.rhythm))).sort();

  const filtered = useMemo(
    () =>
      journeys.filter((journey) => {
        const moodMatch = mood === allValue || journey.mood === mood;
        const interestMatch = interest === allValue || journey.interests.includes(interest);
        const rhythmMatch = rhythm === allValue || journey.rhythm === rhythm;
        return moodMatch && interestMatch && rhythmMatch;
      }),
    [interest, mood, rhythm],
  );

  return (
    <section className="section section--paper" aria-labelledby="journey-finder-title">
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="eyebrow">Journey Finder</p>
            <h2 id="journey-finder-title">Filter the local editorial concepts.</h2>
          </div>
          <p>No profile is created. No choice is sent or stored.</p>
        </div>
        <div className="finder">
          <div className="finder__controls">
            <label>
              Mood
              <select value={mood} onChange={(event) => setMood(event.target.value)}>
                <option value={allValue}>All moods</option>
                {moods.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Interest
              <select value={interest} onChange={(event) => setInterest(event.target.value)}>
                <option value={allValue}>All interests</option>
                {interests.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Rhythm
              <select value={rhythm} onChange={(event) => setRhythm(event.target.value)}>
                <option value={allValue}>All rhythms</option>
                {rhythms.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid grid--3" aria-live="polite">
            {filtered.map((journey) => {
              const destination = destinations.find((item) => item.slug === journey.destination);
              return (
                <article className="card" key={journey.slug}>
                  <div className="card__image">
                    <img src={asset(journey.asset.source)} alt={journey.asset.alt} />
                    <span className="asset-status">{journey.asset.provenance}</span>
                  </div>
                  <div className="card__body">
                    <p className="eyebrow">{destination?.name ?? journey.destination}</p>
                    <h3>{journey.name}</h3>
                    <p>{journey.intention}</p>
                    <Link className="text-link" href={`/journeys/${journey.slug}`}>
                      Read concept
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
