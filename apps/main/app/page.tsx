import Link from "next/link";
import { AboutStorySection } from "../components/AboutStory";
import { HeroVideo } from "../components/HeroVideo";
import { RequestForm } from "../components/RequestForm";
import { ReviewCarousel } from "../components/ReviewCarousel";
import { StaggerGrid } from "../components/StaggerGrid";
import { TypeWriter } from "../components/TypeWriter";
import { asset, TRAVEL_URL } from "../lib/base-path";

interface Service {
  title: string;
  eyebrow: string;
  description: string;
  href?: string;
  linkLabel?: string;
  status: string;
  image: string;
  featured: boolean;
}

const services: Service[] = [
  {
    title: "Signature Journey",
    eyebrow: "by Sanaa Services",
    description: "Tailor-made itineraries shaped around your rhythm, with personal guidance from New York.",
    href: TRAVEL_URL,
    linkLabel: "Open the premium travel preview",
    status: "Preview site",
    image: "/images/services/signature-journey.webp",
    featured: true,
  },
  {
    title: "Travel",
    eyebrow: "Flights, hotels & trip planning",
    description: "Book flights, find hotels and plan family trips with a team that knows the routes.",
    status: "Contact us for details",
    image: "/images/services/travel-1200.jpg",
    featured: false,
  },
  {
    title: "Visa & Immigration",
    eyebrow: "Guidance & document support",
    description: "Step-by-step help with visa applications, immigration paperwork and administrative processes.",
    status: "Dedicated app not configured yet",
    image: "/images/services/visa-immigration-1200.jpg",
    featured: false,
  },
  {
    title: "Notary & Legal",
    eyebrow: "Notarization & document guidance",
    description: "Certify affidavits, power of attorney, apostille and get clear guidance on legal documents.",
    status: "Contact us for details",
    image: "/images/services/notary-1200.jpg",
    featured: false,
  },
  {
    title: "Translation",
    eyebrow: "Certified translations",
    description: "Official translation of documents in English, French and Arabic for legal and administrative use.",
    status: "Dedicated app not configured yet",
    image: "/images/services/translation-1000.jpg",
    featured: false,
  },
  {
    title: "Insurance",
    eyebrow: "Life, family & travel coverage",
    description: "Guidance for life, family, car and travel insurance needs with clear explanations.",
    status: "Dedicated app not configured yet",
    image: "/images/services/insurance-1200.jpg",
    featured: false,
  },
  {
    title: "Driving School",
    eyebrow: "Lessons & DMV support",
    description: "Driving lessons, road test preparation, DMV support and a clearer path to the road.",
    status: "Contact us for details",
    image: "/images/services/driving-school-1200.jpg",
    featured: true,
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <img src={asset("/images/hero/hero-cap1.png")} alt="" className="hero__poster" />
        <HeroVideo />
        <div className="hero__veil" />
        <div className="hero__content">
          <TypeWriter text="Astoria, Queens - New York" className="eyebrow" as="p" delay={300} speed={40} />
          <TypeWriter text="Important services, simplified with care." as="h1" delay={1400} speed={30} />
          <TypeWriter text="Travel, documents, insurance, driving and community services - guided by a local, multilingual team you can trust." className="hero__text" as="p" delay={3000} speed={20} />
          <div className="hero__actions">
            <Link href="#quick-request" className="button button--gold">Contact us</Link>
            <Link href="#services" className="button button--outline">Our services</Link>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="shell">
          <p className="eyebrow">Services</p>
          <h2>One place for the things that matter most.</h2>
          <p className="services__intro">
            Behind every document, every ticket, every plan - there&apos;s a life decision
            that deserves real support.
          </p>
          <p className="services__intro">
            Sanaa Services has been that support for nearly two decades, for thousands
            of families across Astoria and beyond.
          </p>
          <StaggerGrid className="services__grid">
            {services.map((service) => {
              const content = (
                <>
                  <img src={asset(service.image)} alt="" className="service-card__bg" />
                  <div className={`service-card__overlay ${service.featured ? "service-card__overlay--h" : ""}`} />
                  <div className="service-card__content">
                    <p className="service-card__eyebrow">{service.eyebrow}</p>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    {service.href ? (
                      <span className="service-card__link">
                        {service.linkLabel}
                        <img src={asset("/images/icons/arrow-right-circle.svg")} alt="" width={22} height={22} className="service-card__arrow" />
                      </span>
                    ) : (
                      <span className="service-card__status">{service.status}</span>
                    )}
                  </div>
                </>
              );

              return service.href ? (
                <a
                  key={service.title}
                  href={service.href}
                  className={`service-card ${service.featured ? "service-card--featured" : ""}`}
                  target={service.href.startsWith("http") ? "_blank" : undefined}
                  rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <article
                  key={service.title}
                  className={`service-card ${service.featured ? "service-card--featured" : ""}`}
                >
                  {content}
                </article>
              );
            })}
          </StaggerGrid>
        </div>
      </section>

      <AboutStorySection />

      <ReviewCarousel />

      <RequestForm />
    </main>
  );
}
