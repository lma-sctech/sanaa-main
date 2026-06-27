import { approvalGate, previewNotice } from "@/lib/premium-data";

export const metadata = {
  title: "Why Sanaa",
  description: "Method and editorial commitments for Signature Journey.",
};

export default function WhySanaaPage() {
  return (
    <>
      <div className="notice">{previewNotice}</div>
      <section className="detail-hero">
        <div className="shell">
          <p className="eyebrow">Why Sanaa</p>
          <h1>Private travel with one accountable human conversation.</h1>
          <p>
            The method favors clear context, slower decisions and fewer claims.
            Technology supports the work, but the relationship remains human.
          </p>
        </div>
      </section>
      <section className="section section--paper">
        <div className="shell grid grid--3">
          {[
            "One accountable advisor from first framing to final review.",
            "Every claim must be traceable before public release.",
            "Journeys stay editorial until policy, asset and commercial checks pass.",
          ].map((item) => (
            <article className="card" key={item}>
              <div className="card__body">
                <p className="eyebrow">Commitment</p>
                <h2>{item}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="shell preview-panel">
          <p className="eyebrow">Release gate</p>
          <h2>Indexable publication remains blocked.</h2>
          <ul className="check-list">
            {approvalGate.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
