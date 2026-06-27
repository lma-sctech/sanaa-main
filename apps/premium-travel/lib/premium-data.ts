import type { DestinationConcept, JourneyConcept, PremiumAsset } from "@sanaa/shared";

export const previewNotice =
  "Editorial preview - journeys are illustrative and not bookable";

export const assets = {
  morocco: {
    source: "/images/hero-atlantic.webp",
    alt: "Atlantic landscape in Morocco, used as an unverified editorial preview asset.",
    focalPoint: { x: 50, y: 45 },
    provenance: "unverified",
  },
  jordan: {
    source: "/images/wadi-rum-camp.webp",
    alt: "Wadi Rum desert camp, used as an unverified editorial preview asset.",
    focalPoint: { x: 50, y: 55 },
    provenance: "unverified",
  },
  tanzania: {
    source: "/images/tanzania-walk.webp",
    alt: "Walking safari landscape in Tanzania, used as an unverified editorial preview asset.",
    focalPoint: { x: 50, y: 50 },
    provenance: "unverified",
  },
  portugal: {
    source: "/images/portugal-sailing.webp",
    alt: "Atlantic sailing scene in Portugal, used as an unverified editorial preview asset.",
    focalPoint: { x: 48, y: 50 },
    provenance: "unverified",
  },
  marrakech: {
    source: "/images/marrakech-breakfast.webp",
    alt: "Marrakech table scene, used as an unverified editorial preview asset.",
    focalPoint: { x: 50, y: 52 },
    provenance: "unverified",
  },
  fez: {
    source: "/images/fez-artisan.webp",
    alt: "Artisan workshop in Fez, used as an unverified editorial preview asset.",
    focalPoint: { x: 50, y: 50 },
    provenance: "unverified",
  },
  lodge: {
    source: "/images/azalai-lodge.webp",
    alt: "Desert lodge architecture, used as an unverified editorial preview asset.",
    focalPoint: { x: 50, y: 50 },
    provenance: "unverified",
  },
} satisfies Record<string, PremiumAsset>;

export const destinations: DestinationConcept[] = [
  {
    slug: "morocco",
    name: "Morocco",
    region: "North Africa",
    introduction:
      "A private reading of Morocco through cities, coastlines, craft, oases and desert silence.",
    themes: ["Craft", "Medinas", "Atlantic", "Desert"],
    asset: assets.morocco,
  },
  {
    slug: "jordan",
    name: "Jordan",
    region: "Middle East",
    introduction:
      "Stone cities, mineral landscapes and carefully paced desert time, shaped for reflection.",
    themes: ["Petra", "Wadi Rum", "Desert", "History"],
    asset: assets.jordan,
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    region: "East Africa",
    introduction:
      "A slower way to approach the living world, with naturalist-led days and attentive rhythm.",
    themes: ["Wildlife", "Walking", "Nature", "Wide horizons"],
    asset: assets.tanzania,
  },
  {
    slug: "portugal",
    name: "Portugal",
    region: "Europe",
    introduction:
      "Atlantic cities, vineyards, quiet design addresses and coastal journeys with room to breathe.",
    themes: ["Atlantic", "Food", "Design", "Coast"],
    asset: assets.portugal,
  },
];

