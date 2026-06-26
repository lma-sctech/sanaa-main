import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  text,
  action,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
      </div>
      {(text || action) && <div className="section-heading__aside">{text && <p>{text}</p>}{action}</div>}
    </div>
  );
}
