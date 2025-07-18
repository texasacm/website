import Header from '@/components/header';
import { BookMarked } from 'lucide-react';

export default function CSGuideHero() {
    return (
        <section className="relative bg-primary pb-12 pt-20">
            <Header />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <BookMarked className="mx-auto mb-4 h-12 w-12 text-white" />
                    <h1 className="mb-4 text-4xl font-bold text-white">CS Guide</h1>
                    <p className="text-xl text-white/90">
                        Explore our resources designed to help you navigate your computer science
                        journey at UT Austin.
                    </p>
                </div>
            </div>
        </section>
    );
}
