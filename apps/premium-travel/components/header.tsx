"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { asset } from "@/lib/base-path";

const navigation = [
  { href: "/destinations", label: "Destinations" },
  { href: "/voyages", label: "Voyages" },
  { href: "/pourquoi-sanaa", label: "Why Sanaa" },
  { href: "/offres", label: "Offers" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="main-header__inner">
        <Link href="/" className="main-header__brand" aria-label="Sanaa Services, home">
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
        <Link href="/demande-de-voyage" className="main-header__cta">
          Plan a journey
        </Link>
      </div>
    </header>
  );
}
