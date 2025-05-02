import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

export default function GoogleCalendar() {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Event Calendar</h2>
            <p className="text-gray-700">
              Check out our calendar for all upcoming events. Add our calendar to yours to stay updated!
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="aspect-video w-full">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=utacm.org_tblt9l9gskpcunjovsjfh8ei0g%40group.calendar.google.com&ctz=America%2FChicago"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                title="Texas ACM Google Calendar"
              ></iframe>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
