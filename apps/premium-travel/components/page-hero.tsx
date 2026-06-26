import Image from "next/image";
import type { ReactNode } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  text,
  children,
  compact = false,
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={`page-hero ${compact ? "page-hero--compact" : ""}`}>
      <Image src={image} alt="" fill priority sizes="100vw" />
      <div className="page-hero__veil" />
      <div className="page-hero__content section-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        {children}
      </div>
    </section>
  );
}
