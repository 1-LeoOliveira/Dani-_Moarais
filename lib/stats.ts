import { getStats as getLocalStats, type Stats } from "./stats-store";
import { getStatsFromSheet } from "./sheets-stats";

export type StatsSource = "sheet" | "local";

/**
 * Fonte de verdade dos números: usa a planilha do Google Sheets quando
 * configurada (GOOGLE_SHEETS_STATS_URL), com o armazenamento local como
 * reserva caso não esteja configurada ou a busca falhe.
 */
export async function getStatsData(): Promise<{ stats: Stats; source: StatsSource }> {
  const sheetStats = await getStatsFromSheet();
  if (sheetStats !== null) {
    return { stats: sheetStats, source: "sheet" };
  }
  return { stats: await getLocalStats(), source: "local" };
}

export function isSheetsConfigured(): boolean {
  return Boolean(process.env.GOOGLE_SHEETS_STATS_URL);
}
