export type JourneyMode = "Privé" | "Petit groupe" | "Signature";
export type Availability = "Disponible" | "Dernières places" | "Sur demande";

export interface Departure {
  id: string;
  startDate: string;
  endDate: string;
  price: number;
  currency: "EUR";
  availability: Availability;
  seatsLeft?: number;
}

export interface ItineraryDay {
  day: number;
  place: string;
  title: string;
  description: string;
  stay: string;
  meals: string;
  coordinates: [number, number];
}

export interface Journey {
  slug: string;
  title: string;
  shortTitle: string;
  region: string;
  country: string;
  image: string;
  duration: number;
  mode: JourneyMode;
  capacity: string;
  price: number;
  rating: number;
  reviews: number;
  summary: string;
  route: string[];
  interests: string[];
  edit?: "Nouveau" | "Offre" | "Signature";
  availability: Availability;
  departures: Departure[];
  itinerary: ItineraryDay[];
}

export interface Destination {
  slug: string;
  name: string;
  region: string;
  image: string;
  eyebrow: string;
  description: string;
  bestMonths: string;
  journeyCount: number;
}

export interface Experience {
  slug: string;
  title: string;
  location: string;
  image: string;
  description: string;
  category: string;
}

export interface Accommodation {
  slug: string;
  name: string;
  location: string;
  image: string;
  description: string;
  type: string;
  rating: number;
}

const atlasItinerary: ItineraryDay[] = [
  {
    day: 1,
    place: "Marrakech",
    title: "Une arrivée tout en douceur",
    description:
      "Accueil privé à l'aéroport, installation dans votre riad et dîner confidentiel sur une terrasse dominant la médina.",
    stay: "Riad Dar Sanaa",
    meals: "Dîner",
    coordinates: [31.63, -8.00],
  },
  {
    day: 2,
    place: "Marrakech",
    title: "La ville par ceux qui la font",
    description:
      "Visite des ateliers de la médina avec une historienne de l'art, déjeuner chez une cheffe et soirée libre.",
    stay: "Riad Dar Sanaa",
    meals: "Petit-déjeuner, déjeuner",
    coordinates: [31.63, -7.99],
  },
  {
    day: 3,
    place: "Haut Atlas",
    title: "Villages de pierre et chemins d'altitude",
    description:
      "Route panoramique vers l'Atlas, marche privée avec un guide de montagne et déjeuner dans une maison berbère.",
    stay: "Kasbah Tamadot",
    meals: "Pension complète",
    coordinates: [31.35, -7.60],
  },
  {
    day: 4,
    place: "Aït Ben Haddou",
    title: "Au fil des anciennes caravanes",
    description:
      "Traversée du col du Tizi n'Tichka, découverte d'un ksar classé et atelier de cuisine au coucher du soleil.",
    stay: "Maison d'hôtes Ksar Ighnda",
    meals: "Pension complète",
    coordinates: [31.05, -7.13],
  },
  {
    day: 5,
    place: "Vallée du Drâa",
    title: "Palmeraies et architecture de terre",
    description:
      "Rencontre avec une coopérative locale, route dans la vallée et pique-nique privé sous les palmiers.",
    stay: "Azalaï Desert Lodge",
    meals: "Pension complète",
    coordinates: [30.05, -5.99],
  },
  {
    day: 6,
    place: "Erg Chigaga",
    title: "Le silence du grand désert",
    description:
      "Progression en 4x4 vers les dunes, installation dans un camp exclusif et dîner sous les étoiles.",
    stay: "Sanaa Private Camp",
    meals: "Pension complète",
    coordinates: [29.82, -5.63],
  },
  {
    day: 7,
    place: "Erg Chigaga",
    title: "Une journée à votre rythme",
    description:
      "Lever de soleil, marche avec un naturaliste ou temps libre au camp, puis apéritif sur les dunes.",
    stay: "Sanaa Private Camp",
    meals: "Pension complète",
    coordinates: [29.80, -5.65],
  },
  {
    day: 8,
    place: "Ouarzazate",
    title: "Retour vers les oasis",
    description:
      "Route vers Ouarzazate avec halte dans une oasis et dîner de clôture dans une demeure privée.",
    stay: "Dar Ahlam",
    meals: "Pension complète",
    coordinates: [30.92, -6.90],
  },
  {
    day: 9,
    place: "Marrakech",
    title: "Derniers instants marocains",
    description:
      "Vol privé ou route vers Marrakech, temps libre et transfert à l'aéroport selon votre horaire.",
    stay: "Départ",
    meals: "Petit-déjeuner",
    coordinates: [31.63, -8.00],
  },
];

