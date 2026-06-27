import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = process.env.NEXT_PUBLIC_MAIN_URL ?? "https://www.mbk.ma";

const routes = ["/", "/privacy", "/accessibility"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${BASE}${route}` }));
}
