import type { Certification, TimelineEntry } from "@/app/types";

export const timeline: TimelineEntry[] = [
  {
    id: "freelance",
    title: "Freelance Software Developer",
    organisation: "Fiverr & Freelancer.com",
    period: "Aug 2024 — Present",
    kind: "work",
    tag: "Freelance",
    points: [
      "Developed and maintained web applications for small businesses using React, Next.js and Node.js.",
      "Designed REST APIs and database structures supporting application functionality, authentication and user management.",
      "Worked directly with clients to gather requirements, discuss technical approaches and deliver completed solutions.",
      "Deployed and maintained applications using modern workflows, including version control and automated deployment.",
      "Investigated and resolved application issues, implemented feature requests and provided ongoing technical support.",
    ],
  },
  {
    id: "lab-diagnostic",
    title: "Software Engineer Intern",
    organisation: "Lab Diagnostic Ltd, London",
    period: "May 2023 — Aug 2023",
    kind: "work",
    tag: "Internship",
    points: [
      "Contributed to a real-time diagnostics dashboard used by healthcare professionals, built with React and Node.js.",
      "Implemented OAuth authentication for secure logins and worked with Redux to manage global application state.",
      "Refactored RESTful APIs and legacy UI components to improve usability and maintainability.",
      "Debugged backend issues including data visibility errors and undefined values in API responses on MongoDB-backed services.",
      "Practised test-driven development and integrated changes through GitHub Actions within an Agile team.",
    ],
  },
  {
    id: "ucl",
    title: "MSc Software Systems Engineering",
    organisation: "University College London (UCL)",
    period: "Starting Sep 2026",
    kind: "education",
    tag: "Incoming",
    points: [
      "One-year full-time MSc focused on large-scale software systems — identifying requirements, designing architecture, then building and testing against them.",
      "Core modules: Requirements Engineering and Software Architecture, Validation and Verification, Software Development Practice, Research Methods in Software Engineering, and Professional Practice.",
      "Culminates in a research or group project, frequently run in collaboration with industry partners.",
      "Planning to take Engineering for Data Analysis 1 and 2 as my optional modules, extending the backend and data work I already enjoy most.",
    ],
  },
  {
    id: "westminster",
    title: "BEng Software Engineering — First Class Honours",
    organisation: "University of Westminster, London",
    period: "Sep 2021 — Jul 2024",
    kind: "education",
    tag: "BEng Hons",
    points: [
      "Notable modules: Java OOP, Server-Side Development, Concurrent Programming, Mobile (Kotlin & Swift), Cybersecurity.",
      "Google Developer Student Club — explored cloud tooling, full-stack and frameworks through hands-on sessions.",
    ],
  },
  {
    id: "wlc",
    title: "ICT (Digital Skills) — Level 3 Diploma & Extended Diploma",
    organisation: "West London College, London",
    period: "Sep 2019 — Jul 2021",
    kind: "education",
    tag: "Level 3",
    points: [
      "D*DD in the Extended Diploma — equivalent to three A-levels at A*AA.",
      "D*D in the 90-credit Diploma — equivalent to 1.5 A-levels at A*.",
      "Coursework: IT Systems, Databases, Programming, IT Project Management, Cyber Security & Incident Management, IT Service Delivery.",
    ],
  },
];

export const certifications: Certification[] = [
  { name: "SQL Essential Training" },
  { name: "Programming Foundations: TDD" },
  { name: "Learning Next.js" },
  { name: "Cybersecurity Awareness: Cloud Security" },
  { name: "AWS Developer Associate", inProgress: true },
];
