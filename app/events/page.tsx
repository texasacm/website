import EventsHero from "@/components/events-hero"
import GoogleCalendar from "@/components/google-calendar"
import Footer from "@/components/footer"

export default function CalendarPage() {
  return (
    <main className="min-h-screen">
      <EventsHero />
      <GoogleCalendar />
      <Footer />
    </main>
  )
}

