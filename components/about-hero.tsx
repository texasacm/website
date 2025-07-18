import Header from '@/components/header';
import { Info } from 'lucide-react';

export default function AboutHero() {
    return (
        <section className="relative bg-primary pb-12 pt-20">
            <Header />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <Info className="mx-auto mb-4 h-12 w-12 text-white" />
                    <h1 className="mb-4 text-4xl font-bold text-white">About Texas ACM</h1>
                    <p className="text-xl text-white/90">
                        Learn about our mission, what we do, and how we serve the UT Austin CS
                        community
                    </p>
                </div>
            </div>
        </section>
    );
}
