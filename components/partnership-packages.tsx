'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export default function RecruitingPackages() {
    const [isCopied, setIsCopied] = useState(false);

    const tableRows = [
        {
            label: 'Goals: Host more engaging events with the community',
            silver: true,
            gold: true,
            platinum: true,
        },
        {
            label: "Goals: Increase your company's exposure to competitive CS hires",
            silver: true,
            gold: true,
            platinum: true,
        },
        {
            label: 'Goals: Make lasting, deep connections with competitive CS hires',
            silver: false,
            gold: true,
            platinum: true,
        },
        {
            label: 'Goals: Target number of hires based on historical results from our partners',
            silver: '2-6',
            gold: '6-12',
            platinum: '12-20',
        },
        {
            label: 'Events: Host in-person events with Texas ACM',
            description: 'Examples include workshop, panel, talk, etc.',
            silver: '2 per year',
            gold: '2 per year',
            platinum: '4 per year',
        },
        {
            label: 'Events: Host a company-branded Hack Night',
            description: 'Two to four hour min-hackathon event',
            silver: 'N/A',
            gold: '1 per year',
            platinum: '2 per year',
        },
        {
            label: 'Events: Attend Fall Corporate Networking Banquet',
            description: 'Attracts 90 - 100 students',
            silver: '2 tickets',
            gold: '4 tickets',
            platinum: '6 tickets and Platinum Partner perks',
        },
        {
            label: 'Perks: Be listed and promoted as a partner of Texas ACM during general meetings and Instagram',
            silver: true,
            gold: true,
            platinum: true,
        },
        {
            label: 'Perks: Access to our marketing channels',
            description:
                'Access to over 1000+ members on our online platforms (Discord, Instagram stories, email newsletter)',
            silver: '1 message blast',
            gold: '3 message blasts',
            platinum: '5 message blasts',
        },
        {
            label: 'Perks: Access Corporate Banquet resume book',
            description: 'Hire corporate banquet attendees on time for the recruiting season',
            silver: true,
            gold: true,
            platinum: true,
        },
        {
            label: 'Perks: Access to ACM-wide resume book',
            description:
                'Diverse range of resumes from freshman to seniors looking for internships, exploratory programs, and new grad positions',
            silver: false,
            gold: true,
            platinum: true,
        },
        {
            label: 'Perks: Your merch & flyers in the org office',
            description: 'Distribute shirts, stickers, etc. to ACM members and increase exposure',
            silver: false,
            gold: true,
            platinum: true,
        },
        {
            label: "Perks: Join Texas ACM's Discord",
            description: 'Reach students faster through their preferred platform',
            silver: false,
            gold: true,
            platinum: true,
        },
        {
            label: 'Perks: Demographics and email collection at every event',
            description:
                'Access opt-in email collection at event-sign in to directly reach out to them, and receive demographic reports after the event',
            silver: false,
            gold: true,
            platinum: true,
        },
        {
            label: 'Perks: Priority for September events',
            description: 'Gold tier sponsors get higher priority for September events',
            silver: false,
            gold: 'high priority',
            platinum: 'highest priority',
        },
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText('corporate@texasacm.org');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    const renderCellContent = (value: string | boolean) => {
        if (value === true) {
            return <Check className="mx-auto h-6 w-6 text-green-500" />;
        }
        if (value === false) {
            return <span className="text-gray-400">—</span>;
        }
        return <span className="font-semibold">{value}</span>;
    };

    return (
        <section className="bg-white py-16">
            <div className="container px-4 sm:px-6 lg:px-8">
                {/* Intro Section */}
                <div className="mx-auto mb-12 max-w-3xl">
                    <h2 className="mb-6 text-3xl font-bold">Why Partner With Us?</h2>
                    <p className="mb-6 text-lg text-gray-700">
                        Texas ACM is the largest computer science student organization at UT Austin,
                        with over 500 active members. Our members are passionate, talented students
                        who are eager to make an impact.
                    </p>
                    <p className="mb-6 text-lg text-gray-700">
                        Texas ACM&apos;s events and initiatives are fully funded by our amazing
                        corporate partners.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>
                                Access to top CS talent from one of the nation&apos;s leading
                                programs
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>
                                Direct recruiting opportunities through events and resume book
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>Brand visibility to a large, engaged student audience</span>
                        </li>
                    </ul>
                </div>
                <div className="mx-auto max-w-7xl">
                    <Card className="shadow-lg drop-shadow-lg">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-bold">
                                Recruiting Packages
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-2/5"></TableHead>
                                        <TableHead className="w-1/5 text-center">
                                            <div className="text-xl font-bold text-gray-400">
                                                SILVER
                                            </div>
                                            <div className="text-lg text-gray-800">$2000/yr</div>
                                        </TableHead>
                                        <TableHead className="w-1/5 text-center">
                                            <div className="animate-shimmer bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-500 bg-[length:200%_auto] bg-clip-text text-xl font-bold text-transparent">
                                                GOLD
                                            </div>
                                            <div className="text-lg text-gray-800">$4000/yr</div>
                                        </TableHead>
                                        <TableHead className="w-1/5 text-center">
                                            <div className="animate-shimmer-fast bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 bg-[length:200%_auto] bg-clip-text text-xl font-bold text-transparent">
                                                PLATINUM
                                            </div>
                                            <div className="text-lg text-gray-800">$8000/yr</div>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tableRows.map((row) => (
                                        <TableRow key={row.label} className="border-b">
                                            <TableCell className="py-4">
                                                <p className="font-semibold text-gray-800">
                                                    {row.label}
                                                </p>
                                                {row.description && (
                                                    <p className="mt-1 text-sm text-gray-500">
                                                        {row.description}
                                                    </p>
                                                )}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {renderCellContent(row.silver)}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {renderCellContent(row.gold)}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {renderCellContent(row.platinum)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                    {/* Contact Section */}
                    <div className="mt-12 text-center">
                        <h3 className="mb-4 text-2xl font-bold">
                            Interested in Partnering with Us?
                        </h3>
                        <p className="mx-auto mb-8 max-w-2xl text-gray-700">
                            We&apos;d love to discuss how we can create a partnership that meets
                            your recruiting and branding goals while supporting our mission to
                            prepare students for successful careers.
                        </p>
                        <div className="mb-4 flex justify-center">
                            <div className="group relative">
                                <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded-md bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                    {isCopied ? 'Copied!' : 'Copy to clipboard'}
                                </div>
                                <Button
                                    className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-gray-100 px-3 py-2 font-mono text-sm text-gray-800 transition-colors hover:bg-gray-200"
                                    onClick={handleCopy}
                                    role="button"
                                >
                                    <span>corporate@texasacm.org</span>
                                    {isCopied ? (
                                        <Check className="h-4 w-4 text-green-500" />
                                    ) : (
                                        <Copy className="h-4 w-4" />
                                    )}
                                </Button>
                            </div>
                        </div>
                        <Button size="lg" asChild>
                            <a href="mailto:corporate@texasacm.org">Contact Our Corporate Team</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
