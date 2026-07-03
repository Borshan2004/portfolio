import type { ExperienceItem, EducationItem, Project } from "@/types";

export const PROFILE = {
  name: "Borshan Purification",
  tagline: "Borshan Purification",
  image: "/myphoto.jpeg",
  subline:
    "Building scalable backend systems, full-stack applications, and AI-powered solutions while studying Computer Science.",
  availability: "Open to internships & collaborations",
  email: "borshanpurification42@gmail.com",
  linkedin: "https://www.linkedin.com/in/borshan-purification-1b7278322/",
  github: "https://github.com/Borshan2004",
  stats: [
    { value: "2+", label: "Years writing code" },
    { value: "3+", label: "Projects shipped" },
    { value: "2", label: "Languages fluent in" },
    { value: "∞", label: "Cups of tea" },
  ],
  highlight: "Full-Stack Developer"
};

// export const ABOUT: AboutItem[] = [
//   {
    
//     description:"I am a passionate software engineer with a strong foundation in computer science and a keen interest in building scalable and efficient applications.",
//   }
  
// ];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Member",
    org: "ACM NSU Student Chapter",
    orgUrl: "#",
    period: "2025 — Present",
    description:
      "Contributing to workshops and events on algorithms, web development, and competitive programming.",
  },
  {
    id: "exp-2",
    role: "Backend Developer (Freelance)",
    org: "Independent",
    period: "2025 — Present",
    description:
      "Building REST APIs and database-backed applications with Node.js, Express, and PostgreSQL.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    year: "2027 (Expected)",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "North South University",
    note: "Coursework in digital logic design, databases, and data structures.",
  },
];

export const SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Prisma",
  "Python",
  "Git",
  "Tailwind CSS",
  "SQL",
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Football Ticket Booking System",
    slug: "football-ticket-booking",
    shortDescription:
      "A booking platform for match tickets with seat selection and PostgreSQL-backed inventory.",
    fullDescription:
      "Designed the schema (Users, Matches, Bookings), wrote SQL for availability checks, and built the ERD from scratch as a database systems project.",
    image: "",
    liveLink: "",
    githubLink: "https://github.com/yourname/football-ticket-booking",
    challenges:
      "Handling concurrent booking attempts safely — two users could try to book the same seat at once. Solved with row-level locking in the SQL query rather than application-level checks.",
    futurePlans:
      "Add payment integration, email confirmations, and an admin dashboard for match scheduling.",
    technologies: ["PostgreSQL", "Node.js", "Express", "React"],
    featured: true,
  },
  {
    id: "proj-2",
    title: "Digital Logic Simulator",
    slug: "digital-logic-simulator",
    shortDescription:
      "Interactive React app for building and simulating logic gate circuits and truth tables.",
    fullDescription:
      "Built to visualize K-map simplification and Boolean algebra concepts from coursework. Renders gates on a canvas and computes truth tables live.",
    image: "",
    liveLink: "",
    githubLink: "https://github.com/yourname/logic-simulator",
    challenges:
      "Getting the canvas re-render to stay in sync with circuit state changes without lag, especially with wrap-around K-map adjacency.",
    futurePlans: "Add support for 4-variable K-maps and export circuits as shareable links.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "proj-3",
    title: "Personal Portfolio API",
    slug: "personal-portfolio-api",
    shortDescription:
      "The REST API powering this site — projects, technologies, and contact messages.",
    fullDescription:
      "Layered backend architecture: routes → controllers → services → repositories, with Zod validation and a normalized many-to-many schema for project technologies.",
    image: "",
    liveLink: "",
    githubLink: "https://github.com/yourname/portfolio",
    challenges: "Designing the many-to-many Project↔Technology relationship cleanly with Prisma.",
    futurePlans: "Add an admin dashboard so projects can be managed without touching Prisma Studio directly.",
    technologies: ["Node.js", "Express", "Prisma", "PostgreSQL"],
    featured: false,
  },
];