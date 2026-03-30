import Header from '@/components/header';
import Image from 'next/image';

export default function CSWeekInfo() {
    return (
        <section className="bg-[#FCF1DB]">
            <Header hideHeader={true} />
            <div className="container px-4 pt-12 text-center sm:px-6 lg:px-8">
                <h1 className="mb-4 font-pagkaki text-6xl font-bold text-[#50241A]">
                    What is CS Week?
                </h1>
            </div>
            <Image
                src={'/cs-week/assets/turtle-on-log.png'}
                alt="Turtle on Log"
                width={600}
                height={400}
            />
        </section>
    );
}
