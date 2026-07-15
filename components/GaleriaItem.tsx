"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image, { type StaticImageData } from "next/image";
import MusicNoteIcon from "./icons/MusicNoteIcon";

export type GaleriaItemProps = {
  img: StaticImageData;
  alt: string;
  title: string;
  sub: string;
  audio?: string;
};

/** Garante que só uma prévia toca por vez entre os cards da galeria. */
const activeAudios = new Set<HTMLAudioElement>();

function stopAudio(el: HTMLAudioElement) {
  el.pause();
  el.currentTime = 0;
  activeAudios.delete(el);
}

function playAudio(el: HTMLAudioElement) {
  activeAudios.forEach((other) => {
    if (other !== el) stopAudio(other);
  });
  activeAudios.add(el);
  el.play().catch(() => {});
}

const HOVER_QUERY = "(hover: hover) and (pointer: fine)";

function subscribeToHoverCapability(callback: () => void) {
  const mql = window.matchMedia(HOVER_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getHoverCapability() {
  return window.matchMedia(HOVER_QUERY).matches;
}

function getHoverCapabilityServerSnapshot() {
  return true;
}

export default function GaleriaItem({ img, alt, title, sub, audio }: GaleriaItemProps) {
  const figureRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  // Só o mouse tem "hover" de verdade. No celular, tocar na tela dispara
  // eventos de mouse sintéticos que confundem esse comportamento — por isso
  // detectamos o tipo de dispositivo e usamos toque (tap) em vez de hover ali.
  const canHover = useSyncExternalStore(
    subscribeToHoverCapability,
    getHoverCapability,
    getHoverCapabilityServerSnapshot
  );

  // Navegadores só permitem play() programático após um gesto real do usuário
  // (clique/toque) na página. Sem isso, o play() disparado só pelo hover é
  // bloqueado silenciosamente. Este "destrava" o áudio no primeiro toque em
  // qualquer lugar da página, tocando e pausando na hora — depois disso, o
  // hover (ou o tap, no celular) já consegue tocar sozinho.
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

  // Rede de segurança pro celular: como não existe "sair do hover" ao rolar a
  // tela, a música continuava tocando depois que o card saía da tela. Aqui a
  // gente pausa assim que o card deixa de estar visível.
  useEffect(() => {
    if (!audio) return;
    const node = figureRef.current;
    const el = audioRef.current;
    if (!node || !el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) stopAudio(el);
        });
      },
      { threshold: 0 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [audio]);

  function handleMouseEnter() {
    const el = audioRef.current;
    if (el) playAudio(el);
  }

  function handleMouseLeave() {
    const el = audioRef.current;
    if (el) stopAudio(el);
  }

  function handleTap() {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) playAudio(el);
    else stopAudio(el);
  }

  const className = [audio && "has-audio", playing && "is-playing"].filter(Boolean).join(" ");

  return (
    <figure
      ref={figureRef}
      className={className || undefined}
      onMouseEnter={audio && canHover ? handleMouseEnter : undefined}
      onMouseLeave={audio && canHover ? handleMouseLeave : undefined}
      onClick={audio && !canHover ? handleTap : undefined}
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
