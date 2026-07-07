import type { Stats } from "./stats-store";

/**
 * Busca os números da seção "Sobre" a partir de uma planilha do Google Sheets
 * publicada como CSV, configurada em GOOGLE_SHEETS_STATS_URL.
 * Retorna null se não configurado ou se a busca falhar — nesse caso o
 * chamador deve usar o armazenamento local (data/stats.json) como reserva.
 *
 * Formato esperado (uma linha por número, rótulo + valor):
 *   Instagram,70200
 *   Facebook,67000
 *   YouTube,112
 *   Anos,20
 * Os rótulos são identificados por palavra-chave (não precisam ser exatos).
 */
export async function getStatsFromSheet(): Promise<Stats | null> {
  const url = process.env.GOOGLE_SHEETS_STATS_URL;
  if (!url) return null;

  try {
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) return null;
    const csv = await res.text();

    const stats: Partial<Stats> = {};

    for (const line of csv.split(/\r\n|\n|\r/)) {
      const [rawLabel, rawValue] = line.split(",");
      if (!rawLabel || rawValue === undefined) continue;

      const label = rawLabel.trim().toLowerCase();
      const value = Number(rawValue.replace(/[^\d.-]/g, ""));
      if (!Number.isFinite(value)) continue;

      if (label.includes("instagram")) stats.instagramFollowers = value;
      else if (label.includes("facebook")) stats.facebookFollowers = value;
      else if (label.includes("youtube")) stats.youtubeVideos = value;
      else if (label.includes("ano")) stats.yearsOfCareer = value;
    }

    if (Object.keys(stats).length === 0) return null;

    return {
      instagramFollowers: stats.instagramFollowers ?? 0,
      facebookFollowers: stats.facebookFollowers ?? 0,
      youtubeVideos: stats.youtubeVideos ?? 0,
      yearsOfCareer: stats.yearsOfCareer ?? 0,
    };
  } catch {
    return null;
  }
}
