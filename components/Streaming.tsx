import { SPOTIFY_LINK } from "@/lib/constants";

const OTHER_PLATFORMS = ["Apple Music", "Deezer", "YouTube Music", "Amazon Music"];

export default function Streaming() {
  return (
    <section className="streaming">
      <div className="wrap">
        <p className="label">Ouça também na sua plataforma preferida</p>
        <div className="streaming-row">
          <a href={SPOTIFY_LINK} target="_blank" rel="noopener">
            Spotify
          </a>
          {OTHER_PLATFORMS.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
