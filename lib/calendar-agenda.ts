import type { Show } from "./agenda-store";
import { WHATSAPP_LINK } from "./constants";

const MONTHS_PT = [
  "jan.",
  "fev.",
  "mar.",
  "abr.",
  "mai.",
  "jun.",
  "jul.",
  "ago.",
  "set.",
  "out.",
  "nov.",
  "dez.",
];

type RawEvent = {
  uid?: string;
  summary?: string;
  description?: string;
  location?: string;
  dtstart?: string;
};

function unescapeText(value: string): string {
  return value
    .replace(/\\n/gi, "\n")
    .replace(/\\,/g, ",")
    .replace(/\\;/g, ";")
    .replace(/\\\\/g, "\\");
}

/** Desfaz o "line folding" do formato iCalendar (linhas continuadas começam com espaço/tab). */
function unfoldLines(raw: string): string[] {
  const lines = raw.split(/\r\n|\n|\r/);
  const result: string[] = [];
  for (const line of lines) {
    if ((line.startsWith(" ") || line.startsWith("\t")) && result.length > 0) {
      result[result.length - 1] += line.slice(1);
    } else {
      result.push(line);
    }
  }
  return result;
}

/** Parser mínimo de ICS: extrai só os campos VEVENT que usamos, sem suporte a RRULE (eventos recorrentes). */
function parseEvents(raw: string): RawEvent[] {
  const lines = unfoldLines(raw);
  const events: RawEvent[] = [];
  let current: RawEvent | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      current = {};
      continue;
    }
    if (line === "END:VEVENT") {
      if (current) events.push(current);
      current = null;
      continue;
    }
    if (!current) continue;

    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const name = line.slice(0, colonIndex).split(";")[0].toUpperCase();
    const value = line.slice(colonIndex + 1);

    if (name === "UID") current.uid = value.trim();
    else if (name === "SUMMARY") current.summary = unescapeText(value);
    else if (name === "DESCRIPTION") current.description = unescapeText(value);
    else if (name === "LOCATION") current.location = unescapeText(value);
    else if (name === "DTSTART") current.dtstart = value.trim();
  }

  return events;
}

function parseDateParts(dtstart: string): { year: number; month: number; day: number } | null {
  const match = dtstart.match(/^(\d{4})(\d{2})(\d{2})/);
  if (!match) return null;
  return { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]) };
}

const TIMEZONE = "America/Sao_Paulo";

/** "YYYYMMDD" do dia de hoje no fuso do Brasil — evita cortar eventos cedo demais por causa do UTC. */
function todayYMD(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "00";
  return `${get("year")}${get("month")}${get("day")}`;
}

function isUrl(value: string): boolean {
  if (!value) return false;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Extrai um link utilizável da descrição do evento. Aceita:
 * - um link já pronto ("https://...")
 * - um domínio sem protocolo ("www.site.com.br")
 * - texto que o Google Calendar transformou em HTML automaticamente
 *   (ex.: `<a href="http://site.com">site.com</a>`), usando o href real.
 */
function resolveDetailsUrl(description: string): string {
  const trimmed = description.trim();
  if (!trimmed) return WHATSAPP_LINK;

  const hrefMatch = trimmed.match(/href=["']([^"']+)["']/i);
  if (hrefMatch && isUrl(hrefMatch[1])) return hrefMatch[1];

  const withoutTags = trimmed.replace(/<[^>]*>/g, "").trim();
  if (isUrl(withoutTags)) return withoutTags;

  const withProtocol = `https://${withoutTags}`;
  if (isUrl(withProtocol)) return withProtocol;

  return WHATSAPP_LINK;
}

/**
 * Busca a agenda de shows a partir de uma agenda do Google Calendar (endereço
 * secreto em formato iCal), configurada em GOOGLE_CALENDAR_ICS_URL.
 * Retorna null se não configurado ou se a busca falhar — nesse caso o
 * chamador deve usar o armazenamento local (data/agenda.json) como reserva.
 *
 * Convenção esperada em cada evento da agenda:
 * - Título: cidade do show (ex.: "Belo Horizonte - MG")
 * - Local (opcional): nome da turnê/casa de show
 * - Descrição (opcional): link de ingressos/detalhes — se ausente, usa o WhatsApp
 *
 * Limitação: eventos recorrentes (RRULE) não são expandidos, só a primeira
 * ocorrência é considerada. Para shows (eventos únicos) isso não é um problema.
 */
export async function getShowsFromCalendar(): Promise<Show[] | null> {
  const url = process.env.GOOGLE_CALENDAR_ICS_URL;
  if (!url) return null;

  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) return null;
    const raw = await res.text();
    const events = parseEvents(raw);

    const today = todayYMD();

    const dated = events
      .map((event) => {
        if (!event.dtstart) return null;
        const parts = parseDateParts(event.dtstart);
        if (!parts) return null;

        const ymd = `${String(parts.year).padStart(4, "0")}${String(parts.month).padStart(2, "0")}${String(
          parts.day
        ).padStart(2, "0")}`;
        const description = (event.description ?? "").trim();

        const show: Show = {
          id: event.uid || `${event.summary}-${ymd}`,
          day: String(parts.day).padStart(2, "0"),
          month: MONTHS_PT[parts.month - 1] ?? "",
          tour: (event.location ?? "").trim() || "Show confirmado",
          city: (event.summary ?? "").trim() || "A confirmar",
          detailsUrl: resolveDetailsUrl(description),
        };
        return { show, ymd };
      })
      .filter((entry): entry is { show: Show; ymd: string } => entry !== null && entry.ymd >= today)
      .sort((a, b) => a.ymd.localeCompare(b.ymd));

    return dated.map((entry) => entry.show);
  } catch {
    return null;
  }
}
