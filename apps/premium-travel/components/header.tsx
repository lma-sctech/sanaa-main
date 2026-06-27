"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { asset } from "@/lib/base-path";

const navigation = [
  { href: "/destinations", label: "Destinations" },
  { href: "/journeys", label: "Journeys" },
  { href: "/why-sanaa", label: "Why Sanaa" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="main-header">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="main-header__inner">
        <Link href="/" className="main-header__brand" aria-label="Signature Journey home">
          <img
            src={asset("/images/logo.png")}
            alt="Sanaa Services"
            height={56}
            style={{ display: "block", height: 56, width: "auto" }}
          />
        </Link>
        <nav aria-label="Main navigation" className="main-header__nav">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/request-a-journey" className="main-header__cta">
          Request path
        </Link>
        <button
          type="button"
          className="main-header__menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>
      <div id="mobile-navigation" className={`mobile-nav ${open ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/request-a-journey" onClick={() => setOpen(false)}>
            Request a journey
          </Link>
        </nav>
      </div>
    </header>
  );
}
