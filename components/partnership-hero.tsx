import Header from '@/components/header';
import { Handshake } from 'lucide-react';

export default function PartnershipHero() {
    return (
        <section className="hero-banner">
            <Header />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <Handshake className="mx-auto mb-4 h-12 w-12 text-white" />
                    <h1 className="mb-4 text-4xl font-bold text-white">Corporate Partnerships</h1>
                    <p className="text-xl text-white/90">
                        Partner with Texas ACM to connect with top UTCS talent.
                    </p>
                </div>
            </div>
        </section>
    );
}
