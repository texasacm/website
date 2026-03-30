import Header from '@/components/header';
import Image from 'next/image';

export default function CSWeekPrizeProviders() {
    return (
        <section className="bg-[#FCF1DB]">
            <Header hideHeader={true} />
            <div className="container px-4 pt-12 text-center sm:px-6 lg:px-8">
                <h1 className="mb-4 font-pagkaki text-6xl font-bold text-[#50241A]">
                    Prizes Provided By
                </h1>
                <Image
                    src="/cs-week/prize-providers/jane-street.svg"
                    alt="Jane Street"
                    width={600}
                    height={200}
                    className="mx-auto mb-8"
                />
                <Image
                    src="/cs-week/prize-providers/toyota-fs.svg"
                    alt="Toyota Financial Services"
                    width={600}
                    height={200}
                    className="mx-auto mb-8"
                />
                <Image
                    src="/cs-week/prize-providers/meds-bluechew.png"
                    alt="Meds Bluechew"
                    width={600}
                    height={200}
                    className="mx-auto mb-8"
                />
            </div>
        </section>
    );
}
