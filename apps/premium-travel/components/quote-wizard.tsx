"use client";

import { useState } from "react";
import { Check } from "@/components/icons";
import { destinations, interests } from "@/lib/data";
import type { FormEvent } from "react";

const steps = ["Projet", "Voyageurs", "Préférences", "Coordonnées"];

export function QuoteWizard({ presetJourney = "" }: { presetJourney?: string }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  function toggleInterest(item: string) {
    setSelectedInterests((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
    );
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < steps.length - 1) setStep((current) => current + 1);
    else setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="quote-success">
        <span><Check size={34} /></span>
        <p className="eyebrow">Demande enregistrée</p>
        <h2>Votre projet a déjà une première forme.</h2>
        <p>
          Une conseillère Sanaa reprendrait ici votre demande, créerait une fiche prospect
          et vous proposerait un rendez-vous. Référence de démonstration&nbsp;: <strong>SAA-260615-42</strong>.
        </p>
        <button type="button" className="button button--dark" onClick={() => { setSubmitted(false); setStep(0); }}>
          Créer une autre demande
        </button>
      </div>
    );
  }

  return (
    <div className="quote-wizard">
      <div className="quote-progress">
        <div style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
      </div>
      <div className="quote-steps">
        {steps.map((item, index) => (
          <button type="button" className={index <= step ? "is-active" : ""} onClick={() => index < step && setStep(index)} key={item}>
            <span>{index + 1}</span>{item}
          </button>
        ))}
      </div>

      <form onSubmit={submit}>
        {step === 0 && (
          <fieldset>
            <legend>Quel voyage avez-vous en tête&nbsp;?</legend>
            <p>Une intuition suffit. Tout pourra être ajusté avec votre conseiller.</p>
            {presetJourney && <div className="preset-journey"><Check /> Voyage de départ&nbsp;: <strong>{presetJourney}</strong></div>}
            <div className="form-grid">
              <label><span>Destination principale</span><select required><option value="">Je ne sais pas encore</option>{destinations.map((item) => <option key={item.slug}>{item.name}</option>)}</select></label>
              <label><span>Période envisagée</span><input type="month" min="2026-07" /></label>
              <label><span>Durée souhaitée</span><select><option>5 à 7 jours</option><option>8 à 12 jours</option><option>13 à 18 jours</option><option>Plus de 18 jours</option></select></label>
              <label><span>Budget par personne</span><select><option>2 500 € à 4 000 €</option><option>4 000 € à 7 000 €</option><option>7 000 € à 12 000 €</option><option>Plus de 12 000 €</option></select></label>
            </div>
          </fieldset>
        )}

        {step === 1 && (
          <fieldset>
            <legend>Qui part avec vous&nbsp;?</legend>
            <p>Ces informations nous aident à prévoir chambres, rythme et accompagnement.</p>
            <div className="traveler-counters">
              <label><span>Adultes</span><input type="number" min="1" max="20" defaultValue="2" /></label>
              <label><span>Enfants</span><input type="number" min="0" max="10" defaultValue="0" /></label>
              <label><span>Chambres</span><input type="number" min="1" max="10" defaultValue="1" /></label>
            </div>
            <label className="wide-field"><span>Un besoin particulier à anticiper&nbsp;?</span><textarea placeholder="Mobilité, alimentation, anniversaire, rythme..." /></label>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset>
            <legend>Qu’est-ce qui fera la différence&nbsp;?</legend>
            <p>Choisissez jusqu’à quatre envies. Il n’y a pas de mauvaise réponse.</p>
            <div className="interest-picker">
              {interests.map((item) => (
                <button
                  type="button"
                  className={selectedInterests.includes(item) ? "is-active" : ""}
                  onClick={() => toggleInterest(item)}
                  disabled={!selectedInterests.includes(item) && selectedInterests.length >= 4}
                  key={item}
                >
                  {selectedInterests.includes(item) && <Check size={16} />}{item}
                </button>
              ))}
            </div>
            <div className="form-grid">
              <label><span>Rythme préféré</span><select><option>Très doux</option><option>Équilibré</option><option>Intense</option></select></label>
              <label><span>Style d’hébergement</span><select><option>Maisons de caractère</option><option>Luxe contemporain</option><option>Mix équilibré</option></select></label>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset>
            <legend>Comment vous recontacter&nbsp;?</legend>
            <p>Vos coordonnées servent uniquement à construire et suivre ce projet.</p>
            <div className="form-grid">
              <label><span>Prénom</span><input required name="firstName" /></label>
              <label><span>Nom</span><input required name="lastName" /></label>
              <label><span>E-mail</span><input required type="email" name="email" /></label>
              <label><span>Téléphone</span><input required type="tel" name="phone" /></label>
            </div>
            <label className="consent-check"><input type="checkbox" required /> J’accepte d’être contacté au sujet de ce projet de voyage.</label>
          </fieldset>
        )}

        <div className="quote-actions">
          <button type="button" className="text-link" disabled={step === 0} onClick={() => setStep((current) => current - 1)}>Retour</button>
          <button type="submit" className="button button--terracotta">{step === steps.length - 1 ? "Envoyer ma demande" : "Continuer"}</button>
        </div>
      </form>
      <aside className="quote-assurance">
        <span>Besoin d’en parler&nbsp;?</span>
        <strong>+33 1 84 80 25 50</strong>
        <small>Un conseiller vous répond du lundi au samedi.</small>
      </aside>
    </div>
  );
}
