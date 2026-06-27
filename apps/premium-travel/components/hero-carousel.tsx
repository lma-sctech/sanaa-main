"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Arrow, Search } from "@/components/icons";
import { asset } from "@/lib/base-path";
import type { FormEvent } from "react";

const slides = [
  {
    image: "/images/hero-atlantic.webp",
    eyebrow: "Voyage privé · Maroc",
    title: "Le monde est vaste. Votre voyage doit être singulier.",
    text: "Des itinéraires conçus autour de votre rythme, avec la précision d'une plateforme et l'attention d'un conseiller.",
    href: "/voyages/atlas-sahara",
    label: "Découvrir le voyage",
  },
  {
    image: "/images/tanzania-walk.webp",
    eyebrow: "Voyage signature · Tanzanie",
    title: "Approcher le vivant avec patience.",
    text: "Safaris à pied, guides naturalistes et camps choisis pour leur juste place dans le paysage.",
    href: "/voyages/tanzanie-a-pied",
    label: "Explorer la Tanzanie",
  },
  {
    image: "/images/wadi-rum-camp.webp",
    eyebrow: "Petit groupe · Jordanie",
    title: "Retrouver le silence sous les étoiles.",
    text: "Une traversée de Pétra au Wadi Rum, en petit comité et loin des itinéraires pressés.",
    href: "/voyages/wadi-rum-petra",
    label: "Voir la Jordanie",
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const activeSlide = slides[active] ?? slides[0];
  const nextSlide = slides[(active + 1) % slides.length] ?? activeSlide;

  if (!activeSlide || !nextSlide) return null;

  useEffect(() => {
    const interval = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 8000);
    return () => window.clearInterval(interval);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const destination = String(data.get("destination") ?? "");
    const month = String(data.get("month") ?? "");
    const params = new URLSearchParams();
    if (destination) params.set("q", destination);
    if (month) params.set("month", month);
    router.push(`/voyages?${params.toString()}`);
  }

  return (
    <section className="home-hero">
      <div className="home-hero__media">
        {slides.map((slide, index) => (
          <Image
            key={slide.image}
            src={asset(slide.image)}
            alt=""
            fill
            priority={index === 0}
            className={index === active ? "is-active" : ""}
            sizes="100vw"
          />
        ))}
        <div className="home-hero__veil" />
      </div>
      <div className="home-hero__content">
        <div className="home-hero__copy" key={active}>
          <p className="eyebrow">{activeSlide.eyebrow}</p>
          <h1>{activeSlide.title}</h1>
          <p>{activeSlide.text}</p>
          <Link href={activeSlide.href} className="button button--outline-light">
            {activeSlide.label} <Arrow />
          </Link>
        </div>
        <div className="home-hero__sidecard">
          <span>0{active + 1}</span>
          <div className="home-hero__thumb">
            <Image src={asset(nextSlide.image)} alt="" fill sizes="260px" />
          </div>
          <p>Ensuite</p>
          <strong>{nextSlide.eyebrow}</strong>
        </div>
      </div>
      <div className="home-hero__controls">
        <button type="button" onClick={() => setActive((active - 1 + slides.length) % slides.length)} aria-label="Scène précédente">←</button>
        <div>{slides.map((_, index) => <button key={index} type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Scène ${index + 1}`} />)}</div>
        <button type="button" onClick={() => setActive((active + 1) % slides.length)} aria-label="Scène suivante">→</button>
      </div>
      <form className="mini-finder" onSubmit={submit}>
        <div className="mini-finder__intro">
          <Search />
          <span><small>Trouver un voyage</small>Commencez par une envie</span>
        </div>
        <label>
          <span>Destination</span>
          <select name="destination" defaultValue="">
            <option value="">Où partir ?</option>
            <option>Maroc</option>
            <option>Jordanie</option>
            <option>Tanzanie</option>
            <option>Portugal</option>
          </select>
        </label>
        <label>
          <span>Période</span>
          <select name="month" defaultValue="">
            <option value="">Quand ?</option>
            <option value="septembre">Septembre</option>
            <option value="octobre">Octobre</option>
            <option value="novembre">Novembre</option>
            <option value="janvier">Janvier 2027</option>
          </select>
        </label>
        <button type="submit" aria-label="Rechercher"><Arrow /></button>
      </form>
    </section>
  );
}