export const journeys: JourneyConcept[] = [
  {
    slug: "atlas-sahara",
    destination: "morocco",
    name: "Riad, Atlas and Sahara",
    intention:
      "Connect Marrakech, mountain villages, oasis architecture and desert stillness without rushing the transitions.",
    mood: "desert",
    rhythm: "Balanced",
    interests: ["Culture", "Desert", "Craft"],
    indicativeRoute: ["Marrakech", "High Atlas", "Draa Valley", "Erg Chigaga"],
    experiences: ["Private craft encounter", "Slow desert arrival", "Oasis architecture walk"],
    accommodationApproach:
      "Independent houses and small lodges selected for hospitality, local grounding and quiet atmosphere.",
    asset: assets.morocco,
  },
  {
    slug: "marrakech-private-tables",
    destination: "morocco",
    name: "Marrakech Private Tables",
    intention:
      "Read Marrakech through its kitchens, workshops and private conversations rather than a checklist.",
    mood: "city",
    rhythm: "Slow",
    interests: ["Food", "Craft", "Culture"],
    indicativeRoute: ["Marrakech", "Medina", "Ourika foothills"],
    experiences: ["Hosted table", "Workshop visit", "Garden pause"],
    accommodationApproach:
      "Calm riads or small design houses chosen for team quality and a sense of retreat.",
    asset: assets.marrakech,
  },
  {
    slug: "petra-wadi-rum",
    destination: "jordan",
    name: "Petra and Wadi Rum",
    intention:
      "Move from ancient stone to open desert with fewer stops, deeper context and generous night skies.",
    mood: "desert",
    rhythm: "Immersive",
    interests: ["History", "Desert", "Conversation"],
    indicativeRoute: ["Amman", "Petra", "Wadi Rum", "Aqaba"],
    experiences: ["Context-led Petra day", "Desert camp evening", "Stargazing conversation"],
    accommodationApproach:
      "A mix of intimate city stays and desert camps, pending rights and supplier validation.",
    asset: assets.jordan,
  },
  {
    slug: "tanzania-on-foot",
    destination: "tanzania",
    name: "Tanzania on Foot",
    intention:
      "Let the landscape become more precise through walking, patient observation and expert interpretation.",
    mood: "wildlife",
    rhythm: "Immersive",
    interests: ["Nature", "Wildlife", "Walking"],
    indicativeRoute: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
    experiences: ["Naturalist walk", "Landscape briefing", "Quiet observation time"],
    accommodationApproach:
      "Small camps and lodges will only be named after image, supplier and policy validation.",
    asset: assets.tanzania,
  },
  {
    slug: "portugal-atlantic",
    destination: "portugal",
    name: "Portugal Atlantic",
    intention:
      "Follow the Atlantic through Lisbon, coast, vineyards and design-led countryside addresses.",
    mood: "coastal",
    rhythm: "Balanced",
    interests: ["Coast", "Food", "Design"],
    indicativeRoute: ["Lisbon", "Comporta", "Alentejo", "Porto"],
    experiences: ["Private coastal day", "Wine-country pause", "Design-led city walk"],
    accommodationApproach:
      "Independent or characterful stays are described by approach only until commercial details are approved.",
    asset: assets.portugal,
  },
  {
    slug: "fez-living-craft",
    destination: "morocco",
    name: "Fez Living Craft",
    intention:
      "Enter Fez through materials, gestures and the people who keep craft knowledge alive.",
    mood: "craft",
    rhythm: "Slow",
    interests: ["Craft", "Culture", "Food"],
    indicativeRoute: ["Fez", "Medina", "Moulay Idriss"],
    experiences: ["Curated workshop time", "Material-led medina walk", "Hosted meal"],
    accommodationApproach:
      "A quiet base close to the old city, selected for service and accessibility after validation.",
    asset: assets.fez,
  },
];

export const experiences = [
  "Private cultural context before the visit",
  "One meaningful encounter instead of a crowded list",
  "Time protected for rest, silence and personal rhythm",
  "Clear guidance before, during and after the journey",
];

export const accommodationPrinciples = [
  "Small scale over volume",
  "Human service over spectacle",
  "Local grounding over generic luxury",
  "Verified rights before any named partner is published",
];

export const approvalGate = [
  "NAP verified for the hosting domain",
  "Policies approved",
  "Image rights documented",
  "Editorial content reviewed",
  "Commercial data approved before bookability",
];

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getJourney(slug: string) {
  return journeys.find((journey) => journey.slug === slug);
}

export function journeysForDestination(destination: string) {
  return journeys.filter((journey) => journey.destination === destination);
}
