import Link from "next/link";
import { asset, TRAVEL_URL } from "../lib/base-path";

const address = "2525 Steinway Street, Astoria, NY 11103";
const GOOGLE_REVIEWS = "https://www.google.com/search?q=sanaaservices+astoria+newyork#lrd=0x89c25f402a398c2d:0x20cbdb6005b7476c,1,,,,,";
const INSTAGRAM = "https://www.instagram.com/sanaa.services/";
const FACEBOOK = "https://web.facebook.com/SANAASERVICES";
const mapQuery = encodeURIComponent(`Sanaa Services, ${address}`);
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&z=15&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export function SiteFooter() {
  return (
    <footer className="main-footer">
      <div className="main-footer__inner">
        <div className="main-footer__brand">
          <Link href="/" aria-label="Sanaa Services, home">
            <img
              src={asset("/images/logo.png")}
              alt="Sanaa Services"
              height={50}
              style={{ display: "block", height: 50, width: "auto" }}
            />
          </Link>
          <p>
            Travel, notary, insurance, translation, driving and immigration services
            from Astoria, Queens - with multilingual, personalized guidance.
          </p>
          <div className="main-footer__socials">
            <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer" aria-label="Google Reviews">
              <img src={asset("/images/icons/google-solid.svg")} alt="" width={20} height={20} />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={asset("/images/icons/instagram.svg")} alt="" width={20} height={20} />
            </a>
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={asset("/images/icons/facebook.svg")} alt="" width={20} height={20} />
            </a>
          </div>
        </div>

        <nav className="main-footer__column" aria-label="Services">
          <h3>Services</h3>
          <a href={TRAVEL_URL} target="_blank" rel="noopener noreferrer">
            Signature Journey
          </a>
          <Link href="/#services">Travel</Link>
          <Link href="/#services">Notary &amp; Legal</Link>
          <Link href="/#services">Driving School</Link>
        </nav>

        <nav className="main-footer__column" aria-label="Company">
          <h3>Company</h3>
          <a href="/#quick-request">Contact</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/accessibility">Accessibility</Link>
          <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer">Google Reviews</a>
        </nav>

        <div className="main-footer__map">
          <div className="main-footer__map-frame">
            <iframe
              title="Sanaa Services location on Google Maps"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p>{address}</p>
          <p>Mon-Sat, 9:00 AM - 6:00 PM</p>
          <a href={mapLink} target="_blank" rel="noreferrer" className="main-footer__map-link">
            Open in Google Maps
          </a>
        </div>
      </div>

      <div className="main-footer__bottom">
        <span>&copy; {new Date().getFullYear()} Sanaa Services. All rights reserved.</span>
        <div>
          <a href="/#quick-request">Contact</a>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
