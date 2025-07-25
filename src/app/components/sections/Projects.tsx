// // /app/components/sections/Projects.tsx
// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useInView,
//   AnimatePresence,
//   useAnimation,
// } from "framer-motion";
// import {
//   FaGithub,
//   FaChevronDown,
//   FaChevronUp,
//   FaCode,
//   FaReact,
//   FaJava,
//   FaNodeJs,
//   FaMobileAlt,
//   FaDatabase,
//   FaPalette,
//   FaGamepad,
//   FaServer,
//   FaCloud,
//   FaExternalLinkAlt,
//   FaStar,
// } from "react-icons/fa";
// import {
//   SiSwift,
//   SiKotlin,
//   SiFirebase,
//   SiThreedotjs,
//   SiSpring,
// } from "react-icons/si";
// import { projects } from "@/app/data/projects";
// import type { Project } from "@/app/types";

// // Project filter categories
// const filterCategories = [
//   "All",
//   "JavaScript",
//   "React",
//   "Next.js",
//   "Java",
//   "Python",
//   "Swift",
//   "Kotlin",
//   "PHP",
//   "Three.js",
//   "Node.js",
//   "Spring Boot",
//   "Firebase",
//   "MongoDB",
//   "SQL",
//   "AWS",
//   "API",
//   "Authentication",
//   "Tailwind CSS",
//   "Bootstrap",
//   "OOP",
//   "Multithreading",
// ];

// interface IconProps {
//   size?: number;
// }

// // Map of icons to use based on tags
// const tagIconMap: Record<string, React.ReactElement<IconProps>> = {
//   React: <FaReact size={22} />,
//   "Next.js": <FaReact size={22} />,
//   Java: <FaJava size={22} />,
//   Swift: <SiSwift size={22} />,
//   Kotlin: <SiKotlin size={22} />,
//   "Three.js": <SiThreedotjs size={22} />,
//   "Node.js": <FaNodeJs size={22} />,
//   "Spring Boot": <SiSpring size={22} />,
//   "API Integration": <FaCloud size={22} />,
//   "Mobile Apps": <FaMobileAlt size={22} />,
//   "Game Development": <FaGamepad size={22} />,
//   "UI/UX Design": <FaPalette size={22} />,
//   Firebase: <SiFirebase size={22} />,
//   Database: <FaDatabase size={22} />,
//   Backend: <FaServer size={22} />,
// };

// export default function Projects() {
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [showAllProjects, setShowAllProjects] = useState(false);
//   const [hoveredProject, setHoveredProject] = useState<string | null>(null);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });
//   const projectsEndRef = useRef<HTMLDivElement>(null);
//   const titleControls = useAnimation();
//   const gridRef = useRef<HTMLDivElement>(null);

//   // Start title animation when in view
//   useEffect(() => {
//     if (isInView) {
//       titleControls.start({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6 },
//       });
//     }
//   }, [isInView, titleControls]);

//   // Filter projects based on selected category
//   const filteredProjects =
//     selectedFilter === "All"
//       ? projects
//       : projects.filter((project) =>
//           project.tags.some((tag) =>
//             tag.toLowerCase().includes(selectedFilter.toLowerCase())
//           )
//         );

//   // Get projects to display based on view state
//   const displayedProjects = showAllProjects
//     ? filteredProjects
//     : filteredProjects.filter((project) =>
//         // If a filter is active, show all that match the filter
//         selectedFilter !== "All" ? true : project.featured
//       );

//   // Toggle show all projects and scroll to end if expanding
//   const toggleShowAllProjects = () => {
//     const newState = !showAllProjects;
//     setShowAllProjects(newState);

//     // If expanding, scroll to the bottom of the section after a delay
//     if (newState && projectsEndRef.current) {
//       setTimeout(() => {
//         projectsEndRef.current?.scrollIntoView({
//           behavior: "smooth",
//           block: "end",
//         });
//       }, 100);
//     }
//   };

