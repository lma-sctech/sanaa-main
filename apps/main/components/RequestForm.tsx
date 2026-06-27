"use client";

import { useState } from "react";
import { asset } from "../lib/base-path";
import type { FormEvent } from "react";

export function RequestForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("company")) return;
    setStatus("success");
  }

  return (
    <section className="request-section" id="quick-request">
      <div className="shell">
        <div className="request-layout">
          <div className="request-intro">
            <p className="request-eyebrow">Get started</p>
            <h2>Tell us what you need.</h2>
            <p className="request-intro__text">
              Share the essentials now. Our Astoria team will follow up within one business day
              by phone, WhatsApp or email.
            </p>
          </div>

          <form className="request-card" onSubmit={handleSubmit}>
            <img src={asset("/images/cta/legal-consultancy-1400.jpg")} alt="" className="request-card__bg" />
            <div className="request-card__scrim" />
            <div className="request-card__glow" />

            <div className="request-card__panel">
              {status === "success" ? (
                <div className="request-success">
                  <p className="request-eyebrow">Request received</p>
                  <h3>Thank you!</h3>
                  <p>Our team will contact you within one business day.</p>
                </div>
              ) : (
                <>
                  <div>
                    <p className="request-eyebrow">Service request</p>
                    <h3 className="request-card__title">How can we help?</h3>
                    <p className="request-card__desc">Fill in the basics - we handle the rest.</p>
                  </div>

                  <input type="text" name="company" tabIndex={-1} autoComplete="off" className="request-honeypot" aria-hidden="true" />

                  <div className="request-grid">
                    <label className="request-field">
                      <span>Full name</span>
                      <input name="name" type="text" placeholder="Your full name" required />
                    </label>

                    <label className="request-field">
                      <span>Preferred contact</span>
                      <select name="contactMethod" required defaultValue="">
                        <option value="" disabled>Select...</option>
                        <option>Call</option>
                        <option>WhatsApp</option>
                        <option>Email</option>
                      </select>
                    </label>

                    <label className="request-field">
                      <span>Phone number</span>
                      <input name="phone" type="tel" placeholder="+1 (___) ___-____" />
                    </label>

                    <label className="request-field">
                      <span>Email address</span>
                      <input name="email" type="email" placeholder="you@example.com" />
                    </label>

                    <label className="request-field request-field--full">
                      <span>What do you need help with?</span>
                      <select name="service" required defaultValue="">
                        <option value="" disabled>Select a service...</option>
                        <option>Travel - Flights &amp; Hotels</option>
                        <option>Signature Journey - Tailor-made trip</option>
                        <option>Visa &amp; Immigration</option>
                        <option>Notary &amp; Legal Documents</option>
                        <option>Translation - Certified</option>
                        <option>Insurance - Life, Family or Travel</option>
                        <option>Driving School &amp; DMV</option>
                        <option>Other - I&apos;ll explain below</option>
                      </select>
                    </label>

                    <label className="request-field request-field--full">
                      <span>Message</span>
                      <textarea name="message" rows={4} required placeholder="Tell us what you need help with..." />
                    </label>
                  </div>

                  <details className="request-details">
                    <summary>Additional details <span>(optional)</span></summary>
                    <p className="request-details__hint">Helpful if you already know them. You can also leave this for our follow-up.</p>
                    <div className="request-grid">
                      <label className="request-field">
                        <span>Preferred language</span>
                        <select name="language" defaultValue="English">
                          <option>English</option>
                          <option>French</option>
                          <option>Arabic</option>
                        </select>
                      </label>
                      <label className="request-field">
                        <span>Preferred date</span>
                        <input name="preferredDate" type="text" placeholder="Example: next week" />
                      </label>
                    </div>
                  </details>

                  <button type="submit" className="request-submit">
                    Send request
                  </button>

                  {status === "error" && (
                    <p className="request-error">Please fill in the required fields.</p>
                  )}
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
