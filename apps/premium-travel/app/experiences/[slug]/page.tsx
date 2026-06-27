import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Arrow, Check } from "@/components/icons";
import { experiences, getExperience } from "@/lib/data";
import { asset } from "@/lib/base-path";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = getExperience(slug);
  if (!experience) notFound();

  return (
    <>
      <PageHero image={experience.image} eyebrow={`${experience.category} · ${experience.location}`} title={experience.title} text={experience.description} />
      <section className="story-layout section-shell">
        <article>
          <p className="eyebrow">Pourquoi cette rencontre</p>
          <h2>Entrer dans un univers, sans le réduire à une visite.</h2>
          <p>{experience.description}</p>
          <p>La rencontre est préparée en amont, limitée à quelques voyageurs et rémunère directement la personne qui partage son temps et son savoir.</p>
          <blockquote>“Le luxe tient parfois à une heure de conversation qui n’aurait pas pu être improvisée.”</blockquote>
        </article>
        <aside>
          <h3>En pratique</h3>
          <ul><li><Check /> 2 à 6 voyageurs</li><li><Check /> Environ 3 heures</li><li><Check /> Interprète privé si nécessaire</li><li><Check /> Intégrable à un voyage sur mesure</li></ul>
          <Link href="/demande-de-voyage" className="button button--terracotta">Ajouter à mon projet</Link>
        </aside>
      </section>
      <section className="full-image-break"><Image src={asset("/images/marrakech-breakfast.webp")} alt="" fill sizes="100vw" /><div><p>Chaque expérience existe dans un itinéraire, jamais hors-sol.</p><Link href="/voyages" className="text-link">Voir les voyages <Arrow /></Link></div></section>
    </>
  );
}
