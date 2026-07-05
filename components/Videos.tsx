import Image from "next/image";
import bgPhoto from "@/public/images/show-2.jpg";
import thumb from "@/public/images/show-about.jpg";

const YOUTUBE_LINK = "https://www.youtube.com/@DaniMoraisOficial";
const MARQUEE_TEXT = "Assista agora ✦ Assista agora ✦ Assista agora ✦ Assista agora ✦";

export default function Videos() {
  return (
    <section className="videos" id="videos">
      <div className="videos-bg">
        <Image src={bgPhoto} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="content wrap">
        <h2>Vídeos</h2>
        <a
          className="video-frame"
          href={YOUTUBE_LINK}
          target="_blank"
          rel="noopener"
          aria-label="Assistir vídeos de Dani Morais no YouTube"
        >
          <Image
            src={thumb}
            alt="Dani Morais no palco"
            fill
            sizes="(max-width: 900px) 90vw, 860px"
            style={{ objectFit: "cover" }}
          />
          <span className="play-btn" aria-hidden="true">
            ▶
          </span>
        </a>
        <div className="video-marquee">
          <div className="video-marquee-track">
            <span>{MARQUEE_TEXT}</span>
            <span>{MARQUEE_TEXT}</span>
          </div>
        </div>
        <div className="video-cta">
          <a className="btn btn-pink" href={YOUTUBE_LINK} target="_blank" rel="noopener">
            Inscrever-se no YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
