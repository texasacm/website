import { Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function CorporateEventsHero() {
    return (
        <section className="relative pb-24 pt-40">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home-page-slides//paycom_fa24.jpeg"
                    alt=""
                    fill
                    priority
                    className="absolute inset-0 object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-3 rounded-xl bg-black/80 px-8 py-8 shadow-xl">
                    <div className="flex flex-col items-center text-blue-400">
                        <Briefcase size={48} className="mb-4" />
                        <h1 className="text-center text-4xl font-bold leading-tight text-white">
                            Corporate Events
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
