// lib/calendar.ts
import { CalendarEvent } from '@/components/featured-events';

const CALENDAR_ID = process.env.GOOGLE_CAL_ID as string;
const API_KEY = process.env.GOOGLE_CAL_API_KEY as string;

/**
 * Fetches the next N upcoming events from the shared Google Calendar.
 * @param maxResults how many events to fetch (default 2)
 */
export async function getUpcomingEvents(
  maxResults = 2,
): Promise<CalendarEvent[]> {
  const now = new Date().toISOString();
  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
      CALENDAR_ID,
    )}/events`,
  );
  url.searchParams.set('key', API_KEY);
  url.searchParams.set('timeMin', now);
  url.searchParams.set('maxResults', String(maxResults));
  url.searchParams.set('orderBy', 'startTime');
  url.searchParams.set('singleEvents', 'true');

  console.log('Fetching Google Calendar events from:', url.toString());

  // const res = await fetch(url.toString());
  // console.log("Response status:", res.status);

  // if (!res.ok) {
  //   console.error("Calendar API error:", await res.text());
  //   return [];
  // }

  // const data = (await res.json()) as { items?: CalendarEvent[] };
  // console.log("Parsed data:", JSON.stringify(data, null, 2));

  // return data.items ?? [];
  return [];
}
