'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
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
                        <h3 className="mb-6 text-center text-2xl font-semibold text-gray-900">
                            Events from 2024-25
                        </h3>
                        <div className="grid grid-cols-3 gap-6">
                            {images.map((image, index) => (
                                <Dialog key={index}>
                                    <DialogTrigger asChild>
                                        <div className="aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={200}
                                                height={200}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl p-4 pt-12">
                                        <DialogHeader className="sr-only">
                                            <DialogTitle>Event Flyer</DialogTitle>
                                        </DialogHeader>
                                        <div className="flex justify-center">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                width={0}
                                                height={0}
                                                className="h-auto w-auto rounded-lg"
                                            />
                                        </div>
                                    </DialogContent>
                                </Dialog>
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
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-200 transition-transform duration-300 hover:-translate-y-1">
                                        <Image
                                            src={signatureImage.src}
                                            alt={signatureImage.alt}
                                            width={200}
                                            height={200}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl p-4 pt-12">
                                    <DialogHeader className="sr-only">
                                        <DialogTitle>Event Image</DialogTitle>
                                    </DialogHeader>
                                    <div className="flex justify-center">
                                        <Image
                                            src={signatureImage.src}
                                            alt={signatureImage.alt}
                                            width={0}
                                            height={0}
                                            className="h-auto w-auto rounded-lg"
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
