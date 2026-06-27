const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_PREMIUM_TRAVEL_URL ??
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.mbk.ma/premium-travel";

export const MAIN_URL = process.env.NEXT_PUBLIC_MAIN_URL ?? "https://www.mbk.ma";
