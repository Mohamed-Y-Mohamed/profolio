import { Experience } from "@/app/types";

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Freelance Full Stack Engineer",
    company: "Fiverr",
    location: "London, UK",
    date: "Sep 2024 – Present",
    description: [
      "Developed and deployed full-stack web applications for small businesses, integrating secure login and booking functionalities.",
      "Designed and optimised RESTful APIs to enhance system performance and scalability.",
      "Integrated third-party services and APIs to expand system functionality.",
      "Enhanced SQL & MongoDB query performance, reducing retrieval times by 30%.",
    ],
    technologies: ["React", "Node.js", "MongoDB", "SQL", "AWS", "RESTful API"],
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Lab Diagnostic",
    location: "London, UK",
    date: "Jul 2023 – Aug 2023",
    description: [
      "Optimised backend data retrieval, dynamically presenting information based on user requests.",
      "Improved data processing efficiency by 25% in React.js and Node.js applications.",
      "Debugged APIs and resolved issues impacting user experience.",
      "Explored AWS cloud services and worked with CI/CD pipelines.",
    ],
    technologies: ["React", "Node.js", "Express", "SQL", "AWS", "CI/CD"],
  },
]; 