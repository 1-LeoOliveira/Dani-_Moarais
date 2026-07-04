import Image from "next/image";
import Reveal from "./Reveal";
import show1 from "@/public/images/show-1.jpg";
import show2 from "@/public/images/show-2.jpg";
import show3 from "@/public/images/show-3.jpg";
import show4 from "@/public/images/show-4.jpg";
import show5 from "@/public/images/show-5.jpg";
import show6 from "@/public/images/show-6.jpg";

const VENUES = [
  { img: show1, venue: "Rico Traders", place: "São Paulo · SP", alt: "Dani Morais no show da Rico Traders em São Paulo" },
  { img: show2, venue: "Clear Corretora", place: "São Paulo · SP", alt: "Dani Morais cantando em evento corporativo da Clear Corretora" },
  { img: show3, venue: "Show", place: "Belo Horizonte · MG", alt: "Dani Morais em show em Belo Horizonte" },
  { img: show4, venue: "Virada Cultural", place: "Belo Horizonte · MG", alt: "Dani Morais na Virada Cultural de Belo Horizonte" },
  { img: show5, venue: "Serraria Souza Pinto", place: "Belo Horizonte · MG", alt: "Dani Morais em show na Serraria Souza Pinto" },
  { img: show6, venue: "Carnaval", place: "Esmeraldas · MG", alt: "Dani Morais no Carnaval de Esmeraldas" },
];

const CITIES = [
  "Globo Esporte · BH",
  "Evento Mommys · BH",
  "Festa Junina · Sete Lagoas",
  "São Joaquim de Bicas",
  "Expo Agro · Pedra Azul",
  "Carnaval · Sto. Antônio do Grama",
  "Carnaval · Rio Casca",
];

export default function ShowsGallery() {
  return (
    <section className="shows" id="shows">
      <div className="wrap">
        <span className="eyebrow">Shows realizados</span>
        <Reveal as="h2">Energia que já passou por palcos de todo tipo</Reveal>
        <Reveal as="p" className="sub">
          Eventos corporativos, carnavais, festas juninas, viradas culturais e
          grandes festivais — em Minas Gerais, São Paulo e além.
        </Reveal>
        <div className="shows-grid">
          {VENUES.map((v) => (
            <Reveal as="figure" className="show-card" key={v.venue + v.place}>
              <Image src={v.img} alt={v.alt} sizes="(max-width: 540px) 90vw, (max-width: 800px) 45vw, 30vw" />
              <figcaption>
                <strong>{v.venue}</strong>
                {v.place}
              </figcaption>
            </Reveal>
          ))}
        </div>
        <Reveal as="div" className="cities">
          {CITIES.map((city) => (
            <span key={city}>{city}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
