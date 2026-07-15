"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import MusicNoteIcon from "./icons/MusicNoteIcon";

export type GaleriaItemProps = {
  img: StaticImageData;
  alt: string;
  title: string;
  sub: string;
  audio?: string;
};

export default function GaleriaItem({ img, alt, title, sub, audio }: GaleriaItemProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // Navegadores só permitem play() programático após um gesto real do usuário
  // (clique) na página. Sem isso, o play() disparado só pelo hover é bloqueado
  // silenciosamente. Este "destrava" o áudio no primeiro clique em qualquer
  // lugar da página, tocando e pausando na hora — depois disso, o hover já
  // consegue tocar sozinho pelo resto da visita.
  useEffect(() => {
    if (!audio) return;
    const el = audioRef.current;
    if (!el) return;

    function unlock() {
      if (!el) return;
      el.play()
        .then(() => {
          el.pause();
          el.currentTime = 0;
        })
        .catch(() => {});
    }

    document.addEventListener("pointerdown", unlock, { once: true });
    return () => document.removeEventListener("pointerdown", unlock);
  }, [audio]);

  function handleMouseEnter() {
    audioRef.current?.play().catch(() => {});
  }

  function handleMouseLeave() {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  }

  const className = [audio && "has-audio", playing && "is-playing"].filter(Boolean).join(" ");

  return (
    <figure
      className={className || undefined}
      onMouseEnter={audio ? handleMouseEnter : undefined}
      onMouseLeave={audio ? handleMouseLeave : undefined}
    >
      <Image src={img} alt={alt} sizes="(max-width: 900px) 45vw, 22vw" />
      {audio && (
        <>
          <span className="galeria-audio-hint" aria-hidden="true">
            <MusicNoteIcon size={14} />
          </span>
          <audio
            ref={audioRef}
            src={audio}
            preload="none"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />
          <div className="galeria-visualizer" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </>
      )}
      <figcaption>
        <strong>{title}</strong>
        {sub}
      </figcaption>
    </figure>
  );
}