//   // Handle filter change with animation
//   const handleFilterChange = (category: string) => {
//     if (category === selectedFilter) return;

//     if (gridRef.current) {
//       // Add a quick fade out animation
//       gridRef.current.style.opacity = "0";
//       gridRef.current.style.transform = "scale(0.98)";

//       setTimeout(() => {
//         setSelectedFilter(category);

//         // Then fade back in
//         if (gridRef.current) {
//           gridRef.current.style.opacity = "1";
//           gridRef.current.style.transform = "scale(1)";
//         }
//       }, 200);
//     } else {
//       setSelectedFilter(category);
//     }
//   };

//   // Create grid pattern background
//   const gridPatternStyles = {
//     backgroundSize: "40px 40px",
//     backgroundImage: `
//       linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
//       linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
//     `,
//   };

//   return (
//     <section
//       id="projects"
//       ref={ref}
//       className="py-16 relative bg-gradient-to-b from-[#0a162d] to-[#0d1224]"
//     >
//       {/* Background elements */}
//       <div className="absolute inset-0" style={gridPatternStyles}></div>
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-0"></div>
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-0"></div>

//       <div className="w-full mx-auto px-2 sm:px-4 relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={titleControls}
//         >
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isInView ? { width: "100%" } : {}}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full max-w-md mx-auto mb-8"
//           />

//           <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
//               Projects
//             </span>
//             <motion.div
//               className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-400"
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//             />
//           </h2>

//           <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
//             Explore my portfolio of projects showcasing technical skills and
//             creative problem-solving.
//           </p>

//           {/* Filter categories with enhanced UI */}
//           <div className="flex flex-wrap justify-center gap-3 mb-16">
//             {filterCategories.map((category, index) => (
//               <motion.button
//                 key={category}
//                 onClick={() => handleFilterChange(category)}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                   selectedFilter === category
//                     ? "bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 shadow-lg shadow-cyan-500/20"
//                     : "bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:border-slate-600"
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.97 }}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   duration: 0.4,
//                   delay: 0.1 + index * 0.03,
//                   type: "spring",
//                   stiffness: 200,
//                 }}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Projects Grid with Transitions */}
//         <div
//           ref={gridRef}
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300"
//         >
//           <AnimatePresence mode="wait">
//             {displayedProjects.map((project, index) => (
//               <ProjectCard
//                 key={project.id}
//                 project={project}
//                 index={index}
//                 isInView={isInView}
//                 isHovered={hoveredProject === project.id.toString()}
//                 onHover={(id) => setHoveredProject(id)}
//               />
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* Show more/less button */}
//         {selectedFilter === "All" && filteredProjects.length > 6 && (
//           <motion.div
//             className="mt-16 text-center"
//             ref={projectsEndRef}
//             initial={{ opacity: 0, y: 20 }}
//             animate={isInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ delay: 0.5, duration: 0.5 }}
//           >
//             <motion.button
//               onClick={toggleShowAllProjects}
//               className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               {showAllProjects ? (
//                 <>
//                   Show Featured <FaChevronUp className="text-xs ml-1" />
//                 </>
//               ) : (
//                 <>
//                   Show All Projects <FaChevronDown className="text-xs ml-1" />
//                 </>
//               )}
//             </motion.button>
//           </motion.div>
//         )}

//         {selectedFilter === "All" &&
//           !showAllProjects &&
//           filteredProjects.length > displayedProjects.length && (
//             <motion.p
//               className="text-center text-slate-400 mt-4 text-sm"
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.7 }}
//             >
//               <span className="font-medium text-cyan-400">
//                 {filteredProjects.length - displayedProjects.length}
//               </span>{" "}
//               more projects available
//             </motion.p>
//           )}
//       </div>
//     </section>
//   );
// }

// interface ProjectCardProps {
//   project: Project;
//   index: number;
//   isInView: boolean;
//   isHovered: boolean;
//   onHover: (id: string | null) => void;
// }

