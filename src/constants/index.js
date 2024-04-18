import { fastapi, backend, web, laravel } from "@/assets";
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
    icon: "https://storage.cloud.google.com/jegs-archive/logo/cnc.png?authuser=1",
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using laravel,fastapi and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "Compunet Connections",
    icon: "https://storage.cloud.google.com/jegs-archive/logo/cnc.png?authuser=1",
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using laravel,fastapi and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
