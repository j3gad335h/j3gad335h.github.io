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
    id: "skills",
    title: "Skills",
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

export const skills = [
  {
    title: "Backend",
    skills: [
      {
        name: "PHP",
        image: "https://www.svgrepo.com/show/373966/php.svg",
      },
      {
        name: "Laravel",
        image: "https://www.svgrepo.com/show/353985/laravel.svg",
      },

      {
        name: "Lumen",
        image: "https://www.svgrepo.com/show/354019/lumen.svg",
      },
      {
        name: "Python",
        image: "https://www.svgrepo.com/show/374016/python.svg",
      },
      {
        name: "FastApi",
        image: "https://www.svgrepo.com/show/330413/fastapi.svg",
      },
      {
        name: "Flask",
        image: "https://www.svgrepo.com/show/508915/flask.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg",
      },
      {
        name: "Next Js",
        image: "https://www.svgrepo.com/show/342062/next-js.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image: "https://www.svgrepo.com/show/452185/css-3.svg",
      },
      {
        name: "JavaScript",
        image: "https://www.svgrepo.com/show/353925/javascript.svg",
      },
      {
        name: "Bootstrap",
        image: "https://www.svgrepo.com/show/353498/bootstrap.svg",
      },
      {
        name: "Tailwind CSS",
        image: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
      },
      {
        name: "Jinja",
        image: "https://www.svgrepo.com/show/373702/jinja.svg",
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Apache2",
        image: "https://www.svgrepo.com/show/353400/apache.svg",
      },
      {
        name: "Nginx",
        image: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
      },
      {
        name: "Docker",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      },
      {
        name: "Jenkins",
        image:
          "https://toppng.com/uploads/preview/jenkins-logo-11609365847mufysaivph.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "BitBucket",
        image:
          "https://www.svgrepo.com/show/452166/bitbucket.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Postman",
        image:
          "https://static-00.iconduck.com/assets.00/postman-icon-497x512-beb7sy75.png",
      },
    ],
  },
];
