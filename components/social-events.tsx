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
                { src: '/events-page/acm-formal.png', alt: 'ACM Formal Flyer' },
                { src: '/events-page/trivia.png', alt: 'ACM Trivia Flyer' },
                { src: '/events-page/fall-retreat.png', alt: 'ACM Fall Retreat Flyer' },
            ]}
            signatureCard={{
                title: 'CS Week',
                subTitle: 'Signature Social Event',
                bulletPoints: [
                    'As the academic year nears its end, we celebrate with a week of fun activities hosted by orgs across the CS community',
                    'Attend the must-see family feud showdown between students and professors (pictured left)!',
                ],
            }}
            signatureImage={{
                src: '/events-page/family-feud.JPG',
                alt: 'ACM Family Feud at CS Week picture',
            }}
        />
    );
}
