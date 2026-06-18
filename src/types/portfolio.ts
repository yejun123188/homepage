export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Skill = {
  name: string;
  level: number;
  category: "Markup" | "Style" | "Language" | "Framework" | "State" | "Backend" | "Tool";
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  accent: string;
};

export type Education = {
  title: string;
  period: string;
  description: string;
};

export type Activity = {
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  role: string;
  intro: string;
  about: string;
  email: string;
  github: string;
  pdfUrl: string;
};
