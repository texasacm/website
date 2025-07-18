// app/events/page.tsx
import Footer from '@/components/footer';
import CSGuide from '@/components/resources/cs-guide/cs-guide';
import CSGuideHero from '@/components/resources/cs-guide/cs-guide-hero';

export const revalidate = 300;

export default async function CSGuidePage() {
    return (
        <main className="min-h-screen">
            <CSGuideHero />
            <CSGuide />
            <Footer />
        </main>
    );
}
