import CurrentPartners from '@/components/current-partners';
import FeaturedEvents from '@/components/featured-events';
import Footer from '@/components/footer';
import Hero from '@/components/hero';

import JoinSection from '@/components/join-section';
import AcmNetwork from '@/components/ui/acm-network';
import { getUpcomingEvents } from '@/lib/calendar';

export const revalidate = 60;

export default async function Home() {
    const events = await getUpcomingEvents(2);

    return (
        <main className="min-h-screen">
            <Hero />
            <AcmNetwork />
            <FeaturedEvents events={events} />
            <JoinSection />
            <Footer />
        </main>
    );
}
