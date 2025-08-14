'use client';

import Header from '@/components/header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const hero_slides_dir = '/home-page-slides';

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        hero_slides_dir + '/family_feud_25.JPG',
        hero_slides_dir + '/acm_retreat_24.jpg',
        hero_slides_dir + '/acm_thanksgiving_24.jpg',
        hero_slides_dir + '/pancakes_and_professors_24.jpg',
        hero_slides_dir + '/paycom_fa24.jpeg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetElement = document.getElementById('join');
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section className="relative flex h-screen items-center justify-center overflow-hidden">
            <Header />
            <div className="absolute inset-0 z-0">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={image || '/placeholder.svg'}
                            alt={`Texas ACM Hero Image ${index + 1}`}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="container relative z-10 px-4 text-center sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-3xl"
                >
                    <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                        Hey there! We&apos;re Texas ACM.
                    </h1>
                    <p className="mb-8 text-xl text-white/90 md:text-2xl">
                        The largest computer science student organization @ UT Austin 🤘
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" className="text-lg">
                            <a href="#join" onClick={handleSmoothScroll}>
                                Join Us
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="border-white bg-white text-lg text-black hover:bg-white/90"
                        >
                            <Link href="/about">Learn More</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="border-white bg-white text-lg text-black hover:bg-white/90"
                        >
                            <Link href="/partnership">Partnership Inquiries</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
