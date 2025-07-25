// // /app/components/sections/Skills.jsx
// "use client";

// import { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";
// import { motion, useAnimation, AnimatePresence } from "framer-motion";
// import { skillsData } from "@/app/data/skills";
// import { Skill } from "@/app/types";

// // Group skills by type for better visual organization
// const skillGroups = [
//   { id: "languages", label: "Languages" },
//   { id: "frameworks", label: "Frameworks" },
//   { id: "databases", label: "Databases" },
//   { id: "concepts", label: "Concepts" },
// ];

// export default function Skills() {
//   const [activeGroup, setActiveGroup] = useState<string>("all");
//   const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
//   const containerRef = useRef<HTMLElement | null>(null);
//   const controls = useAnimation();

//   // Memoize grid pattern styles
//   const gridPatternStyles = useMemo(
//     () => ({
//       backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0)`,
//       backgroundSize: "40px 40px",
//     }),
//     []
//   );

//   // Move getSkillGroup inside component and properly memoize it
//   const getSkillGroup = useMemo(() => {
//     const languages = ["JavaScript", "Python", "Java", "Kotlin", "Swift"];
//     const frameworks = ["React", "Next.js", "Spring Boot", "Flask"];
//     const databases = ["MongoDB", "Firebase", "MySQL"];
//     const concepts = ["OOP", "Algorithms"];

//     return (skillName: string): string => {
//       if (languages.includes(skillName)) return "languages";
//       if (frameworks.includes(skillName)) return "frameworks";
//       if (databases.includes(skillName)) return "databases";
//       if (concepts.includes(skillName)) return "concepts";
//       return "other";
//     };
//   }, []);

//   // Memoize filtered skills
//   const filteredSkills = useMemo(
//     () =>
//       activeGroup === "all"
//         ? skillsData
//         : skillsData.filter(
//             (skill) => getSkillGroup(skill.name) === activeGroup
//           ),
//     [activeGroup, getSkillGroup]
//   );

//   // Optimize group change handler
//   const handleGroupChange = useCallback(
//     (group: string) => {
//       setActiveGroup(group);
//       controls.start({
//         opacity: [0.5, 1],
//         scale: [0.97, 1],
//         transition: { duration: 0.3 },
//       });
//     },
//     [controls]
//   );

//   // Optimize mouse move effect
//   useEffect(() => {
//     if (!containerRef.current) return;

//     const container = containerRef.current;
//     let rafId: number;

//     const handleMouseMove = (e: MouseEvent) => {
//       rafId = requestAnimationFrame(() => {
//         const containerRect = container.getBoundingClientRect();
//         const x = e.clientX - containerRect.left;
//         const y = e.clientY - containerRect.top;

//         container.style.setProperty("--mouse-x", `${x}px`);
//         container.style.setProperty("--mouse-y", `${y}px`);
//       });
//     };

//     container.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       container.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(rafId);
//     };
//   }, []);

//   // Memoize hover handlers
//   const handleMouseEnter = useCallback((skillName: string) => {
//     setHoveredSkill(skillName);
//   }, []);

//   const handleMouseLeave = useCallback(() => {
//     setHoveredSkill(null);
//   }, []);

//   return (
//     <section
//       id="skills"
//       className="py-16 relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800"
//       ref={containerRef}
//     >
//       {/* Dynamic background glow with will-change optimization */}
//       <div className="absolute inset-0 z-0 opacity-40">
//         <div
//           className="absolute opacity-30 blur-3xl rounded-full bg-cyan-400 w-96 h-96 transition-all duration-700 ease-out will-change-transform"
//           style={{
//             left: "var(--mouse-x, 50%)",
//             top: "var(--mouse-y, 50%)",
//             transform: "translate(-50%, -50%)",
//           }}
//         />
//       </div>

//       {/* Grid pattern overlay */}
//       <div
//         className="absolute inset-0 opacity-5 z-0"
//         style={gridPatternStyles}
//       ></div>

//       <div className="w-full mx-auto px-2 sm:px-4 relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
//               Skills
//             </span>
//             <motion.div
//               className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400"
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//             />
//           </h2>

//           <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
//             My technical toolkit and expertise that I&apos;ve developed
//             throughout my journey
//           </p>

//           {/* Skill group tabs */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             <motion.button
//               key="all"
//               className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 activeGroup === "all"
//                   ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/20"
//                   : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
//               }`}
//               onClick={() => handleGroupChange("all")}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               All Skills
//             </motion.button>

