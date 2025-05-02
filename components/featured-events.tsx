// app/components/FeaturedEvents.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

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
}

export interface FeaturedEventsProps {
  events?: CalendarEvent[];
}

const FeaturedEvents: React.FC<FeaturedEventsProps> = ({ events = [] }) => {
  if (events.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="mt-16 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
          <div className="py-4">
            <h3>No Upcoming Events</h3>
            <p className="mt-1 text-gray-600 italic">but stay tuned! :)</p>
          </div>
          <Button asChild>
            <Link href="/calendar">View Past Events</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => {
            const startRaw = event.start.dateTime ?? event.start.date!;
            const endRaw = event.end?.dateTime ?? event.end?.date;
            const startDate = new Date(startRaw);
            const endDate = endRaw ? new Date(endRaw) : null;

            return (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.summary}</CardTitle>
                </CardHeader>
                <CardContent>
                  {event.description && (
                    <p className="text-gray-700 mb-4">{event.description}</p>
                  )}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarIcon className="h-4 w-4" />
                    <span>
                      {format(startDate, "MMMM d, yyyy")}
                      {event.start.dateTime && endDate
                        ? ` • ${format(startDate, "h:mm a")} – ${format(
                            endDate,
                            "h:mm a"
                          )}`
                        : ""}
                    </span>
                  </div>
                  {event.location && (
                    <div className="text-sm text-gray-500 mt-1">
                      {event.location}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Button asChild>
            <Link href="/calendar">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
