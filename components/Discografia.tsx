import Image from "next/image";
import Reveal from "./Reveal";
import album1 from "@/public/images/album-1.jpg";
import album2 from "@/public/images/album-2.jpg";
import album3 from "@/public/images/album-3.jpg";

const ALBUMS = [
  { img: album1, year: "2013", title: "Solto e Agarrado", alt: "Dani Morais cantando no palco, single Solto e Agarrado" },
  { img: album2, year: "2014", title: "Agora Chora", alt: "Retrato de Dani Morais, single Agora Chora" },
  { img: album3, year: "2015", title: "Agora Tô Querendo", alt: "Retrato de Dani Morais, single Agora Tô Querendo" },
];

export default function Discografia() {
  return (
    <section className="disco" id="discografia">
      <div className="wrap">
        <Reveal as="div" className="disco-head">
          <div>
            <span className="eyebrow">Discografia</span>
            <h2>Músicas que já rodaram o Brasil</h2>
          </div>
        </Reveal>
        <div className="disco-grid">
          {ALBUMS.map((album) => (
            <Reveal as="figure" className="album" key={album.title}>
              <Image src={album.img} alt={album.alt} sizes="(max-width: 800px) 90vw, 30vw" />
              <figcaption className="meta">
                <span>{album.year}</span>
                <strong>{album.title}</strong>
              </figcaption>
            </Reveal>
          ))}
        </div>
        <Reveal as="div" className="disco-note">
          <div className="num">
            +100 mil
            <small>views em 2 semanas</small>
          </div>
          <p>
            “Agora Tô Querendo” foi gravada com <strong>Eduardo Pepato</strong> —
            produtor musical de Marília Mendonça, Maiara &amp; Maraisa, Zé Neto
            &amp; Cristiano e Henrique &amp; Juliano — e ultrapassou 100 mil
            visualizações no YouTube em apenas duas semanas de lançamento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
