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
];

export const CurrentPartners: FC = (): JSX.Element => {
    const tierColors: Record<Tier, string> = {
        Platinum: 'text-blue-600',
        Gold: 'text-yellow-600',
        Silver: 'text-gray-400',
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
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <h3 className="mb-12 text-center text-2xl font-bold">Our Current Partners</h3>

                    {tierOrder.map((tier) => {
                        const list = partnersByTier[tier];
                        if (!list || list.length === 0) return null;

                        return (
                            <div key={tier} className="mb-12 text-center">
                                <h4 className={`mb-6 text-xl font-semibold ${tierColors[tier]}`}>
                                    {tier} Partners
                                </h4>
                                <div className="flex flex-wrap justify-center gap-12">
                                    {list.map((partner) => (
                                        <div
                                            key={partner.name}
                                            className="flex flex-col items-center"
                                        >
                                            <Link
                                                href={partner.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-60 w-60 cursor-pointer items-center justify-center rounded-lg bg-white p-6 shadow-md drop-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                            >
                                                <Image
                                                    src={partner.logo}
                                                    alt={`${partner.name} logo`}
                                                    width={150}
                                                    height={150}
                                                    className="object-contain"
                                                />
                                            </Link>
                                            <div className="mt-4 text-center">
                                                <p className="text-lg font-medium">
                                                    {partner.name}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CurrentPartners;