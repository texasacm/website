import Header from '@/components/header';
import { MessageCircleQuestion } from 'lucide-react';

export default function FAQHero() {
    return (
        <section className="relative bg-primary pb-12 pt-20">
            <Header />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <MessageCircleQuestion className="mx-auto mb-4 h-12 w-12 text-white" />
                    <h1 className="mb-4 text-4xl font-bold text-white">
                        Frequently Asked Questions (FAQ)
                    </h1>
                    <p className="text-xl text-white/90">
                        Get your commonly answered questions about Texas ACM here!
                    </p>
                </div>
            </div>
        </section>
    );
}
