"use client";

import { useRef } from "react";
import type { Show } from "@/lib/agenda-store";

export default function AgendaCarousel({ shows }: { shows: Show[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
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
      {shows.length === 0 ? (
        <p className="admin-hint">Agenda em breve — novas datas já estão sendo confirmadas.</p>
      ) : (
        <div className="agenda-track" ref={trackRef}>
          {shows.map((show) => (
            <div className="agenda-card" key={show.id}>
              <div className="date">
                <span className="day">{show.day}</span>
                <span className="month">{show.month}</span>
              </div>
              <span className="tour">{show.tour}</span>
              <span className="city">{show.city}</span>
              <a className="btn btn-outline btn-sm" href={show.detailsUrl} target="_blank" rel="noopener">
                + detalhes
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
