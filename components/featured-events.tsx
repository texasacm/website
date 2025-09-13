import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatInTimeZone } from 'date-fns-tz';
import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

function cleanEventDescription(description: string): string {
    if (!description) return '';

    return (
        description
            // Replace <br> tags with double line breaks
            .replace(/<br\s*\/?>/gi, '\n\n')
            // Remove any text surrounded by angle brackets
            .replace(/<[^>]*>/g, '')
            // Decode common HTML entities
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&nbsp;/g, ' ')
            .replace(/&apos;/g, "'")
            .replace(/&hellip;/g, '...')
            .replace(/&mdash;/g, '—')
            .replace(/&ndash;/g, '–')
            .replace(/&copy;/g, '©')
            .replace(/&reg;/g, '®')
            .replace(/&trade;/g, '™')
            // Clean up line breaks and formatting
            .replace(/\n\s*\n/g, '\n\n')
            .replace(/\r/g, '\n')
            .replace(/[ \t]+/g, ' ')
            .trim()
    );
}

export interface CalendarDateTime {
    dateTime?: string;
    date?: string;
}

export interface CalendarEvent {
    id: string;
    summary: string;
    description?: string;
    location?: string;
    start: CalendarDateTime;
    end?: CalendarDateTime;
    htmlLink?: string;
}

export interface FeaturedEventsProps {
    events?: CalendarEvent[];
}

const FeaturedEvents: React.FC<FeaturedEventsProps> = ({ events = [] }) => {
    if (events.length === 0) {
        return (
            <section>
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="mb-4 text-2xl font-bold">Featured Events</h2>
                    <div className="py-4">
                        <h3>No Upcoming Events</h3>
                        <p className="mt-1 italic text-gray-600">but stay tuned! :)</p>
                    </div>
                    <Button asChild>
                        <Link href="/calendar">View Past Events</Link>
                    </Button>
                    <div className="mt-8">
                        <h3 className="mb-4 text-lg font-semibold">Add Our Events Calendar</h3>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button asChild className="flex items-center gap-2">
                                <a
                                    href="https://calendar.google.com/calendar/u/0/r?cid=utacm.org_tblt9l9gskpcunjovsjfh8ei0g@group.calendar.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CalendarIcon className="h-4 w-4" />
                                    Add to Google Calendar
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a
                                    href="https://calendar.google.com/calendar/ical/utacm.org_tblt9l9gskpcunjovsjfh8ei0g%40group.calendar.google.com/public/basic.ics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download iCal (.ics) File
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    return (
        <section>
            <div className="mx-auto mt-16 max-w-5xl justify-items-center px-4">
                <h2 className="mb-8 text-2xl font-bold">Featured Events</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {events.map((event) => {
                        const startRaw = event.start.dateTime ?? event.start.date;
                        const endRaw = event.end?.dateTime ?? event.end?.date;
                        if (!startRaw) {
                            return null;
                        }
                        const startDate = new Date(startRaw as string);
                        const endDate = endRaw ? new Date(endRaw as string) : null;

                        return (
                            <Link
                                key={event.id}
                                href={event.htmlLink || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card className="shadow-md transition-shadow duration-200 hover:shadow-lg">
                                    <CardHeader>
                                        <CardTitle>
                                            {cleanEventDescription(event.summary)}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {event.description && (
                                            <p className="mb-4 whitespace-pre-line text-gray-700">
                                                {cleanEventDescription(event.description)}
                                            </p>
                                        )}
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <CalendarIcon className="h-4 w-4" />
                                            <span>
                                                {formatInTimeZone(
                                                    startDate,
                                                    'America/Chicago',
                                                    'MMMM d, yyyy',
                                                )}
                                                {event.start.dateTime && endDate
                                                    ? ` • ${formatInTimeZone(startDate, 'America/Chicago', 'h:mm a')} - ${formatInTimeZone(
                                                          endDate,
                                                          'America/Chicago',
                                                          'h:mm a',
                                                      )}`
                                                    : ''}
                                            </span>
                                        </div>
                                        {event.location && (
                                            <div className="mt-1 text-sm text-gray-500">
                                                {cleanEventDescription(event.location)}
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
                <div className="mt-10 text-center">
                    <Button asChild>
                        <Link href="/calendar">View All Events</Link>
                    </Button>
                    <div className="mt-8">
                        <h3 className="mb-4 text-lg font-semibold">Add Our Events Calendar</h3>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Button asChild className="flex items-center gap-2">
                                <a
                                    href="https://calendar.google.com/calendar/u/0/r?cid=utacm.org_tblt9l9gskpcunjovsjfh8ei0g@group.calendar.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CalendarIcon className="h-4 w-4" />
                                    Add to Google Calendar
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a
                                    href="https://calendar.google.com/calendar/ical/utacm.org_tblt9l9gskpcunjovsjfh8ei0g%40group.calendar.google.com/public/basic.ics"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download iCal (.ics) File
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;
