import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { JourneyCard } from "@/components/journey-card";
import { Reveal } from "@/components/reveal";
import { Arrow, Check } from "@/components/icons";
import { destinations, getDestination, journeys } from "@/lib/data";
import { asset } from "@/lib/base-path";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const related = journeys.filter((journey) => journey.country === destination.name);

  return (
    <>
      <PageHero
        image={destination.image}
        eyebrow={`${destination.region} · ${destination.eyebrow}`}
        title={destination.name}
        text={destination.description}
      >
        <div className="page-hero__facts">
          <span>Meilleure période</span>
          <strong>{destination.bestMonths}</strong>
        </div>
      </PageHero>

      <section className="destination-story section-shell">
        <Reveal className="destination-story__intro">
          <p className="eyebrow">Le regard Sanaa</p>
          <h2>Voir les icônes. Comprendre ce qui les entoure.</h2>
          <p>
            Nous composons chaque voyage autour de rythmes réalistes, de rencontres préparées et
            d’adresses qui ont une relation sincère avec leur territoire.
          </p>
        </Reveal>
        <div className="destination-story__columns">
          <Reveal>
            <span>01</span>
            <h3>Ce que nous cherchons</h3>
            <p>Des lieux habités, des paysages que l’on peut encore écouter et des savoir-faire transmis.</p>
          </Reveal>
          <Reveal delay={80}>
            <span>02</span>
            <h3>Ce que nous évitons</h3>
            <p>Les journées saturées, les détours sans sens et les expériences mises en scène pour le tourisme.</p>
          </Reveal>
          <Reveal delay={160}>
            <span>03</span>
            <h3>Ce que vous gardez</h3>
            <p>Un itinéraire clair, une liberté réelle et un conseiller joignable avant, pendant et après.</p>
          </Reveal>
        </div>
      </section>

      <section className="destination-feature">
        <div className="destination-feature__image">
          <Image src={asset("/images/fez-artisan.webp")} alt="" fill sizes="50vw" />
        </div>
        <Reveal className="destination-feature__copy">
          <p className="eyebrow">Une journée possible</p>
          <h2>Le matin dans un atelier. Le soir face à l’horizon.</h2>
          <ul>
            <li><Check /> Rencontre privée préparée avec votre conseiller</li>
            <li><Check /> Chauffeur et guide visibles dans votre application</li>
            <li><Check /> Temps libre conservé dans le programme</li>
          </ul>
          <Link href="/experiences/artisans-vivants" className="text-link">Voir l’expérience <Arrow /></Link>
        </Reveal>
      </section>

      <section className="related-journeys section-shell">
        <Reveal>
          <p className="eyebrow">Partir bientôt</p>
          <h2>Nos voyages en {destination.name}</h2>
        </Reveal>
        <div className="journey-grid journey-grid--three">
          {(related.length ? related : journeys.slice(0, 3)).map((journey) => (
            <JourneyCard key={journey.slug} journey={journey} compact />
          ))}
        </div>
      </section>
    </>
  );
}
