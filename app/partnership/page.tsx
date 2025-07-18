import CurrentPartners from '@/components/current-partners';
import Footer from '@/components/footer';
import PartnershipHero from '@/components/partnership-hero';
import PartnershipPackages from '@/components/partnership-packages';

export default function PartnershipPage() {
    return (
        <main className="min-h-screen">
            <PartnershipHero />
            <PartnershipPackages />
            <CurrentPartners />
            <Footer />
        </main>
    );
}
