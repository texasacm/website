import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface SocialLink {
    url: string;
    icon: React.ReactNode;
    name: string;
}

interface Officer {
    name: string;
    position: string;
    image: string;
    bio: string;
    socials: SocialLink[];
}

const headshot_dir = '/officer-headshots-2025-26';

const officers: Officer[] = [
    {
        name: 'Nidhi Pabbathi',
        position: 'President',
        image: '/nidhi.jpg',
        bio: 'bingus.',
        socials: [
            { url: 'https://twitter.com/janedoe', icon: <FaTwitter size={20} />, name: 'Twitter' },
            {
                url: 'https://linkedin.com/in/janedoe',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/janedoe', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Gabriel Keller',
        position: 'Vice President',
        image: '/gabe.jpeg',
        bio: 'Placeholder.',
        socials: [
            {
                url: 'https://twitter.com/johnsmith',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/johnsmith',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/johnsmith', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Diego Contreras',
        position: 'Treasurer',
        image: '/diego.jpeg',
        bio: 'Placeholder.',
        socials: [
            {
                url: 'https://twitter.com/alexjohnson',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/alexjohnson',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/alexjohnson', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Mansi Madhani',
        position: 'Executive Board Member',
        image: '/mansi.jpeg',
        bio: 'Computer Science junior specializing in full-stack development.',
        socials: [
            {
                url: 'https://twitter.com/samwilson',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/samwilson',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/samwilson', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Praneel Seth',
        position: 'Executive Board Member',
        image: '/praneel.PNG',
        bio: 'Senior in Computer Science with a minor in Business.',
        socials: [
            {
                url: 'https://twitter.com/taylorbrown',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/taylorbrown',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/taylorbrown', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Casey Charleston',
        position: 'Senior Academics Officer',
        image: '/casey.jpeg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Brayden Strong',
        position: 'Senior Academics Officer',
        image: '/brayden.jpeg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Victoria Reddy',
        position: 'Senior Corporate Officer',
        image: '/victoria.jpeg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Niken Patel',
        position: 'Senior Finance Officer',
        image: '/niken.jpeg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Stephanie Nguyen',
        position: 'Senior Marketing Officer',
        image: '/stephanie.jpeg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Void Zhou',
        position: 'Senior Marketing Officer',
        image: '/void.png',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Naina Middela',
        position: 'Corporate Officer',
        image: '/naina.jpg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Suhas Voolla',
        position: 'Corporate Officer',
        image: '/suhas.jpg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Frank Hou',
        position: 'Intramural Sports Chair',
        image: '/frank.jpeg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Rishabh Mittal',
        position: 'Internal Officer',
        image: '/rishabh.png',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Jayden Park',
        position: 'Internal Officer',
        image: '/jayden.jpg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
    {
        name: 'Thomas Tran',
        position: 'Internal Officer',
        image: '/thomas.jpeg',
        bio: 'Junior double-majoring in Computer Science and Mathematics.',
        socials: [
            {
                url: 'https://twitter.com/jordanlee',
                icon: <FaTwitter size={20} />,
                name: 'Twitter',
            },
            {
                url: 'https://linkedin.com/in/jordanlee',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            { url: 'https://github.com/jordanlee', icon: <FaGithub size={20} />, name: 'GitHub' },
        ],
    },
];

export default function OfficerTeam() {
    return (
        <section>
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                        Leadership Team
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our officers are dedicated to serving the UT Austin CS community. Feel free
                        to reach out!
                    </p>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {officers.map((officer) => (
                            <Dialog key={officer.name}>
                                <DialogTrigger asChild>
                                    <Card className="group flex cursor-pointer flex-col overflow-hidden text-center shadow-md drop-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                        <div className="relative aspect-square w-full">
                                            <Image
                                                src={headshot_dir + officer.image}
                                                alt={`Headshot of ${officer.name}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader className="flex-grow">
                                            <CardTitle className="text-xl">
                                                {officer.name}
                                            </CardTitle>
                                            <CardDescription>{officer.position}</CardDescription>
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
                                                <DialogTitle className="text-2xl font-bold">
                                                    {officer.name}
                                                </DialogTitle>
                                                <DialogDescription className="text-md">
                                                    {officer.position}
                                                </DialogDescription>
                                            </DialogHeader>

                                            <p className="my-4 flex-grow text-gray-700">
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
                                                        {React.cloneElement(
                                                            social.icon as React.ReactElement,
                                                        )}
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
