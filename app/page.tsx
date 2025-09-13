import FeaturedEvents from '@/components/featured-events';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import JoinSection from '@/components/join-section';
import { getUpcomingEvents } from '@/lib/calendar';

export const revalidate = 60;

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
