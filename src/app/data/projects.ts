import type { MinorProject, Project } from "@/app/types";

const GH = "https://github.com/Mohamed-Y-Mohamed";

export const projects: Project[] = [
  {
    id: "nutripilot",
    title: "NutriPilot",
    role: "Nutrition Platform — Web & Android",
    description:
      "A nutrition tracker combining a food diary, recipe browsing, nutrition goals and an AI coach that handles nutrition conversations and meal-photo analysis. Auth, data and services run on Supabase. The same React codebase ships as an Android app through Capacitor, with light, dark and system themes and a full account-deletion flow.",
    tags: ["TypeScript", "React", "Supabase", "Capacitor", "Android"],
    links: [
      { label: "Live site", url: "https://nutripilots.netlify.app" },
      { label: "Repository", url: `${GH}/NutriPilots` },
    ],
    size: "feature",
    isLive: true,
  },
  {
    id: "streamline",
    title: "Streamline",
    role: "Project & Task Management",
    description:
      "A project-management platform with board, table, timeline and search views over projects, tasks, users and teams. An Express API persists to PostgreSQL through Prisma; the Next.js frontend authenticates with AWS Amplify and Amazon Cognito and passes the access token as a Bearer token on every API request.",
    tags: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "AWS Cognito", "RTK Query"],
    links: [{ label: "Repository", url: `${GH}/Streamline` }],
    size: "feature",
    note: "Full-stack",
  },
  {
    id: "colour",
    title: "Smart Colour Theme Generator",
    role: "AI Design Tool",
    description:
      "An AI-powered tool that generates a complete colour theme from two or three base inputs, with JSON export and token-secured API access. Built to theme my own projects — including the accent switcher at the top right of this page.",
    tags: ["TypeScript", "React", "GROQ AI", "Tailwind"],
    links: [
      { label: "Live site", url: "https://color-generation.vercel.app" },
      { label: "Repository", url: `${GH}/color-generation` },
    ],
    size: "feature",
    isLive: true,
  },
  {
    id: "listit",
    title: "List It",
    role: "Task & Note Platform",
    description:
      "A full-stack task and note platform with secure authentication, backed by PostgreSQL and Supabase schemas for tasks, collections and notes. CI/CD runs through GitHub Actions, and a separate Kotlin client extends it to Android.",
    tags: ["Next.js", "TypeScript", "Supabase", "GitHub Actions"],
    links: [
      { label: "Live site", url: "https://list-it-dom.netlify.app/landingpage" },
      { label: "Repository", url: `${GH}/List-it-web` },
    ],
    size: "half",
    isLive: true,
  },
  {
    id: "evora",
    title: "Evora Capital",
    role: "Commercial Website",
    description:
      "A Next.js website for a capital firm — home, about, services and contact pages with responsive navigation, light and dark theming, reusable page components and an EmailJS-backed enquiry form. Built on Next.js 16 and React 19.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4"],
    links: [{ label: "Repository", url: `${GH}/consultant-repository` }],
    size: "half",
    note: "Client work",
  },
  {
    id: "selfhelp",
    title: "Self-Help Prototype",
    role: "Kotlin & Firebase",
    description:
      "An Android healthcare self-help prototype: Firebase email authentication, symptom-keyword processing that maps to General, Cardiology, Dermatology, Neurology or Paediatrics, emergency-phrase detection returning a 999/A&E warning, and a Firestore-backed messaging interface. A prototype with fictional doctor profiles — not a clinical or NHS-affiliated service.",
    tags: ["Kotlin", "Firebase", "Firestore", "Android"],
    links: [{ label: "Repository", url: `${GH}/nhsSelfHelp` }],
    size: "feature",
    note: "Android",
  },
  {
    id: "rl-taxi",
    title: "Reinforcement Learning Taxi Agent",
    role: "Q-Learning & Policy Imitation",
    description:
      "Trains a tabular Q-learning policy on Gymnasium's Taxi-v3, then uses the learned Q-table to generate labelled state/action data and trains a scikit-learn MLP to imitate that policy. Reports accuracy, weighted F1, a confusion matrix and per-class accuracy, and evaluates the imitation policy across episodes.",
    tags: ["Python", "Gymnasium", "scikit-learn", "Jupyter"],
    links: [{ label: "Repository", url: `${GH}/Reinforcement-Learning-Taxi-Agent` }],
    size: "feature",
    note: "Machine learning",
  },
  {
    id: "skin-clinic",
    title: "Skin Consultation Manager",
    role: "Java OOP & Swing",
    description:
      "A clinic management system for doctor consultations, built on object-oriented principles with a Swing GUI. Handles doctor and patient records, automated doctor assignment, CSV file persistence and encrypted consultation notes — with JUnit tests covering the core logic and data integrity.",
    tags: ["Java", "Swing", "OOP", "JUnit", "Encryption"],
    links: [{ label: "Repository", url: `${GH}/westminster-Skin-Consultation-Manager` }],
    size: "feature",
    note: "Java",
  },
  {
    id: "artvisio",
    title: "ArtVisio",
    role: "3D / VR Art Gallery",
    description:
      "A web-based 3D and VR gallery for digital artwork, with interactive environments built in Three.js. A large share of the work was diagnosing rendering and cross-device compatibility problems — which taught me more than the happy path did.",
    tags: ["Three.js", "JavaScript", "Firebase", "Vite"],
    links: [{ label: "Repository", url: `${GH}/ArtVisio` }],
    size: "half",
    note: "WebGL",
  },
  {
    id: "ticket-machine",
    title: "Multi-threaded Ticket Machine",
    role: "Java Concurrency",
    description:
      "A concurrency simulation of a shared ticket-printing machine. Passenger threads submit print work against one shared Machine instance while separate daemon technician threads replenish paper and toner, with machine state tracked throughout — a practical exercise in synchronisation and shared-resource contention.",
    tags: ["Java 17", "Multithreading", "Daemon threads"],
    links: [{ label: "Repository", url: `${GH}/multi-threaded-ticket-machine-software` }],
    size: "half",
    note: "Concurrency",
  },
];

export const minorProjects: MinorProject[] = [
  {
    title: "Electric Prediction System",
    meta: "Python",
    url: `${GH}/Electric-Prediction-System`,
  },
  {
    title: "NHS Booking (team project)",
    meta: "React · PHP",
    url: `${GH}/SoftwareDevelopment-Group-E-Project`,
  },
  { title: "All repositories", meta: "GitHub ↗", url: GH },
];
