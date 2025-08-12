import { Briefcase, Compass, ExternalLink, GraduationCap, Users } from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const guideSections = [
    {
        icon: <Compass size={28} className="text-blue-500" />,
        theme: 'Getting Started at UTCS',
        description: 'Everything you need to know to get through your first year in UTCS.',
        links: [
            { name: 'Creating a CS Account', href: 'https://www.cs.utexas.edu/faq/691' },
            {
                name: 'SSHing into the Computer Labs',
                href: 'https://www.cs.utexas.edu/facilities/documentation/ssh-keys-cs-mac-and-linux',
            },
        ],
    },
    {
        icon: <Briefcase size={28} className="text-indigo-500" />,
        theme: 'Career & Internships',
        description:
            'Prepare for your career with resume help, interview practice, and internship search strategies.',
        links: [
            {
                name: 'Resume Resources',
                href: 'https://careerservices.cns.utexas.edu/resources/resumes',
            },
            { name: 'CNS 12Twenty Portal', href: 'https://utexas.12twenty.com/dashboard/' },
        ],
    },
    {
        icon: <Users size={28} className="text-red-500" />,
        theme: 'CS Community',
        description:
            'Connect with peers and get involved in the vibrant CS community at UT Austin.',
        links: [
            {
                name: 'List of CS/Tech Orgs',
                href: 'https://www.cs.utexas.edu/undergraduate-program/student-engagement-and-support/student-organizations',
            },
            { name: 'UTCS Calendar', href: 'https://apps.cs.utexas.edu/calendar/' },
        ],
    },
    {
        icon: <GraduationCap size={28} className="text-yellow-500" />,
        theme: 'Research',
        description:
            'Dive deeper into specialized fields of computer science and learn about research opportunities.',
        links: [
            {
                name: 'Undergraduate Research Resources',
                href: 'https://www.cs.utexas.edu/undergraduate-program/student-engagement-and-support/undergraduate-research',
            },
            { name: 'UTCS Publications', href: 'https://www.cs.utexas.edu/research/publications' },
        ],
    },
];

export default function QuickAccess() {
    return (
        <section>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Quick Access</h2>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-4 lg:grid-cols-2">
                    {guideSections.map((section) => (
                        <Card
                            key={section.theme}
                            className="flex w-full max-w-lg flex-col shadow-md"
                        >
                            <CardHeader>
                                <CardTitle className="flex flex-row items-center gap-3">
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
                                            <Link
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center font-medium text-primary hover:text-primary/80 hover:underline"
                                            >
                                                {link.name}
                                                <span className="ml-2">
                                                    <ExternalLink size={16} />
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