// function ProjectCard({
//   project,
//   index,
//   isInView,
//   isHovered,
//   onHover,
// }: ProjectCardProps) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const controls = useAnimation();

//   // Generate color based on index
//   const getGradient = (index: number) => {
//     const gradients = [
//       "from-cyan-400 to-blue-500",
//       "from-purple-400 to-indigo-500",
//       "from-teal-400 to-cyan-500",
//       "from-blue-400 to-indigo-500",
//       "from-cyan-400 to-teal-500",
//       "from-indigo-400 to-purple-500",
//     ];

//     return gradients[index % gradients.length];
//   };

//   // Staggered animation when the card becomes visible
//   useEffect(() => {
//     if (isInView) {
//       controls.start({
//         opacity: 1,
//         y: 0,
//         transition: {
//           duration: 0.5,
//           delay: 0.1 + (index % 6) * 0.1,
//           type: "spring",
//           stiffness: 100,
//         },
//       });
//     }
//   }, [isInView, controls, index]);

//   // Get main icon for the project based on first tag
//   const getMainIcon = () => {
//     const mainTag = project.tags[0];
//     return tagIconMap[mainTag] || <FaCode size={26} />;
//   };

//   // Handle mouse enter
//   const handleMouseEnter = () => {
//     onHover(project.id.toString());
//   };

//   // Handle mouse leave
//   const handleMouseLeave = () => {
//     onHover(null);
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       initial={{ opacity: 0, y: 30 }}
//       animate={controls}
//       exit={{ opacity: 0, y: -20 }}
//       whileHover={{
//         y: -8,
//         transition: { duration: 0.3, type: "spring", stiffness: 300 },
//       }}
//       className="group relative rounded-xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900 shadow-xl border border-slate-700/50"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Card glow effect on hover */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
//         style={{
//           background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(77, 208, 225, 0.06), transparent 40%)`,
//         }}
//       />

//       {/* Animated Header Section with gradient background */}
//       <div
//         className={`relative h-40 overflow-hidden flex items-center justify-center transition-all duration-500`}
//       >
//         {/* Gradient background */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-r ${getGradient(index)}`}
//         >
//           {/* Animated particles */}
//           <AnimatePresence>
//             {isHovered &&
//               [...Array(8)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute rounded-full bg-white/20"
//                   initial={{
//                     opacity: 0,
//                     scale: 0,
//                     x: Math.random() * 100 - 50,
//                     y: Math.random() * 100 - 50,
//                   }}
//                   animate={{
//                     opacity: [0, 0.7, 0],
//                     scale: [0, 1, 0],
//                     x: Math.random() * 200 - 100,
//                     y: Math.random() * 200 - 100,
//                   }}
//                   exit={{ opacity: 0, scale: 0 }}
//                   transition={{
//                     duration: 2 + Math.random() * 2,
//                     repeat: Infinity,
//                     repeatDelay: Math.random() * 2,
//                   }}
//                   style={{
//                     width: `${Math.random() * 30 + 10}px`,
//                     height: `${Math.random() * 30 + 10}px`,
//                     left: `${Math.random() * 100}%`,
//                     top: `${Math.random() * 100}%`,
//                   }}
//                 />
//               ))}
//           </AnimatePresence>

//           {/* Triangle pattern */}
//           <svg
//             className="absolute inset-0 w-full h-full opacity-30"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <pattern
//               id={`trianglePattern-${index}`}
//               width="40"
//               height="40"
//               patternUnits="userSpaceOnUse"
//             >
//               <path
//                 d="M0,0 L20,0 L10,17.3 Z"
//                 fill="none"
//                 stroke="rgba(255, 255, 255, 0.3)"
//                 strokeWidth="0.5"
//               />
//             </pattern>
//             <rect
//               width="100%"
//               height="100%"
//               fill={`url(#trianglePattern-${index})`}
//             />
//           </svg>
//         </div>

