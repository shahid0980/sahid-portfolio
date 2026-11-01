export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  archived: boolean;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
  isPlaceholder?: boolean;
}

export interface GithubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  bio: string | null;
  location: string | null;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
  description: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  isLatest?: boolean;
  points: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  tags: string[];
  githubUrl?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: 'Completed' | 'In progress';
  modules?: string[];
}
