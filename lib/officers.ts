export interface SocialLink {
    url: string;
    iconType: 'linkedin' | 'instagram' | 'github' | 'website';
    name: string;
}

export interface Officer {
    name: string;
    position: string;
    image: string;
    bio: string;
    socials: SocialLink[];
}

export const headshot_dir = '/officer-headshots-2025-26';

export const officers: Officer[] = [
    {
        name: 'Nidhi Pabbathi',
        position: 'President',
        image: '/nidhi.jpg',
        bio: "Hey everyone! I'm Nidhi and I'm from Allen, Texas. I'm a Senior Computer Science major minoring in Business🤘🐮🧡. In my free time I like to crochet 🧶 and paint 🎨, and I also really love pigs 🐷 and Minecraft 🐓🧟!",
        socials: [
            {
                url: 'https://linkedin.com/in/nidhi-pabbathi',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/nid._.hi',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Gabriel Keller',
        position: 'Vice President',
        image: '/gabe.jpeg',
        bio: "Hey! I'm Gabriel! I'm from Austin and I'm a '27 CS major. I love to rock climb, play classical guitar, and code in my free time. Feel free to reach out if you want to connect, have questions about ACM, or want to get to know me!",
        socials: [
            {
                url: 'https://linkedin.com/in/gjkeller',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/atxgabe',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Diego Contreras',
        position: 'Treasurer',
        image: '/diego.jpeg',
        bio: "Hi guys, I'm Diego and I am from Houston, TX. I'm a 3rd year CS and Gov Major at UT Austin! My favorite things to do right now are biking, bouldering, and gaming 👽",
        socials: [
            {
                url: 'https://linkedin.com/in/diego-contreras-s',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/die.go.cs',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Mansi Madhani',
        position: 'Executive Board Member',
        image: '/mansi.jpeg',
        bio: "Hi! My name's Mansi and I'm from Frisco, TX. I'm a junior at UT studying computer science. In my free time, I enjoy hiking, exploring coffee shops, and drawing!",
        socials: [
            {
                url: 'https://linkedin.com/in/mansimadhani',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/mansimadhani_',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Praneel Seth',
        position: 'Executive Board Member',
        image: '/praneel.PNG',
        bio: "Hey y'all! I'm Praneel and I'm from Frisco, TX. I'm a junior at UT studying computer science and my specific field of interest is machine learning. Outside of school I enjoy playing basketball and dancing on Texas Dhoom 🔥.",
        socials: [
            {
                url: 'https://linkedin.com/in/praneelseth',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/praneelseth',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Casey Charleston',
        position: 'Senior Academics Officer',
        image: '/casey.jpeg',
        bio: "Hey there! I'm Casey. I'm from Prosper, TX and I'm currently in my 4th year in the 5-Year BS/MS Integrated Program in CS. I really enjoy bouldering and video games (silksong tomorrow). I'm also a TA for CS 314 and a part of the UTCS Ambassadors.",
        socials: [
            {
                url: 'https://linkedin.com/in/caseycharleston',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://github.com/caseycharleston',
                iconType: 'github',
                name: 'GitHub',
            },
            {
                url: 'https://www.instagram.com/imcaseyc',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Brayden Strong',
        position: 'Senior Academics Officer',
        image: '/brayden.jpeg',
        bio: "Hey everyone, I'm Brayden and I'm from Longview, TX (look it up). I'm a senior at UT studying Computer Science. I mainly play video games, board games, and DND. If you see me around, say hi!",
        socials: [],
    },
    {
        name: 'Victoria Reddy',
        position: 'Senior Corporate Officer',
        image: '/victoria.jpeg',
        bio: "Hi, I'm Victoria! I'm from Flower Mound, TX, and I'm a sophomore at UT studying Computer Science.",
        socials: [
            {
                url: 'https://linkedin.com/in/victoria-reddy',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/victoriareddy_',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Niken Patel',
        position: 'Senior Finance Officer',
        image: '/niken.jpeg',
        bio: "Hey yall, my name's Niken and I'm from College Station, TX. I'm a sophomore CS major at UT. I really enjoy basketball 🏀 and tennis 🎾",
        socials: [
            {
                url: 'https://instagram.com/niken_p_29',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Stephanie Nguyen',
        position: 'Senior Marketing Officer',
        image: '/stephanie.jpeg',
        bio: "Hello everyone, my name is Stephanie and I'm from Houston, Tx. I'm a Senior Computer Science Major at UT. I enjoy shopping and eating sweet treats.",
        socials: [
            {
                url: 'https://linkedin.com/in/stephanie-v-nguyen',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Void Zhou',
        position: 'Senior Marketing Officer',
        image: '/void.png',
        bio: "Hi guys, I'm Muyang---and I go by Void! I'm from Round Rock, TX, and I'm currently a sophomore CS major at UT Austin.",
        socials: [
            {
                url: 'https://linkedin.com/in/muyangzhou',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Naina Middela',
        position: 'Corporate Officer',
        image: '/naina.jpg',
        bio: "Hi y'all! My name is Naina, and I'm from Frisco, TX. I'm a junior at UT majoring in Computer Science:) 💻 I like AI, exploring world art forms, and dancing!",
        socials: [
            {
                url: 'https://linkedin.com/in/naina-middela',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Suhas Voolla',
        position: 'Corporate Officer',
        image: '/suhas.jpg',
        bio: "Hey y'all, I'm Suhas. I'm from Austin, TX and I'm a sophomore at UT studying CS with minors in Business and Robotics (soon). I enjoy flying drones, listening to music, and doomscrolling.",
        socials: [
            {
                url: 'https://linkedin.com/in/suhasvoolla',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://instagram.com/probablysuhas',
                iconType: 'instagram',
                name: 'Instagram',
            },
            { url: 'https://suhas.one/', iconType: 'website', name: 'Website' },
        ],
    },
    {
        name: 'Frank Hou',
        position: 'Intramural Sports Chair',
        image: '/frank.jpeg',
        bio: "Hi Hi! My name is Frank. I am from ShanXi, China 🇨🇳. I'm a Junior CS Major. I am top 10 in Texas for Roblox Basketball 🏀",
        socials: [
            {
                url: 'https://linkedin.com/in/yufanhou',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Rishabh Mittal',
        position: 'Internal Officer',
        image: '/rishabh.png',
        bio: "Hey everyone! My name's Rishabh, and I'm from Sugar Land, TX. I'm a Junior CS Major at UT (Go Longhorns!). I love biking, photography, playing video games (especially Geometry Dash🟨∆∆∆, SSBU🗡, & Minecraft⛏️), and am looking forward to meeting all y'all! :D",
        socials: [
            {
                url: 'https://www.linkedin.com/in/rishabh-mittal-cs/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://www.instagram.com/lil_mittal/',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Jayden Park',
        position: 'Internal Officer',
        image: '/jayden.jpg',
        bio: "Hey, I'm Jayden. I'm from Richardson, TX, and I'm a Sophomore at UT studying Computer Science. I really enjoy eating and taking picture of said food.",
        socials: [
            {
                url: 'https://instagram.com/jydnprk',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Thomas Tran',
        position: 'Internal Officer',
        image: '/thomas.jpeg',
        bio: "Hello! I'm Thomas, I'm from Colleyville, TX. I'm a Senior in CS and I love silly things like trying new tea 🫖, collecting popmarts 🎲, and video games 🎮 ",
        socials: [],
    },
    {
        name: 'Adrien Chew',
        position: 'Operational Finance Officer',
        image: '/adrien.jpg',
        bio: "Hey everyone! I'm Adrien and I am from Houston, TX. I'm currently a sophomore studying computer science at UT Austin. In my free time, I love to dance and collect smiskis!",
        socials: [
            {
                url: 'https://instagram.com/mr.meowdrien',
                iconType: 'instagram',
                name: 'Instagram',
            },
            {
                url: 'http://linkedin.com/in/adrien-chew/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Cienna Ferguson',
        position: 'Operational Marketing Officer',
        image: '/cienna.jpg',
        bio: "Hello! I’m Cienna and i’m from Houston. I am a ‘28 CS major. I like to play the guitar 🎸, find memes, and watch anime 📺!!",
        socials: [
            {
                url: 'https://instagram.com/ciennajaye',
                iconType: 'instagram',
                name: 'Instagram',
            },
            {
                url: 'https://www.linkedin.com/in/cienna-ferguson-ba7833284/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            }
        ],
    },
    {
        name: 'Akshay Gajjala',
        position: 'Operational Academic Officer',
        image: '/akshay.png',
        bio: "Hi, I'm Akshay! I'm from Frisco, TX, and studying computer science at UT as a freshman. I love to play volleyball and ultimate frisbee, eat food, and learn songs on the piano.",
        socials: [
            {
                url: 'https://instagram.com/akshaygajjala',
                iconType: 'instagram',
                name: 'Instagram',
            },
            {
                url: 'https://www.linkedin.com/in/akshay-gajjala',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Sopan Jalkote',
        position: 'Operational Corporate Officer',
        image: '/sopan.jpeg',
        bio: "Hey, I'm Sopan! I'm from Austin, and a CS major at UT. I really enjoy photography, piano, and playing basketball & volleyball.",
        socials: [
            {
                url: 'https://instagram.com/sopan.jal',
                iconType: 'instagram',
                name: 'Instagram',
            },
            {
                url: 'https://www.linkedin.com/in/sjalkote',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Stephanie Kuo',
        position: 'Operational Marketing Officer',
        image: '/stephaniek.jpeg',
        bio: "Hiii! I’m Stephanie! I’m from El Paso, Texas, pursuing a degree in CS and a minor in SDS. I loveee traveling around and documenting memorable events with people. I also really like Jellyfish 🪼 Feel free to reach out if you want to connect or want to get to know me!!😋",
        socials: [
            {
                url: 'https://instagram.com/stephaniett_kuo',
                iconType: 'instagram',
                name: 'Instagram',
            },
            {
                url: 'https://www.linkedin.com/in/stephanie-kuo-tt1/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Joshua Vento-Jones',
        position: 'Operational Internal Officer',
        image: '/joshua.jpeg',
        bio: "Hiya there! The name’s Josh. I’m a Class of 2029 CS Major from San Antonio, TX! When I’m not messing with computers and cyber, I love listening to music (huge fan of rock, anything with good drums), taking photos, playing games and watching the stars :)",
        socials: [
            {
                url: 'http://linkedin.com/in/joshua-vento-jones/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Rachel Yun',
        position: 'Operational Corporate Officer',
        image: '/rachel.png',
        bio: "Hi! I'm Rachel and I'm from Katy, Texas. I'm currently a freshman studying computer science. I like listening to music, learning new things, and late night runs!",
        socials: [
            {
                url: 'https://instagram.com/rxchel.yun',
                iconType: 'instagram',
                name: 'Instagram',
            },
            {
                url: 'https://www.linkedin.com/in/rachelnyun/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },    
];