const compactItinerary = (
  places: string[],
  stays: string[],
  coords: [number, number][],
): ItineraryDay[] => {
  const fallbackCoordinates: [number, number] = coords[coords.length - 1] ?? [0, 0];

  return places.map((place, index) => ({
    day: index + 1,
    place,
    title:
      index === 0
        ? "Bienvenue et premières émotions"
        : index === places.length - 1
          ? "Derniers instants et départ"
          : `Au rythme de ${place}`,
    description:
      "Une journée équilibrée entre découverte guidée, rencontre locale et temps libre, ajustable selon vos envies.",
    stay: stays[index] ?? stays[stays.length - 1] ?? "",
    meals: index === 0 ? "Dîner" : "Petit-déjeuner, déjeuner",
    coordinates: coords[index] ?? fallbackCoordinates,
  }));
};

export const journeys: Journey[] = [
  {
    slug: "atlas-sahara",
    title: "Riad, Atlas et Sahara confidentiel",
    shortTitle: "Atlas & Sahara",
    region: "Afrique du Nord",
    country: "Maroc",
    image: "/images/hero-atlantic.webp",
    duration: 9,
    mode: "Privé",
    capacity: "2 à 8 voyageurs",
    price: 4850,
    rating: 4.9,
    reviews: 38,
    summary:
      "Un itinéraire privé de Marrakech aux dunes de Chigaga, mêlant maisons d'exception, rencontres artisanales et grands espaces.",
    route: ["Marrakech", "Haut Atlas", "Aït Ben Haddou", "Vallée du Drâa", "Erg Chigaga"],
    interests: ["Culture & histoire", "Désert", "Gastronomie"],
    edit: "Signature",
    availability: "Disponible",
    departures: [
      {
        id: "MA-2609",
        startDate: "2026-09-12",
        endDate: "2026-09-20",
        price: 4850,
        currency: "EUR",
        availability: "Disponible",
        seatsLeft: 6,
      },
      {
        id: "MA-2610",
        startDate: "2026-10-17",
        endDate: "2026-10-25",
        price: 5150,
        currency: "EUR",
        availability: "Dernières places",
        seatsLeft: 2,
      },
      {
        id: "MA-2703",
        startDate: "2027-03-06",
        endDate: "2027-03-14",
        price: 4950,
        currency: "EUR",
        availability: "Disponible",
        seatsLeft: 8,
      },
    ],
    itinerary: atlasItinerary,
  },
  {
    slug: "marrakech-secrets",
    title: "Marrakech, tables secrètes et savoir-faire",
    shortTitle: "Marrakech intime",
    region: "Afrique du Nord",
    country: "Maroc",
    image: "/images/marrakech-breakfast.webp",
    duration: 6,
    mode: "Privé",
    capacity: "2 à 6 voyageurs",
    price: 3250,
    rating: 4.8,
    reviews: 27,
    summary:
      "Une lecture intime de Marrakech, de ses ateliers à ses cuisines privées, avec des adresses choisies pour leur âme.",
    route: ["Marrakech", "Ourika", "Agafay"],
    interests: ["Artisanat", "Gastronomie", "City break"],
    edit: "Nouveau",
    availability: "Disponible",
    departures: [
      {
        id: "MM-2610",
        startDate: "2026-10-08",
        endDate: "2026-10-13",
        price: 3250,
        currency: "EUR",
        availability: "Disponible",
        seatsLeft: 4,
      },
    ],
    itinerary: compactItinerary(
      ["Marrakech", "Médina", "Ourika", "Agafay", "Marrakech", "Départ"],
      ["Riad Dar Sanaa", "Riad Dar Sanaa", "Kasbah Bab Ourika", "Scarabeo Camp"],
      [[31.63, -8.00], [31.63, -7.99], [31.36, -7.86], [31.50, -8.25], [31.63, -8.00], [31.63, -8.00]],
    ),
  },
  {
    slug: "wadi-rum-petra",
    title: "Pétra et Wadi Rum sous les étoiles",
    shortTitle: "Jordanie secrète",
    region: "Moyen-Orient",
    country: "Jordanie",
    image: "/images/wadi-rum-camp.webp",
    duration: 8,
    mode: "Petit groupe",
    capacity: "Maximum 12 voyageurs",
    price: 4290,
    rating: 4.9,
    reviews: 22,
    summary:
      "Des pierres roses de Pétra aux nuits du Wadi Rum, une traversée guidée par des experts du désert.",
    route: ["Amman", "Mer Morte", "Pétra", "Wadi Rum", "Aqaba"],
    interests: ["Aventure", "Culture & histoire", "Désert"],
    edit: "Offre",
    availability: "Dernières places",
    departures: [
      {
        id: "JO-2611",
        startDate: "2026-11-03",
        endDate: "2026-11-10",
        price: 4290,
        currency: "EUR",
        availability: "Dernières places",
        seatsLeft: 3,
      },
    ],
    itinerary: compactItinerary(
      ["Amman", "Jerash", "Mer Morte", "Pétra", "Pétra", "Wadi Rum", "Aqaba", "Départ"],
      ["The House Boutique", "The House Boutique", "Mövenpick Dead Sea", "Petra Moon", "Sanaa Desert Camp"],
      [[31.95, 35.93], [32.28, 35.89], [31.50, 35.47], [30.33, 35.44], [30.33, 35.44], [29.57, 35.42], [29.53, 35.01], [31.95, 35.93]],
    ),
  },
  {
    slug: "tanzanie-a-pied",
    title: "Tanzanie, la savane autrement",
    shortTitle: "Tanzanie à pied",
    region: "Afrique de l'Est",
    country: "Tanzanie",
    image: "/images/tanzania-walk.webp",
    duration: 11,
    mode: "Signature",
    capacity: "2 à 8 voyageurs",
    price: 7650,
    rating: 5,
    reviews: 31,
    summary:
      "Safaris à pied, camps légers et guides naturalistes pour une immersion attentive au cœur des écosystèmes.",
    route: ["Arusha", "Tarangire", "Ngorongoro", "Serengeti"],
    interests: ["Safari", "Nature", "Photographie"],
    edit: "Signature",
    availability: "Sur demande",
    departures: [
      {
        id: "TZ-2701",
        startDate: "2027-01-16",
        endDate: "2027-01-26",
        price: 7650,
        currency: "EUR",
        availability: "Sur demande",
      },
    ],
    itinerary: compactItinerary(
      ["Arusha", "Tarangire", "Tarangire", "Ngorongoro", "Ngorongoro", "Serengeti", "Serengeti", "Serengeti", "Mara River", "Arusha", "Départ"],
      ["Legendary Lodge", "Oliver's Camp", "The Highlands", "Namiri Plains"],
      [[-3.37, 36.68], [-4.03, 36.01], [-4.03, 36.01], [-3.17, 35.59], [-3.17, 35.59], [-2.33, 34.83], [-2.33, 34.83], [-2.33, 34.83], [-1.50, 35.00], [-3.37, 36.68], [-3.37, 36.68]],
    ),
  },
  {
    slug: "portugal-atlantique",
    title: "Portugal, vignobles et horizons atlantiques",
    shortTitle: "Portugal Atlantique",
    region: "Europe",
    country: "Portugal",
    image: "/images/portugal-sailing.webp",
    duration: 8,
    mode: "Privé",
    capacity: "2 à 10 voyageurs",
    price: 5450,
    rating: 4.8,
    reviews: 19,
    summary:
      "Lisbonne, domaines confidentiels et navigation privée le long d'une côte lumineuse.",
    route: ["Lisbonne", "Comporta", "Alentejo", "Porto"],
    interests: ["Mer", "Gastronomie", "Vin"],
    availability: "Disponible",
    departures: [
      {
        id: "PT-2609",
        startDate: "2026-09-20",
        endDate: "2026-09-27",
        price: 5450,
        currency: "EUR",
        availability: "Disponible",
        seatsLeft: 8,
      },
    ],
    itinerary: compactItinerary(
      ["Lisbonne", "Sintra", "Comporta", "Alentejo", "Douro", "Douro", "Porto", "Départ"],
      ["Bairro Alto Hotel", "Sublime Comporta", "São Lourenço do Barrocal", "Six Senses Douro"],
      [[38.72, -9.14], [38.80, -9.39], [38.38, -8.79], [38.02, -7.87], [41.16, -7.72], [41.16, -7.72], [41.16, -8.63], [38.72, -9.14]],
    ),
  },
  {
    slug: "fez-artisans",
    title: "Fès, matières et gestes ancestraux",
    shortTitle: "Fès artisans",
    region: "Afrique du Nord",
    country: "Maroc",
    image: "/images/fez-artisan.webp",
    duration: 5,
    mode: "Privé",
    capacity: "2 à 4 voyageurs",
    price: 2850,
    rating: 4.9,
    reviews: 16,
    summary:
      "Une immersion auprès des artisans de Fès, accompagnée par une curatrice et ponctuée de tables familiales.",
    route: ["Fès", "Moulay Idriss", "Volubilis"],
    interests: ["Artisanat", "Culture & histoire", "Gastronomie"],
    edit: "Nouveau",
    availability: "Disponible",
    departures: [
      {
        id: "FE-2610",
        startDate: "2026-10-22",
        endDate: "2026-10-26",
        price: 2850,
        currency: "EUR",
        availability: "Disponible",
        seatsLeft: 4,
      },
    ],
    itinerary: compactItinerary(
      ["Fès", "Médina de Fès", "Moulay Idriss", "Volubilis", "Départ"],
      ["Riad Fès", "Riad Fès", "Dar Zerhoune"],
      [[34.03, -5.00], [34.06, -4.97], [34.06, -5.52], [34.07, -5.55], [34.03, -5.00]],
    ),
  },
];

