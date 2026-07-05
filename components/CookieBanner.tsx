"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "dani-morais-cookie-consent";
const CHANGE_EVENT = "dani-morais-cookie-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return window.localStorage.getItem(STORAGE_KEY) !== "accepted";
}

function getServerSnapshot() {
  return false;
}

function accept() {
  window.localStorage.setItem(STORAGE_KEY, "accepted");
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export default function CookieBanner() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p>
        Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em
        nossos serviços. Ao utilizar nossos serviços, você concorda com esse monitoramento
        conforme descrito em nossa <strong>política de privacidade</strong>.
      </p>
      <div className="actions">
        <button className="btn btn-purple btn-sm" onClick={accept}>
          Prosseguir
        </button>
      </div>
    </div>
  );
}
