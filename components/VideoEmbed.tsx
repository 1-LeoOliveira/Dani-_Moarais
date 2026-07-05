"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";

export default function VideoEmbed({
  videoId,
  thumb,
  alt,
}: {
  videoId: string;
  thumb: StaticImageData;
  alt: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="video-frame">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={alt}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      className="video-frame"
      onClick={() => setPlaying(true)}
      aria-label={`Assistir: ${alt}`}
    >
      <Image src={thumb} alt={alt} fill sizes="(max-width: 900px) 90vw, 860px" style={{ objectFit: "cover" }} />
      <span className="play-btn" aria-hidden="true">
        ▶
      </span>
    </button>
  );
}