export const destinations: Destination[] = [
  {
    slug: "maroc",
    name: "Maroc",
    region: "Afrique du Nord",
    image: "/images/hero-atlantic.webp",
    eyebrow: "Notre terre d'origine",
    description:
      "Des médinas aux grands plateaux atlantiques, un pays que nous racontons par ses voix, ses gestes et ses paysages.",
    bestMonths: "Mars à mai · septembre à novembre",
    journeyCount: 8,
  },
  {
    slug: "jordanie",
    name: "Jordanie",
    region: "Moyen-Orient",
    image: "/images/wadi-rum-camp.webp",
    eyebrow: "Routes anciennes",
    description:
      "Cités de pierre, déserts minéraux et hospitalité bédouine pour un voyage dense et lumineux.",
    bestMonths: "Mars à mai · octobre à novembre",
    journeyCount: 4,
  },
  {
    slug: "tanzanie",
    name: "Tanzanie",
    region: "Afrique de l'Est",
    image: "/images/tanzania-walk.webp",
    eyebrow: "Le vivant en majesté",
    description:
      "Approcher la savane avec patience, accompagné de guides qui lisent le paysage comme un livre.",
    bestMonths: "Juin à octobre · janvier à mars",
    journeyCount: 5,
  },
  {
    slug: "portugal",
    name: "Portugal",
    region: "Europe",
    image: "/images/portugal-sailing.webp",
    eyebrow: "L'Atlantique en douceur",
    description:
      "Villes vibrantes, vignobles et villages côtiers, reliés par une certaine idée du temps long.",
    bestMonths: "Avril à octobre",
    journeyCount: 6,
  },
];

