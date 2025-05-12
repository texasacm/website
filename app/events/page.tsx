// app/events/page.tsx
import EventsHero from '@/components/events-hero';
import FeaturedEvents from '@/components/featured-events';
import CorporateEventsHero from '@/components/corporate-events-hero';
import CorporateEvents from '@/components/corporate-events';
import AcademicEventsHero from '@/components/academic-events-hero';
import AcademicEvents from '@/components/academic-events';
import SocialEventsHero from '@/components/social-events-hero';
import SocialEvents from '@/components/social-events';
import Footer from '@/components/footer';
import { getUpcomingEvents } from '@/lib/calendar';

export const revalidate = 300;

export default async function EventsPage() {
  const events = await getUpcomingEvents(2);

  return (
    <main className="min-h-screen">
      <EventsHero />
      <FeaturedEvents events={events} />
      <CorporateEventsHero />
      <CorporateEvents />
      <AcademicEventsHero />
      <AcademicEvents />
      <SocialEventsHero />
      <SocialEvents />
      <Footer />
    </main>
  );
}
