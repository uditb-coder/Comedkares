
export interface Program {
  id: string;
  title: string;
  category: string;
  overview: string;
  durationText?: string;
  contactHours?: string;
  mode: string;
  objectives: string[];
  outcomes?: string[];
  coursePlan?: string;
  tracks?: string[];
  sections?: {
    title: string;
    description?: string;
    items?: string[];
    caseStudies?: { title: string; description: string }[];
  }[];
  sessionFlow?: {
    session: string;
    objective?: string;
    topic?: string;
    output?: string;
    outcome?: string;
    description?: string[];
  }[];
  tools: string[];
  evaluation?: string;
}

export interface Hub {
  id: string;
  name: string;
  location: string;
  facilities: string[];
  programs: string[];
  contact: string;
  coordinates: { x: number; y: number };
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  involvement: string;
  category?: string;
  image?: string;
}

export interface LeadershipMember {
  name: string;
  designation: string;
  image: string;
  bio: string;
}

export interface Milestone {
  date: string;
  title: string;
  description: string;
  icon: string;
}
