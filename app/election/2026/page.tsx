// app/events/page.tsx
import Footer from '@/components/footer';
import Candidates2627 from '@/components/resources/election/Candidates2627';
import ElectionHero from '@/components/resources/election/ElectionHero';

export default async function ElectionPage() {
    return (
        <main className="min-h-screen">
            <ElectionHero />
            <Candidates2627 />
            <Footer />
        </main>
    );
}
