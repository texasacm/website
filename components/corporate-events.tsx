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
                { src: '/events-page/flyer.jpeg', alt: 'Corporate Event 1' },
                { src: '/events-page/flyer.jpeg', alt: 'Corporate Event 2' },
                { src: '/events-page/flyer.jpeg', alt: 'Corporate Event 3' },
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
                src: '/events-page/flyer.jpeg',
                alt: 'placeholder',
            }}
        />
    );
}
