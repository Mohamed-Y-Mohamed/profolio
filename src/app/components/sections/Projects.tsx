// /app/components/sections/Projects.tsx
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaReact,
  FaJava,
  FaNodeJs,
  FaMobileAlt,
  FaDatabase,
  FaPalette,
  FaGamepad,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import {
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiThreedotjs,
  SiSpring,
} from "react-icons/si";
import { projects } from "@/app/data/projects";
import type { Project } from "@/app/types";

// Project filter categories
const filterCategories = [
  "All",
  "React",
  "Next.js",
  "Java",
  "Swift",
  "Kotlin",
  "Three.js",
  "Node.js",
  "Spring Boot",
  "API Integration",
  "Mobile Apps",
  "Game Development",
  "UI/UX Design",
];

interface IconProps {
  size?: number;
}

// Map of icons to use based on tags
const tagIconMap: Record<string, React.ReactElement<IconProps>> = {
  React: <FaReact size={22} />,
  "Next.js": <FaReact size={22} />,
  Java: <FaJava size={22} />,
  Swift: <SiSwift size={22} />,
  Kotlin: <SiKotlin size={22} />,
  "Three.js": <SiThreedotjs size={22} />,
  "Node.js": <FaNodeJs size={22} />,
  "Spring Boot": <SiSpring size={22} />,
  "API Integration": <FaCloud size={22} />,
  "Mobile Apps": <FaMobileAlt size={22} />,
  "Game Development": <FaGamepad size={22} />,
  "UI/UX Design": <FaPalette size={22} />,
  Firebase: <SiFirebase size={22} />,
  Database: <FaDatabase size={22} />,
  Backend: <FaServer size={22} />,
};

// Function to get a color based on project index
const getProjectColor = (index: number) => {
  const colors = [
    { from: "#3BC4C4", to: "#2aa3a3" }, // Teal
    { from: "#635BFF", to: "#4B44EF" }, // Purple
    { from: "#FF7A59", to: "#E35B39" }, // Orange
    { from: "#5D6EF7", to: "#3A4CD7" }, // Blue
    { from: "#6554C0", to: "#4835A0" }, // Indigo
    { from: "#00B8D9", to: "#0099B9" }, // Cyan
  ];

  return colors[index % colors.length];
};

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const projectsEndRef = useRef<HTMLDivElement>(null);

  // Filter projects based on selected category
  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) =>
            tag.toLowerCase().includes(selectedFilter.toLowerCase())
          )
        );

  // Get projects to display based on view state
  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.filter((project) =>
        // If a filter is active, show all that match the filter
        selectedFilter !== "All" ? true : project.featured
      );

  // Toggle show all projects and scroll to end if expanding
  const toggleShowAllProjects = () => {
    const newState = !showAllProjects;
    setShowAllProjects(newState);

    // If expanding, scroll to the bottom of the section after a delay
    if (newState && projectsEndRef.current) {
      setTimeout(() => {
        projectsEndRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 100);
    }
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-[#0d1224]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-3/4 max-w-md">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" />
            </div>
          </div>

          <h2 className="inline-block text-4xl md:text-5xl font-bold mb-4 relative text-white">
            Projects
            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#3BC4C4]/50"></div>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            Explore some of my recent work and personal projects.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedFilter === category
                    ? "bg-[#3BC4C4] text-white"
                    : "bg-slate-700 text-slate-200 hover:bg-slate-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </div>

        {selectedFilter === "All" && filteredProjects.length > 6 && (
          <div className="mt-14 text-center" ref={projectsEndRef}>
            <button
              onClick={toggleShowAllProjects}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3BC4C4] text-white font-medium hover:bg-[#2aa3a3] transition-colors"
            >
              {showAllProjects ? (
                <>
                  Show Less <FaChevronUp size={14} />
                </>
              ) : (
                <>
                  Show All Projects <FaChevronDown size={14} />
                </>
              )}
            </button>
          </div>
        )}

        {selectedFilter === "All" &&
          !showAllProjects &&
          filteredProjects.length > displayedProjects.length && (
            <p className="text-center text-slate-400 mt-4 text-sm">
              {filteredProjects.length - displayedProjects.length} more projects
              available
            </p>
          )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
  const colors = getProjectColor(index);

  // Get main icon for the project based on first tag
  const getMainIcon = () => {
    const mainTag = project.tags[0];
    return tagIconMap[mainTag] || <FaCode size={22} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, delay: 0.1 + (index % 6) * 0.1 }}
      className="group bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Animated Header Section with gradient background */}
      <div
        className="relative h-36 overflow-hidden p-6 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
        }}
      >
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: `${Math.random() * 30 + 15}px`,
                height: `${Math.random() * 30 + 15}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 6 + 8}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Project Title with Icon */}
        <div className="relative z-10 text-center">
          <div className="mb-3 mx-auto bg-white/20 w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-sm">
            {getMainIcon()}
          </div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>

        {/* GitHub link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors backdrop-blur-sm"
          aria-label="View GitHub Repository"
        >
          <FaGithub size={18} />
        </a>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <p className="text-slate-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-slate-700 text-slate-200 rounded-full flex items-center gap-1"
            >
              {tagIconMap[tag] ? (
                <span className="text-[#3BC4C4]">
                  {React.cloneElement(tagIconMap[tag], { size: 12 })}
                </span>
              ) : null}
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs bg-slate-700 text-slate-200 rounded-full">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
