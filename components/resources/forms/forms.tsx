import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { SIGNIN_URL } from '@/lib/constants';
import { Award, ExternalLink, LogIn, User, Users, Volleyball } from 'lucide-react';
import Link from 'next/link';

const pinnedForms = [
    {
        icon: <LogIn size={28} className="text-red-500" />,
        title: 'Event Sign In',
        description: 'A catch-all form for signing in to Texas ACM events.',
        link: { name: 'Sign In', href: SIGNIN_URL },
        dateAdded: '08/08/2025',
    },
    {
        icon: <Award size={28} className="text-blue-500" />,
        title: 'Officer Application',
        description:
            'Apply to become an officer and help build a better Texas ACM. The deadline to apply is [deadline].',
        link: { name: 'Apply Here', href: '#' },
        dateAdded: '08/08/2025',
    },
];

const latestForms = [
    {
        icon: <Users size={28} className="text-indigo-500" />,
        title: 'Mentor Sign Up',
        description: 'Sign up here to become a mentor for the Texas ACM Mentorship Program.',
        link: { name: 'Sign Up', href: '#' },
        dateAdded: '08/17/2025',
    },
    {
        icon: <User size={28} className="text-teal-500" />,
        title: 'Mentee Sign Up',
        description: 'Sign up here to become a mentee for the Texas ACM Mentorship Program.',
        link: { name: 'Sign Up', href: '#' },
        dateAdded: '08/17/2025',
    },
    {
        icon: <Volleyball size={28} className="text-purple-500" />,
        title: 'Intramural Sports Sign Up',
        description: 'Want to play sports for Texas ACM? Sign up here! ',
        link: { name: 'Sign Up', href: 'https://forms.gle/jVPQ2nd2nvPxKVD7A' },
        dateAdded: '08/17/2025',
    },
];

export default function Forms() {
    return (
        <section>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Pinned Forms</h2>
                        <p className="mt-2 text-muted-foreground">
                            Forms most important to our members
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {pinnedForms.map((form) => (
                            <Card
                                key={form.title}
                                className="flex w-full max-w-sm flex-col border-l-4 border-l-primary shadow-md"
                            >
                                <CardHeader>
                                    <CardTitle className="flex flex-row items-center gap-3">
                                        {form.icon} {form.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{form.description}</p>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between">
                                    <Link
                                        href={form.link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center font-medium text-primary hover:text-primary/80 hover:underline"
                                    >
                                        {form.link.name}
                                        <span className="ml-2">
                                            <ExternalLink size={16} />
                                        </span>
                                    </Link>
                                    <span className="text-sm text-muted-foreground">
                                        {form.dateAdded}
                                    </span>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">Latest Forms</h2>
                        <p className="mt-2 text-muted-foreground">All ACM-related forms</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {latestForms.map((form) => (
                            <Card
                                key={form.title}
                                className="flex w-full max-w-sm flex-col shadow-md"
                            >
                                <CardHeader>
                                    <CardTitle className="flex flex-row items-center gap-3">
                                        {form.icon} {form.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{form.description}</p>
                                </CardContent>
                                <CardFooter className="flex items-center justify-between">
                                    <Link
                                        href={form.link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center font-medium text-primary hover:text-primary/80 hover:underline"
                                    >
                                        {form.link.name}
                                        <span className="ml-2">
                                            <ExternalLink size={16} />
                                        </span>
                                    </Link>
                                    <span className="text-sm text-muted-foreground">
                                        {form.dateAdded}
                                    </span>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
