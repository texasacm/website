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

export const headshot_dir = '/officer-headshots-2026-27';

export const officers: Officer[] = [
    {
        name: 'Jayden Park',
        position: 'President',
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
        name: 'Suhas Voolla',
        position: 'Vice President',
        image: '/suhas.jpg',
        bio: "Hey y'all, I'm Suhas. I'm from Austin, TX and I'm a junior at UT studying CS with minors in Business and Robotics. I enjoy flying drones, pickleball, doomscrolling, and being a terrible DJ.",
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
        name: 'Void Zhou',
        position: 'Executive Board Member',
        image: '/void.png',
        bio: "Hi guys, I'm Void! I'm grew up in the Round Rock area, and outside of CS, I'm an avid lover of anything artsy/crafty! I also like dancing (shoutout SASE Entropy), baking, listening to music (Chappell Roan, Laufey, Sabrina Carpenter, and Olivia Rodrigo are my faves rn), and the color green. Feel free to connect or chat! ⭐",
        socials: [
            {
                url: 'https://linkedin.com/in/muyangzhou',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Joshua Vento-Jones',
        position: 'Executive Board Member',
        image: '/joshua.jpeg',
        bio: 'Hiya there! The name’s Josh. I’m a Class of 2029 CS Major from San Antonio, TX! When I’m not messing with computers and cyber, I love listening to music (huge fan of rock, anything with good drums), taking photos, playing games and watching the stars :)',
        socials: [
            {
                url: 'http://linkedin.com/in/joshua-vento-jones/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Akshay Gajjala',
        position: 'Senior Academics Officer',
        image: '/akshay.PNG',
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
        position: 'Senior Corporate Officer',
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
        name: 'Naina Middela',
        position: 'Senior Corporate Officer',
        image: '/naina.png',
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
        name: 'Rachel Yun',
        position: 'Senior Corporate Officer',
        image: '/rachel.png',
        bio: "Hi guys, I'm Rachel! I'm from Katy, Texas, majoring in CS with a minor in SDS. I love traveling, learning new things, and everything artsy. ",
        socials: [
            {
                url: 'https://www.instagram.com/rxchelyun/',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
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
        name: 'Adrien Chew',
        position: 'Senior Finance Officer',
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
        name: 'Manoj Kumar',
        position: 'Senior Finance Officer',
        image: '/manoj.jpeg',
        bio: "Good morning/afternoon/evening/night yall! I’m Manoj Kumar :) I’m from Coppell, TX and I’m majoring in CS. I love watching anime (One Piece fan) , reading manga/manhwa and solving random problems that come up 😆 If you wanna talk about animanga, One Piece, or any random cool stuff, feel free to reach out!!",
        socials: [
            {
                url: 'https://instagram.com/ManojAnime',
                iconType: 'instagram',
                name: 'Instagram',
            },
            {
                url: 'http://linkedin.com/in/manojatx',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Cienna Ferguson',
        position: 'Senior Marketing Officer',
        image: '/cienna.PNG',
        bio: "Hey, guys! I'm Cienna and I'm from the big H 🤘. I am a Junior striving to get a BS in CS. I like playing the guitar (I've been a beginner for 3+ years) and listening to any type of music...except country, sorry. Also, I like anime and documenting the beauty of life. Feel free to reach out 🤭!!",
        socials: [
            {
                url: 'https://www.instagram.com/ciennajaye/',
                iconType: 'instagram',
                name: 'Instagram',
            },
            {
                url: 'https://www.linkedin.com/in/cienna-ferguson-ba7833284/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
        ],
    },
    {
        name: 'Stephanie Kuo',
        position: 'Senior Marketing Officer',
        image: '/stephanie.jpeg',
        bio: 'Hiii! I’m Stephanie! I’m from El Paso, Texas, pursuing a degree in CS and a minor in SDS. I loveee traveling around and documenting memorable events with people. I also really like Jellyfish 🪼 Feel free to reach out if you want to connect or want to get to know me!!😋',
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
        name: 'Mansi Madhani',
        position: 'Senior Marketing Officer',
        image: '/mansi.jpeg',
        bio: "Hi! I'm Mansi, a fourth-year computer science major from Frisco, Texas. In my free time, I enjoy hiking, photography, exploring new coffee shops, or doing arts and crafts! Feel free to reach out if you want to connect or learn more about ACM.",
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
        name: 'Frank Hou',
        position: 'Senior Internal Officer',
        image: '/frank.jpeg',
        bio: "Hi Hi! My name is Frank. I am from ShanXi, China 🇨🇳. I'm a Junior CS Major. I am top 10 in Texas for Roblox Basketball 🏀",
        socials: [],
    },
    {
        name: 'Aryan Rajpal',
        position: 'Junior Academics Officer',
        image: '/aryan.jpeg',
        bio: "",
        socials: [],
    },
    {
        name: 'Srujan Sannidhi',
        position: 'Junior Academics Officer',
        image: '/srujan.jpeg',
        bio: "Hey, I'm Srujan! I'm from Allen, TX, pursuing a degree in CS and a minor in SDS. I love to hang out with my friends, try new kinds of food, play pickleball, and enjoy story games a lot such as Zelda and Persona! Feel free to reach out if you want to connect or just get to know me or have any other questions for me!",
        socials: [
            {
                url: 'https://www.instagram.com/srujan.sunnyd/',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Phoebe Wang',
        position: 'Junior Marketing Officer',
        image: '/phoebe.jpeg',
        bio: "Hi everyone! I’m Phoebe and I'm from Houston, TX, majoring in computer science. In my free time, I love dancing, playing piano, and taking lots of pictures & videos for memories (rip storage). I like trying new foods, exploring places, and meeting new people, so feel free to connect!",
        socials: [
            {
                url: 'https://www.linkedin.com/in/phoebe-yw/ni',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://www.instagram.com/phoebe._.wang_/',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Franklin Wright',
        position: 'Internal Officer',
        image: '/franklin.jpg',
        bio: "Sup. I'm Franklin, and I'm from Frisco, Texas. I'm pursuing a degree in computer science. I love watching the Longhorns. Hook 'em. 🤘",
        socials: [
            {
                url: 'https://www.linkedin.com/in/franklin-wright/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://www.instagram.com/frankliniswright/',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Suhani Goswami',
        position: 'Internal Officer',
        image: '/suhani.jpg',
        bio: "Hello! I'm Suhani, I'm from Sugar Land, Texas, and a senior pursuing degrees in CS and Biology. I love traveling around Austin, trying new food/coffee places (feel free to add me on Beli!), exploring the outdoors, and spending time with friends and family. ",
        socials: [
            {
                url: 'https://www.instagram.com/suhanigos/',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Jaxon Dial',
        position: 'Internal Officer',
        image: '/jaxon.jpg',
        bio: "Hey all!! My name is Jaxon, I’m from Joshua, TX, and I’m a CS major! I love solving Rubik’s Cubes and playing Nintendo games. Reach out if you need anything at all; I’m more than happy to help!",
        socials: [
            {
                url: 'https://www.linkedin.com/in/jaxon-dial/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://www.instagram.com/jaxon_dial/',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Tuhina Das',
        position: 'Internal Officer',
        image: '/tuhina.PNG',
        bio: "Heya, I'm Tuhina! I'm a sophomore from Plano, Texas, and pursuing a degree in CS. In my free time I love to draw, play games and spend time with my friends :) I'm a huge fan of seals too!! ",
        socials: [
            {
                url: 'https://www.linkedin.com/in/tuhina-k-das/',
                iconType: 'linkedin',
                name: 'LinkedIn',
            },
            {
                url: 'https://www.instagram.com/spicytunafishyy/',
                iconType: 'instagram',
                name: 'Instagram',
            },
        ],
    },
    {
        name: 'Gabriel Keller',
        position: 'Internal Officer',
        image: '/gabriel.jpeg',
        bio: "...",
        socials: [],
    },
];
