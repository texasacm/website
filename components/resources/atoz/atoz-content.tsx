'use client';

import {
    Book,
    BookMarked,
    Brain,
    Briefcase,
    Building2,
    Calendar,
    Cloud,
    Code2,
    Cog,
    Cpu,
    FileCode2,
    GitBranch,
    History,
    Laptop,
    Monitor,
    Terminal,
    User,
    Users,
} from 'lucide-react';

const allSections = [
    {
        title: 'UT Campus',
        icon: <Building2 className="h-5 w-5 text-blue-500" />,
        items: [
            {
                term: 'Speedway',
                description:
                    "The yellow brick road that runs down the middle of campus. Most of the buildings you'll need to go to will probably be right off of Speedway.",
            },
            {
                term: 'PMA/RLM',
                description:
                    'The building between Dean Keeton and the EERC, which you will probably have math classes in. The ground floor is actually the 4th floor, and you have to use the escalators to get to levels 5-7 since the elevators only go to level 8 and above. While the building is officially called the RLM, there has been a push to call it the PMA (Physics, Math, and Astronomy building) since the professor the RLM was named after was notoriously racist.',
            },
            {
                term: 'UTC',
                description:
                    "The building that's semi-attached to the PCL, which houses some of the largest classrooms on campus. You may have some core credit classes here since they're usually pretty big. To get to it, walk past the PCL on the right and then turn left when you see the escalators.",
            },
            {
                term: 'PCL',
                description:
                    "The Perry-Castañeda Library, which is the largest library on campus. It's technically not open 24/7, but if you are already in the library before closing time you won't be kicked out. There are quiet floors and collaboration floors so make sure you go to the one that suits your study needs best!",
            },
            {
                term: 'SAC/WCP',
                description:
                    'The Student Activity Center, one of the two Student Unions on campus. It has Chick-Fil-A, Zen, Taco Cabana, Starbucks, and POD, which is like a mini grocery store that you can get snacks and drinks from. It was recently renamed to the William C. Powers Student Activity Center, but a lot of students still just call it the SAC.',
            },
            {
                term: 'Gregory Gymnasium',
                description:
                    'The largest gym on campus, that has gymnasiums, cardio machines, weightlifting equipment, racquetball courts, a climbing wall and more. Right near the main entrance is the Amazon Hub, where you can receive and return Amazon packages.',
            },
            {
                term: 'Jester',
                description:
                    "The largest dorm on campus (split into Jester East and Jester West) and houses some of the bigger UT dining locations. It has JCL (a la carte), J2 (buffet style), JCM (a small market), Jesta Pizza, Starbucks and Wendy's (also known as Jendy's).",
            },
        ],
    },
    {
        title: 'UTCS Courses',
        icon: <BookMarked className="h-5 w-5 text-purple-500" />,
        items: [
            {
                term: 'UDEs',
                description:
                    'Upper Division Electives are the classes you will probably start taking your sophomore or junior year when you finish the "lower division" CS courses (312, 311, 314, 429). There are usually 15-20 offered every semester.',
            },
            {
                term: 'Numbering System',
                description:
                    "The first number in a course number is the number of credit hours. Most classes are 300s or 400s. The second number indicates lower division (1-2), upper division (3-7) or graduate (8-9) level. The last number doesn't have specific meaning.",
            },
            {
                term: 'CS312',
                description:
                    "Introduction to Programming is the first CS course you will take at UT (assuming you don't claim credit for it). You will be programming in Java and learn the basics of programming.",
            },
            {
                term: 'CS314',
                description:
                    'Data Structures will be either your first or second CS course at UT. You will program in Java, and will learn about different data structures and control flow structures.',
            },
            {
                term: 'CS311',
                description:
                    "Discrete Math will be your first theoretical CS course. You don't do any programming in 311; instead you learn about boolean logic, proofs, and complexity classes.",
            },
            {
                term: 'CS429',
                description:
                    'Computer Architecture is the last class in the entry-level sequence where you will learn about the low level parts of a computer. You will learn how to write C and Assembly.',
            },
            {
                term: 'CS439',
                description:
                    'Operating Systems is one of the more difficult required courses at UTCS. You will learn about how the operating system works, and implement aspects like file systems, user programs, and virtual memory.',
            },
            {
                term: 'CS331',
                description:
                    'Algorithms and Complexity is the last required course at UTCS. You will learn about common algorithms and algorithm classes, as well as the different complexity classes.',
            },
        ],
    },
    {
        title: 'Places of UTCS',
        icon: <Building2 className="h-5 w-5 text-green-500" />,
        items: [
            { term: 'GDC', description: 'Gates Dell Complex' },
            {
                term: '3rd Floor Lab',
                description:
                    "The 3rd floor lab (GDC 3.302) has 85 lab machines, 2 printers, lockers, student organization offices, and TA stations. It's accessible 24/7 with your ID card.",
            },
            {
                term: '2nd Floor Lab',
                description:
                    'The 2nd floor lab (GDC 2.402) is towards the back of the North Tower on the 2nd floor. There are 26 lab machines here.',
            },
            {
                term: 'Atrium',
                description:
                    'The big open "lobby" area on the ground floor of the GDC with the red couches and white tables.',
            },
            {
                term: 'Auditorium',
                description:
                    "The Auditorium (GDC 2.216) is the largest lecture hall in the GDC. You'll probably have 312, 311 and/or 314 here.",
            },
            { term: 'Gateshenge', description: 'The circular statue in front of the GDC.' },
            {
                term: 'North Tower',
                description:
                    "The half of the GDC that is to the left of the atrium. Most professors' offices and classrooms are on this side.",
            },
            {
                term: 'South Tower',
                description: 'The half of the GDC that is to the right of the atrium.',
            },
            {
                term: 'TA Stations',
                description:
                    'Located in the 1st and 3rd floor labs. The 3rd floor stations are in front of the lockers at tall tables.',
            },
        ],
    },
    {
        title: 'UTCS Student Organizations',
        icon: <Users className="h-5 w-5 text-red-500" />,
        items: [
            {
                term: 'ACM',
                description:
                    'The Association for Computing Machinery is focused on creating a community among CS students and advancing computer science studies and research.',
            },
            {
                term: 'ABCS',
                description:
                    'Association of Black Computer Scientists creates paths to educational and professional success for Black and underrepresented students.',
            },
            {
                term: 'HACS',
                description:
                    'Hispanic Association of Computer Scientists provides support for Hispanic and Latinx students through academic, professional, and social development.',
            },
            {
                term: 'WiCS',
                description:
                    'Women in Computer Science builds a network and community of women through outreach, professional development, and academic initiatives.',
            },
            {
                term: 'Turing Scholars',
                description: 'An honors program for outstanding Computer Science undergraduates.',
            },
            {
                term: 'EGaDS!',
                description:
                    'Electronic Game Developers Society focuses on computer and video game development.',
            },
            {
                term: 'Freetail Hackers',
                description:
                    'Organizes hackathons including HackTX (24-hour) in fall and a 12-hour themed hackathon in spring.',
            },
        ],
    },
    {
        title: 'Development Tools',
        icon: <Code2 className="h-5 w-5 text-yellow-500" />,
        items: [
            {
                term: 'Git',
                description:
                    'The most commonly used version control system for tracking changes in code.',
            },
            {
                term: 'VSCode',
                description:
                    'A popular code editor made by Microsoft with lots of useful extensions.',
            },
            {
                term: 'IntelliJ',
                description: 'A powerful IDE primarily used for Java development.',
            },
            {
                term: 'Eclipse',
                description: 'A commonly used Java IDE, especially in CS312 and CS314.',
            },
            {
                term: 'Docker',
                description:
                    'A program that allows you to create isolated "containers" which act like lightweight virtual machines.',
            },
            {
                term: 'Terminal',
                description: 'A text interface for executing commands on your computer.',
            },
            {
                term: 'SSH',
                description:
                    'Secure Shell - allows you to securely access and control remote computers.',
            },
        ],
    },
    {
        title: 'Programming Concepts',
        icon: <FileCode2 className="h-5 w-5 text-indigo-500" />,
        items: [
            {
                term: 'Algorithm',
                description: 'A step-by-step procedure or formula for solving a problem.',
            },
            {
                term: 'Big O Notation',
                description: 'A way to describe the time or space complexity of an algorithm.',
            },
            {
                term: 'API',
                description:
                    'Application Programming Interface - a set of rules allowing one program to interact with another.',
            },
            {
                term: 'Object-Oriented Programming',
                description:
                    'A programming paradigm based on "objects" that contain data and code.',
            },
            {
                term: 'Front-End',
                description: 'The user-facing part of software that users directly interact with.',
            },
            {
                term: 'Back-End',
                description:
                    'The server-side of applications that handles business logic and data storage.',
            },
            {
                term: 'Full Stack',
                description: 'Development that covers both front-end and back-end.',
            },
        ],
    },
    {
        title: 'Computer Science Theory',
        icon: <Book className="h-5 w-5 text-indigo-500" />,
        items: [
            {
                term: 'Amortized Analysis',
                description:
                    'Average performance of algorithms over time, useful when worst-case occurs infrequently.',
            },
            {
                term: 'Dynamic Programming',
                description:
                    'Problem-solving method that breaks down problems into smaller subproblems and stores results for reuse.',
            },
            {
                term: 'Inheritance',
                description:
                    'OOP concept where a class can inherit properties and methods from another class.',
            },
            {
                term: 'Ternary Operator',
                description:
                    'Conditional expression that takes three operands: condition ? value-if-true : value-if-false.',
            },
            {
                term: 'Turing Complete',
                description:
                    'System capable of simulating a Turing machine, meaning it can compute any computable function.',
            },
        ],
    },
    {
        title: 'Frequent Events',
        icon: <Calendar className="h-5 w-5 text-amber-500" />,
        items: [
            {
                term: 'CTF',
                description:
                    'Capture The Flag security competitions solving challenges in cryptography, exploitation, and web security. Hosted by ISSS every 2 weeks.',
            },
            {
                term: 'Programming Contests',
                description:
                    'Competitive coding events where participants solve algorithmic problems. Includes ICPC and local competitions.',
            },
        ],
    },
    {
        title: 'Terminal & Command Line',
        icon: <Terminal className="h-5 w-5 text-slate-500" />,
        items: [
            {
                term: 'Directory',
                description: 'Another name for what you would usually call a folder.',
            },
            {
                term: 'Absolute Path',
                description:
                    'A path starting from the root directory (~) that always leads to the same location.',
            },
            {
                term: 'cd',
                description: 'Change directory command allows you to move between folders.',
            },
            {
                term: 'ls',
                description:
                    'Lists files in the current folder. Use -a for hidden files, -l for detailed view.',
            },
            {
                term: 'grep',
                description: 'Search tool to find text patterns in files.',
            },
            {
                term: 'SSH',
                description: 'Secure Shell protocol for accessing remote machines securely.',
            },
            {
                term: 'sudo',
                description:
                    'Command to run programs with security privileges of another user, typically root.',
            },
        ],
    },
    {
        title: 'Technology Terms',
        icon: <Laptop className="h-5 w-5 text-teal-500" />,
        items: [
            {
                term: '64-bit vs 32-bit',
                description:
                    'Refers to the size of memory addresses a machine can handle. 64-bit can address much more memory than 32-bit.',
            },
            {
                term: 'Asynchronous',
                description:
                    'When a computer performs multiple tasks simultaneously, requiring careful resource management.',
            },
            {
                term: 'API',
                description:
                    'Application Programming Interface - allows different software components to communicate.',
            },
            {
                term: 'Bit & Byte',
                description:
                    'A bit is a single binary unit (0/1). A byte is 8 bits - the basic unit of digital storage.',
            },
            {
                term: 'GRUB',
                description:
                    'GNU GRUB bootloader that manages startup and OS selection on Linux systems.',
            },
            {
                term: 'GUI',
                description:
                    'Graphical User Interface - visual way for users to interact with software.',
            },
            {
                term: 'IoT',
                description:
                    'Internet of Things - network of physical devices embedded with sensors and software for data exchange.',
            },
            {
                term: 'Package Manager',
                description:
                    'Software tools that automate installing, updating, and removing programs (apt, npm, pip).',
            },
            {
                term: 'Virtual Machine',
                description:
                    'Software simulation of a computer system, allowing one OS to run inside another.',
            },
            {
                term: 'Daemon',
                description: 'Background process that runs without direct user interaction.',
            },
            {
                term: 'Debugger',
                description:
                    'Tool for finding and fixing software bugs with features like breakpoints and memory inspection.',
            },
        ],
    },
    {
        title: 'Development Methodologies',
        icon: <Code2 className="h-5 w-5 text-lime-500" />,
        items: [
            {
                term: 'Scrum',
                description:
                    'Agile framework where work is broken into sprints with daily standup meetings.',
            },
            {
                term: 'Kanban',
                description:
                    'Work tracking system using boards with columns representing different stages of development.',
            },
            {
                term: 'Unit Testing',
                description:
                    'Testing individual components of code to ensure they work as expected.',
            },
            {
                term: 'Agile',
                description:
                    'Development methodology emphasizing flexibility, customer collaboration, and iterative development.',
            },
        ],
    },
    {
        title: 'UT CS Figures',
        icon: <User className="h-5 w-5 text-blue-400" />,
        items: [
            {
                term: 'Peter Stone',
                description:
                    'Head of Learning Agents Research Group (LARG). Research focus on AI and robotics.',
            },
            {
                term: 'Scott Aaronson',
                description:
                    'Head of the quantum information center at UT. Teaches quantum information courses.',
            },
            {
                term: 'Mike Scott',
                description:
                    'Teaches CS312 (Introduction to Programming) and CS314 (Data Structures).',
            },
            {
                term: 'Alison Norman',
                description:
                    'Teaches CS439 (Operating Systems). Known for the Pintos project series.',
            },
            {
                term: 'Ahmed Gheith',
                description:
                    'Teaches CS439 (Operating Systems). Known for individual weekly projects and excellent lectures.',
            },
            {
                term: 'Glenn Downing',
                description: 'Teaches software engineering and object oriented programming.',
            },
        ],
    },
    {
        title: 'UTCS Machines',
        icon: <Monitor className="h-5 w-5 text-cyan-500" />,
        items: [
            {
                term: 'Lab Machine Names',
                description:
                    'You can find a list of all lab machines at apps.cs.utexas.edu/unixlabstatus. They have fun naming conventions like board games, bugs, operas, and more.',
            },
            {
                term: 'Printers',
                description:
                    "There are 2 public printers in the GDC 3rd floor lab, lw303 and lw301. To print, run 'lpr -Plw303 <file>' in the terminal from a lab machine.",
            },
        ],
    },
    {
        title: 'Annual Events',
        icon: <Calendar className="h-5 w-5 text-orange-500" />,
        items: [
            {
                term: 'Career Fair',
                description:
                    'A career fair put on by the College of Natural Science once per semester. Most companies recruit in fall. Takes place in the Frank Erwin Center with shuttles provided.',
            },
            {
                term: 'Div Day',
                description:
                    'A conference empowering historically marginalized communities in STEM through discussions, speakers, and workshops. Organized by ABCS and HACS.',
            },
            {
                term: 'HackTX',
                description:
                    "UT's annual 24-hour hackathon at the AT&T Conference center. Great for creating side projects and attending workshops.",
            },
            {
                term: 'WiCS Hacks',
                description:
                    'Annual hackathon by WiCS aimed at female-identifying students. Includes workshops, talks, and project development.',
            },
            {
                term: 'Recruiting Season',
                description:
                    'For summer internships, larger companies usually start recruiting the fall beforehand. Prime recruiting season runs September to November.',
            },
        ],
    },
    {
        title: 'Technology: Computer Parts',
        icon: <Cpu className="h-5 w-5 text-pink-500" />,
        items: [
            {
                term: 'CPU',
                description:
                    'The Central Processing Unit is the "brains" of the computer, handling computations and determining operations.',
            },
            {
                term: 'GPU',
                description:
                    'The Graphics Processing Unit is specifically designed to handle graphics-related calculations and operations.',
            },
            {
                term: 'RAM',
                description:
                    'Random Access Memory provides quick-access storage for frequently used information. Contents are wiped on reboot.',
            },
            {
                term: 'HDD',
                description:
                    'Hard Disk Drives use spinning disks for permanent file storage of documents, photos, programs, etc.',
            },
            {
                term: 'SSD',
                description:
                    'Solid State Drives provide permanent storage without moving parts, making them faster and more reliable than HDDs.',
            },
        ],
    },
    {
        title: 'Operating Systems',
        icon: <Cog className="h-5 w-5 text-violet-500" />,
        items: [
            {
                term: 'Windows',
                description:
                    "Microsoft's operating system. Not UNIX based, requires special programs for UNIX-like functionality.",
            },
            {
                term: 'Linux',
                description:
                    'An open source operating system with many distributions (distros). All lab machines run Linux, specifically Ubuntu.',
            },
            {
                term: 'UNIX',
                description:
                    'A family of operating systems including Linux, MacOS and BSD. When people say UNIX, they usually refer to these combined families.',
            },
        ],
    },
    {
        title: 'Version Control',
        icon: <GitBranch className="h-5 w-5 text-emerald-500" />,
        items: [
            {
                term: 'Git',
                description:
                    'The most commonly used version control system for tracking code changes.',
            },
            {
                term: 'GitHub',
                description:
                    'Popular platform for hosting Git repositories, offering collaboration features and version control tools.',
            },
            {
                term: 'Git Commands',
                description:
                    'Common commands include push (upload changes), pull (download updates), commit (save changes), and merge (combine changes).',
            },
        ],
    },
    {
        title: 'Cloud Services',
        icon: <Cloud className="h-5 w-5 text-sky-500" />,
        items: [
            {
                term: 'AWS',
                description: 'Amazon Web Services - the most commonly used cloud hosting platform.',
            },
            {
                term: 'Azure',
                description: "Microsoft's cloud platform offering hosting and computing services.",
            },
            {
                term: 'GCP',
                description: 'Google Cloud Platform - often provides free credits for hackathons.',
            },
        ],
    },
    {
        title: 'CS Pioneers',
        icon: <History className="h-5 w-5 text-amber-500" />,
        items: [
            {
                term: 'Ada Lovelace',
                description:
                    'Wrote one of the first computer programs and recognized the utility of general purpose computers.',
            },
            {
                term: 'Alan Turing',
                description:
                    'Created the Turing machine and helped crack the Enigma cipher in WWII.',
            },
            {
                term: 'Grace Hopper',
                description:
                    'Pioneering computer scientist and US Navy Rear Admiral who invented one of the first linkers.',
            },
            {
                term: 'Edsger Dijkstra',
                description:
                    "Created Dijkstra's algorithm and the semaphore concept. Worked at UT from 1994 to 1999.",
            },
        ],
    },
    {
        title: 'Career Development',
        icon: <Briefcase className="h-5 w-5 text-rose-500" />,
        items: [
            {
                term: 'FAANG/Big Tech',
                description:
                    'Facebook/Meta, Apple, Amazon, Netflix, Google - top tech companies known for high compensation and competitive positions.',
            },
            {
                term: 'Software Engineer',
                description:
                    'Develops software applications and systems. Role involves coding, testing, and maintaining software.',
            },
            {
                term: 'Project Manager',
                description:
                    'Oversees project lifecycle and team coordination. Technical background helps in planning and feasibility assessment.',
            },
            {
                term: 'Technical Interview',
                description:
                    'Coding interviews where you solve problems on a whiteboard or collaborative editor.',
            },
            {
                term: 'Behavioral Interview',
                description:
                    'Non-technical interviews focusing on experience, projects, and soft skills.',
            },
            {
                term: 'Interview Prep',
                description:
                    'Resources include LeetCode, HackerRank, and "Cracking the Coding Interview" book.',
            },
            {
                term: 'Tech Hubs',
                description:
                    'Major centers: Bay Area (SF, Silicon Valley), Seattle (Amazon, Microsoft), New York (Finance Tech), Austin (Growing Hub).',
            },
        ],
    },
    {
        title: 'CS Fields',
        icon: <Brain className="h-5 w-5 text-purple-500" />,
        items: [
            {
                term: 'AI/Machine Learning',
                description:
                    'Field focused on creating systems that can learn and adapt from experience.',
            },
            {
                term: 'Data Science',
                description:
                    'Combines CS and mathematics to extract insights from structured and unstructured data.',
            },
            {
                term: 'Security',
                description:
                    'Focus on protecting computer systems from unauthorized access and attacks.',
            },
            {
                term: 'UI/UX',
                description: 'Design of user interfaces and experiences for software applications.',
            },
        ],
    },
];

function SectionContent({ items }: { items: { term: string; description: string }[] }) {
    return (
        <div className="space-y-4">
            {items.map((item) => (
                <div key={item.term} className="border-b border-gray-200 pb-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">{item.term}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default function AtoZContent() {
    return (
        <section className="dark:bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="space-y-6">
                        {allSections.map((section) => (
                            <div
                                key={section.title}
                                className="rounded-lg border border-gray-200 shadow-sm"
                            >
                                <div className="flex items-center space-x-3 bg-gray-50 px-6 py-4 dark:bg-slate-800">
                                    {section.icon}
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                        {section.title}
                                    </h3>
                                </div>
                                <div className="bg-white px-6 py-4 dark:bg-slate-900">
                                    <SectionContent items={section.items} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
