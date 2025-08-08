import CurrentPartners from '@/components/current-partners';
import Footer from '@/components/footer';
import PartnerWithUs from '@/components/partner-with-us';
import PartnershipHero from '@/components/partnership-hero';
import WhyPartnerWithUs from '@/components/why-partner-with-us';

export default function PartnershipPage() {
    return (
        <main className="min-h-screen">
            <PartnershipHero />
            <WhyPartnerWithUs />
            <PartnerWithUs />
            <CurrentPartners />
            <Footer />
        </main>
    );
}