export const experiences: Experience[] = [
  {
    slug: "artisans-vivants",
    title: "Dans l'atelier des gestes vivants",
    location: "Fès, Maroc",
    image: "/images/fez-artisan.webp",
    description:
      "Une rencontre privée avec des maîtres artisans, pensée comme un véritable échange et non une démonstration.",
    category: "Artisanat",
  },
  {
    slug: "table-marrakech",
    title: "Une table au-dessus de la médina",
    location: "Marrakech, Maroc",
    image: "/images/marrakech-breakfast.webp",
    description:
      "Petit-déjeuner ou dîner chez une hôte passionnée, entre cuisine familiale et conversation sur la ville.",
    category: "Gastronomie",
  },
  {
    slug: "marche-savane",
    title: "Lire la savane à pied",
    location: "Serengeti, Tanzanie",
    image: "/images/tanzania-walk.webp",
    description:
      "Une marche à l'aube avec un guide naturaliste, à distance juste du vivant.",
    category: "Nature",
  },
  {
    slug: "nuit-wadi-rum",
    title: "La nuit minérale du Wadi Rum",
    location: "Wadi Rum, Jordanie",
    image: "/images/wadi-rum-camp.webp",
    description:
      "Un camp discret, une lecture du ciel et le silence comme luxe principal.",
    category: "Désert",
  },
];

export const accommodations: Accommodation[] = [
  {
    slug: "azalai-lodge",
    name: "Azalaï Desert Lodge",
    location: "Vallée du Drâa, Maroc",
    image: "/images/azalai-lodge.webp",
    description:
      "Une architecture de terre contemporaine, ouverte sur les montagnes et les jardins d'oasis.",
    type: "Lodge signature",
    rating: 4.9,
  },
  {
    slug: "dar-sanaa",
    name: "Dar Sanaa",
    location: "Marrakech, Maroc",
    image: "/images/marrakech-breakfast.webp",
    description:
      "Une maison confidentielle dans la médina, choisie pour son calme et la générosité de son équipe.",
    type: "Riad privé",
    rating: 4.8,
  },
  {
    slug: "sanaa-wadi-camp",
    name: "Sanaa Wadi Camp",
    location: "Wadi Rum, Jordanie",
    image: "/images/wadi-rum-camp.webp",
    description:
      "Un camp à faible impact, posé avec délicatesse entre les parois de grès.",
    type: "Camp exclusif",
    rating: 4.9,
  },
];

export const regions = [
  "Afrique du Nord",
  "Afrique de l'Est",
  "Moyen-Orient",
  "Europe",
];

export const interests = [
  "Artisanat",
  "Aventure",
  "Culture & histoire",
  "Désert",
  "Gastronomie",
  "Nature",
  "Safari",
  "Mer",
];

export function getJourney(slug: string) {
  return journeys.find((journey) => journey.slug === slug);
}

export function getDestination(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getExperience(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}

export function getAccommodation(slug: string) {
  return accommodations.find((accommodation) => accommodation.slug === slug);
}
