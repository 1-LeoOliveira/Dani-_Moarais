import Image from "next/image";
import VideoEmbed from "./VideoEmbed";
import bgPhoto from "@/public/images/show-2.jpg";
import thumb from "@/public/images/video-thumb.jpg";

const YOUTUBE_LINK = "https://www.youtube.com/@DaniMoraisOficial";
const FEATURED_VIDEO_ID = "qfE2GBLMpR4";
const MARQUEE_TEXT = "Assista agora ✦ Assista agora ✦ Assista agora ✦ Assista agora ✦";

export default function Videos() {
  return (
    <section className="videos" id="videos">
      <div className="videos-bg">
        <Image src={bgPhoto} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      </div>
      <div className="content wrap">
        <h2>Vídeos</h2>
        <VideoEmbed videoId={FEATURED_VIDEO_ID} thumb={thumb} alt="Dani Morais no palco" />
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
