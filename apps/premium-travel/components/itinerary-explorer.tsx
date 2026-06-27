"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import type { ItineraryDay } from "@/lib/data";

const ItineraryMap = dynamic(() => import("@/components/itinerary-map").then((m) => m.ItineraryMap), {
  ssr: false,
  loading: () => <div className="itinerary-map" style={{ background: "#ded7c8", display: "flex", alignItems: "center", justifyContent: "center", color: "#746c70", fontSize: "0.85rem" }}>Loading map...</div>,
});

export function ItineraryExplorer({ days }: { days: ItineraryDay[] }) {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <div className="itinerary-explorer">
      <div className="itinerary-list">
        {days.map((day) => (
          <button
            type="button"
            key={day.day}
            className={activeDay === day.day ? "is-active" : ""}
            onClick={() => setActiveDay(day.day)}
          >
            <span>Jour {String(day.day).padStart(2, "0")}</span>
            <div>
              <small>{day.place}</small>
              <strong>{day.title}</strong>
              <p>{day.description}</p>
              <em>{day.stay} · {day.meals}</em>
            </div>
          </button>
        ))}
      </div>
      <ItineraryMap days={days} activeDay={activeDay} onDayChange={setActiveDay} />
    </div>
  );
}
