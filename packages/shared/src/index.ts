export type ApprovalStatus = "unverified" | "approved";

export type ThemeName =
  | "main"
  | "premium-travel"
  | "travel"
  | "notary-legal"
  | "insurance"
  | "driving-school";

export interface PremiumAsset {
  source: string;
  alt: string;
  focalPoint: {
    x: number;
    y: number;
  };
  provenance: ApprovalStatus;
}

export interface DestinationConcept {
  slug: string;
  name: string;
  region: string;
  introduction: string;
  themes: string[];
  asset: PremiumAsset;
}

export interface JourneyConcept {
  slug: string;
  destination: DestinationConcept["slug"];
  name: string;
  intention: string;
  mood: string;
  rhythm: "Slow" | "Balanced" | "Immersive";
  interests: string[];
  indicativeRoute: string[];
  experiences: string[];
  accommodationApproach: string;
  asset: PremiumAsset;
}

export const siteRegistry = {
  main: {
    id: "main",
    label: "Sanaa Services",
    theme: "main",
    defaultUrl: "https://www.mbk.ma",
  },
  premiumTravel: {
    id: "premium-travel",
    label: "Signature Journey",
    theme: "premium-travel",
    defaultUrl: "https://www.mbk.ma/premium-travel",
  },
} as const;

export function getPublicUrl(envValue: string | undefined, fallback: string) {
  return envValue && envValue.trim().length > 0 ? envValue : fallback;
}

export function premiumTravelToMain(mainUrl: string = siteRegistry.main.defaultUrl) {
  return {
    href: mainUrl,
    label: "Open Sanaa Services main site",
    target: "_blank",
    rel: "noopener noreferrer",
    analytics: {
      event: "inter_site_navigation",
      from: siteRegistry.premiumTravel.id,
      to: siteRegistry.main.id,
    },
  } as const;
}
