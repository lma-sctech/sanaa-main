import { previewNotice } from "@/lib/premium-data";

export const metadata = {
  title: "Request a Journey",
  description: "Explanation of the future request journey, without data collection.",
};

export default function RequestJourneyPage() {
  return (
    <>
      <div className="notice">{previewNotice}</div>
      <section className="detail-hero">
        <div className="shell">
          <p className="eyebrow">Future request path</p>
          <h1>No form is active in this preview.</h1>
          <p>
            This page explains the intended future flow without collecting names,
            contact details, preferences or travel data.
          </p>
        </div>
      </section>
      <section className="section section--paper">
        <div className="shell grid grid--3">
          {[
            "A client will describe timing, rhythm and context.",
            "A Sanaa advisor will qualify the request before any proposal.",
            "Commercial details will only be shown after validation.",
          ].map((item, index) => (
            <article className="card" key={item}>
              <div className="card__body">
                <p className="eyebrow">Step {index + 1}</p>
                <h2>{item}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
