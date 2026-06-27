import { asset } from "@/lib/base-path";

const airlines = [
  { name: "Emirates", src: "/images/airlines/emirates.svg" },
  { name: "Qatar Airways", src: "/images/airlines/qatar-airways.svg" },
  { name: "Etihad Airways", src: "/images/airlines/etihad-airways.svg" },
  { name: "Singapore Airlines", src: "/images/airlines/singapore-airlines.svg" },
  { name: "Royal Air Maroc", src: "/images/airlines/royal-air-maroc.svg" },
  { name: "Turkish Airlines", src: "/images/airlines/turkish-airlines.svg" },
  { name: "British Airways", src: "/images/airlines/british-airways.svg" },
  { name: "Lufthansa", src: "/images/airlines/lufthansa.svg" },
];

const doubled = [...airlines, ...airlines];

export function AirlineCarousel() {
  return (
    <section className="airline-carousel" aria-label="Airline partners">
      <div className="airline-carousel__track" aria-hidden="true">
        {doubled.map((airline, i) => (
          <div className="airline-carousel__item" key={`${i}-${airline.name}`}>
            <img src={asset(airline.src)} alt={airline.name} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
