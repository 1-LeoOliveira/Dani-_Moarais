"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { WHATSAPP_LINK, SPOTIFY_LINK } from "@/lib/constants";
import InstagramIcon from "./icons/InstagramIcon";
import YoutubeIcon from "./icons/YoutubeIcon";
import WhatsappIcon from "./icons/WhatsappIcon";
import SpotifyIcon from "./icons/SpotifyIcon";
import HomeIcon from "./icons/HomeIcon";
import EnvelopeIcon from "./icons/EnvelopeIcon";
import MusicNoteIcon from "./icons/MusicNoteIcon";
import MenuIcon from "./icons/MenuIcon";
import thumbAgenda from "@/public/images/show-3.jpg";
import thumbSobre from "@/public/images/album-2.jpg";
import thumbVideos from "@/public/images/show-4.jpg";
import thumbFotos from "@/public/images/show-6.jpg";
import thumbContato from "@/public/images/album-1.jpg";

const NAV_LINKS = [
  { href: "#agenda", label: "Agenda", img: thumbAgenda },
  { href: "#sobre", label: "Sobre", img: thumbSobre },
  { href: "#videos", label: "Vídeos", img: thumbVideos },
  { href: "#galeria", label: "Fotos", img: thumbFotos },
  { href: "#contato", label: "Contato", img: thumbContato },
];

const SOCIAL_LINKS = [
  { href: "https://instagram.com/danimoraisoficial", label: "Instagram", Icon: InstagramIcon },
  { href: "https://www.youtube.com/@DaniMoraisOficial", label: "YouTube", Icon: YoutubeIcon },
  { href: SPOTIFY_LINK, label: "Spotify", Icon: SpotifyIcon },
  { href: WHATSAPP_LINK, label: "WhatsApp", Icon: WhatsappIcon },
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

  const close = () => setOpen(false);

  return (
    <>
      <header id="topbar" className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav">
          <a className="logo" href="#top" onClick={close}>
            DANI MORAIS
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
        <div className="nav-social-side">
          <span>Social</span>
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}>
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="nav-main">
          <div className="nav-photos">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={close} className="nav-photo-item">
                <span className="nav-thumb">
                  <Image src={link.img} alt="" sizes="90px" />
                </span>
                <span className="tick" aria-hidden="true" />
                <span className="label">{link.label}</span>
              </a>
            ))}
          </div>

          <nav className="nav-links-list" aria-label="Links do menu (versão compacta)">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="btn btn-pink nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noopener" onClick={close}>
            Contratar show
          </a>

          <div className="nav-social-row">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>

          <p className="nav-credit">Dani Morais &middot; Cantora mineira</p>
        </div>
      </div>

      <nav className="tab-bar" aria-label="Navegação rápida">
        <a href="#top" onClick={close}>
          <HomeIcon size={20} />
          <span>Home</span>
        </a>
        <a href="#contato" onClick={close}>
          <EnvelopeIcon size={20} />
          <span>Contato</span>
        </a>
        <a href="#agenda" onClick={close}>
          <MusicNoteIcon size={20} />
          <span>Músicas</span>
        </a>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <MenuIcon size={20} open={open} />
          <span>Menu</span>
        </button>
      </nav>
    </>
  );
}
