// /app/components/sections/Experience.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useAnimation,
} from "framer-motion";
import {
  FaBriefcase,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaPlus,
  FaMinus,
  FaTools,
  FaChevronRight,
  FaChevronDown,
  FaCheck,
} from "react-icons/fa";
import { experiences } from "@/app/data/experience";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
      id="experience"
      ref={ref}
      className="py-20 relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={gridPatternStyles}></div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-0"></div>

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
            className="h-[1px] bg-gradient-to-r from-transparent via-teal-400 to-transparent w-full max-w-md mx-auto mb-8"
          />

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Work Experience
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            My professional journey and the valuable experiences I've gathered
            along the way.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Left side decorative line */}
          <div className="absolute left-8 top-6 bottom-6 w-px bg-gradient-to-b from-teal-400/20 via-cyan-400/30 to-transparent z-0"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="relative z-10 mb-10 last:mb-0 ml-8"
              onMouseEnter={() => setHoveredId(experience.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-[41px] top-10 z-20 p-1.5 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-lg shadow-cyan-400/20"
                initial={{ scale: 0.8 }}
                animate={{
                  scale:
                    expandedId === experience.id || hoveredId === experience.id
                      ? 1.2
                      : 1,
                  borderColor:
                    expandedId === experience.id ? "#2DD4BF" : "#22D3EE",
                  backgroundColor:
                    expandedId === experience.id ? "#134E4A" : "#0F172A",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400"></div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl overflow-hidden border border-slate-700/50"
                animate={{
                  y:
                    hoveredId === experience.id && expandedId !== experience.id
                      ? -5
                      : 0,
                  boxShadow:
                    hoveredId === experience.id
                      ? "0 20px 30px -10px rgba(0, 0, 0, 0.3)"
                      : "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div
                  className={`p-6 cursor-pointer transition-colors duration-300 ${
                    expandedId === experience.id
                      ? "bg-gradient-to-r from-slate-800 to-slate-900"
                      : ""
                  }`}
                  onClick={() => toggleExpand(experience.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20 bg-gradient-to-br from-cyan-500/20 to-teal-500/10 text-cyan-400 shadow-lg shadow-cyan-400/5">
                      <FaBriefcase size={22} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {experience.title}
                          </h3>
                          <p className="text-cyan-400 font-medium">
                            {experience.company}
                          </p>
                        </div>

                        <motion.div
                          className={`p-2 rounded-full ${
                            expandedId === experience.id
                              ? "bg-gradient-to-r from-cyan-500/20 to-teal-500/10 text-cyan-400"
                              : "text-slate-400"
                          }`}
                          animate={{
                            rotate: expandedId === experience.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {expandedId === experience.id ? (
                            <FaChevronDown size={16} />
                          ) : (
                            <FaChevronRight size={16} />
                          )}
                        </motion.div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-x-6 mt-3 text-sm text-slate-400">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/50">
                        <FaRegCalendarAlt className="text-cyan-400" size={12} />
                        <span>{experience.date}</span>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800/60 rounded-full border border-slate-700/50">
                        <FaMapMarkerAlt className="text-cyan-400" size={12} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedId === experience.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                      className="px-6 pb-6"
                    >
                      <div className="pt-4 border-t border-slate-700/50">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="p-2 rounded-full bg-cyan-500/10 text-cyan-400">
                            <FaCheck size={12} />
                          </div>
                          <h4 className="font-medium text-white">
                            Responsibilities:
                          </h4>
                        </div>

                        <ul className="space-y-3 ml-4">
                          {experience.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="pl-6 text-slate-300 relative"
                            >
                              <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-cyan-400/70"></div>
                              {item}
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-6">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-full bg-teal-500/10 text-teal-400">
                              <FaTools size={12} />
                            </div>
                            <h4 className="font-medium text-white">
                              Technologies:
                            </h4>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  duration: 0.3,
                                  delay: 0.2 + i * 0.05,
                                }}
                                className="px-3 py-1 text-sm bg-gradient-to-r from-slate-800 to-slate-700 text-slate-200 rounded-full border border-slate-600/50 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors duration-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
