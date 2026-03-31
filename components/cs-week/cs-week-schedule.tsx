import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import CSWeekScheduleEvent from './cs-week-schedule-event';
import { Card, CardTitle } from '../ui/card';

const floatingFlyers = [
    { left: '4%', size: 58, delay: '-3s', duration: '31s', rotation: '-12deg', drift: '48px' },
    { left: '9%', size: 68, delay: '-16s', duration: '38s', rotation: '11deg', drift: '-62px' },
    { left: '14%', size: 72, delay: '-8s', duration: '34s', rotation: '-8deg', drift: '56px' },
    { left: '19%', size: 61, delay: '-22s', duration: '36s', rotation: '13deg', drift: '-44px' },
    { left: '25%', size: 66, delay: '-12s', duration: '33s', rotation: '-10deg', drift: '60px' },
    { left: '31%', size: 78, delay: '-27s', duration: '40s', rotation: '15deg', drift: '-68px' },
    { left: '37%', size: 63, delay: '-6s', duration: '30s', rotation: '-14deg', drift: '52px' },
    { left: '42%', size: 74, delay: '-19s', duration: '37s', rotation: '9deg', drift: '-58px' },
    { left: '48%', size: 59, delay: '-10s', duration: '32s', rotation: '-7deg', drift: '46px' },
    { left: '53%', size: 70, delay: '-24s', duration: '39s', rotation: '12deg', drift: '-72px' },
    { left: '58%', size: 62, delay: '-5s', duration: '29s', rotation: '-11deg', drift: '50px' },
    { left: '64%', size: 76, delay: '-18s', duration: '35s', rotation: '10deg', drift: '-64px' },
    { left: '70%', size: 57, delay: '-13s', duration: '31s', rotation: '-13deg', drift: '54px' },
    { left: '76%', size: 73, delay: '-29s', duration: '41s', rotation: '14deg', drift: '-70px' },
    { left: '82%', size: 65, delay: '-9s', duration: '34s', rotation: '-9deg', drift: '58px' },
    { left: '87%', size: 79, delay: '-21s', duration: '38s', rotation: '8deg', drift: '-60px' },
    { left: '92%', size: 60, delay: '-14s', duration: '33s', rotation: '-12deg', drift: '47px' },
    { left: '96%', size: 69, delay: '-26s', duration: '36s', rotation: '11deg', drift: '-66px' },
] as const;

const bottomGrassSprites = [
    { src: '/cs-week/assets/grass1.png', width: 125, height: 159, size: '3.75rem' },
    { src: '/cs-week/assets/grass2.png', width: 137, height: 163, size: '4rem' },
    { src: '/cs-week/assets/grass3.png', width: 228, height: 180, size: '4.5rem' },
] as const;

const bottomGrassDecorations = Array.from({ length: 36 }, (_, index) => {
    const sprite = bottomGrassSprites[index % bottomGrassSprites.length];
    const offsets = ['0rem', '0.15rem', '0.35rem', '0.1rem', '0.25rem', '0.4rem'] as const;
    const rotations = [-8, 5, -4, 7, -6, 4, -3, 6] as const;

    return {
        ...sprite,
        left: `${1 + index * 2.8}%`,
        bottom: offsets[index % offsets.length],
        rotate: rotations[index % rotations.length],
    };
});

const bottomDandelions = [
    {
        src: '/cs-week/assets/dandelion.png',
        width: 212,
        height: 641,
        left: '11%',
        bottom: '0.5rem',
        size: '8rem',
        rotate: '-4deg',
    },
    {
        src: '/cs-week/assets/dandelions.png',
        width: 458,
        height: 602,
        left: '33%',
        bottom: '0.4rem',
        size: '10.5rem',
        rotate: '3deg',
    },
    {
        src: '/cs-week/assets/dandelion.png',
        width: 212,
        height: 641,
        left: '61%',
        bottom: '0.2rem',
        size: '7.5rem',
        rotate: '5deg',
    },
    {
        src: '/cs-week/assets/dandelions.png',
        width: 458,
        height: 602,
        left: '84%',
        bottom: '0.35rem',
        size: '11rem',
        rotate: '-3deg',
    },
] as const;

