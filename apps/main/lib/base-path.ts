const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const TRAVEL_URL =
  process.env.NEXT_PUBLIC_TRAVEL_URL ??
  process.env.NEXT_PUBLIC_URL_PREMIUM_TRAVEL ??
  "https://www.mbk.ma/premium-travel";

export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}

export { TRAVEL_URL };
