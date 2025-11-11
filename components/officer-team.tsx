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
        bio: 'Hey everyone! I’m Nidhi and I’m from Allen, Texas. I’m a Senior Computer Science major minoring in Business🤘🐮🧡. In my free time I like to crochet 🧶 and paint 🎨, and I also really love pigs 🐷 and Minecraft 🐓🧟!',
        socials: [
            {
                url: 'https://linkedin.com/in/nidhi-pabbathi',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/nid._.hi',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Gabriel Keller',
        position: 'Vice President',
        image: '/gabe.jpeg',
        bio: "Hey! I'm Gabriel! I'm from Austin and I'm a '27 CS major. I love to rock climb, play classical guitar, and code in my free time. Feel free to reach out if you want to connect, have questions about ACM, or want to get to know me!",
        socials: [
            {
                url: 'https://linkedin.com/in/gjkeller',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/atxgabe',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Diego Contreras',
        position: 'Treasurer',
        image: '/diego.jpeg',
        bio: "Hi guys, I'm Diego and I am from Houston, TX. I'm a 3rd year CS and Gov Major at UT Austin! My favorite things to do right now are biking, bouldering, and gaming 👽",
        socials: [
            {
                url: 'https://linkedin.com/in/diego-contreras-s',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/die.go.cs',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Mansi Madhani',
        position: 'Executive Board Member',
        image: '/mansi.jpeg',
        bio: "Hi! My name's Mansi and I'm from Frisco, TX. I'm a junior at UT studying computer science. In my free time, I enjoy hiking, exploring coffee shops, and drawing!",
        socials: [
            {
                url: 'https://linkedin.com/in/mansimadhani',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/mansimadhani_',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Praneel Seth',
        position: 'Executive Board Member',
        image: '/praneel.PNG',
        bio: "Hey y'all! I'm Praneel and I'm from Frisco, TX. I'm a junior at UT studying computer science and my specific field of interest is machine learning. Outside of school I enjoy playing basketball and dancing on Texas Dhoom 🔥.",
        socials: [
            {
                url: 'https://linkedin.com/in/praneelseth',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/praneelseth',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Casey Charleston',
        position: 'Senior Academics Officer',
        image: '/casey.jpeg',
        bio: "Hey there! I'm Casey. I'm from Prosper, TX and I'm currently in my 4th year in the 5-Year BS/MS Integrated Program in CS. I really enjoy bouldering and video games (silksong tomorrow). I'm also a TA for CS 314 and a part of the UTCS Ambassadors.",
        socials: [
            {
                url: 'https://linkedin.com/in/caseycharleston',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            {
                url: 'https://github.com/caseycharleston',
                icon: <FaGithub size={20} />,
                name: 'GitHub',
            },
            {
                url: 'https://www.instagram.com/imcaseyc',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Brayden Strong',
        position: 'Senior Academics Officer',
        image: '/brayden.jpeg',
        bio: 'Hey everyone, I’m Brayden and I’m from Longview, TX (look it up). I’m a senior at UT studying Computer Science. I mainly play video games, board games, and DND. If you see me around, say hi!',
        socials: [],
    },
    {
        name: 'Victoria Reddy',
        position: 'Senior Corporate Officer',
        image: '/victoria.jpeg',
        bio: "Hi, I'm Victoria! I'm from Flower Mound, TX, and I'm a sophomore at UT studying Computer Science.",
        socials: [
            {
                url: 'https://linkedin.com/in/victoria-reddy',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/victoriareddy_',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Niken Patel',
        position: 'Senior Finance Officer',
        image: '/niken.jpeg',
        bio: 'Hey yall, my name’s Niken and I’m from College Station, TX. I’m a sophomore CS major at UT. I really enjoy basketball 🏀 and tennis 🎾',
        socials: [
            {
                url: 'https://instagram.com/niken_p_29',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Stephanie Nguyen',
        position: 'Senior Marketing Officer',
        image: '/stephanie.jpeg',
        bio: 'Hello everyone, my name is Stephanie and I’m from Houston, Tx. I’m a Senior Computer Science Major at UT. I enjoy shopping and eating sweet treats.',
        socials: [
            {
                url: 'https://linkedin.com/in/stephanie-v-nguyen',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Void Zhou',
        position: 'Senior Marketing Officer',
        image: '/void.png',
        bio: "Hi guys, I'm Muyang---and I go by Void! I'm from Round Rock, TX, and I'm currently a sophomore CS major at UT Austin.",
        socials: [
            {
                url: 'https://linkedin.com/in/muyangzhou',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Naina Middela',
        position: 'Corporate Officer',
        image: '/naina.jpg',
        bio: "Hi y'all! My name is Naina, and I'm from Frisco, TX. I'm a junior at UT majoring in Computer Science:) 💻 I like AI, exploring world art forms, and dancing!",
        socials: [
            {
                url: 'https://linkedin.com/in/naina-middela',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Suhas Voolla',
        position: 'Corporate Officer',
        image: '/suhas.jpg',
        bio: "Hey y'all, I'm Suhas. I'm from Austin, TX and I'm a sophomore at UT studying CS with minors in Business and Robotics (soon). I enjoy flying drones, listening to music, and doomscrolling.",
        socials: [
            {
                url: 'https://linkedin.com/in/suhasvoolla',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/probablysuhas',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
            { url: 'https://suhas.one/', icon: <FaGlobe size={20} />, name: 'Website' },
        ],
    },
    {
        name: 'Frank Hou',
        position: 'Intramural Sports Chair',
        image: '/frank.jpeg',
        bio: "Hi Hi! My name is Frank. I am from ShanXi, China 🇨🇳. I'm a Junior CS Major. I am top 10 in Texas for Roblox Basketball 🏀",
        socials: [
            {
                url: 'https://linkedin.com/in/yufanhou',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Rishabh Mittal',
        position: 'Internal Officer',
        image: '/rishabh.png',
        bio: "Hey everyone! My name's Rishabh, and I'm from Sugar Land, TX. I'm a Junior CS Major at UT (Go Longhorns!). I love biking, photography, playing video games (especially Geometry Dash🟨∆∆∆, SSBU🗡, & Minecraft⛏️), and am looking forward to meeting all y'all! :D",
        socials: [
            {
                url: 'https://www.linkedin.com/in/rishabh-mittal-cs/',
                icon: <FaLinkedin size={20} />,
                name: 'LinkedIn',
            },
            {
                url: 'https://www.instagram.com/lil_mittal/',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Jayden Park',
        position: 'Internal Officer',
        image: '/jayden.jpg',
        bio: "Hey, I'm Jayden. I'm from Richardson, TX, and I'm a Sophomore at UT studying Computer Science. I really enjoy eating and taking picture of said food.",
        socials: [
            {
                url: 'https://instagram.com/jydnprk',
                icon: <FaInstagram size={20} />,
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Thomas Tran',
        position: 'Internal Officer',
        image: '/thomas.jpeg',
        bio: 'Hello! I’m Thomas, I’m from Colleyville, TX. I’m a Senior in CS and I love silly things like trying new tea 🫖, collecting popmarts 🎲, and video games 🎮 ',
        socials: [],
    },
];

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
                                                        {React.cloneElement(
                                                            social.icon as React.ReactElement,
                                                            { size: iconSize } as React.Attributes,
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
