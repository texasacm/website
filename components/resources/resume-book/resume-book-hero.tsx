import Header from '@/components/header';
import { FileUser } from 'lucide-react';

export default function ResumeBookHero() {
    return (
        <section className="relative bg-primary pb-12 pt-20">
            <Header />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <FileUser className="mx-auto mb-4 h-12 w-12 text-white" />
                    <h1 className="mb-4 text-4xl font-bold text-white">Resume Book</h1>
                    <p className="text-xl text-white/90">
                        Give our corporate sponsors access to your resume.
                    </p>
                </div>
            </div>
        </section>
    );
}
