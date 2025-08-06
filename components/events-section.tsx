import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface EventsSectionProps {
    mainCard: {
        title: string;
        cardTitle: string;
        bulletPoints: string[];
    };
    images: {
        src: string;
        alt: string;
    }[];
    signatureCard: {
        title: string;
        subTitle: string;
        bulletPoints: string[];
    };
    signatureImage: {
        src: string;
        alt: string;
    };
}

export default function EventsSection({
    mainCard,
    images,
    signatureCard,
    signatureImage,
}: EventsSectionProps) {
    return (
        <section className="relative">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900">{mainCard.title}</h2>
                </div>
                <div className="mx-auto mt-16 max-w-4xl">
                    <Card className="mx-auto max-w-2xl">
                        <CardHeader>
                            <CardTitle className="align-middle text-gray-700">
                                {mainCard.cardTitle}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc space-y-4 pl-6 text-left text-gray-700">
                                {mainCard.bulletPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <div className="mx-auto mt-12 max-w-2xl">
                        <div className="grid grid-cols-3 gap-6">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="aspect-square overflow-hidden rounded-lg bg-gray-200"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={200}
                                        height={200}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mx-auto mt-12 max-w-2xl">
                        <div className="grid grid-cols-2 gap-6">
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="text-gray-700">
                                        {signatureCard.title}
                                    </CardTitle>
                                    <CardDescription className="text-gray-500">
                                        {signatureCard.subTitle}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="list-disc space-y-4 pl-6 text-left text-gray-700">
                                        {signatureCard.bulletPoints.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                                <Image
                                    src={signatureImage.src}
                                    alt={signatureImage.alt}
                                    width={200}
                                    height={200}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
