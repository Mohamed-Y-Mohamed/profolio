import type { Certification, TimelineEntry } from "@/app/types";

export const timeline: TimelineEntry[] = [
  {
    id: "freelance",
    title: "Freelance Software Developer",
    organisation: "Fiverr & Freelancer.com",
    period: "Aug 2024 — Present",
    points: [
      "Developed and maintained web applications for small businesses using React, Next.js and Node.js.",
      "Designed REST APIs and database structures supporting application functionality, authentication and user management.",
      "Worked directly with clients to gather requirements, discuss technical approaches and deliver completed solutions.",
      "Deployed and maintained applications using modern workflows, including version control and automated deployment.",
      "Investigated and resolved application issues, implemented feature requests and provided ongoing technical support.",
    ],
  },
  {
    id: "westminster",
    title: "BEng Software Engineering — First Class Honours",
    organisation: "University of Westminster, London",
    period: "Sep 2021 — Jul 2024",
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
