import { Project } from "@/app/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "ArtVisio – VR and 3D Gallery Platform",
    description:
      "A VR-enabled gallery platform for viewing and uploading 3D artwork, built with Vite and Three.js.",
    image: "/projects/artvisio.jpg",
    tags: ["React", "Vite", "Three.js", "Firebase", "Bootstrap"],
    githubUrl: "https://github.com/YourGitHubUsername/ArtVisio",
    featured: true,
  },
  {
    id: 2,
    title: "Streamline – Project Management Dashboard",
    description:
      "A project management dashboard with task tracking, secure authentication, and a PostgreSQL backend.",
    image: "/projects/streamline.jpg",
    tags: ["Next.js", "Tailwind CSS", "PostgreSQL", "AWS Lambda"],
    githubUrl: "https://github.com/YourGitHubUsername/Streamline",
    featured: true,
  },
  {
    id: 5,
    title: "NHS Booking System",
    description:
      "A healthcare appointment system with secure JWT authentication and database optimizations.",
    image: "/projects/nhs-booking.jpg",
    tags: ["React", "PHP", "SQL", "REST API"],
    githubUrl: "https://github.com/YourGitHubUsername/NHSBookingSystem",
    featured: true,
  },
  {
    id: 6,
    title: "E-Commerce Platform (In Development)",
    description:
      "A full-stack e-commerce platform with Stripe payment integration and dedicated seller & buyer portals.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Java Spring Boot", "Stripe", "Authentication"],
    githubUrl: "https://github.com/YourGitHubUsername/Ecommerce",
    featured: true,
  },
  {
    id: 10,
    title: "Flavour Fusion Recipe App",
    description:
      "A full-stack recipe platform where users can explore, save, and like recipes with JWT authentication.",
    image: "/projects/flavour-fusion.jpg",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    githubUrl: "https://github.com/YourGitHubUsername/FlavourFusion",
    featured: true,
  },
  {
    id: 11,
    title: "One Piece Game Guide Website",
    description:
      "A modern guide for a mobile game based on One Piece characters, featuring a themed UI and dark/light mode.",
    image: "/projects/one-piece-guide.jpg",
    tags: ["Next.js", "React", "UI/UX Design"],
    githubUrl: "https://github.com/YourGitHubUsername/OnePieceGameGuide",
    featured: true,
  },
  {
    id: 3,
    title: "Multi-threaded Ticket Machine Application",
    description:
      "A high-performance ticket vending machine using multithreading for concurrency.",
    image: "/projects/ticket-machine.jpg",
    tags: ["Java", "Concurrency"],
    githubUrl: "https://github.com/YourGitHubUsername/TicketMachine",
    featured: false,
  },
  {
    id: 4,
    title: "To-Do List Application",
    description:
      "A secure task management app with AES-encrypted local storage and a JavaFX UI.",
    image: "/projects/todo-list.jpg",
    tags: ["Java", "JavaFX", "Encryption"],
    githubUrl: "https://github.com/YourGitHubUsername/ToDoList",
    featured: false,
  },
  {
    id: 7,
    title: "Swift Weather App",
    description:
      "A sleek iOS weather app providing real-time weather forecasts using OpenWeather API.",
    image: "/projects/weather-app.jpg",
    tags: ["Swift", "iOS", "API Integration"],
    githubUrl: "https://github.com/YourGitHubUsername/SwiftWeatherApp",
    featured: false,
  },
  {
    id: 8,
    title: "Dice Game (Android)",
    description:
      "An interactive Kotlin-based dice game featuring AI opponents and score tracking.",
    image: "/projects/dice-game.jpg",
    tags: ["Kotlin", "Android", "Game Development"],
    githubUrl: "https://github.com/YourGitHubUsername/DiceGame",
    featured: false,
  },
  {
    id: 9,
    title: "Westminster Skin Consultation Manager",
    description:
      "A Java-based clinic appointment manager for dermatology consultations.",
    image: "/projects/skin-consultation.jpg",
    tags: ["Java", "Desktop App"],
    githubUrl: "https://github.com/YourGitHubUsername/SkinConsultationManager",
    featured: false,
  },
]; 