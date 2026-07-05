import Image from "next/image";
import Reveal from "./Reveal";
import album1 from "@/public/images/album-1.jpg";
import album2 from "@/public/images/album-2.jpg";
import album3 from "@/public/images/album-3.jpg";
import show1 from "@/public/images/show-1.jpg";
import show3 from "@/public/images/show-3.jpg";
import show4 from "@/public/images/show-4.jpg";
import show5 from "@/public/images/show-5.jpg";
import show6 from "@/public/images/show-6.jpg";

const ITEMS = [
  { img: album1, title: "Solto e Agarrado", sub: "2013", alt: "Dani Morais cantando no palco, single Solto e Agarrado" },
  { img: album2, title: "Agora Chora", sub: "2014", alt: "Retrato de Dani Morais, single Agora Chora" },
  { img: album3, title: "Agora Tô Querendo", sub: "2015", alt: "Retrato de Dani Morais, single Agora Tô Querendo" },
  { img: show1, title: "Rico Traders", sub: "São Paulo · SP", alt: "Dani Morais no show da Rico Traders" },
  { img: show3, title: "Show", sub: "Belo Horizonte · MG", alt: "Dani Morais em show em Belo Horizonte" },
  { img: show4, title: "Virada Cultural", sub: "Belo Horizonte · MG", alt: "Dani Morais na Virada Cultural de BH" },
  { img: show5, title: "Serraria Souza Pinto", sub: "Belo Horizonte · MG", alt: "Dani Morais em show na Serraria Souza Pinto" },
  { img: show6, title: "Carnaval", sub: "Esmeraldas · MG", alt: "Dani Morais no Carnaval de Esmeraldas" },
];

export default function Galeria() {
  return (
    <section className="galeria" id="galeria">
      <div className="wrap">
        <Reveal as="div" className="galeria-head">
          <div>
            <span className="eyebrow">Discografia &amp; Fotos</span>
            <h2>Músicas e shows que já rodaram o Brasil</h2>
            <p className="sub">
              Eventos corporativos, carnavais, festas juninas e grandes festivais — em Minas
              Gerais, São Paulo e além.
            </p>
          </div>
        </Reveal>
        <div className="galeria-grid">
          {ITEMS.map((item) => (
            <Reveal as="figure" key={item.title}>
              <Image src={item.img} alt={item.alt} sizes="(max-width: 900px) 45vw, 22vw" />
              <figcaption>
                <strong>{item.title}</strong>
                {item.sub}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
