import AcademicEvents from "@/components/academic-events";
import AcademicEventsHero from "@/components/academic-events-hero";
import CorporateEvents from "@/components/corporate-events";
import CorporateEventsHero from "@/components/corporate-events-hero";
import EventsHero from "@/components/events-hero";
import FeaturedEvents from "@/components/featured-events";
import Footer from "@/components/footer";
import SocialEvents from "@/components/social-events";
import SocialEventsHero from "@/components/social-events-hero";

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <EventsHero />
      <FeaturedEvents />
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
