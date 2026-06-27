import Image from "next/image";
import Link from "next/link";
import { AirlineCarousel } from "@/components/airline-carousel";
import { HeroCarousel } from "@/components/hero-carousel";
import { HomeRecommendations } from "@/components/home-recommendations";
import { TripPersona } from "@/components/trip-persona";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { accommodations, experiences } from "@/lib/data";
import { Arrow, Check } from "@/components/icons";
import { asset } from "@/lib/base-path";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <AirlineCarousel />

      <section className="manifesto">
        <Reveal>
          <p className="eyebrow">Sanaa Voyages & Services</p>
          <p className="manifesto__quote">
            Nous croyons aux voyages qui laissent de la place à l&apos;inattendu,
            sans jamais laisser leur organisation au hasard.
          </p>
          <div className="manifesto__signature">
            <span />
            <p>Une présence humaine, soutenue par une plateforme attentive.</p>
          </div>
        </Reveal>
      </section>

      <HomeRecommendations />

      <TripPersona />

      <section className="experiences-section section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Rencontres choisies"
            title={<>L&apos;expérience avant la liste.</>}
            text="Nous sélectionnons moins d'activités, mais nous les relions mieux au territoire, à ses habitants et à votre façon de voyager."
            action={<Link href="/experiences/artisans-vivants" className="text-link">Toutes les expériences <Arrow /></Link>}
          />
        </Reveal>
        <div className="experience-mosaic">
          {experiences.map((experience, index) => (
            <Reveal key={experience.slug} className={`experience-tile experience-tile--${index + 1}`} delay={index * 80}>
              <Link href={`/experiences/${experience.slug}`}>
                <Image src={asset(experience.image)} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
                <div>
                  <span>{experience.location}</span>
                  <h3>{experience.title}</h3>
                  <p>{experience.category}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="stays-section">
        <div className="section-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Dormir quelque part qui compte"
              title="Des maisons choisies pour leur âme."
              text="L'architecture, l'équipe et l'ancrage local comptent autant que le niveau de service."
            />
          </Reveal>
          <div className="stay-grid">
            {accommodations.map((stay, index) => (
              <Reveal className="stay-card" key={stay.slug} delay={index * 80}>
                <Link href={`/hebergements/${stay.slug}`}>
                  <div className="stay-card__image">
                    <Image src={asset(stay.image)} alt="" fill sizes="(max-width: 700px) 88vw, 32vw" />
                    <span>{stay.type}</span>
                  </div>
                  <div className="stay-card__body">
                    <p>{stay.location}</p>
                    <h3>{stay.name}</h3>
                    <span>Note {stay.rating}/5</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-feature">
        <div className="testimonial-feature__image">
          <Image src={asset("/images/marrakech-breakfast.webp")} alt="" fill sizes="50vw" />
        </div>
        <Reveal className="testimonial-feature__copy">
          <p className="eyebrow">Paroles de voyageurs</p>
          <blockquote>
            “Nous avions un itinéraire précis, mais jamais la sensation d&apos;être enfermés
            dans un programme. Sanaa avait prévu l&apos;essentiel et laissé respirer le reste.”
          </blockquote>
          <div>
            <span>Claire & Thomas</span>
            <small>Voyage privé au Maroc · Avril 2026</small>
          </div>
          <Link href="/inspiration" className="text-link">Lire leurs carnets <Arrow /></Link>
        </Reveal>
      </section>

      <section className="responsible">
        <div className="responsible__image">
          <Image src={asset("/images/fez-artisan.webp")} alt="" fill sizes="50vw" />
        </div>
        <Reveal className="responsible__copy">
          <p className="eyebrow">Voyager avec attention</p>
          <h2>Plus de valeur locale. Moins de traces inutiles.</h2>
          <p>
            Nous privilégions les équipes locales, les hébergements indépendants et les expériences
            qui rémunèrent justement leur savoir-faire. Chaque projet affiche bientôt ses indicateurs
            d&apos;impact dans votre espace client.
          </p>
          <ul>
            <li><Check /> Partenaires évalués et contrats transparents</li>
            <li><Check /> Alternatives à faible impact proposées</li>
            <li><Check /> Contribution locale visible dans le devis</li>
          </ul>
          <Link href="/pourquoi-sanaa" className="button button--outline-dark">Notre engagement <Arrow /></Link>
        </Reveal>
      </section>

      <section className="why-home">
        <div className="why-home__visual">
          <Image src={asset("/images/hero-atlantic.webp")} alt="" fill sizes="100vw" />
          <div>
            <p className="eyebrow">Pourquoi Sanaa</p>
            <h2>La précision d&apos;une plateforme. La chaleur d&apos;une relation.</h2>
            <Link href="/pourquoi-sanaa" className="button button--outline-light">Découvrir notre histoire <Arrow /></Link>
          </div>
        </div>
        <div className="why-home__metrics">
          <div><strong>1</strong><span>conseiller dédié du premier échange au retour</span></div>
          <div><strong>24/7</strong><span>assistance pendant votre voyage</span></div>
          <div><strong>97%</strong><span>de recommandations à un proche</span></div>
          <div><strong>100%</strong><span>des devis versionnés et accessibles en ligne</span></div>
        </div>
      </section>

      <section className="home-final-cta">
        <Reveal>
          <p className="eyebrow">Deux façons de commencer</p>
          <h2>Choisir un départ. Ou partir d&apos;une page blanche.</h2>
          <div>
            <Link href="/voyages" className="button button--dark">Voir les voyages disponibles</Link>
            <Link href="/demande-de-voyage" className="button button--terracotta">Créer un voyage sur mesure</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
