import type { AccentOption, NavLink, Stat } from "@/app/types";

/**
 * Single source of truth for identity and links.
 * Change it here, it changes everywhere.
 */
export const site = {
  name: "Mohamed Yusuf Mohamed",
  firstName: "Mohamed Yusuf",
  lastName: "Mohamed",
  initials: "MYM",
  role: "Software Engineer",
  location: "London, UK",
  email: "mohamed.y.mohamed1@outlook.com",
  available: true,

  github: "https://github.com/Mohamed-Y-Mohamed",
  githubHandle: "Mohamed-Y-Mohamed",
  linkedin: "https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/",
  /** drop the PDF in /public and point at it, e.g. "/Mohamed-Yusuf-Mohamed-CV.pdf" */
  cv: "",

  /**
   * Formspree form id — @formspree/react is already a dependency.
   * Create a form at https://formspree.io and paste the id (e.g. "xdorwkqp").
   * Left empty, the form falls back to a pre-filled mailto so it still works.
   */
  formspreeId: "",
} as const;

export const navLinks: NavLink[] = [
  { name: "Work", href: "#work" },
  { name: "Stack", href: "#stack" },
  { name: "Path", href: "#path" },
  { name: "Contact", href: "#contact" },
];

export const accents: AccentOption[] = [
  { name: "Amber", hex: "#e8b64c" },
  { name: "Teal", hex: "#5ad1c4" },
  { name: "Lime", hex: "#c3f53c" },
  { name: "Coral", hex: "#ff7a5c" },
  { name: "Violet", hex: "#a99bff" },
];

export const stats: Stat[] = [
  { value: "1st", label: "Class BEng\nSoftware Engineering" },
  { value: "20+", label: "Public\nrepositories" },
  { value: "4", label: "Live deployed\nproducts" },
  { value: "D*DD", label: "Extended\nDiploma" },
];

export const heroMeta = [
  { label: "London, UK", live: false },
  { label: "BEng — First Class Honours", live: false },
  { label: "Available for work", live: true },
];
