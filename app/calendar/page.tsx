import CalendarHero from '@/components/calendar-hero';
import Footer from '@/components/footer';
import GoogleCalendar from '@/components/google-calendar';

export default function CalendarPage() {
  return (
    <main className="min-h-screen">
      <CalendarHero />
      <GoogleCalendar />
      <Footer />
    </main>
  );
}
