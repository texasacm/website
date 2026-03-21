// app/events/page.tsx
import CSWeekHero from '@/components/cs-week/cs-week-hero';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default async function CSGuidePage() {
    return (
        <main className="min-h-screen">
            <CSWeekHero />
            <p>
                Example text
            </p>
            <Footer />
        </main>
    );
}
