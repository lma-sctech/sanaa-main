import type { MetadataRoute } from "next";
import { destinations, journeys, experiences, accommodations } from "@/lib/data";

export const dynamic = "force-static";

const BASE = "https://travel.sanaaservices.com";

const staticRoutes = [
  "/",
  "/destinations",
  "/voyages",
  "/offres",
  "/demande-de-voyage",
  "/pourquoi-sanaa",
  "/inspiration",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({ url: `${BASE}${route}` })),
    ...destinations.map((d) => ({ url: `${BASE}/destinations/${d.slug}` })),
    ...journeys.map((j) => ({ url: `${BASE}/voyages/${j.slug}` })),
    ...experiences.map((e) => ({ url: `${BASE}/experiences/${e.slug}` })),
    ...accommodations.map((a) => ({ url: `${BASE}/hebergements/${a.slug}` })),
  ];
}
