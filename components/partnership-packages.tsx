'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Check } from 'lucide-react';

export default function RecruitingPackages() {
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
                <Card className="mx-auto max-w-7xl shadow-lg drop-shadow-lg">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl font-bold">Recruiting Packages</CardTitle>
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
            </div>
        </section>
    );
}
