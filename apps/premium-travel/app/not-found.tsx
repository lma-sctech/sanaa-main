import Link from "next/link";

export default function NotFound() {
  return (
    <main className="quote-page">
      <div className="quote-success">
        <p className="eyebrow">Erreur 404</p>
        <h2>Cette route ne figure pas encore sur la carte.</h2>
        <p>Revenez à la collection ou confiez directement votre idée à un conseiller.</p>
        <Link href="/voyages" className="button button--dark">Explorer les voyages</Link>
      </div>
    </main>
  );
}
