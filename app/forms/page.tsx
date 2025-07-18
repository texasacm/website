import Footer from '@/components/footer';
import Forms from '@/components/resources/forms/forms';
import FormsHero from '@/components/resources/forms/forms-hero';

export default function FormsPage() {
    return (
        <main className="min-h-screen">
            <FormsHero />
            <Forms />
            <Footer />
        </main>
    );
}
