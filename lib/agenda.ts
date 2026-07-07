import { getShows as getLocalShows, type Show } from "./agenda-store";
import { getShowsFromCalendar } from "./calendar-agenda";

export type AgendaSource = "calendar" | "local";

/**
 * Fonte de verdade da agenda: usa o Google Calendar quando configurado
 * (GOOGLE_CALENDAR_ICS_URL), com o armazenamento local como reserva caso
 * não esteja configurado ou a busca falhe.
 */
export async function getAgenda(): Promise<{ shows: Show[]; source: AgendaSource }> {
  const calendarShows = await getShowsFromCalendar();
  if (calendarShows !== null) {
    return { shows: calendarShows, source: "calendar" };
  }
  return { shows: await getLocalShows(), source: "local" };
}

export function isCalendarConfigured(): boolean {
  return Boolean(process.env.GOOGLE_CALENDAR_ICS_URL);
}
