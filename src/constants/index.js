import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, meta, starbucks, tesla, shopify, carrent, jobit, tripguide, threejs, laravel, fastapi, cnc_logo, scm_admin, restapi, performance } from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Laravel Developer",
    icon: laravel,
  },
  {
    title: "FastAPI Developer",
    icon: fastapi,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Junior Developer",
    company_name: "Compunet Connections",
    icon: cnc_logo,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: ["Developing and maintaining web applications using laravel,fastapi and other related technologies.", "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.", "Implementing responsive design and ensuring cross-browser compatibility.", "Participating in code reviews and providing constructive feedback to other developers."],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Admin Dashboard",
    description: "Web based platform empowering seamless seller onboarding, buyer approval, and loan provisioning for enhanced supply chain management efficiency.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: scm_admin,
    source_code_link: "https://github.com/",
  },
  {
    name: "Raqamyah 360",
    description: "Professionally crafted backend application leveraging FastAPI to seamlessly unite the client's diverse platforms, expertly integrating third-party APIs for enhanced functionality",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "fastapi",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: restapi,
    source_code_link: "https://github.com/",
  },
  {
    name: "Performance Optimization",
    description: "Elevated project performance and SEO through code optimization and introduced a CDN for efficient static asset delivery.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "cdn",
        color: "green-text-gradient",
      },
      {
        name: "seo",
        color: "pink-text-gradient",
      },
    ],
    image: performance,
    source_code_link: "https://github.com/",
  },
];

const skillbadges1 = [
  {
    src: "https://img.shields.io/badge/python-1d1836?style=for-the-badge&logo=python&logoColor=ffdd54",
    name: "Python",
  },

  {
    src: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    name: "Bootstrap",
  },
  {
    src: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    name: "Bootstrap",
  },
];
const skillbadges = [
  {
    name: "Languages",
    list: [
      {
        src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
        name: "Python",
      },
      {
        src: "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
        name: "Php",
      },
      {
        src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
        name: "JavaScript",
      },
      {
        src: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
        name: "Java",
      },
    ],
  },
  {
    name: "Frameworks",
    list: [
      {
        src: "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
        name: "Laravel",
      },
      {
        src: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi",
        name: "Fastapi",
      },
      {
        src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
        name: "React",
      },
      {
        src: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
        name: "Next JS",
      },
    ],
  },
  {
    name: "Styling Technology",
    list: [
      {
        src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        name: "HTML5",
      },
      {
        src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
        name: "CSS3",
      },
      {
        src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
        name: "Tailwind CSS",
      },
      {
        src: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
        name: "Bootstrap 5",
      },
      {
        src: "https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white",
        name: "MUI",
      },
    ],
  },
  {
    name: "Databases",
    list: [
      {
        src: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
        name: "MYSQL",
      },
      {
        src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        name: "MongoDB",
      },
    ],
  },
  {
    name: "Others",
    list: [
      {
        src: "https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white",
        name: "Bit Bucket",
      },
      {
        src: "https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white",
        name: "Apache",
      },
      {
        src: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
        name: "AWS",
      },
      {
        src: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
        name: "Docker",
      },
      {
        src: "https://img.shields.io/badge/confluence-%23172BF4.svg?style=for-the-badge&logo=confluence&logoColor=white",
        name: "Confluence",
      },
      {
        src: "https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white",
        name: "Swagger",
      },
      {
        src: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
        name: "JIRA",
      },
      {
        src: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
        name: "Postman",
      },
    ],
  },
];
export { services, technologies, experiences, testimonials, projects, skillbadges };
