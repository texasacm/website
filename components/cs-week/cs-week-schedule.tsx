import Header from '@/components/header';

export default function CSWeekSchedule() {
    return (
        <section className="bg-[#7A8F56]">
            <Header hideHeader={true} />
            <div className="container px-4 pt-12 sm:px-6 lg:px-8">
                <h1 className="mb-4 font-pagkaki text-6xl font-bold text-white">Schedule</h1>
            </div>
        </section>
    );
}
