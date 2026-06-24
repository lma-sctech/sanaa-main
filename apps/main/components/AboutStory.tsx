"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { asset } from "../lib/base-path";

const aboutSections = [
  {
    title: "A Story Built on Trust, Community and Service",
    paragraphs: [
      "Sanaa Services was born from a simple belief: when people face important life decisions - traveling, preparing documents, protecting their family, moving forward with immigration steps, or planning a new journey - they deserve guidance they can trust.",
      "Founded and led by Sanaa Bergha, Sanaa Services has grown over the past two decades from a small local service office into a trusted multilingual agency serving thousands of individuals, families, travelers and community members in Astoria, Queens and beyond.",
      "What started as a personal commitment to helping people navigate essential paperwork and travel needs has become a recognized community-based agency offering travel services, translation, notary support, insurance guidance, visa and immigration assistance, legal document support and driving-related services.",
    ],
  },
  {
    title: "The Journey of Sanaa Bergha",
    paragraphs: [
      "Sanaa Bergha built her professional reputation step by step, through consistency, dedication and personal involvement with every client.",
      "As a Moroccan-American entrepreneur based in New York, Sanaa understands the challenges faced by immigrants, families, travelers and newcomers. She knows that behind every document, every ticket, every insurance request and every travel plan, there is a person, a family, a responsibility or an important life moment.",
      "For nearly 20 years, Sanaa has been serving her community with a hands-on approach. She started with determination, working closely with clients one by one, building relationships based on honesty, reliability and care.",
      "Today, Sanaa Services has evolved from a one-woman initiative into a dedicated team serving people across multiple needs, while keeping the same personal attention that made the agency trusted from the beginning.",
    ],
  },
  {
    title: "From One Person to a Trusted Team",
    paragraphs: [
      "The growth of Sanaa Services reflects the trust of the community.",
      "Over the years, thousands of clients have turned to Sanaa and her team for help with travel arrangements, important documents, translations, notarizations, insurance needs, visa-related questions, administrative support and more.",
      "What makes Sanaa Services different is not only the range of services offered, but the way those services are delivered: with patience, clarity, multilingual support and a deep understanding of the community.",
    ],
  },
  {
    title: "What We Do",
    paragraphs: [
      "Sanaa Services is a multilingual agency based in Astoria, New York, offering practical support for everyday and life-changing needs: travel agency services, flights, hotel guidance, trip planning, travel insurance, notary services, translation services, visa consulting, immigration support, insurance guidance, legal document guidance, driving school and DMV-related support.",
    ],
  },
  {
    title: "A Strong Focus on Travel",
    paragraphs: [
      "Travel has always been at the heart of Sanaa Services.",
      "From helping families book flights to Morocco, to supporting travelers with insurance and documents, to guiding clients through complex travel planning, the agency has become a reliable travel partner for the Moroccan, Arab and international communities in New York.",
      "Our role is simple: we help clients travel better, prepare better and feel supported from the first question to the final confirmation.",
    ],
  },
  {
    title: "Rooted in Astoria, Connected to the Community",
    paragraphs: [
      "Located in the heart of Astoria, Queens, Sanaa Services is deeply connected to one of New York's most diverse and vibrant neighborhoods.",
      "The agency serves clients in English, French and Arabic, making it easier for individuals and families from different backgrounds to access clear guidance and personalized support.",
      "For many clients, Sanaa Services is more than an agency. It is a place where they can ask questions, receive help, understand their options and feel heard.",
    ],
  },
  {
    title: "Our Mission",
    paragraphs: [
      "Our mission is to simplify important services for individuals, families and travelers by providing trusted, multilingual and community-based support.",
      "We believe that every client deserves clear information, honest guidance, respectful service, practical solutions, personal attention and a team that understands their needs.",
    ],
  },
  {
    title: "Why Clients Trust Sanaa Services",
    paragraphs: [
      "Clients choose Sanaa Services because they find a team that is experienced, accessible and committed.",
      "They come for travel, documents, translation, notary services, insurance or visa-related guidance - but they stay because they feel supported.",
      "For nearly two decades, Sanaa Services has built its name on trust, reliability and community connection.",
    ],
  },
];

export function AboutStorySection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="story-section">
        <button type="button" className="story-card" onClick={() => setIsOpen(true)} aria-label="Open About us story">
          <img src={asset("/images/office.webp")} alt="" className="story-card__bg" />
          <div className="story-card__overlay" />
          <div className="story-card__content">
            <p className="story-card__eyebrow">Discover our story</p>
            <h2>A Story Built on Trust and Community</h2>
            <p>
              For nearly two decades, Sanaa Services has helped families, travelers,
              and community members move forward with clarity and confidence. Discover
              the local Astoria agency built around guidance, service, and personal attention.
            </p>
            <span className="button button--gold">About us</span>
          </div>
        </button>
      </section>

      {isOpen && <AboutModal onClose={() => setIsOpen(false)} />}
    </>
  );
}

function AboutModal({ onClose }: { onClose: () => void }) {
  const titleId = useId();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="story-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button type="button" className="story-modal__backdrop" onClick={onClose} aria-label="Close" />
      <div ref={modalRef} className="story-modal__panel">
        <div className="story-modal__header">
          <div>
            <p className="eyebrow">About us</p>
            <h2 id={titleId}>The story behind Sanaa Services</h2>
          </div>
          <button ref={closeRef} type="button" className="story-modal__close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>
        <div className="story-modal__body">
          {aboutSections.map((section) => (
            <div key={section.title} className="story-modal__card">
              <h3>{section.title}</h3>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
