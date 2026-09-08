import Footer from '@/components/footer';
import AtoZHero from '@/components/resources/atoz/atoz-hero';
import AtoZContent from '@/components/resources/atoz/atoz-content';
import DisclaimerBanner from '@/components/resources/atoz/disclaimer-banner';

export default function AtoZPage() {
    return (
        <main className="min-h-screen">
            <AtoZHero />
            {/* <DisclaimerBanner /> */}
            <AtoZContent />
            <Footer />
        </main>
    );
}
