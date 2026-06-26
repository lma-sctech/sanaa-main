import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/format";
import { Arrow } from "@/components/icons";
import { FavoriteButton } from "@/components/favorite-button";
import type { Journey } from "@/lib/data";

export function JourneyCard({ journey, compact = false }: { journey: Journey; compact?: boolean }) {
  return (
    <article className={`journey-card ${compact ? "journey-card--compact" : ""}`}>
      <div className="journey-card__image">
        <Image src={journey.image} alt="" fill sizes={compact ? "(max-width: 700px) 88vw, 32vw" : "(max-width: 700px) 88vw, 38vw"} />
        <div className="journey-card__badges">
          <span>{journey.mode}</span>
          {journey.edit && <span className="is-accent">{journey.edit}</span>}
        </div>
        <FavoriteButton slug={journey.slug} />
      </div>
      <div className="journey-card__body">
        <div className="journey-card__meta">
          <span>{journey.country}</span>
          <span>{journey.duration} jours</span>
          <span>{journey.availability}</span>
        </div>
        <h3><Link href={`/voyages/${journey.slug}`}>{journey.title}</Link></h3>
        {!compact && <p>{journey.summary}</p>}
        <div className="journey-card__route">{journey.route.join(" · ")}</div>
        <div className="journey-card__footer">
          <div><small>À partir de</small><strong>{formatPrice(journey.price)}</strong><small>par personne</small></div>
          <Link href={`/voyages/${journey.slug}`} className="icon-link" aria-label={`Voir ${journey.title}`}><Arrow /></Link>
        </div>
      </div>
    </article>
  );
}
