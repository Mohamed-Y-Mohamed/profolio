// /app/components/sections/Education.jsx
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { educations } from "@/app/data/education";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 bg-white dark:bg-[#0d1224]"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-3/4 max-w-md">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" />
            </div>
          </div>

          <h2 className="inline-block text-4xl md:text-5xl font-bold text-white mb-4 relative">
            Education
            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#3BC4C4]/50"></div>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm">
              <div className="w-full aspect-square bg-gradient-to-br from-[#3BC4C4]/20 to-[#3BC4C4]/5 rounded-full flex items-center justify-center">
                <FaGraduationCap size={120} className="text-[#3BC4C4]" />
              </div>

              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#3BC4C4]/20"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-[#3BC4C4]/10"></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-[#3BC4C4]/30"></div>
            </div>
          </motion.div>

          <div className="space-y-6">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                className="education-card"
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <GlowCard identifier={`education-${education.id}`}>
                  <div className="p-6 relative">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-[#3BC4C4] transition-all duration-300 hover:scale-125">
                          <FaGraduationCap size={32} />
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          {education.title}
                        </h3>
                      </div>
                      <span className="text-sm text-[#3BC4C4] font-medium px-3 py-1 bg-[#3BC4C4]/10 rounded-full">
                        {education.duration}
                      </span>
                    </div>

                    <div className="ml-12">
                      <p className="text-slate-700 dark:text-slate-300 mb-1">
                        {education.institution}
                      </p>
                      {education.grade && (
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          <span className="font-medium">Grade:</span>{" "}
                          {education.grade}
                        </p>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// GlowCard component for interactive hover effects
function GlowCard({
  children,
  identifier,
}: {
  children: React.ReactNode;
  identifier: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
      card.classList.add("glowing");
    };

    const handleMouseLeave = () => {
      card.classList.remove("glowing");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [identifier]);

  return (
    <div
      ref={cardRef}
      className="glow-card rounded-xl bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden relative transition-all duration-300 hover:shadow-xl hover:border-[#3BC4C4]/50 dark:hover:border-[#3BC4C4]/50"
    >
      <div className="glow absolute inset-0 opacity-0 bg-radial-gradient from-[#3BC4C4]/20 to-transparent blur-xl transition-opacity pointer-events-none"></div>
      {children}
    </div>
  );
}
