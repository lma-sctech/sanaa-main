"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Check, Message } from "@/components/icons";
import { asset } from "@/lib/base-path";

const tabs = ["Vue d’ensemble", "Itinéraire", "Documents", "Paiements", "Voyageurs"];

export function ClientPortal() {
  const [active, setActive] = useState(tabs[0]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "advisor", text: "Bonjour Claire, la nouvelle version de votre devis est prête." },
    { from: "client", text: "Merci. Nous préférons garder deux nuits dans l’Atlas." },
  ]);

  function sendMessage() {
    if (!message.trim()) return;
    setMessages((current) => [...current, { from: "client", text: message.trim() }]);
    setMessage("");
  }

  return (
    <div className="portal-shell">
      <aside className="portal-sidebar">
        <div className="portal-profile"><span>CT</span><div><strong>Claire Thomas</strong><small>Voyageuse</small></div></div>
        <nav>
          {tabs.map((tab) => <button type="button" className={active === tab ? "is-active" : ""} onClick={() => setActive(tab)} key={tab}>{tab}</button>)}
        </nav>
        <div className="portal-advisor"><span>SM</span><div><small>Votre conseillère</small><strong>Salma M.</strong><a href="tel:+33184802550">Appeler</a></div></div>
      </aside>

      <main className="portal-main">
        <header className="portal-topbar"><div><p className="eyebrow">Espace voyageur</p><h1>{active}</h1></div><Link href="/" className="text-link">Retour au site</Link></header>

        {active === "Vue d’ensemble" && (
          <>
            <section className="portal-trip-card">
              <Image src={asset("/images/hero-atlantic.webp")} alt="" fill sizes="(max-width: 1180px) 100vw, 60vw" />
              <div><span>Prochain voyage · 12 septembre 2026</span><h2>Riad, Atlas et Sahara confidentiel</h2><p>9 jours · 2 voyageurs · Devis V3 accepté</p></div>
              <strong>89<small>jours</small></strong>
            </section>
            <div className="portal-kpis">
              <article><span><Check /></span><div><small>Statut</small><strong>Confirmé</strong></div></article>
              <article><span><Calendar /></span><div><small>Prochaine échéance</small><strong>2 910 € · 15 juil.</strong></div></article>
              <article><span>8</span><div><small>Documents</small><strong>6 disponibles</strong></div></article>
              <article><span>3</span><div><small>Favoris</small><strong>Voir la sélection</strong></div></article>
            </div>
            <div className="portal-columns">
              <section className="portal-panel portal-timeline">
                <div className="portal-panel__head"><div><p className="eyebrow">À faire</p><h2>Avant de partir</h2></div><span>2/4</span></div>
                <label><input type="checkbox" defaultChecked /> Passeports ajoutés</label>
                <label><input type="checkbox" defaultChecked /> Acompte réglé</label>
                <label><input type="checkbox" /> Préférences alimentaires à confirmer</label>
                <label><input type="checkbox" /> Assurance voyage à renseigner</label>
              </section>
              <section className="portal-panel portal-quote-card">
                <div className="portal-panel__head"><div><p className="eyebrow">Dernier devis</p><h2>Version 3</h2></div><span>Accepté</span></div>
                <p>Deux nuits dans l’Atlas, camp privé à Chigaga et vol retour depuis Ouarzazate.</p>
                <div><span>Total du voyage</span><strong>10 420 €</strong></div>
                <button type="button" className="button button--dark">Ouvrir le devis</button>
              </section>
            </div>
          </>
        )}

        {active === "Itinéraire" && (
          <section className="portal-panel portal-daily">
            <div className="portal-panel__head"><div><p className="eyebrow">12–20 septembre 2026</p><h2>Votre voyage jour par jour</h2></div><span>Hors ligne bientôt disponible</span></div>
            {["Arrivée à Marrakech", "La médina avec Leïla", "Route vers le Haut Atlas", "Aït Ben Haddou", "Vallée du Drâa"].map((item, index) => (
              <article key={item}><span>{index + 1}</span><div><small>Jour {index + 1}</small><strong>{item}</strong><p>Contacts, horaires, réservations et documents liés à cette journée.</p></div><button type="button">Ouvrir</button></article>
            ))}
          </section>
        )}

        {active === "Documents" && (
          <section className="portal-panel document-list">
            <div className="portal-panel__head"><div><p className="eyebrow">Coffre de voyage</p><h2>Documents & factures</h2></div><button type="button" className="button button--dark">Ajouter un document</button></div>
            {[
              ["Carnet de voyage V3", "PDF · 4,2 Mo", "Disponible"],
              ["Facture d’acompte", "PDF · 182 Ko", "Payée"],
              ["Assurance assistance", "PDF · 320 Ko", "Disponible"],
              ["Passeport Claire T.", "Document sécurisé", "Expire 2029"],
            ].map((doc) => <article key={doc[0]}><span>PDF</span><div><strong>{doc[0]}</strong><small>{doc[1]}</small></div><em>{doc[2]}</em><button type="button">Télécharger</button></article>)}
          </section>
        )}

        {active === "Paiements" && (
          <section className="portal-panel payment-panel">
            <div className="portal-panel__head"><div><p className="eyebrow">Paiement sécurisé</p><h2>Échéancier</h2></div><strong>10 420 €</strong></div>
            <article className="is-paid"><span><Check /></span><div><small>12 juin 2026</small><strong>Acompte de réservation</strong></div><em>2 084 €</em></article>
            <article><span>2</span><div><small>15 juillet 2026</small><strong>Deuxième échéance</strong></div><em>2 910 €</em><button type="button" className="button button--terracotta">Payer</button></article>
            <article><span>3</span><div><small>12 août 2026</small><strong>Solde du voyage</strong></div><em>5 426 €</em></article>
          </section>
        )}

        {active === "Voyageurs" && (
          <section className="portal-panel traveler-profiles">
            <div className="portal-panel__head"><div><p className="eyebrow">Profils réutilisables</p><h2>Voyageurs & préférences</h2></div><button type="button" className="button button--dark">Ajouter</button></div>
            {["Claire Thomas", "Thomas Bernard"].map((name, index) => <article key={name}><span>{index ? "TB" : "CT"}</span><div><strong>{name}</strong><small>Passeport vérifié · Repas sans restriction · Chambre double</small></div><button type="button">Modifier</button></article>)}
          </section>
        )}
      </main>

      <aside className="portal-chat">
        <div className="portal-chat__head"><span>SM</span><div><strong>Salma</strong><small>En ligne aujourd’hui</small></div><Message /></div>
        <div className="portal-chat__messages">
          {messages.map((item, index) => <p className={item.from === "client" ? "is-client" : ""} key={`${item.text}-${index}`}>{item.text}</p>)}
        </div>
        <div className="portal-chat__input"><input value={message} onChange={(event) => setMessage(event.target.value)} onKeyDown={(event) => event.key === "Enter" && sendMessage()} placeholder="Votre message..." /><button type="button" onClick={sendMessage}>Envoyer</button></div>
      </aside>
    </div>
  );
}
