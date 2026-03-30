import Header from '@/components/header';
import { Card, CardTitle } from '../ui/card';

export default function CSWeekSchedule() {
    return (
        <section className="bg-[#7A8F56]">
            <Header hideHeader={true} />
            <div className="container px-4 pt-12 text-center sm:px-6 lg:px-8">
                <h1 className="mb-4 font-pagkaki text-6xl font-bold text-white">Schedule</h1>
                <div className="grid grid-cols-5 gap-4 p-8">
                    <Card className="col-span-1 p-8">
                        <CardTitle className="font-bold">Monday, April 13th</CardTitle>
                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Card>
                    <Card className="col-span-1 p-8">
                        <CardTitle className="font-bold">Tuesday, April 14th</CardTitle>
                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Card>
                    <Card className="col-span-1 p-8">
                        <CardTitle className="font-bold">Wednesday, April 15th</CardTitle>
                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Card>
                    <Card className="col-span-1 p-8">
                        <CardTitle className="font-bold">Thursday, April 16th</CardTitle>
                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Card>
                    <Card className="col-span-1 p-8">
                        <CardTitle className="font-bold">Friday, April 17th</CardTitle>
                        <p className="mt-2 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}
