import { ReactElement } from 'react';

export interface NavLink {
  name: string;
  path: string;
  section: string | null;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: ReactElement;
  level: number;
}

export interface Education {
  id: number;
  title: string;
  duration: string;
  institution: string;
  grade?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  technologies: string[];
} 