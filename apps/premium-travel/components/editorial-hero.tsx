"use client";

import Link from "next/link";
import { useState } from "react";
import { asset } from "@/lib/base-path";

export interface HeroScene {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}

export function EditorialHero({ scenes }: { scenes: HeroScene[] }) {
  const [active, setActive] = useState(0);
  const scene = scenes[active] ?? scenes[0];

  if (!scene) {
    return null;
  }

  return (
    <section className="hero" aria-label="Editorial preview scenes">
      <img src={asset(scene.image)} alt="" />
      <div className="shell hero__content">
        <div>
          <p className="eyebrow">{scene.eyebrow}</p>
          <h1>{scene.title}</h1>
          <p>{scene.text}</p>
          <div className="hero__actions">
            <Link className="button button--light" href="/journeys">
              Explore concepts
            </Link>
            <Link className="button button--ghost" href="/why-sanaa">
              Read the method
            </Link>
          </div>
          <div className="hero__controls" aria-label="Choose hero scene">
            {scenes.map((item, index) => (
              <button
                key={item.eyebrow}
                type="button"
                className={index === active ? "is-active" : ""}
                aria-pressed={index === active}
                onClick={() => setActive(index)}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
