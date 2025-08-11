import EventsSection from './events-section';

export default function CorporateEvents() {
    return (
        <EventsSection
            mainCard={{
                title: 'We have the resources you need to succeed as a professional CS student',
                cardTitle:
                    'Our corporate events have what you need to build connections with industry professionals',
                bulletPoints: [
                    'Networking opportunities with our partners',
                    'Resume reviews and career guidance workshops',
                    'Access to our resume book, which we share with partners',
                ],
            }}
            images={[
                {
                    src: '/events-page/pwc-linkedin-workshop.png',
                    alt: 'PwC LinkedIn workshop flyer',
                },
                { src: '/events-page/paycom.png', alt: 'Paycom x ACM x HACS event flyer ' },
                { src: '/events-page/intuit-gaming-night.png', alt: 'Intuit Gaming Night flyer' },
            ]}
            signatureCard={{
                title: 'Corporate Banquet',
                subTitle: 'Signature Corporate Event',
                bulletPoints: [
                    'Enjoy a complimentary dinner and casual conversations with professionals in tech',
                    'Use this as an oppportunity to network with engineers and recruiters with our partners',
                ],
            }}
            signatureImage={{
                src: '/events-page/corporate-banquet.jpg',
                alt: 'Coporate banquet picture',
            }}
        />
    );
}
