// /app/components/sections/Skills.jsx
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { skillsData } from "@/app/data/skills";

export default function Skills() {
  // Reference for the infinity loop container
  const loopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup loop animation
    const element = loopRef.current;
    if (!element) return;

    // Handle mouse tracking glow effect
    const handleMouseMove = (e: MouseEvent) => {
      const cards = element.querySelectorAll<HTMLElement>(".skill-card");
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      cards.forEach((card: HTMLElement) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const cardCenterY = rect.top + rect.height / 2;

        // Calculate distance from mouse to card center
        const distance = Math.sqrt(
          Math.pow(mouseX - cardCenterX, 2) + Math.pow(mouseY - cardCenterY, 2)
        );

        // Apply glow effect based on proximity
        const maxDistance = 150;
        const glowIntensity = Math.max(0, 1 - distance / maxDistance);

        card.style.setProperty("--glow-intensity", glowIntensity.toString());
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-slate-800"
    >
      <div className="absolute top-10 left-1/2 w-72 h-72 bg-[#3BC4C4]/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <div className="w-3/4 max-w-md">
              <div className="h-[1px] bg-gradient-to-r from-transparent via-[#3BC4C4] to-transparent w-full" />
            </div>
          </div>

          <h2 className="inline-block text-4xl md:text-5xl text-white font-bold mb-4 relative">
            Skills
            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#3BC4C4]/50"></div>
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            My technical toolkit and expertise that I've developed so far.
          </p>
        </motion.div>
      </div>

      <div
        ref={loopRef}
        className="skills-loop relative w-full py-12 overflow-hidden"
      >
        <div className="loop-track flex items-center gap-8 animate-loop">
          {skillsData.map((skill, index) => (
            <SkillCard key={`a-${index}`} skill={skill} />
          ))}

          {skillsData.map((skill, index) => (
            <SkillCard key={`b-${index}`} skill={skill} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-progress"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <h3 className="font-medium text-white">{skill.name}</h3>
                </div>
                <span className="text-sm font-medium text-white">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#3BC4C4]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Individual skill card component
function SkillCard({
  skill,
}: {
  skill: { icon: React.ReactNode; name: string };
}) {
  return (
    <div className="skill-card min-w-[150px] h-[150px] bg-slate-800 rounded-lg shadow-lg border border-slate-700 flex flex-col items-center justify-center p-4 relative hover:scale-105 transition-transform cursor-pointer">
      <div className="glow-effect absolute inset-0 rounded-lg"></div>
      <div className="text-3xl mb-3 text-white">{skill.icon}</div>
      <h3 className="text-center font-medium text-white">{skill.name}</h3>
    </div>
  );
}
