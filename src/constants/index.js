import { logo, marvel } from "../assets";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    threejs,
    stevens,
    c4i,
    relecotech,
    bmsit,
    java,
    spring,
    vue,
    houseofbooks,
    comingsoon,
    everydaybrunch,
    linkedin,
    github,
} from "../assets";

export const social_media = [
    {
        id: "linkedin",
        icon: linkedin,
        url: "https://www.linkedin.com/in/tanaytadas",
    },
    {
        id: "github",
        icon: github,
        url: "https://github.com/tanaytadas16",
    },
];
export const resume_link =
    "https://drive.google.com/file/d/10r3hVl6ooQr01ISdfYqwiksKK0Q6vY2G/view ";
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: backend,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Front End Developer",
        icon: creator,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    // {
    //     name: "GraphQL",
    //     icon: graphql,
    // },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Spring Boot",
        icon: spring,
    },
    {
        name: "Vue JS",
        icon: vue,
    },
];

const experiences = [
    {
        title: "Full Stack developer",
        company_name: "C4i TEchnologies",
        icon: c4i,
        iconBg: "white",
        date: "June 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js, Spring Boot and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        title: "Salesforce Developer",
        company_name: "Relecotech Software Solutions",
        icon: relecotech,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            " Created consumer electronic retail applications by Salesforce Lightning to drive sales and analyze performance metrics Implemented new Salesforce features and functionalities",
            "Analyzed customer feedback and sales data to optimize application usability",
            "Worked collaboratively with team of developers to generate a new software platform and also improving system performance and efficiency",
        ],
    },
];
const education = [
    {
        university: "Stevens Institute of Technology",
        location: "Hoboken, New Jersey",
        degree: "M.S Computer Science",
        icon: stevens,
        iconBg: "#a32639",
        date: "September 2021 - December 2022",
        points: [
            //     "Developing and maintaining web applications using React.js and other related technologies.",
            //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            //     "Implementing responsive design and ensuring cross-browser compatibility.",
            //     "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

    {
        university: "B.M.S Institute of Technology",
        location: "Bangalore, India",
        degree: "B.E Information Science",
        icon: bmsit,
        iconBg: "#E6DEDD",
        date: "August 2017 - June 2021",
        points: [
            // "Developing and maintaining web applications using React.js and other related technologies.",
            // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            // "Implementing responsive design and ensuring cross-browser compatibility.",
            // "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Ecommerce Application",
        description:
            "A comprehensive web application that allows customer to purchase electronic gadgets and home appliances.",
        tags: [
            {
                name: "MERN",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "Nextjs",
                color: "pink-text-gradient",
            },
        ],
        image: comingsoon,
        source_code_link: "https://github.com/tanaytadas16/MERN-Ecommerce-App",
        deploy_link: "",
    },
    {
        name: "House of Books",
        description:
            "Web-based online book store that allows users to search, buy, rent books, and support authors.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: houseofbooks,
        source_code_link: "https://github.com/tanaytadas16/house-of-books",
        deploy_link: "",
    },
    {
        name: "Everyday Brunch",
        description:
            "Web application to help users to order brunch from Everyday Brunch Restaurant. The website allows users to register and search for their favourite brunch items from the restaurant’s menu and also place an order online using the website ",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJS/Express",
                color: "green-text-gradient",
            },
            {
                name: "HTML/CSS",
                color: "pink-text-gradient",
            },
        ],
        image: everydaybrunch,
        source_code_link:
            "https://github.com/tanaytadas16/everyday-brunch-group11",
        deploy_link: "",
    },

    {
        name: "Marvelo",
        description:
            "A marvel fans web application to see the marvel characters,Comics, Series. You can View List of each respectively from the links below. You can search matching Character, comics, series by keywords.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: marvel,
        source_code_link: "https://github.com/tanaytadas16/React-Marvel-Api",
        deploy_link: "https://tanay-react-marvelapi.netlify.app",
    },
];

export {
    services,
    technologies,
    experiences,
    testimonials,
    projects,
    education,
};
