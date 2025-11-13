'use client';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { headshot_dir, officers } from '@/lib/officers';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa';

const useResponsiveIconSize = () => {
    const [size, setSize] = React.useState(20);

    React.useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth >= 1280) {
                // xl breakpoint
                setSize(36);
            } else if (window.innerWidth >= 1024) {
                // lg breakpoint
                setSize(28);
            } else {
                setSize(20);
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
};

// Helper function to render icons based on iconType
const renderIcon = (iconType: string, size: number) => {
    switch (iconType) {
        case 'linkedin':
            return <FaLinkedin size={size} />;
        case 'instagram':
            return <FaInstagram size={size} />;
        case 'github':
            return <FaGithub size={size} />;
        case 'website':
            return <FaGlobe size={size} />;
        default:
            return <FaGlobe size={size} />;
    }
};

export default function OfficerTeam() {
    const iconSize = useResponsiveIconSize();

    return (
        <section className="dark:bg-slate-950">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        Leadership Team
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-100">
                        Our officers are dedicated to serving the UT Austin CS community. Feel free
                        to reach out!
                    </p>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {officers.map((officer) => (
                            <Dialog key={officer.name}>
                                <DialogTrigger asChild>
                                    <Card className="group flex cursor-pointer flex-col overflow-hidden text-center shadow-md drop-shadow transition-all duration-300 hover:shadow-xl">
                                        <div className="relative aspect-square w-full">
                                            <Image
                                                src={headshot_dir + officer.image}
                                                alt={`Headshot of ${officer.name}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader className="flex-grow">
                                            <CardTitle className="text-xl lg:text-2xl">
                                                {officer.name}
                                            </CardTitle>
                                            <CardDescription className="lg:text-lg">
                                                {officer.position}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </DialogTrigger>
                                <DialogContent className="min-h-80 p-0 sm:max-w-2xl">
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="relative h-80 w-full sm:h-auto sm:w-5/12">
                                            <Image
                                                src={headshot_dir + officer.image}
                                                alt={officer.name}
                                                fill
                                                className="rounded-t-lg object-cover sm:rounded-l-lg sm:rounded-tr-none"
                                            />
                                        </div>
                                        <div className="flex flex-col p-6 sm:w-7/12">
                                            <DialogHeader className="text-left">
                                                <DialogTitle className="text-2xl font-bold lg:text-3xl">
                                                    {officer.name}
                                                </DialogTitle>
                                                <DialogDescription className="text-lg lg:text-xl">
                                                    {officer.position}
                                                </DialogDescription>
                                            </DialogHeader>

                                            <p className="my-4 flex-grow text-gray-700 lg:text-lg dark:text-white">
                                                {officer.bio}
                                            </p>

                                            <div className="mt-auto flex space-x-4 pt-4">
                                                {officer.socials.map((social) => (
                                                    <a
                                                        key={social.url}
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-gray-600 transition-opacity hover:opacity-80"
                                                        aria-label={`Visit ${officer.name}'s ${social.name}`}
                                                    >
                                                        {renderIcon(social.iconType, iconSize)}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
