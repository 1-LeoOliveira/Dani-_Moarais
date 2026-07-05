/** Formata uma contagem no estilo usado pelo contador animado (ex: 58300 -> "58.3" + " mil"). */
export function formatCount(count: number): { target: number; suffix: string } {
  if (count >= 1000) {
    return { target: Math.round((count / 1000) * 10) / 10, suffix: " mil" };
  }
  return { target: count, suffix: "" };
}
