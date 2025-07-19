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

export default function PartnershipPackages() {
    const [isCopied, setIsCopied] = useState(false);

    const tableRows = [
        { label: 'Number of Recruiting Events', gold: '4', silver: '2' },
        { label: 'Priority for September events', gold: true, silver: false },
        {
            label: 'Demographics and emails of event attendees',
            gold: true,
            silver: false,
        },
        { label: 'Access to ACM-wide resume book', gold: true, silver: false },
        {
            label: 'Corporate banquet & banquet resume book',
            gold: true,
            silver: true,
        },
        {
            label: 'Access to on-campus marketing channels',
            gold: true,
            silver: true,
        },
        {
            label: 'Access to 1,000+ Members on our socials',
            gold: true,
            silver: true,
        },
        { label: 'Distribute Merch to ACM Members', gold: true, silver: true },
    ];

    // This function copies the email to the clipboard and handles the visual feedback.
    const handleCopy = () => {
        // Use the Clipboard API to copy the text
        navigator.clipboard.writeText('corporate@texasacm.org');

        // Set the copied state to true to show the "Copied!" popup
        setIsCopied(true);

        // Reset the state after 2 seconds
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
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
                <div className="mx-auto max-w-4xl">
                    <Card className="shadow-md drop-shadow">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl font-bold">
                                Partnership Packages
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-1/3"></TableHead>
                                        <TableHead className="text-center">
                                            <div className="text-xl font-bold text-yellow-600">
                                                GOLD
                                            </div>
                                            <div className="text-sm text-gray-700">$7,000</div>
                                        </TableHead>
                                        <TableHead className="text-center">
                                            <div className="text-xl font-bold text-gray-500">
                                                SILVER
                                            </div>
                                            <div className="text-sm text-gray-700">$2,500</div>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tableRows.map((row) => (
                                        <TableRow key={row.label}>
                                            <TableCell className="font-medium text-gray-700">
                                                {row.label}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {typeof row.gold === 'boolean' ? (
                                                    row.gold ? (
                                                        <Check className="mx-auto h-5 w-5 text-green-500" />
                                                    ) : (
                                                        <span className="text-gray-400">—</span>
                                                    )
                                                ) : (
                                                    <span className="font-semibold">
                                                        {row.gold}
                                                    </span>
                                                )}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {typeof row.silver === 'boolean' ? (
                                                    row.silver ? (
                                                        <Check className="mx-auto h-5 w-5 text-green-500" />
                                                    ) : (
                                                        <span className="text-gray-400">—</span>
                                                    )
                                                ) : (
                                                    <span className="font-semibold">
                                                        {row.silver}
                                                    </span>
                                                )}
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
