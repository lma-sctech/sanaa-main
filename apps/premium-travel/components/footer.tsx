"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/brand";
import { Arrow } from "@/components/icons";
import { asset } from "@/lib/base-path";

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/espace-client") || pathname.startsWith("/conseiller")) {
    return null;
  }

  return (
    <footer className="site-footer">
      <div className="footer-newsletter">
        <div>
          <p className="eyebrow">La lettre Sanaa</p>
          <h2>Des nouvelles qui donnent envie de partir.</h2>
        </div>
        <form>
          <label>
            <span>Votre adresse e-mail</span>
            <input type="email" placeholder="vous@exemple.com" />
          </label>
          <button type="submit" aria-label="S'inscrire"><Arrow /></button>
        </form>
      </div>
      <div className="footer-main">
        <div className="footer-brand">
          <Brand />
          <p>Voyages privés, expériences rares et plateforme de suivi, imaginés depuis Marrakech.</p>
          <div className="footer-socials">
            <a href="https://www.google.com/search?q=sanaaservices+astoria+newyork#lrd=0x89c25f402a398c2d:0x20cbdb6005b7476c,1,,,,," target="_blank" rel="noopener noreferrer" aria-label="Google Reviews"><img src={asset("/images/icons/google-solid.svg")} alt="" width={20} height={20} /></a>
            <a href="https://www.instagram.com/sanaa.services/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={asset("/images/icons/instagram.svg")} alt="" width={20} height={20} /></a>
            <a href="https://web.facebook.com/SANAASERVICES" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src={asset("/images/icons/facebook.svg")} alt="" width={20} height={20} /></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Explorer</h3>
          <Link href="/destinations">Destinations</Link>
          <Link href="/voyages">Voyages</Link>
          <Link href="/offres">Offres</Link>
          <Link href="/inspiration">Journal</Link>
        </div>
        <div className="footer-column">
          <h3>Sanaa</h3>
          <Link href="/pourquoi-sanaa">Notre approche</Link>
          <Link href="/demande-de-voyage">Créer un voyage</Link>
          <Link href="/espace-client">Espace client</Link>
          <Link href="/conseiller">Espace conseiller</Link>
        </div>
        <div className="footer-column">
          <h3>Informations</h3>
          <a href="#">Conditions de vente</a>
          <a href="#">Confidentialité</a>
          <a href="#">Accessibilité</a>
          <a href="#">Préférences cookies</a>
        </div>
        <div className="footer-contact">
          <p className="eyebrow">Parler à un conseiller</p>
          <a href="tel:+33184802550">+33 1 84 80 25 50</a>
          <span>Lun–sam · 9h–19h</span>
          <Link href="/demande-de-voyage" className="text-link">Prendre rendez-vous <Arrow /></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sanaa Services</span>
        <span>New York</span>
        <span>Prototype plateforme V2</span>
      </div>
    </footer>
  );
}
