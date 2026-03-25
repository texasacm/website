// app/events/page.tsx
import Footer from '@/components/footer';
import ElectionHero from '@/components/resources/election/ElectionHero';

export default async function ElectionPage() {
    return (
        <main className="min-h-screen">
            <ElectionHero />
            <Footer />
        </main>
    );
}
