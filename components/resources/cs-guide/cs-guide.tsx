import * as React from 'react';
import { BookOpen, Briefcase, Code, Compass, GraduationCap, Users } from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const guideSections = [
    {
        icon: <Compass size={28} className="text-blue-500" />,
        theme: 'Getting Started at UTCS',
        description: 'Everything you need to know to get through your first year in UTCS.',
        links: [
            { name: 'First-Year FAQ', href: '#' },
            { name: 'Introductory Course Flowchart', href: '#' },
            { name: 'Essential Developer Tools', href: '#' },
        ],
    },
    {
        icon: <BookOpen size={28} className="text-green-500" />,
        theme: 'Academic Success',
        description:
            'Resources for excelling in your courses, including degree planning, tutoring, and effective study habits.',
        links: [
            { name: 'Course Planning Guide', href: '#' },
            { name: 'Find a Study Group', href: '#' },
            { name: 'Office Hours & Tutoring Schedule', href: '#' },
        ],
    },
    {
        icon: <Briefcase size={28} className="text-indigo-500" />,
        theme: 'Career & Internships',
        description:
            'Prepare for your career with resume help, interview practice, and internship search strategies.',
        links: [
            { name: 'CS Resume Template', href: '#' },
            { name: 'CNS Handshake Portal', href: '#' },
            { name: 'Internship & Job Boards', href: '#' },
        ],
    },
    {
        icon: <Users size={28} className="text-red-500" />,
        theme: 'CS Community',
        description:
            'Connect with peers and get involved in the vibrant CS community at UT Austin.',
        links: [
            { name: 'List of CS/Tech Orgs', href: '#' },
            { name: 'UTCS Calendar', href: '#' },
            { name: 'Work for UTCS', href: '#' },
        ],
    },
    {
        icon: <GraduationCap size={28} className="text-yellow-500" />,
        theme: 'Research',
        description:
            'Dive deeper into specialized fields of computer science and learn about research opportunities.',
        links: [
            { name: 'Find a Research Lab', href: '#' },
            { name: 'Upper-Division Course Electives', href: '#' },
            { name: 'Graduate School Information', href: '#' },
        ],
    },
    {
        icon: <Code size={28} className="text-purple-500" />,
        theme: 'Projects',
        description:
            'Get inspired by projects from other students and find resources to build your own.',
        links: [
            { name: 'Student Project Gallery', href: '#' },
            { name: 'Hackathon & Competition Info', href: '#' },
            { name: 'APIs & Datasets for Projects', href: '#' },
        ],
    },
];

export default function CSGuide() {
    return (
        <div className="bg-gray-50">
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {guideSections.map((section) => (
                            <Card key={section.theme} className="flex flex-col shadow-md">
                                <CardHeader>
                                    <CardTitle className="flex flex-row items-center gap-3">
                                        {' '}
                                        {section.icon} {section.theme}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{section.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <ul className="w-full space-y-3">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                <a
                                                    href={link.href}
                                                    className="group inline-flex items-center font-medium text-blue-600 transition-colors hover:text-blue-800"
                                                >
                                                    {link.name}
                                                    <span className="ml-2 transition-transform group-hover:translate-x-1">
                                                        &rarr;
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
