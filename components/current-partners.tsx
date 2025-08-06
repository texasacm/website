import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import type { FC, JSX } from 'react';

type Tier = 'Platinum' | 'Gold' | 'Silver';

interface Partner {
    name: string;
    logo: string;
    tier: Tier;
    url: string;
}

const currentPartners: Partner[] = [
    {
        name: 'Atlassian',
        logo: '/partners/atlassian.png',
        tier: 'Platinum',
        url: 'https://www.atlassian.com',
    },
    {
        name: 'Dell',
        logo: '/partners/dell.png',
        tier: 'Silver',
        url: 'https://www.dell.com',
    },
    {
        name: 'Paycom',
        logo: '/partners/paycom.png',
        tier: 'Gold',
        url: 'https://www.paycom.com',
    },
    {
        name: 'FUTO',
        logo: '/partners/futo.svg',
        tier: 'Gold',
        url: 'https://futo.org/',
    },
];

export const CurrentPartners: FC = (): JSX.Element => {
    const tierStyles: Record<Tier, { text: string; shadow: string }> = {
        Platinum: {
            text: 'text-blue-600',
            shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.5)]',
        },
        Gold: {
            text: 'text-yellow-600',
            shadow: 'shadow-[0_0_20px_rgba(234,179,8,0.5)]',
        },
        Silver: {
            text: 'text-gray-400',
            shadow: 'shadow-[0_0_20px_rgba(156,163,175,0.5)]',
        },
    };

    const partnersByTier = currentPartners.reduce<Partial<Record<Tier, Partner[]>>>(
        (acc, partner) => {
            if (!acc[partner.tier]) acc[partner.tier] = [];
            acc[partner.tier]!.push(partner);
            return acc;
        },
        {},
    );

    const tierOrder: Tier[] = ['Platinum', 'Gold', 'Silver'];

    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-6xl">
                <h3 className="mb-12 text-center text-2xl font-bold">Our Current Partners</h3>

                {tierOrder.map((tier) => {
                    const list = partnersByTier[tier];
                    if (!list || list.length === 0) return null;

                    return (
                        <div key={tier} className="mb-12 text-center">
                            <h4 className={`mb-6 text-xl font-semibold ${tierStyles[tier].text}`}>
                                {tier} Partners
                            </h4>
                            <div className="flex flex-wrap justify-center gap-12">
                                {list.map((partner) => (
                                    <Link
                                        key={partner.name}
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-transform duration-300 hover:-translate-y-1"
                                    >
                                        <Card
                                            className={`h-60 w-60 cursor-pointer items-center justify-center p-6 transition-all ${tierStyles[partner.tier].shadow}`}
                                        >
                                            <CardContent className="flex h-full w-full items-center justify-center p-0">
                                                <Image
                                                    src={partner.logo}
                                                    alt={`${partner.name} logo`}
                                                    width={150}
                                                    height={150}
                                                    className="object-contain"
                                                />
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CurrentPartners;
