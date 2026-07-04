import Image from "next/image";
import Reveal from "./Reveal";
import showPhoto from "@/public/images/show-about.jpg";

const GENRES = ["Sertanejo", "Funk", "Axé", "Pagode", "Hits do momento"];

export default function ShowAbout() {
  return (
    <section className="show" id="show">
      <div className="wrap">
        <Reveal className="photo">
          <Image
            src={showPhoto}
            alt="Dani Morais cantando no palco com figurino de couro preto"
            sizes="(max-width: 900px) 90vw, 45vw"
          />
        </Reveal>
        <Reveal>
          <span className="eyebrow">O show</span>
          <h2>
            Um novo conceito de show no cenário da <em>música mineira</em>
          </h2>
          <p>
            A cantora Dani Morais, mais uma vez inovando o cenário da música
            mineira, traz para os palcos um novo conceito de show.
          </p>
          <p>
            Do sertanejo ao funk, o grande diferencial desse repertório — pensado
            por meio de estudo de público — é fazer com que o show seja cheio de
            energia e contagiante para todos!
          </p>
          <div className="genres">
            {GENRES.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
