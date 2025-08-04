import EventsSection from './events-section';

export default function AcademicEvents() {
    return (
        <EventsSection
            mainCard={{
                title: 'Accelerate your academic journey and explore your passion for computer science',
                cardTitle:
                    'Our academic events provide the foundation and advanced knowledge you need to excel in CS education and beyond',
                bulletPoints: [
                    'Learn new skills at our technical workshops',
                    'Practice creating projects at our custom hackathons',
                    'Academic help via our mentorship program and group study sessions',
                ],
            }}
            images={[
                { src: '/events-page/flyer.jpeg', alt: 'Academic Event 1' },
                { src: '/events-page/flyer.jpeg', alt: 'Academic Event 2' },
                { src: '/events-page/flyer.jpeg', alt: 'Academic Event 3' },
            ]}
            signatureCard={{
                title: 'Pancakes with Professors',
                subTitle: 'Signature Academic Event',
                bulletPoints: [
                    'Enjoy free pancakes while chatting with CS faculty',
                    'Prepare for registration by learning about classes and research opportunities for next semester',
                ],
            }}
            signatureImage={{
                src: '/events-page/flyer.jpeg',
                alt: 'placeholder',
            }}
        />
    );
}
