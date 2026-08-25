import type { SkillGroup } from "@/app/types";

export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Java", "Kotlin", "Python", "SQL"] },
  { title: "Frontend", items: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Three.js"] },
  { title: "Backend", items: ["Node.js", "Express", "REST APIs", "Prisma"] },
  { title: "Data", items: ["PostgreSQL", "Supabase", "Firebase / Firestore", "MongoDB"] },
  { title: "Cloud & Tools", items: ["AWS Amplify & Cognito", "Capacitor", "GitHub Actions", "Git", "Postman"] },
  { title: "Practices", items: ["Agile", "Test-Driven Development", "CI/CD", "OOP", "Secure Coding"] },
];