//             {skillGroups.map((group) => (
//               <motion.button
//                 key={group.id}
//                 className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeGroup === group.id
//                     ? "bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/20"
//                     : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
//                 }`}
//                 onClick={() => handleGroupChange(group.id)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {group.label}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>

//         {/* Skills display */}
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
//           animate={controls}
//         >
//           <AnimatePresence mode="wait">
//             {filteredSkills.map((skill, index) => (
//               <motion.div
//                 key={skill.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{
//                   duration: 0.4,
//                   delay: index * 0.05,
//                   type: "spring",
//                   stiffness: 200,
//                   damping: 20,
//                 }}
//                 className="relative"
//                 onMouseEnter={() => handleMouseEnter(skill.name)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <SkillCard
//                   skill={skill}
//                   isHovered={hoveredSkill === skill.name}
//                 />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Skill details */}
//         <div className="mt-16">
//           <motion.div
//             className="p-8 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 shadow-xl relative overflow-hidden"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             {/* Decorative elements */}
//             <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl -z-0"></div>
//             <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl -z-0"></div>

//             <h3 className="text-2xl font-bold mb-6 text-white">
//               Skill Proficiency
//             </h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
//               {skillsData.slice(0, 10).map((skill, index) => (
//                 <motion.div
//                   key={index}
//                   className="skill-progress"
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: index * 0.1 }}
//                 >
//                   <div className="flex justify-between items-center mb-2">
//                     <div className="flex items-center gap-2">
//                       <div className="text-cyan-400">{skill.icon}</div>
//                       <h3 className="font-medium text-white">{skill.name}</h3>
//                     </div>
//                     <div className="flex items-center">
//                       <span className="text-sm font-medium text-cyan-400">
//                         {skill.level}%
//                       </span>
//                     </div>
//                   </div>
//                   <div className="h-2 bg-slate-700 rounded-full overflow-hidden backdrop-blur-sm">
//                     <motion.div
//                       className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 relative"
//                       initial={{ width: 0 }}
//                       whileInView={{ width: `${skill.level}%` }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 1, delay: 0.2 }}
//                     >
//                       <div className="absolute top-0 right-0 h-full w-8 bg-white/20 blur-sm"></div>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// interface SkillCardProps {
//   skill: Skill;
//   isHovered: boolean;
// }

// // Optimize SkillCard component with memo
// const SkillCard = memo(function SkillCard({
//   skill,
//   isHovered,
// }: SkillCardProps) {
//   return (
//     <motion.div
//       className="group relative h-[180px] rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 z-10 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700"
//       whileHover={{
//         y: -5,
//         boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
//         borderColor: "rgba(77, 208, 225, 0.4)",
//       }}
//       transition={{
//         duration: 0.3,
//         type: "spring",
//         stiffness: 400,
//         damping: 15,
//       }}
//     >
//       {/* Background effects */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//         <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-teal-500/10"></div>
//         <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500"></div>
//       </div>

//       {/* Sparkles on hover */}
//       <AnimatePresence>
//         {isHovered && (
//           <>
//             {[...Array(5)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-1 h-1 bg-cyan-400 rounded-full pointer-events-none"
//                 initial={{
//                   opacity: 0,
//                   x: 0,
//                   y: 0,
//                 }}
//                 animate={{
//                   opacity: [0, 1, 0],
//                   scale: [0, 1.5, 0],
//                   x: Math.random() * 160 - 80,
//                   y: Math.random() * 160 - 80,
//                 }}
//                 exit={{ opacity: 0 }}
//                 transition={{
//                   duration: 0.8 + Math.random() * 0.5,
//                   delay: i * 0.1,
//                   ease: "easeOut",
//                 }}
//               />
//             ))}
//           </>
//         )}
//       </AnimatePresence>

//       {/* Icon with animation */}
//       <motion.div
//         className="text-4xl mb-4 text-cyan-400 relative z-10"
//         animate={{
//           y: isHovered ? [-4, 0, -4] : 0,
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         }}
//       >
//         {skill.icon}
//       </motion.div>

//       {/* Skill name */}
//       <motion.h3
//         className="text-center font-medium text-white relative z-10"
//         animate={{ scale: isHovered ? 1.05 : 1 }}
//         transition={{ duration: 0.3 }}
//       >
//         {skill.name}
//       </motion.h3>

//       {/* Experience level indicator */}
//       <div
//         className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400"
//         style={{ width: `${skill.level}%` }}
//       ></div>
//     </motion.div>
//   );
// });

