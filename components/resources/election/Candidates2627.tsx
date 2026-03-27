import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
    
export default function ElectionHero() {
    return (
        <section className="px-6 py-12 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <div className="border-l-4 border-green-500 bg-green-100 p-6 mb-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="ml-3">
                            <p className="text-green-700">
                                Voting for the 2026-27 Texas ACM elections will open on April 3rd at 8:00 AM CST and close on the same day at 6:00 PM CST. To vote, you must
                                have attended (and signed in) to at least 3 Texas ACM events this year. You can cast your vote
                            </p>
                            <Link href="#">
                                here.
                            </Link>
                        </div>
                    </div>
                </div>
                <h1 className="mb-8 text-center text-4xl font-bold">
                    Candidates for President & Vice President
                </h1>
                <div className="grid items-stretch gap-8 md:grid-cols-2">
                    <Card className="overflow-hidden text-center">
                        <div className="relative aspect-square w-full">
                            <Image
                                src={'/officer-headshots-2025-26/casey.jpeg'}
                                alt={'casey'}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </Card>
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Casey Charleston & Bingus</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Lorem ipsum dolor sit amet
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
