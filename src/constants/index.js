import {
  fastapi,
  backend,
  web,
  laravel,
  compunet,
  amazon,
  bhel,
  tnq,
} from "@/assets";
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const portfolio = {
  name: "Jegadeesh",
  heroContent: `Experienced Backend Developer proficient in Python and Laravel.
    Strong in full-stack web development, server-side solutions, and
    backend optimization.`,
  overview: `Highly motivated and passionate developer with a strong interest in
  crafting software solutions for real-world challenges. Quick
  learner, skilled in FastAPI, Laravel, and knowledgeable in React.js and
  Next.js. Enjoys coding personal projects, gaming, and watching
  movies in free time.`,
};

export const services = [
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
export const experiences = [
  {
    title: "Senior Developer",
    company_name: "Compunet Connections",
    icon: compunet,
    iconBg: "#000",
    date: "Jan 2024 - Present",
    points: [
      "Designed and implemented RESTful APIs using FastAPI, adhering to SOLID principles to ensure scalable and maintainable code architecture.",
      "Implemented Redis caching mechanisms that achieved an 80% reduction in response times, significantly improving application performance.",
      "Utilized Redis for efficient rate limiting and response caching to optimize application throughput and user experience.",
      "Conducted data analysis with pandas to streamline loan application processes, achieving a 90% reduction in manual tasks through automation and improved data handling.",
      "Actively participated in code review sessions, offering constructive feedback and insights to enhance team development practices and code quality.",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "Compunet Connections",
    icon: compunet,
    iconBg: "#000",
    date: "Sep 2022 - Dec 2023",
    points: [
      "Developing and maintaining web applications using laravel,fastapi and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Digital Associate",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#fff",
    date: "Mar 2021 - Feb 2022",
    points: [
      "Transcribed and annotated image data.",
      "Assisted with the quality assurance testing of dataset through Excel and pre-QA visualization.",
    ],
  },
  {
    title: "Journal Admin",
    company_name: "TNQ Technologies",
    icon: tnq,
    iconBg: "#fff",
    date: "Aug 2020 - Feb 2021",
    points: [
      "Logging in the accepted articles in Production Tracking System.",
      "Coordinated with production staff and maintained schedule for production process.",
    ],
  },
  {
    title: "Apprentice",
    company_name: "BHEL",
    icon: bhel,
    iconBg: "#fff",
    date: "Dec 2017 - Feb 2018",
    points: ["Design and develop pressure parts for boilers."],
  },
];
