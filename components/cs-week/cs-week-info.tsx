import Header from '@/components/header';

export default function CSWeekInfo() {
    return (
        <section className="bg-[#FCF1DB]">
            <Header hideHeader={true} />
            <div className="container px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24 lg:px-8">
                <h1 className="mx-auto max-w-4xl font-pagkaki text-5xl font-bold text-[#50241A] sm:text-6xl md:text-7xl">
                    What is CS Week?
                </h1>
                <div className="mx-auto mt-16 grid max-w-6xl gap-10 pb-8 md:grid-cols-12 md:items-start lg:mt-20 lg:gap-12">
                    <div className="md:col-span-7 md:col-start-2">
                        <div
                            className="mx-auto flex min-h-[21rem] max-w-[40rem] items-center justify-center px-10 py-12 text-white sm:min-h-[25rem] sm:px-14"
                            style={{
                                backgroundColor: '#0F6E91',
                                borderRadius: '38% 62% 46% 54% / 43% 35% 65% 57%',
                            }}
                        >
                            <p className="max-w-[18rem] text-center text-lg font-semibold leading-8 sm:text-2xl sm:leading-10">
                                Placeholder
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
                            <p className="max-w-[15rem] text-center text-lg font-semibold leading-8 sm:text-2xl sm:leading-10">
                                Placeholder 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
