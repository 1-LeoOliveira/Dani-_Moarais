import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroPhoto from "@/public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="eyebrow on-dark">Cantora · Minas Gerais</span>
          <h1>
            Um show <span className="pink">para todos!</span>
          </h1>
          <p className="lead">
            Do sertanejo ao funk, um repertório pensado por estudo de público para
            deixar qualquer evento cheio de energia — e contagiante do começo ao
            fim.
          </p>
          <div className="hero-ctas">
            <a
              className="btn btn-pink"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener"
            >
              💬 Contratar pelo WhatsApp
            </a>
            <a className="btn btn-ghost" href="#shows">
              Ver shows
            </a>
          </div>
          <div className="hero-badges">
            <div>
              <strong>58,3 mil</strong>no Instagram
            </div>
            <div>
              <strong>67 mil</strong>no Facebook
            </div>
            <div>
              <strong>+20 anos</strong>de música
            </div>
          </div>
        </div>
        <div className="hero-photo">
          <div className="frame">
            <Image
              src={heroPhoto}
              alt="Dani Morais sorrindo no palco, cantora mineira"
              priority
              sizes="(max-width: 900px) 80vw, 400px"
            />
          </div>
          <div className="hero-note">✦ The Voice Brasil &amp; Ídolos</div>
        </div>
      </div>
    </section>
  );
}
