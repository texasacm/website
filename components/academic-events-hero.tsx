import { GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function AcademicEventsHero() {
    return (
        <section className="relative pb-24 pt-40">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home-page-slides/pancakes_and_professors_24.jpg"
                    alt="Picture from ACM Pancakes and Professors Fall 2024"
                    fill
                    priority
                    className="absolute inset-0 object-cover object-[center_25%]"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 shadow-xl">
                <div className="flex max-w-md flex-col items-center gap-4 rounded-xl bg-black/80 px-8 py-8 text-center shadow-xl">
                    <div className="flex flex-col items-center text-green-400">
                        <GraduationCap size={48} className="mb-4" />
                        <h1 className="text-4xl font-bold leading-tight text-white">
                            Academic Events
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