// SkillCard.displayName = "SkillCard";
// /app/components/sections/Skills.jsx
"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { skillsData } from "@/app/data/skills";
import { Skill } from "@/app/types";

// Group skills by type for better visual organization
const skillGroups = [
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "databases", label: "Databases" },
  { id: "concepts", label: "Concepts" },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<string>("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
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

  // Move getSkillGroup inside component and properly memoize it
  const getSkillGroup = useMemo(() => {
    const languages = ["JavaScript", "Python", "Java", "Kotlin", "Swift"];
    const frameworks = ["React", "Next.js", "Spring Boot", "Flask"];
    const databases = ["MongoDB", "Firebase", "MySQL"];
    const concepts = ["OOP", "Algorithms"];

    return (skillName: string): string => {
      if (languages.includes(skillName)) return "languages";
      if (frameworks.includes(skillName)) return "frameworks";
      if (databases.includes(skillName)) return "databases";
      if (concepts.includes(skillName)) return "concepts";
      return "other";
    };
  }, []);

  // Memoize filtered skills
  const filteredSkills = useMemo(
    () =>
      activeGroup === "all"
        ? skillsData
        : skillsData.filter(
            (skill) => getSkillGroup(skill.name) === activeGroup
          ),
    [activeGroup, getSkillGroup]
  );

  // Optimize group change handler
  const handleGroupChange = useCallback(
    (group: string) => {
      setActiveGroup(group);
      controls.start({
        opacity: [0.8, 1],
        scale: [0.98, 1],
        transition: { duration: 0.3 },
      });
    },
    [controls]
  );

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 relative overflow-hidden bg-[#121417]"
    >
      {/* Simple background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ADB5] opacity-5 rounded-full blur-3xl"></div>

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
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-lg text-[#B0BEC5] max-w-2xl mx-auto mt-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            My technical toolkit developed through coursework, projects, and
            continuous learning
          </motion.p>

          {/* Skill group tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              key="all"
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeGroup === "all"
                  ? "bg-[#00ADB5] text-[#121417] shadow-lg"
                  : "bg-[#1E2125]/60 text-[#B0BEC5] hover:bg-[#1E2125] border border-[#393E46]"
              }`}
              onClick={() => handleGroupChange("all")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              All Skills
            </motion.button>

            {skillGroups.map((group) => (
              <motion.button
                key={group.id}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeGroup === group.id
                    ? "bg-[#00ADB5] text-[#121417] shadow-lg"
                    : "bg-[#1E2125]/60 text-[#B0BEC5] hover:bg-[#1E2125] border border-[#393E46]"
                }`}
                onClick={() => handleGroupChange(group.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {group.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills display */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
          animate={controls}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skill proficiency section */}
        <motion.div
          className="bg-[#1E2125]/60 backdrop-blur-sm border border-[#393E46] rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-[#EEEEEE] text-center">
            Skill Proficiency Levels
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {skillsData.slice(0, 10).map((skill, index) => (
              <motion.div
                key={index}
                className="skill-progress"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-[#00ADB5] text-xl">{skill.icon}</div>
                    <h4 className="font-medium text-[#EEEEEE]">{skill.name}</h4>
                  </div>
                  <span className="text-sm font-medium text-[#00ADB5]">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-[#121417]/40 rounded-full overflow-hidden backdrop-blur-sm border border-[#393E46]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#00ADB5] to-[#00FFF5] relative rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  >
                    <div className="absolute top-0 right-0 h-full w-4 bg-white/20 blur-sm rounded-full"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  skill: Skill;
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      className="group relative h-[180px] rounded-2xl overflow-hidden flex flex-col items-center justify-center p-6 bg-[#1E2125]/60 backdrop-blur-sm border border-[#393E46] shadow-lg"
      whileHover={{
        y: -5,
        backgroundColor: "rgba(30, 33, 37, 0.8)",
        borderColor: "rgba(0, 173, 181, 0.3)",
        boxShadow: "0 10px 30px rgba(0, 173, 181, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon with animation */}
      <motion.div
        className="text-4xl mb-4 text-[#00ADB5] relative z-10"
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, 0],
        }}
        transition={{ duration: 0.5 }}
      >
        {skill.icon}
      </motion.div>

      {/* Skill name */}
      <motion.h3
        className="text-center font-medium text-[#EEEEEE] relative z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {skill.name}
      </motion.h3>

      {/* Experience level indicator */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-[#00ADB5] rounded-full"
        style={{ width: `${skill.level}%` }}
      ></div>
    </motion.div>
  );
}
