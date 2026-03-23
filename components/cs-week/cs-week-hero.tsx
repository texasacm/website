import Header from '@/components/header';
import Image from 'next/image';

export default function CSWeekHero() {
    return (
        <section className="bg-[#7A8F56]">
            <Header hideHeader={true} />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl grid-cols-2 gap-8 text-center lg:grid">
                    <Image
                        src={'/cs-week/cinema.PNG'}
                        alt={'UT turtle pond'}
                        width={800}
                        height={800}
                    />
                    <h1 className="mb-4 font-pagkaki text-9xl font-bold text-white">
                        CS Week 2026
                    </h1>
                </div>
            </div>
        </section>
    );
}
