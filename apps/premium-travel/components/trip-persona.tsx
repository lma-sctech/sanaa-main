"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Arrow } from "@/components/icons";
import { asset } from "@/lib/base-path";

const personas = [
  {
    title: "Loin du bruit",
    subtitle: "Déserts, grands espaces, rythme lent",
    image: "/images/wadi-rum-camp.webp",
    href: "/voyages?q=desert",
  },
  {
    title: "Avec ceux que j'aime",
    subtitle: "Famille, transmission, maisons privées",
    image: "/images/marrakech-breakfast.webp",
    href: "/voyages?q=famille",
  },
  {
    title: "Au plus près du vivant",
    subtitle: "Safari, marche, guides naturalistes",
    image: "/images/tanzania-walk.webp",
    href: "/voyages?q=safari",
  },
  {
    title: "Au fil de l'eau",
    subtitle: "Navigation privée, côtes, îles",
    image: "/images/portugal-sailing.webp",
    href: "/voyages?q=mer",
  },
];

export function TripPersona() {
  const [active, setActive] = useState(0);

  return (
    <section className="trip-persona">
      <div className="trip-persona__intro">
        <p className="eyebrow">Votre façon de voyager</p>
        <h2>Quel voyage vous ressemble&nbsp;?</h2>
        <p>Choisissez une sensation. Nous vous montrons des voyages qui partent de là.</p>
        <Link href="/voyages" className="button button--dark">Ouvrir le Journey Finder</Link>
      </div>
      <div className="trip-persona__cards">
        {personas.map((persona, index) => (
          <article
            key={persona.title}
            className={index === active ? "is-active" : ""}
            onMouseEnter={() => setActive(index)}
          >
            <Image src={asset(persona.image)} alt="" fill sizes="(max-width: 800px) 78vw, 24vw" />
            <div>
              <span>0{index + 1}</span>
              <h3>{persona.title}</h3>
              <p>{persona.subtitle}</p>
              <Link href={persona.href} aria-label={`Découvrir ${persona.title}`}><Arrow /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
