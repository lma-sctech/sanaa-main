import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Arrow, Check } from "@/components/icons";
import { accommodations, getAccommodation } from "@/lib/data";
import { asset } from "@/lib/base-path";

export function generateStaticParams() {
  return accommodations.map((stay) => ({ slug: stay.slug }));
}

export default async function AccommodationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const stay = getAccommodation(slug);
  if (!stay) notFound();

  return (
    <>
      <PageHero image={stay.image} eyebrow={`${stay.type} · ${stay.location}`} title={stay.name} text={stay.description}>
        <div className="page-hero__facts"><span>Évaluation voyageurs</span><strong>{stay.rating}/5</strong></div>
      </PageHero>
      <section className="story-layout section-shell">
        <article>
          <p className="eyebrow">Notre sélection</p>
          <h2>Une maison est d’abord une équipe.</h2>
          <p>{stay.description}</p>
          <p>Nous évaluons la qualité de l’accueil, la cohérence architecturale, les conditions de travail, la cuisine et la capacité à créer une vraie respiration dans l’itinéraire.</p>
          <div className="stay-gallery"><Image src={asset("/images/azalai-lodge.webp")} alt="" fill sizes="55vw" /></div>
        </article>
        <aside>
          <h3>Ce que nous aimons</h3>
          <ul><li><Check /> Propriété indépendante</li><li><Check /> Cuisine locale et saisonnière</li><li><Check /> Chambres peu nombreuses</li><li><Check /> Équipe implantée dans la région</li></ul>
          <Link href="/demande-de-voyage" className="button button--terracotta">Créer un séjour autour de ce lieu</Link>
          <Link href="/voyages/atlas-sahara" className="text-link">Voir un itinéraire associé <Arrow /></Link>
        </aside>
      </section>
    </>
  );
}
