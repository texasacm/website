import Header from '@/components/header';

export default function CSWeekInfo() {
    return (
        <section className="bg-[#FCF1DB]">
            <Header hideHeader={true} />
            <div className="container px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24 lg:px-8">
                <h1 className="mx-auto max-w-4xl font-pagkaki text-5xl font-bold text-[#50241A] sm:text-6xl md:text-7xl">
                    What is CS Week?
                </h1>
            </div>
        </section>
    );
}
