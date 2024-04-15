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
  crafting software solutions for real-world challenges. Committed to
  building reliable, scalable, and user-friendly applications. Quick
  learner, skilled in FastAPI, Laravel, and knowledgeable in React.js and
  Next.js. Thrives in collaborative team environments and values open
  communication. Enjoys coding personal projects, gaming, and watching
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
