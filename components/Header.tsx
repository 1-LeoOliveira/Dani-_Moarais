"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="topbar" className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a className="logo" href="#top">
          <span className="mark">D</span>DANI <span style={{ fontWeight: 400 }}>MORAIS</span>
        </a>
        <nav className="nav-links">
          <a href="#show">O show</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#discografia">Discografia</a>
          <a href="#shows">Shows</a>
          <a className="nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noopener">
            Contratar show
          </a>
        </nav>
      </div>
    </header>
  );
}
