import Image from "next/image";
import { SPOTIFY_LINK } from "@/lib/constants";
import { getShows } from "@/lib/agenda-store";
import SpotifyIcon from "./icons/SpotifyIcon";
import AgendaCarousel from "./AgendaCarousel";
import avatar from "@/public/images/album-2.jpg";

export default async function MusicaAgenda() {
  const shows = await getShows();

  return (
    <section className="musica-agenda" id="agenda">
      <div className="wrap">
        <div>
          <h2 className="block-label">Música</h2>
          <div className="musica-card">
            <div className="avatar">
              <Image src={avatar} alt="Dani Morais" width={56} height={56} />
            </div>
            <div className="info">
              <strong>Dani Morais</strong>
              <span>Ouça as músicas e assista aos clipes</span>
            </div>
            <a
              className="btn btn-pink btn-sm"
              href={SPOTIFY_LINK}
              target="_blank"
              rel="noopener"
              aria-label="Ouvir Dani Morais no Spotify"
            >
              <SpotifyIcon />
              Spotify
            </a>
          </div>
        </div>

        <AgendaCarousel shows={shows} />
      </div>
    </section>
  );
}
