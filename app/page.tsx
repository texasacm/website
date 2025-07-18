import Hero from '@/components/hero';
import FeaturedEvents from '@/components/featured-events';
import JoinSection from '@/components/join-section';
import Footer from '@/components/footer';
import { getUpcomingEvents } from '@/lib/calendar';

export default async function Home() {
    const events = await getUpcomingEvents(2);

    return (
        <main className="min-h-screen">
            <Hero />
            <FeaturedEvents events={events} />
            <JoinSection />
            <Footer />
        </main>
    );
}
