"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { ItineraryDay } from "@/lib/data";

function createMarkerIcon(day: number, active: boolean) {
  const size = active ? 32 : 24;
  const bg = active ? "#d4aa56" : "#342735";
  const border = active ? "#342735" : "rgba(255,255,255,0.8)";
  return L.divIcon({
    className: "itinerary-marker",
    html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${bg};color:${active ? "#342735" : "#fff"};border:2px solid ${border};display:flex;align-items:center;justify-content:center;font-size:${active ? 14 : 11}px;font-weight:700;font-family:Inter,sans-serif;box-shadow:0 4px 12px rgba(0,0,0,0.25);transition:all 200ms ease;">${day}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export function ItineraryMap({ days, activeDay, onDayChange }: { days: ItineraryDay[]; activeDay: number; onDayChange: (day: number) => void }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      maxZoom: 17,
    }).addTo(map);

    L.control.zoom({ position: "topright" }).addTo(map);

    const coords = days.map((d) => [d.coordinates[0], d.coordinates[1]] as L.LatLngExpression);

    L.polyline(coords, {
      color: "#b55735",
      weight: 2.5,
      opacity: 0.6,
      dashArray: "8 6",
    }).addTo(map);

    const markers = days.map((day) => {
      const marker = L.marker([day.coordinates[0], day.coordinates[1]], {
        icon: createMarkerIcon(day.day, day.day === 1),
      }).addTo(map);

      marker.on("click", () => onDayChange(day.day));
      marker.bindTooltip(day.place, {
        direction: "top",
        offset: [0, -14],
        className: "itinerary-tooltip",
      });

      return marker;
    });

    markersRef.current = markers;
    const bounds = L.latLngBounds(coords);
    map.fitBounds(bounds, { padding: [40, 40] });
    mapInstance.current = map;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, [days, onDayChange]);

  useEffect(() => {
    markersRef.current.forEach((marker, index) => {
      const day = days[index];
      if (!day) return;

      marker.setIcon(createMarkerIcon(day.day, day.day === activeDay));
    });

    const activeData = days.find((d) => d.day === activeDay);
    if (activeData && mapInstance.current) {
      mapInstance.current.panTo([activeData.coordinates[0], activeData.coordinates[1]], { animate: true, duration: 0.5 });
    }
  }, [activeDay, days]);

  return <div className="itinerary-map" ref={mapRef} />;
}
