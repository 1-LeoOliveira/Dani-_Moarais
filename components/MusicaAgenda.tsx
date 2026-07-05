"use client";

import { useRef } from "react";
import Image from "next/image";
import { WHATSAPP_LINK, SPOTIFY_LINK } from "@/lib/constants";
import SpotifyIcon from "./icons/SpotifyIcon";
import avatar from "@/public/images/album-2.jpg";

// TODO: substituir pelas datas reais da agenda de shows da Dani Morais.
const SHOWS = [
  { day: "12", month: "jul.", tour: "Turnê 2026", city: "Belo Horizonte - MG" },
  { day: "19", month: "jul.", tour: "Turnê 2026", city: "Sete Lagoas - MG" },
  { day: "02", month: "ago.", tour: "Turnê 2026", city: "Uberlândia - MG" },
  { day: "16", month: "ago.", tour: "Turnê 2026", city: "São Paulo - SP" },
  { day: "30", month: "ago.", tour: "Turnê 2026", city: "Montes Claros - MG" },
  { day: "13", month: "set.", tour: "Turnê 2026", city: "Ribeirão Preto - SP" },
];

export default function MusicaAgenda() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

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

        <div className="agenda-col">
          <div className="agenda-head">
            <h2 className="block-label" style={{ marginBottom: 0 }}>
              Agenda
            </h2>
            <div className="agenda-arrows">
              <button aria-label="Anterior" onClick={() => scroll(-1)}>
                ‹
              </button>
              <button aria-label="Próximo" onClick={() => scroll(1)}>
                ›
              </button>
            </div>
          </div>
          <div className="agenda-track" ref={trackRef}>
            {SHOWS.map((show, i) => (
              <div className="agenda-card" key={i}>
                <div className="date">
                  <span className="day">{show.day}</span>
                  <span className="month">{show.month}</span>
                </div>
                <span className="tour">{show.tour}</span>
                <span className="city">{show.city}</span>
                <a
                  className="btn btn-outline btn-sm"
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener"
                >
                  + detalhes
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
