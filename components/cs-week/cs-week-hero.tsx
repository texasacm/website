import Header from '@/components/header';
import { BookMarked } from 'lucide-react';

export default function CSWeekHero() {
    return (
        <section className="hero-banner">
            <Header hideHeader={true} />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-4 text-4xl font-bold text-white">CS Week 2026</h1>
                </div>
            </div>
        </section>
    );
}
