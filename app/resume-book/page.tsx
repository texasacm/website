import Footer from '@/components/footer';
import ResumeBook from '@/components/resources/resume-book/resume-book';
import ResumeBookHero from '@/components/resources/resume-book/resume-book-hero';

export default function ResumeBookPage() {
    return (
        <main className="min-h-screen">
            <ResumeBookHero />
            <ResumeBook />
            <Footer />
        </main>
    );
}
