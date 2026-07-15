import Reveal from "./Reveal";
import GaleriaItem from "./GaleriaItem";
import album1 from "@/public/images/album-1.jpg";
import album2 from "@/public/images/album-2.jpg";
import showAbout from "@/public/images/show-about.jpg";
import show1 from "@/public/images/show-1.jpg";
import show3 from "@/public/images/show-3.jpg";
import show4 from "@/public/images/show-4.jpg";
import show5 from "@/public/images/show-5.jpg";
import show6 from "@/public/images/show-6.jpg";

const ITEMS = [
  {
    img: album1,
    title: "Solto e Agarrado",
    sub: "2013",
    alt: "Dani Morais cantando no palco, single Solto e Agarrado",
    audio: "/music/junto%20e%20agarradinho.mp3",
  },
  {
    img: album2,
    title: "Agora Chora",
    sub: "2014",
    alt: "Retrato de Dani Morais, single Agora Chora",
    audio: "/music/Agora%20chora.mp3",
  },
  {
    img: showAbout,
    title: "Agora Tô Querendo",
    sub: "2015",
    alt: "Retrato de Dani Morais, single Agora Tô Querendo",
    audio: "/music/Agora%20to%20querendo.mp3",
  },
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
            <Reveal as="div" key={item.title}>
              <GaleriaItem {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
