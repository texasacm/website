import Header from '@/components/header';
import Image from 'next/image';

export default function CSWeekInfo() {
    return (
        <section className="bg-[#FCF1DB]">
            <Header hideHeader={true} />
            <div className="container relative px-4 pb-40 pt-16 text-center sm:px-6 sm:pb-48 sm:py-20 md:pb-56 md:py-24 lg:px-8">
                <div
                    className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2"
                    aria-hidden="true"
                >
                    <Image
                        src="/cs-week/assets/flower.png"
                        alt=""
                        width={280}
                        height={297}
                        className="absolute left-[-6rem] top-[36%] h-auto w-48 rotate-[-14deg] sm:left-[-7rem] sm:w-56 md:left-[-8rem] md:w-64 lg:left-[-9rem] lg:w-72"
                    />
                    <Image
                        src="/cs-week/assets/flower.png"
                        alt=""
                        width={280}
                        height={297}
                        className="absolute right-[-6rem] top-[30%] h-auto w-48 rotate-[16deg] sm:right-[-7rem] sm:w-56 md:right-[-8rem] md:w-64 lg:right-[-9rem] lg:w-72"
                    />
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-10 z-0 h-32" aria-hidden="true">
                    <div className="absolute left-1 top-2 w-28 sm:left-3 sm:w-32 md:left-8 md:w-40 lg:left-16 lg:w-80">
                        <Image
                            src="/cs-week/assets/flower-circle.png"
                            alt=""
                            width={522}
                            height={471}
                            className="h-auto w-full rotate-[-12deg]"
                        />
                        <Image
                            src="/cs-week/assets/bug.png"
                            alt=""
                            width={247}
                            height={281}
                            className="absolute left-[10%] top-[8%] h-auto w-16 rotate-[150deg] sm:w-[4.5rem] md:w-20 lg:w-32"
                        />
                    </div>
                    <div className="absolute right-1 top-2 w-28 sm:right-3 sm:w-32 md:right-8 md:w-40 lg:right-16 lg:w-80">
                        <Image
                            src="/cs-week/assets/flower-circle.png"
                            alt=""
                            width={522}
                            height={471}
                            className="h-auto w-full rotate-[12deg]"
                        />
                        <Image
                            src="/cs-week/assets/bug.png"
                            alt=""
                            width={247}
                            height={281}
                            className="absolute bottom-[12%] left-[8%] h-auto w-16 rotate-[-120deg] sm:w-[4.5rem] md:w-20 lg:w-32"
                        />
                    </div>
                </div>
                <h1 className="relative z-10 mx-auto max-w-4xl font-pagkaki font-bold text-[#50241A] text-4xl md:text-7xl">
                    What is CS Week?
                </h1>
                <div className="relative z-10 mx-auto mt-16 grid max-w-6xl gap-10 pb-8 md:grid-cols-12 md:items-start lg:mt-20 lg:gap-12">
                    <div className="md:col-span-7 md:col-start-2">
                        <div
                            className="mx-auto flex min-h-[21rem] max-w-[40rem] items-center justify-center px-10 py-12 text-white sm:min-h-[25rem] sm:px-14"
                            style={{
                                backgroundColor: '#0F6E91',
                                borderRadius: '38% 62% 46% 54% / 43% 35% 65% 57%',
                            }}
                        >
                            <p className="text-center text-2xl font-semibold">
                                CS Week is a week-long celebration for all things computer science! Enjoy events hosted by your favorite CS student orgs and a chance to win raffle prizes!
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-5 md:col-start-7 md:pt-20">
                        <div
                            className="mx-auto flex min-h-[20rem] max-w-[33rem] items-center justify-center px-10 py-12 text-white sm:min-h-[23rem] sm:px-12"
                            style={{
                                backgroundColor: '#8A8E62',
                                borderRadius: '44% 56% 58% 42% / 38% 44% 56% 62%',
                            }}
                        >
                            <p className="text-center text-2xl font-semibold p-10 sm:text-lg">
                                CS Week will run from April 13th - 17th with events around GDC every day! Participants will receive a CS week bingo card at the first event they attend. Turn in your bingo card at CS Week&apos;s finale (Family Feud) for a chance to win prizes! Attend our kickoff event for more information.
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 overflow-hidden sm:h-48 md:h-56"
                    aria-hidden="true"
                >
                    <Image
                        src="/cs-week/assets/squirrel.png"
                        alt=""
                        width={431}
                        height={572}
                        className="absolute bottom-2 left-[8%] h-auto w-20 rotate-[-8deg] sm:w-24 md:w-28 lg:w-32"
                    />
                    <Image
                        src="/cs-week/assets/squirrel.png"
                        alt=""
                        width={431}
                        height={572}
                        className="absolute bottom-2 right-[8%] h-auto w-20 scale-x-[-1] rotate-[-8deg] sm:w-24 md:w-28 lg:w-32"
                    />
                </div>
            </div>
        </section>
    );
}
