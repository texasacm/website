import Header from '@/components/header';
import { TextCursorInput } from 'lucide-react';

export default function FormsHero() {
    return (
        <section className="relative bg-primary pb-12 pt-20">
            <Header />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <TextCursorInput className="mx-auto mb-4 h-12 w-12 text-white" />
                    <h1 className="mb-4 text-4xl font-bold text-white">Important Forms</h1>
                    <p className="text-xl text-white/90">
                        All essential forms for Texas ACM members.
                    </p>
                </div>
            </div>
        </section>
    );
}
