import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Arrow } from "@/components/icons";
import { asset } from "@/lib/base-path";

const stories = [
  { title: "Le Maroc après la première visite", tag: "Carnet", image: "/images/hero-atlantic.webp", text: "Quitter les grands axes pour suivre les routes atlantiques et les vallées du sud." },
  { title: "Ce que change un safari à pied", tag: "Point de vue", image: "/images/tanzania-walk.webp", text: "Le paysage devient plus précis quand on accepte de ralentir." },
  { title: "Six tables qui racontent Marrakech", tag: "Adresses", image: "/images/marrakech-breakfast.webp", text: "Des cuisines familiales aux jeunes cheffes de la médina." },
  { title: "Dormir dans le désert sans l’abîmer", tag: "Engagement", image: "/images/wadi-rum-camp.webp", text: "Confort, eau, énergie et relation aux communautés locales." },
  { title: "Naviguer entre Lisbonne et Comporta", tag: "Itinéraire", image: "/images/portugal-sailing.webp", text: "Une autre lecture du Portugal, guidée par l’Atlantique." },
  { title: "Fès, la ville par la matière", tag: "Rencontre", image: "/images/fez-artisan.webp", text: "Bois, métal, cuir et zellige racontés par ceux qui les travaillent." },
];

export const metadata = { title: "Inspiration | Sanaa" };

export default function InspirationPage() {
  return (
    <>
      <PageHero image="/images/fez-artisan.webp" eyebrow="Le journal Sanaa" title={<>Idées, voix<br />et chemins de traverse.</>} text="Des carnets utiles pour comprendre un lieu avant de décider comment le parcourir." />
      <section className="journal-index section-shell">
        <div className="journal-index__filters"><button className="is-active">Tout</button><button>Carnets</button><button>Adresses</button><button>Rencontres</button><button>Conseils</button></div>
        <div className="journal-grid">
          {stories.map((story, index) => (
            <Reveal className={`journal-card ${index === 0 ? "journal-card--lead" : ""}`} key={story.title} delay={(index % 3) * 70}>
              <Link href="/voyages">
                <div><Image src={asset(story.image)} alt="" fill sizes={index === 0 ? "65vw" : "35vw"} /></div>
                <p>{story.tag} · 6 min</p><h2>{story.title}</h2><span>{story.text}</span><em className="text-link">Lire l’article <Arrow /></em>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
