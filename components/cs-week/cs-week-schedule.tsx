import Header from '@/components/header';
import Link from 'next/link';
import CSWeekScheduleEvent from './cs-week-schedule-event';
import { Card, CardTitle } from '../ui/card';

const scheduleDays = [
    {
        day: 'Monday',
        date: 'April 13th',
        events: [
            {
                time: '5:00 - 6:00 PM',
                location: 'GDC 2.216',
                title: 'CS Week Kickoff',
                description:
                    'First time attending or need a refresher? Learn everything there is to know about CS Week and how to make the most out of it at our kickoff event!',
            },
            {
                time: '6:00 - 7:00 PM',
                location: 'GDC 1.406',
                title: 'Build Your Own Boss (EGaDS!)',
                description:
                    'There will be different stations to explore the different aspects of game development, culminating in a playable boss fight. Participants can engage with various disciplines and learn how to create the small contributions that make up a game, whether that be sketching a simple design, adding a game mechanic, or voice acting an enemy, participants can build up their own boss, their own way!',
            },
            {
                time: '7:00 - 8:00 PM',
                location: 'GDC 1.406',
                title: 'Problem-Solving Challenge (TPEO)',
                description:
                    "Join TPEO for some quick, fun, and collaborative problem-solving! Attendees will use engineering, product management, and design skills to develop an innovative solution in response to a real-world industry challenge. Don't miss out on the excitement!",
            },
        ],
    },
    {
        day: 'Tuesday',
        date: 'April 14th',
        events: [
            {
                time: '12:00 - 5:00 PM',
                location: 'GDC - Various Rooms',
                title: 'Easter Eggsploration (DiRP)',
                description: (
                    <>
                        Interested in learning about research at UT? Like candy? Then come to the
                        Research Egg-sploration event on Tuesday April 14th from 12-5 PM, where you
                        can talk to different professors about their research and get candy. You can
                        come and go any time. This is a good opportunity if you are interested in
                        getting started in research or learning about research at UT. Check out the
                        professors and timing{' '}
                        <Link
                            href="https://tinyurl.com/easterEggsploration2026"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-[#0F6E91] underline underline-offset-2"
                        >
                            here
                        </Link>
                        , and see you there.
                    </>
                ),
            },
            {
                time: '5:00 - 6:00 PM',
                location: 'GDC 2.210',
                title: 'Trivia Night (WiCS)',
                description:
                    'WiCS Trivia Night is a fun, low-pressure social event where you can team up with friends, meet other women in tech, and compete in a mix of general + tech-themed trivia for prizes. Join us for a great time!',
            },
            {
                time: '6:00 - 7:00 PM',
                location: 'GDC 2.210',
                title: 'Tierlists with ABCS',
                description:
                    'Have a hot topic you want to make a tierlist for? Come join us and make the best tierlist to win prizes!',
            },
            {
                time: '7:00 - 8:00 PM',
                location: 'GDC 2.216',
                title: 'ECLAIR Robotics Live!',
                description:
                    'Come learn more about ECLAIR and compete in a robotics design competition! Handle cool hardware, see our robotic dog, and battle it out to determine who the best robotics designer is!',
            },
            {
                time: '8:00 - 9:00 PM',
                location: 'GDC 5.302',
                title: "Freetail Hackers' Ideathon",
                description:
                    "Freetail Hackers' Ideathon is a fast-paced idea competition where participants have a limited amount of time to brainstorm a tech-focused idea and pitch it to a live audience. After all pitches, the audience votes to decide which idea stands out as the most creative, impactful, or innovative",
            },
        ],
    },
    {
        day: 'Wednesday',
        date: 'April 15th',
        events: [
            {
                time: '3:00 - 5:00 PM',
                location: 'GDC Atrium',
                title: 'CNS Pop-Up Resume Reviews (FoCS)',
                description:
                    'Get your resume application-ready with resume reviews right at the GDC!',
            },
            {
                time: '5:00 - 6:00 PM',
                location: 'GDC 4.304',
                title: 'Get to know Roadshow!',
                description:
                    'Come get to know our org in a fun, low pressure environment with fun trivia questions and an intro to our Finch bots, which we use in our workshops at school! Enjoy some food and relax during midterms season!',
            },
            {
                time: '6:00 - 7:00 PM',
                location: 'GDC 5.304',
                title: 'The Quantum Playground (Quantum Collective)',
                description:
                    'Join Quantum Collective for an opportunity to participate in a real-time demonstration of the CHSH game, enacting the roles of Alice and Bob; this event will be accessible to participants with varying levels of experience with quantum computing. There will be free prizes and merch!',
            },
            {
                time: '7:00 - 8:00 PM',
                location: 'GDC 2.216',
                title: 'Gone Phishing (ISSS)',
                description:
                    'What makes someone take the bait? We’ll break down phishing psychology, common delivery methods, and mitigation strategies. Open to all experience levels!',
            },
            {
                time: '8:00 - 9:00 PM',
                location: 'GDC 1.304',
                title: 'Food & Finals Prep Night! (Girls Who Code)',
                description:
                    'Join Girls Who Code UT Austin for a supportive space focused on study planning, productivity tips, and finals preparation. We’ll help you build a strong game plan so you can feel confident and organized heading into exams. Come enjoy free food, grab a planner, and form study groups while learning helpful strategies to stay on track this finals season like a pro!',
            },
        ],
    },
    {
        day: 'Thursday',
        date: 'April 16th',
        events: [
            {
                time: 'idk',
                location: 'GDC Atrium',
                title: 'Undergrad Research Showcase (UTCS)',
                description: '',
            },
            {
                time: '5:00 - 6:00 PM',
                location: 'GDC 1.406',
                title: 'Scavenger Hunt (CSTS)',
                description:
                    'Teams will race against each other to solve interesting problems and puzzles hidden throughout the GDC. It is a high-speed challenge to see which group can navigate the scavenger hunt and complete all the tasks first.',
            },
            {
                time: '6:00 - 7:00 PM',
                location: 'GDC 1.304',
                title: 'Build a Website with HACS',
                description:
                    'Join HACS in a straightforward and beginner friendly workshop that will guide and teach you the skills you need to build your own simple website. No previous experience needed!',
            },
            {
                time: '7:00 - 9:00 PM',
                location: 'GDC 1.406',
                title: 'The Imitation Game (Q++)',
                description:
                    "Cumberbatch and Cryptography? Come watch The Imitation Game, a movie based off of Alan Turing's life, with us!",
            },
        ],
    },
    {
        day: 'Friday',
        date: 'April 17th',
        events: [
            {
                time: '5:00 - 9:00 PM',
                location: 'GDC 2.216',
                title: 'Family Feud (ACM)',
                description:
                    'How often do CS majors touch grass? What is our favorite programming language and why is it Rust? All of your burning questions about CS majors will be answered tonight! Students and professors will face off, Family Feud-style, to celebrate the end of CS Week and distribute prizes. Eat pizza, cheer (or jeer) for professors, and play along! Follow us on Instagram (@utcsweek) for more info!',
            },
        ],
    },
] as const;

export default function CSWeekSchedule() {
    return (
        <section className="bg-[#7A8F56]">
            <Header hideHeader={true} />
            <div className="container px-4 py-12 text-center sm:px-6 lg:px-8">
                <h1 className="mb-4 font-pagkaki text-6xl font-bold text-white">Schedule</h1>
                <div className="grid grid-cols-1 gap-4 px-0 py-8 sm:px-4 lg:grid-cols-1 lg:px-8">
                    {scheduleDays.map((day) => (
                        <Card key={day.day} className="mx-40 p-8 text-left">
                            <CardTitle className="mb-4 text-center text-lg font-bold text-[#50241A] xl:text-xl">
                                {day.day}, {day.date}
                            </CardTitle>
                            <CSWeekScheduleEvent events={day.events} />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
