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
    title: "BPFunStore – App Store Platform",
    slug: "bpfunstore-app-store",
    shortDescription:
      "An AppStore-style platform where users can browse, install, and review apps across categories like Gaming, Education, and Productivity.",
    fullDescription:
      "Built a full app marketplace experience with a dynamic navbar, JSON-driven app data, and a promotional slider. Implemented Firebase authentication (email/password + Google sign-in), user profile management via updateProfile(), and a full install/uninstall flow that gates review submission behind installation. Protected routes ensure app detail pages are only viewable when logged in, and the whole UI is fully responsive with toast/SweetAlert feedback for user actions.",
    image: "",
    liveLink: "",
    githubLink: "",
    challenges:
      "Gating reviews behind installation state without it feeling clunky — had to track install status per user per app and reflect it instantly in the UI. Also implemented a 'forget password' flow without email verification, which required rethinking the usual reset pattern.",
    futurePlans:
      "Add a payment/premium apps tier, an admin dashboard for managing app listings, and server-side review moderation.",
    technologies: ["React", "React Router", "Firebase Authentication", "JavaScript", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "proj-2",
    title: "OceanStay – Hotel Booking Platform",
    slug: "oceanstay-hotel-booking",
    shortDescription:
      "A modern hotel room booking platform with real-time availability, secure auth, and a post-booking review system.",
    fullDescription:
      "Built a full booking flow where users can explore detailed room listings, check real-time availability, and book rooms with the ability to update dates or cancel anytime. Reviews are only allowed after a completed booking. Authentication supports email/password plus Google and GitHub OAuth, with all MongoDB and Firebase credentials secured via environment variables.",
    image: "",
    liveLink: "",
    githubLink: "",
    challenges:
      "Keeping booking availability accurate in real time so two users couldn't double-book the same room, while still keeping the UI responsive and the review system locked to verified bookings only.",
    futurePlans:
      "Migrate the backend toward PostgreSQL + Prisma, add TypeScript throughout, and build an admin dashboard for hotel/room management.",
    technologies: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "Express.js", "MongoDB", "Firebase"],
    featured: true,
  },
  {
    id: "proj-3",
    title: "BPPlantCare – Plant Care Tracker",
    slug: "bpplantcare-tracker",
    shortDescription:
      "A full-stack plant inventory and care tracker that monitors watering schedules, vitality scores, and care difficulty.",
    fullDescription:
      "A digital assistant for plant owners: tracks each plant's category, care level, watering frequency, and a computed 'vitality score' health status. Includes a full CRUD flow (add, view, update, delete plants) with a dedicated plant detail view, plus a dark/light mode toggle and Firebase-secured private routes.",
    image: "",
    liveLink: "",
    githubLink: "",
    challenges:
      "Designing the watering schedule logic so 'next due' dates recalculate correctly from 'last watered' plus frequency, and representing health as an intuitive vitality percentage rather than a raw status flag.",
    futurePlans:
      "Add watering reminder notifications, photo history per plant to track growth, and a shared/family plant collection mode.",
    technologies: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "Express", "MongoDB", "Firebase"],
    featured: false,
  }
];