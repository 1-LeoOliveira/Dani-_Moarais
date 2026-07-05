"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#agenda", label: "Agenda" },
  { href: "#sobre", label: "Sobre" },
  { href: "#videos", label: "Vídeos" },
  { href: "#galeria", label: "Fotos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header id="topbar" className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav">
          <a className="logo" href="#top" onClick={() => setOpen(false)}>
            DANI
          </a>
          <button
            className={`menu-btn${open ? " open" : ""}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav-overlay${open ? " open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          className="btn btn-pink nav-cta"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener"
          onClick={() => setOpen(false)}
        >
          Contratar show
        </a>
        <div className="nav-social">
          <a href="https://instagram.com/danimoraisoficial" target="_blank" rel="noopener">
            Instagram
          </a>
          <a href="https://www.youtube.com/@DaniMoraisOficial" target="_blank" rel="noopener">
            YouTube
          </a>
        </div>
      </div>
    </>
  );
}
