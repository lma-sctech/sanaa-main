import Link from "next/link";

export default function NotFound() {
  return (
    <section className="detail-hero">
      <div className="shell">
        <p className="eyebrow">404</p>
        <h1>This route is not part of the preview.</h1>
        <p>Return to the editorial journey collection.</p>
        <Link className="button" href="/journeys">
          Explore journeys
        </Link>
      </div>
    </section>
  );
}
