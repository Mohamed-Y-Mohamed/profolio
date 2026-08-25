export interface NavLink {
  name: string;
  href: string;
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  /** visual weight in the grid */
  size: "feature" | "half";
  /** shown as a green LIVE pill when true */
  isLive?: boolean;
  /** small mono note top-right when not live, e.g. "Client work" */
  note?: string;
}

export interface MinorProject {
  title: string;
  meta: string;
  url: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface TimelineEntry {
  id: string;
  title: string;
  organisation: string;
  period: string;
  /** which group the entry belongs to */
  kind: "work" | "education";
  /** short type label, e.g. "Internship", "Degree" */
  tag: string;
  points: string[];
}

export interface Certification {
  name: string;
  inProgress?: boolean;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AccentOption {
  name: string;
  hex: string;
}
