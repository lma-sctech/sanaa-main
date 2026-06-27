import Link from "next/link";
import { MAIN_URL } from "@/lib/base-path";
import { premiumTravelToMain } from "@sanaa/shared";

export function Footer() {
  const mainLink = premiumTravelToMain(MAIN_URL);

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="eyebrow">Signature Journey</p>
          <h2>Private travel preview by Sanaa Services.</h2>
          <p>
            This section is an editorial preview. Journeys are illustrative and
            not bookable until content, policies and assets are approved.
          </p>
        </div>
        <nav className="footer-column" aria-label="Premium Travel">
          <h3>Explore</h3>
          <Link href="/destinations">Destinations</Link>
          <Link href="/journeys">Journeys</Link>
          <Link href="/why-sanaa">Why Sanaa</Link>
          <Link href="/request-a-journey">Request a journey</Link>
        </nav>
        <nav className="footer-column" aria-label="Network">
          <h3>Network</h3>
          <a href={mainLink.href} target={mainLink.target} rel={mainLink.rel} aria-label={mainLink.label}>
            Main Sanaa Services site
          </a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sanaa Services</span>
        <span>Preview hosted on www.mbk.ma</span>
        <span>Noindex until approval</span>
      </div>
    </footer>
  );
}
