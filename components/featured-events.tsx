// app/components/FeaturedEvents.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

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
                        const startRaw = event.start.dateTime ?? event.start.date!;
                        const endRaw = event.end?.dateTime ?? event.end?.date;
                        const startDate = new Date(startRaw);
                        const endDate = endRaw ? new Date(endRaw) : null;

                        return (
                            <Link
                                key={event.id}
                                href={event.htmlLink || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card className="shadow-md transition-shadow duration-200 hover:shadow-lg">
                                    <CardHeader>
                                        <CardTitle>{event.summary}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {event.description && (
                                            <p className="mb-4 text-gray-700">
                                                {event.description}
                                            </p>
                                        )}
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <CalendarIcon className="h-4 w-4" />
                                            <span>
                                                {format(startDate, 'MMMM d, yyyy')}
                                                {event.start.dateTime && endDate
                                                    ? ` • ${format(startDate, 'h:mm a')} - ${format(
                                                          endDate,
                                                          'h:mm a',
                                                      )}`
                                                    : ''}
                                            </span>
                                        </div>
                                        {event.location && (
                                            <div className="mt-1 text-sm text-gray-500">
                                                {event.location}
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
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;
