import Header from '@/components/header';
import Image from 'next/image';

export default function CSWeekHero() {
    return (
        <section className="bg-[#7A8F56]">
            <Header hideHeader={true} />
            <div className="container px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-4xl items-center gap-8 text-center lg:grid-cols-2 lg:text-left">
                    <div className="mx-auto w-full max-w-[22rem] rounded-full border-[14px] border-white bg-white p-3 shadow-[0_18px_45px_rgba(80,36,26,0.22)] sm:max-w-[25rem] lg:max-w-[28rem]">
                        <div className="overflow-hidden rounded-full">
                            <Image
                                src={'/cs-week/assets/hero.gif'}
                                alt={'UT turtle pond'}
                                width={1080}
                                height={1080}
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                    <h1 className="mb-4 font-pagkaki text-9xl font-bold text-white">
                        CS Week 2026
                    </h1>
                </div>
            </div>
        </section>
    );
}
