import EventsSection from './events-section';

export default function SocialEvents() {
    return (
        <EventsSection
            mainCard={{
                title: 'Build lasting friendships and create memories within the CS community',
                cardTitle:
                    'Our social events help you connect with fellow CS students and build a supportive community throughout your college journey',
                bulletPoints: [
                    'Game and trivia nights with fellow CS students',
                    'Outdoor retreats all around Austin',
                    'Social mixers with other ACM members and UT organizations',
                ],
            }}
            images={[
                { src: '/events-page/flyer.jpeg', alt: 'Social Event 1' },
                { src: '/events-page/flyer.jpeg', alt: 'Social Event 2' },
                { src: '/events-page/flyer.jpeg', alt: 'Social Event 3' },
            ]}
            signatureCard={{
                title: 'CS Week',
                subTitle: 'Signature Social Event',
                bulletPoints: [
                    'As the academic year nears its end, we celebrate with a week of fun activities hosted by organizations across the CS community',
                    'Fill in your event bingo card to earn UT swag and a chance to win sponsored prizes',
                ],
            }}
            signatureImage={{
                src: '/events-page/flyer.jpeg',
                alt: 'placeholder',
            }}
        />
    );
}
