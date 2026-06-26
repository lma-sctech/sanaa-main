"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "@/components/icons";
import { formatPrice } from "@/lib/format";

const leads = [
  { name: "Élodie Martin", destination: "Tanzanie", value: 16800, stage: "Nouveau", age: "12 min" },
  { name: "Marc & Inès Roy", destination: "Jordanie", value: 9200, stage: "Qualification", age: "2 h" },
  { name: "Claire Thomas", destination: "Maroc", value: 10420, stage: "Devis envoyé", age: "1 j" },
  { name: "Famille Dumas", destination: "Portugal", value: 18500, stage: "À confirmer", age: "2 j" },
];

const operationalAlerts = [
  { title: "Disponibilité camp Chigaga", detail: "Attente fournisseur · 14 h", done: false },
  { title: "Passeports Thomas", detail: "Documents vérifiés", done: true },
  { title: "Acompte Dar Sanaa", detail: "Échéance demain", done: false },
  { title: "Vol Ouarzazate–Paris", detail: "Option jusqu’au 18 juin", done: false },
];

const supplierCosts = [920, 1380, 1110, 1860] as const;

export function AdvisorConsole() {
  const [margin, setMargin] = useState(22);
  const [selected, setSelected] = useState(2);

  return (
    <div className="advisor-shell">
      <aside className="advisor-nav">
        <Link href="/" className="advisor-logo">S<span>∞</span>NAA<small>studio</small></Link>
        <nav>
          <button className="is-active" type="button">Tableau de bord</button>
          <button type="button">Prospects <span>8</span></button>
          <button type="button">Voyages</button>
          <button type="button">Devis</button>
          <button type="button">Réservations</button>
          <button type="button">Fournisseurs</button>
          <button type="button">Contenus</button>
        </nav>
        <div><small>Espace</small><strong>Sanaa France</strong><span>Administrateur</span></div>
      </aside>
      <main className="advisor-main">
        <header><div><p className="eyebrow">Lundi 15 juin</p><h1>Bonjour Salma.</h1></div><div><button type="button">Rechercher</button><span>SM</span></div></header>
        <section className="advisor-kpis">
          <article><small>Pipeline actif</small><strong>148 600 €</strong><span>+12% ce mois</span></article>
          <article><small>Nouveaux prospects</small><strong>18</strong><span>6 à traiter</span></article>
          <article><small>Devis en attente</small><strong>9</strong><span>3 relances dues</span></article>
          <article><small>Marge moyenne</small><strong>23,4%</strong><span>Objectif 22%</span></article>
        </section>
        <div className="advisor-grid">
          <section className="advisor-panel leads-panel">
            <div className="advisor-panel__head"><div><p className="eyebrow">CRM</p><h2>Prospects prioritaires</h2></div><button type="button">Voir tout</button></div>
            <div className="lead-table">
              {leads.map((lead, index) => (
                <button type="button" className={selected === index ? "is-active" : ""} onClick={() => setSelected(index)} key={lead.name}>
                  <span>{lead.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span>
                  <div><strong>{lead.name}</strong><small>{lead.destination} · {lead.age}</small></div>
                  <em>{lead.stage}</em><b>{formatPrice(lead.value)}</b>
                </button>
              ))}
            </div>
          </section>
          <section className="advisor-panel pipeline-panel">
            <div className="advisor-panel__head"><div><p className="eyebrow">Conversion</p><h2>Pipeline</h2></div><span>42 dossiers</span></div>
            <div className="pipeline-bars">
              {[["Nouveau", 18, 82], ["Qualification", 11, 62], ["Proposition", 8, 47], ["Confirmé", 5, 30]].map((item) => <div key={item[0]}><span>{item[0]}</span><i><b style={{ width: `${item[2]}%` }} /></i><strong>{item[1]}</strong></div>)}
            </div>
          </section>
          <section className="advisor-panel quote-builder">
            <div className="advisor-panel__head"><div><p className="eyebrow">Devis V4 · Claire Thomas</p><h2>Constructeur d’itinéraire</h2></div><span>Brouillon sauvegardé</span></div>
            <div className="quote-builder__days">
              {["Marrakech · Dar Sanaa", "Haut Atlas · Kasbah Tamadot", "Aït Ben Haddou · Ksar Ighnda", "Erg Chigaga · Private Camp"].map((item, index) => <article key={item}><span>{index + 1}</span><div><small>Jours {index * 2 + 1}–{index * 2 + 2}</small><strong>{item}</strong></div><em>{formatPrice(supplierCosts[index] ?? 0)}</em><button type="button">•••</button></article>)}
              <button type="button" className="add-day">+ Ajouter une étape</button>
            </div>
            <div className="quote-builder__totals">
              <label><span>Marge cible</span><input type="range" min="15" max="35" value={margin} onChange={(event) => setMargin(Number(event.target.value))} /><strong>{margin}%</strong></label>
              <div><span>Coût fournisseurs</span><strong>7 810 €</strong></div>
              <div><span>Prix client</span><strong>{formatPrice(Math.round(7810 / (1 - margin / 100)))}</strong></div>
              <div><span>Marge estimée</span><strong>{formatPrice(Math.round(7810 / (1 - margin / 100) - 7810))}</strong></div>
            </div>
          </section>
          <section className="advisor-panel operations-panel">
            <div className="advisor-panel__head"><div><p className="eyebrow">Opérations</p><h2>À sécuriser</h2></div><span>4 alertes</span></div>
            {operationalAlerts.map((item) => <article key={item.title}><span className={item.done ? "is-done" : ""}>{item.done ? <Check /> : "!"}</span><div><strong>{item.title}</strong><small>{item.detail}</small></div></article>)}
          </section>
        </div>
        <footer className="advisor-audit"><span>Dernière synchronisation fournisseurs&nbsp;: il y a 4 min</span><span>Journal d’audit actif</span><span>RBAC · 6 rôles</span><span>EUR · FR</span></footer>
      </main>
    </div>
  );
}
