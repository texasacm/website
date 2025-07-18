import Image from 'next/image';
import type { FC, JSX } from 'react';

type Tier = 'Gold' | 'Silver' | 'Bronze';

interface Partner {
    name: string;
    logo: string;
    tier: Tier;
    url: string;
}

const currentPartners: Partner[] = [
    {
        name: 'Paycom',
        logo: '/paycom.png',
        tier: 'Silver',
        url: 'https://www.paycom.com',
    },
    {
        name: 'Intuit',
        logo: '/intuit.svg',
        tier: 'Bronze',
        url: 'https://www.intuit.com',
    },
    {
        name: 'PwC',
        logo: '/pwc.png',
        tier: 'Bronze',
        url: 'https://www.pwc.com',
    },
    {
        name: 'YPropel',
        logo: '/ypropel.png',
        tier: 'Bronze',
        url: 'https://www.ypropel.com/',
    },
];

export const CurrentPartners: FC = (): JSX.Element => {
    // map each tier to a text color
    const tierColors: Record<Tier, string> = {
        Gold: 'text-yellow-600',
        Silver: 'text-gray-400',
        Bronze: 'text-amber-600',
    };

    // group partners by tier
    const partnersByTier = currentPartners.reduce<Partial<Record<Tier, Partner[]>>>(
        (acc, partner) => {
            if (!acc[partner.tier]) acc[partner.tier] = [];
            acc[partner.tier]!.push(partner);
            return acc;
        },
        {},
    );

    // define the order you want tiers to appear
    const tierOrder: Tier[] = ['Silver', 'Bronze'];

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
                                            <a
                                                href={partner.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-60 w-60 cursor-pointer items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-colors duration-200 hover:bg-gray-100 hover:shadow-lg"
                                            >
                                                <Image
                                                    src={partner.logo}
                                                    alt={`${partner.name} logo`}
                                                    width={150}
                                                    height={150}
                                                    className="object-contain"
                                                />
                                            </a>
                                            <div className="mt-4 text-center">
                                                <p className="text-lg font-medium">
                                                    {partner.name}
                                                </p>
                                                <p className="text-xs text-gray-500"></p>
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
