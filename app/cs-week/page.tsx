// app/events/page.tsx
import CSWeekHero from '@/components/cs-week/cs-week-hero';
import CSWeekInfo from '@/components/cs-week/cs-week-info';
import CSWeekSchedule from '@/components/cs-week/cs-week-schedule';
import CSWeekSponsors from '@/components/cs-week/cs-week-sponsors';
import Footer from '@/components/footer';

export default async function CSGuidePage() {
    return (
        <main className="min-h-screen">
            <CSWeekHero />
            <CSWeekInfo />
            <CSWeekSchedule />
            <CSWeekSponsors />
            <Footer />
        </main>
    );
}