const bottomFrog = {
    src: '/cs-week/assets/frog.png',
    width: 366,
    height: 335,
    left: '72%',
    bottom: '0.5rem',
    size: '6.5rem',
    rotate: '-5deg',
} as const;

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
        <section className="relative overflow-hidden bg-[#7A8F56]">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
                {floatingFlyers.map((flyer, index) => (
                    <Image
                        key={`${flyer.left}-${index}`}
                        src="/cs-week/assets/dandy-flyer.png"
                        alt=""
                        width={116}
                        height={142}
                        className="schedule-flyer absolute h-auto"
                        style={{
                            left: flyer.left,
                            width: `${flyer.size}px`,
                            animationDelay: flyer.delay,
                            animationDuration: flyer.duration,
                            ['--flyer-rotation' as string]: flyer.rotation,
                            ['--flyer-drift' as string]: flyer.drift,
                        }}
                    />
                ))}
            </div>
            <Header hideHeader={true} />
            <div className="relative z-20 container px-4 pb-96 pt-12 text-center sm:px-6 sm:pb-[26rem] md:pb-[30rem] lg:px-8">
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
            <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-96 overflow-hidden sm:h-[26rem] md:h-[30rem]"
                aria-hidden="true"
            >
                {bottomGrassDecorations.map((grass, index) => (
                    <Image
                        key={`${grass.src}-${index}`}
                        src={grass.src}
                        alt=""
                        width={grass.width}
                        height={grass.height}
                        className="absolute h-auto"
                        style={{
                            left: grass.left,
                            bottom: grass.bottom,
                            width: `clamp(2.75rem, 4vw, ${grass.size})`,
                            transform: `translateX(-50%) rotate(${grass.rotate}deg)`,
                        }}
                    />
                ))}
                {bottomDandelions.map((flower, index) => (
                    <Image
                        key={`${flower.src}-${index}`}
                        src={flower.src}
                        alt=""
                        width={flower.width}
                        height={flower.height}
                        className="absolute h-auto"
                        style={{
                            left: flower.left,
                            bottom: flower.bottom,
                            width: `clamp(5rem, 8vw, ${flower.size})`,
                            transform: `translateX(-50%) rotate(${flower.rotate})`,
                        }}
                    />
                ))}
                <Image
                    src={bottomFrog.src}
                    alt=""
                    width={bottomFrog.width}
                    height={bottomFrog.height}
                    className="absolute h-auto"
                    style={{
                        left: bottomFrog.left,
                        bottom: bottomFrog.bottom,
                        width: `clamp(4.5rem, 7vw, ${bottomFrog.size})`,
                        transform: `translateX(-50%) rotate(${bottomFrog.rotate})`,
                    }}
                />
            </div>
            <style>{`
                .schedule-flyer {
                    top: -12rem;
                    animation-name: schedule-flyer-fall;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                    opacity: 1;
                    transform: translateX(0) rotate(var(--flyer-rotation));
                }

                @keyframes schedule-flyer-fall {
                    0% {
                        top: -12rem;
                        transform: translateX(0) rotate(var(--flyer-rotation));
                    }

                    20% {
                        transform: translateX(var(--flyer-drift))
                            rotate(calc(var(--flyer-rotation) + 8deg));
                    }

                    40% {
                        transform: translateX(calc(var(--flyer-drift) * -0.75))
                            rotate(calc(var(--flyer-rotation) - 10deg));
                    }

                    60% {
                        transform: translateX(calc(var(--flyer-drift) * 0.85))
                            rotate(calc(var(--flyer-rotation) + 6deg));
                    }

                    80% {
                        transform: translateX(calc(var(--flyer-drift) * -0.6))
                            rotate(calc(var(--flyer-rotation) - 8deg));
                    }

                    100% {
                        top: calc(100% + 12rem);
                        transform: translateX(calc(var(--flyer-drift) * 0.5))
                            rotate(calc(var(--flyer-rotation) + 10deg));
                    }
                }
            `}</style>
        </section>
    );
}
