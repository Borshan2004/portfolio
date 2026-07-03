export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  institution: string;
  note: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription?: string;
  image?: string;
  liveLink?: string;
  githubLink?: string;
  challenges?: string;
  futurePlans?: string;
  technologies: string[];
  featured: boolean;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AboutItem {
  description: string;
}