import { promises as fs } from "fs";
import path from "path";

export type Stats = {
  instagramFollowers: number;
  facebookFollowers: number;
  yearsOfCareer: number;
};

const DATA_FILE = path.join(process.cwd(), "data", "stats.json");
const SEED_FILE = path.join(process.cwd(), "data", "stats.seed.json");

const DEFAULT_STATS: Stats = {
  instagramFollowers: 70200,
  facebookFollowers: 67000,
  yearsOfCareer: 20,
};

// O arquivo real (stats.json) não é versionado no git — só existe depois que
// alguém salva algo pelo /admin. Até lá, usamos o seed (versionado) como ponto
// de partida, para nunca sobrescrever edições feitas direto no site no ar.
export async function getStats(): Promise<Stats> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return { ...DEFAULT_STATS, ...JSON.parse(raw) };
  } catch {
    try {
      const raw = await fs.readFile(SEED_FILE, "utf-8");
      return { ...DEFAULT_STATS, ...JSON.parse(raw) };
    } catch {
      return DEFAULT_STATS;
    }
  }
}

export async function saveStats(stats: Stats): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(stats, null, 2), "utf-8");
}
