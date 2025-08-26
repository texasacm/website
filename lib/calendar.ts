import { CalendarEvent } from '@/components/featured-events';

/**
 * Fetches the next N upcoming events from the shared Google Calendar.
 * @param maxResults how many events to fetch (default 2)
 */
export async function getUpcomingEvents(maxResults = 2): Promise<CalendarEvent[]> {
    const CALENDAR_ID = process.env.GOOGLE_CAL_ID;
    const API_KEY = process.env.GOOGLE_CAL_API_KEY;

    if (!CALENDAR_ID || !API_KEY) {
        return [];
    }

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

    let res: Response;
    try {
        res = await fetch(url.toString());
        console.log('Response status:', res.status);

        if (!res.ok) {
            const errorText = await res.text();
            console.error('Calendar API error:', errorText);
            console.error('URL:', url.toString());
            return [];
        }
    } catch (error) {
        console.error('Failed to fetch calendar events:', error);
        return [];
    }

    const data = (await res.json()) as { items?: CalendarEvent[] };
    console.log('Parsed data:', JSON.stringify(data, null, 2));

    return data.items ?? [];
}