//         {/* Project Title with Icon */}
//         <div className="relative z-10 text-center transform transition-transform duration-500 group-hover:scale-105">
//           <motion.div
//             className="mb-3 mx-auto bg-white/20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-xl"
//             initial={{ scale: 0.9, opacity: 0.8 }}
//             animate={{ scale: isHovered ? 1.1 : 1, opacity: 1 }}
//             transition={{
//               duration: 0.4,
//               type: "spring",
//               stiffness: 200,
//             }}
//           >
//             <span className="text-white">{getMainIcon()}</span>
//           </motion.div>
//           <h3 className="text-xl font-bold text-white drop-shadow-md">
//             {project.title}
//           </h3>
//         </div>

//         {/* Featured badge if project is featured */}
//         {project.featured && (
//           <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
//             <FaStar className="text-yellow-300" size={12} />
//             Featured
//           </div>
//         )}

//         {/* Action buttons - GitHub and Live URL */}
//         <div className="absolute top-3 right-3 flex gap-2">
//           {/* GitHub link */}
//           <motion.a
//             href={project.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/10"
//             aria-label="View GitHub Repository"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <FaGithub size={18} />
//           </motion.a>

//           {/* Live URL link - only show if domainURL exists */}
//           {project.domainURL && (
//             <motion.a
//               href={project.domainURL}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/10"
//               aria-label="View Live Project"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <FaExternalLinkAlt size={18} />
//             </motion.a>
//           )}
//         </div>
//       </div>

//       {/* Project Info */}
//       <div className="p-6 relative">
//         {/* Description with gradient text effect on hover */}
//         <p className="text-slate-300 mb-5 line-clamp-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-500">
//           {project.description}
//         </p>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2">
//           {project.tags.slice(0, 3).map((tag, i) => (
//             <motion.span
//               key={i}
//               className="px-3 py-1 text-xs bg-slate-700/60 text-slate-200 rounded-full flex items-center gap-1.5 backdrop-blur-sm border border-slate-600/30"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 + i * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               {tagIconMap[tag] ? (
//                 <span className="text-cyan-400">
//                   {React.cloneElement(tagIconMap[tag], { size: 12 })}
//                 </span>
//               ) : null}
//               {tag}
//             </motion.span>
//           ))}
//           {project.tags.length > 3 && (
//             <motion.span
//               className="px-3 py-1 text-xs bg-slate-700/60 text-slate-300 rounded-full backdrop-blur-sm border border-slate-600/30"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               +{project.tags.length - 3} more
//             </motion.span>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   );
// }
// /app/components/sections/Projects.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import {
  FaGithub,
  FaChevronDown,
  FaChevronUp,
  FaCode,
  FaReact,
  FaJava,
  FaNodeJs,
  FaExternalLinkAlt,
  FaStar,
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

// Project filter categories - simplified
const filterCategories = [
  "All",
  "React",
  "Next.js",
  "Java",
  "Python",
  "Swift",
  "JavaScript",
  "Node.js",
];

interface IconProps {
  size?: number;
}

