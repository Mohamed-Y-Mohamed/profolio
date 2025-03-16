// /app/components/sections/Education.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaAward,
  FaSchool,
  FaUniversity,
} from "react-icons/fa";
import { motion, useInView, useAnimation } from "framer-motion";
import type { Education } from "@/app/types";
import { educations } from "@/app/data/education";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    }
  }, [isInView, controls]);

  // Create grid pattern background
  const gridPatternStyles = {
    backgroundSize: "30px 30px",
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
    `,
  };

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 relative bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={gridPatternStyles}></div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent w-full max-w-md mx-auto mb-8"
          />

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Education
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-400 to-cyan-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-full max-w-sm">
              {/* 3D rotating education icon with particles */}
              <motion.div
                className="w-full aspect-square rounded-full flex items-center justify-center relative overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(79, 70, 229, 0.1)",
                    "0 0 40px rgba(45, 212, 191, 0.2)",
                    "0 0 20px rgba(79, 70, 229, 0.1)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {/* Animated background gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full"></div>
                <div className="absolute inset-0">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-purple-400/30"
                      initial={{
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50,
                        opacity: 0.2,
                        scale: 0.5,
                      }}
                      animate={{
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 8 + Math.random() * 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        width: `${Math.random() * 60 + 20}px`,
                        height: `${Math.random() * 60 + 20}px`,
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  className="relative z-10"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <FaGraduationCap size={120} className="text-purple-400" />
                </motion.div>
              </motion.div>

              {/* Decorative orbiting circles */}
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-purple-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-cyan-500/10"
                animate={{
                  scale: [1, 0.8, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-teal-500/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          <div className="space-y-6">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                onMouseEnter={() => setHoveredId(education.id.toString())}
                onMouseLeave={() => setHoveredId(null)}
              >
                <EducationCard
                  education={education}
                  isHovered={hoveredId === education.id.toString()}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Modern education card with hover effects
function EducationCard({
  education,
  isHovered,
}: {
  education: Education;
  isHovered: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track mouse position for glow effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Get institution icon based on type
  const getInstitutionIcon = () => {
    if (education.institution.includes("University")) {
      return <FaUniversity size={32} />;
    } else {
      return <FaSchool size={32} />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700/50 shadow-xl"
      whileHover={{
        y: -5,
        transition: { duration: 0.3, type: "spring", stiffness: 300 },
      }}
    >
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.1), transparent 40%)`,
        }}
      />

      {/* Top border gradient */}
      <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-cyan-500" />

      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <motion.div
              className="p-3 rounded-lg flex items-center justify-center backdrop-blur-sm border border-purple-500/20 bg-gradient-to-br from-purple-500/20 to-cyan-500/10 text-purple-400 shadow-lg shadow-purple-400/5"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {getInstitutionIcon()}
            </motion.div>

            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {education.title}
              </h3>
              <p className="text-slate-300">{education.institution}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-purple-500/5 rounded-full border border-purple-500/20 text-purple-400 text-sm font-medium">
            <FaCalendarAlt size={12} className="mr-1" />
            {education.duration}
          </div>
        </div>

        {education.grade && (
          <motion.div
            className="ml-16 mt-3 flex items-center gap-2 text-slate-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FaAward className="text-cyan-400" size={14} />
            <span className="font-medium">Grade:</span>{" "}
            <span className="text-cyan-400 font-medium">{education.grade}</span>
          </motion.div>
        )}

        {/* Animated line on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
