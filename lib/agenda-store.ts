import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export type Show = {
  id: string;
  day: string;
  month: string;
  tour: string;
  city: string;
  detailsUrl: string;
};

const DATA_FILE = path.join(process.cwd(), "data", "agenda.json");
const SEED_FILE = path.join(process.cwd(), "data", "agenda.seed.json");

// O arquivo real (agenda.json) não é versionado no git — só existe depois que
// alguém salva algo pelo /admin. Até lá, usamos o seed (versionado) como ponto
// de partida, para nunca sobrescrever edições feitas direto no site no ar.
export async function getShows(): Promise<Show[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Show[];
  } catch {
    try {
      const raw = await fs.readFile(SEED_FILE, "utf-8");
      return JSON.parse(raw) as Show[];
    } catch {
      return [];
    }
  }
}

async function saveShows(shows: Show[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(shows, null, 2), "utf-8");
}

export async function addShow(show: Omit<Show, "id">): Promise<void> {
  const shows = await getShows();
  shows.push({ ...show, id: randomUUID() });
  await saveShows(shows);
}

export async function updateShow(id: string, updates: Omit<Show, "id">): Promise<void> {
  const shows = await getShows();
  const index = shows.findIndex((show) => show.id === id);
  if (index === -1) return;
  shows[index] = { ...updates, id };
  await saveShows(shows);
}

export async function deleteShow(id: string): Promise<void> {
  const shows = await getShows();
  await saveShows(shows.filter((show) => show.id !== id));
}