// Map of icons to use based on tags
const tagIconMap: Record<string, React.ReactElement<IconProps>> = {
  React: <FaReact size={16} />,
  "Next.js": <FaReact size={16} />,
  Java: <FaJava size={16} />,
  Swift: <SiSwift size={16} />,
  Kotlin: <SiKotlin size={16} />,
  "Three.js": <SiThreedotjs size={16} />,
  "Node.js": <FaNodeJs size={16} />,
  "Spring Boot": <SiSpring size={16} />,
  Firebase: <SiFirebase size={16} />,
};

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    }
  }, [isInView, controls]);

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
        selectedFilter !== "All" ? true : project.featured
      );

  const toggleShowAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 relative bg-[#1E2125] overflow-hidden"
    >
      {/* Simple background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00ADB5] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-[#EEEEEE]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Projects Portfolio
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-lg text-[#B0BEC5] max-w-2xl mx-auto mt-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Showcasing my development journey through practical applications and
            creative solutions
          </motion.p>

          {/* Filter categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filterCategories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedFilter(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedFilter === category
                    ? "bg-[#00ADB5] text-[#121417] shadow-lg"
                    : "bg-[#121417]/40 border border-[#393E46] text-[#B0BEC5] hover:bg-[#121417]/60"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
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

        {/* Show more/less button */}
        {selectedFilter === "All" && filteredProjects.length > 6 && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.button
              onClick={toggleShowAllProjects}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#00ADB5] text-[#121417] font-medium hover:bg-[#00FFF5] transition-all duration-300 shadow-lg border border-[#00ADB5]/50"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(0, 255, 245, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {showAllProjects ? (
                <>
                  Show Featured <FaChevronUp className="text-xs ml-1" />
                </>
              ) : (
                <>
                  View All Projects <FaChevronDown className="text-xs ml-1" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {selectedFilter === "All" &&
          !showAllProjects &&
          filteredProjects.length > displayedProjects.length && (
            <motion.p
              className="text-center text-[#B0BEC5] mt-4 text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <span className="font-medium text-[#00ADB5]">
                {filteredProjects.length - displayedProjects.length}
              </span>{" "}
              more projects available
            </motion.p>
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
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.1 + (index % 6) * 0.1,
        },
      });
    }
  }, [isInView, controls, index]);

  // Get main icon for the project based on first tag
  const getMainIcon = () => {
    const mainTag = project.tags[0];
    return tagIconMap[mainTag] || <FaCode size={24} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      whileHover={{
        y: -8,
        boxShadow: "0 15px 40px rgba(0, 173, 181, 0.1)",
      }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl overflow-hidden bg-[#121417]/60 backdrop-blur-sm shadow-xl border border-[#393E46]"
    >
      {/* Header Section */}
      <div className="relative h-40 bg-gradient-to-br from-[#00ADB5] to-[#00ADB5]/80 flex items-center justify-center">
        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-xl bg-[#121417]/20 backdrop-blur-sm text-[#EEEEEE] text-xs font-medium border border-[#EEEEEE]/20">
            <FaStar className="text-yellow-300" size={12} />
            Featured
          </div>
        )}

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex gap-2">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-[#121417]/20 rounded-xl text-[#EEEEEE] hover:bg-[#121417]/40 transition-colors backdrop-blur-sm border border-[#EEEEEE]/20"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(18, 20, 23, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={16} />
          </motion.a>

          {project.domainURL && (
            <motion.a
              href={project.domainURL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#121417]/20 rounded-xl text-[#EEEEEE] hover:bg-[#121417]/40 transition-colors backdrop-blur-sm border border-[#EEEEEE]/20"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(18, 20, 23, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt size={16} />
            </motion.a>
          )}
        </div>

        {/* Project icon and title */}
        <div className="text-center">
          <motion.div
            className="mb-3 mx-auto bg-[#121417]/20 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm border border-[#EEEEEE]/20"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(18, 20, 23, 0.4)",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[#EEEEEE]">{getMainIcon()}</span>
          </motion.div>
          <h3 className="text-xl font-bold text-[#EEEEEE] drop-shadow-md">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <p className="text-[#B0BEC5] mb-5 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, i) => (
            <motion.span
              key={i}
              className="px-3 py-1 text-xs bg-[#121417]/40 text-[#B0BEC5] rounded-xl flex items-center gap-1.5 border border-[#393E46]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(0, 173, 181, 0.1)",
                color: "#00ADB5",
              }}
            >
              {tagIconMap[tag] && (
                <span className="text-[#00ADB5]">{tagIconMap[tag]}</span>
              )}
              {tag}
            </motion.span>
          ))}
          {project.tags.length > 3 && (
            <motion.span
              className="px-3 py-1 text-xs bg-[#121417]/40 text-[#B0BEC5] rounded-xl border border-[#393E46]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{
                backgroundColor: "rgba(0, 173, 181, 0.1)",
                color: "#00ADB5",
              }}
            >
              +{project.tags.length - 3} more
            </motion.span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
