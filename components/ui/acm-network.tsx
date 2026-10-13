import Image from 'next/image';
import type { FC, JSX } from 'react';

interface Company {
    name: string;
    logo: string;
}

const companies: Company[] = [
    { name: 'PwC', logo: '/partners/pwc.png' },
    { name: 'Fidelity', logo: '/partners/fidelity.png' },
    { name: 'Sandia National Laboratories', logo: '/partners/sandia.png' },
    { name: 'Visa', logo: '/network-comp/visa.png' },
    { name: 'Tesla', logo: '/network-comp/tesla.png' },
    { name: 'Nominal', logo: '/network-comp/nominal.png' },
    { name: 'Microsoft', logo: '/network-comp/microsoft.png' },
    { name: 'Meta', logo: '/network-comp/meta.png' },
    { name: 'IBM', logo: '/network-comp/ibm.png' },
    { name: 'Google', logo: '/network-comp/google.png' },
    { name: 'Dell', logo: '/network-comp/dell.png' },
    { name: 'Defense', logo: '/network-comp/defense.png' },
    { name: 'Capital One', logo: '/network-comp/capitalone.png' },
    { name: 'AWS', logo: '/network-comp/aws.png' },
    { name: 'Apple', logo: '/network-comp/apple.png' },
    { name: 'Abbott', logo: '/network-comp/abbott.png' },


];

export const AcmNetwork: FC = (): JSX.Element => {
    return (
        <section className="pt-16 pb-4">
            <style>{`
                @keyframes acm-marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .acm-marquee-track {
                    animation: acm-marquee 30s linear infinite;
                }
                .acm-marquee:hover .acm-marquee-track {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .acm-marquee-track { animation: none; }
                }
            `}</style>

            <div className="mx-auto max-w-6xl px-4 text-center">
                <h2 className="mb-4 text-4xl font-bold">ACM Network</h2>
                <p className="mb-12 text-lg text-gray-600">Where ACM Officers have gone</p>
            </div>

            <div
                className="acm-marquee overflow-hidden"
                style={{
                    maskImage:
                        'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage:
                        'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
            >
                <div className="acm-marquee-track flex w-max items-center">
                    {[...companies, ...companies].map((company, i) => (
                        <div
                            key={`${company.name}-${i}`}
                            className="flex h-24 w-48 shrink-0 items-center justify-center px-8"
                            aria-hidden={i >= companies.length}
                        >
                            <Image
                                src={company.logo}
                                alt={i < companies.length ? `${company.name} logo` : ''}
                                width={140}
                                height={80}
                                priority={i < companies.length}
                                loading={i < companies.length ? undefined : 'eager'}
                                className="max-h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcmNetwork;
