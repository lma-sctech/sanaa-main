import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Arrow } from "@/components/icons";
import { destinations } from "@/lib/data";
import { asset } from "@/lib/base-path";

export const metadata = {
  title: "Destinations | Sanaa",
  description: "Des territoires racontés par celles et ceux qui les connaissent intimement.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        image="/images/hero-atlantic.webp"
        eyebrow="Le monde selon Sanaa"
        title={<>Choisir un territoire.<br />Puis prendre le temps.</>}
        text="Des destinations sélectionnées pour la richesse de leurs rencontres, avec des équipes locales qui savent ouvrir les bonnes portes."
      />

      <section className="destination-index section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Notre collection"
            title="Quatre horizons, mille façons de les vivre."
            text="Chaque destination dispose de son propre réseau de guides, maisons, artisans et experts. Le catalogue grandira avec la plateforme."
          />
        </Reveal>
        <div className="destination-index__grid">
          {destinations.map((destination, index) => (
            <Reveal className="destination-index__card" key={destination.slug} delay={index * 70}>
              <Link href={`/destinations/${destination.slug}`}>
                <Image src={asset(destination.image)} alt="" fill sizes="(max-width: 800px) 100vw, 50vw" />
                <div className="destination-index__shade" />
                <div className="destination-index__copy">
                  <p>{destination.region}</p>
                  <h2>{destination.name}</h2>
                  <span>{destination.eyebrow}</span>
                  <small>{destination.journeyCount} voyages à imaginer</small>
                  <span className="icon-link"><Arrow /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="editorial-band">
        <Reveal>
          <p className="eyebrow">Une destination manque à l’appel&nbsp;?</p>
          <h2>Notre catalogue montre ce qui est prêt. Notre réseau va plus loin.</h2>
          <p>Parlez-nous d’un lieu, d’une saison ou simplement d’une sensation recherchée.</p>
          <Link href="/demande-de-voyage" className="button button--terracotta">Confier mon projet</Link>
        </Reveal>
      </section>
    </>
  );
}
