import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/constants";
import heroPhoto from "@/public/images/hero.jpg";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <Image
          src={heroPhoto}
          alt="Dani Morais cantando no palco"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="hero-content wrap">
        <span className="eyebrow">Cantora · Minas Gerais</span>
        <h1>
          Um show <span className="pink">para todos!</span>
        </h1>
        <div className="hero-ctas">
          <a className="btn btn-purple" href={WHATSAPP_LINK} target="_blank" rel="noopener">
            Contratar show
          </a>
          <a className="btn btn-outline" href="#agenda">
            Ver agenda
          </a>
        </div>
      </div>
      <span className="scroll-cue">Role para baixo</span>
    </section>
  );
}
