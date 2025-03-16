// /app/components/sections/Experience.jsx
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBriefcase,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { experiences } from "@/app/data/experience";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" ref={ref} className="py-20 bg-slate-800">
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

          <h2 className="inline-block text-4xl md:text-5xl font-bold mb-4 relative">
            Work Experience
            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#3BC4C4]/50"></div>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and the valuable experiences I've gathered.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`timeline-item relative pl-10 pb-10 ${
                index !== experiences.length - 1
                  ? "border-l-2 border-slate-200"
                  : ""
              }`}
            >
              <div className="absolute -left-[9px] bg-white p-1">
                <div className="w-4 h-4 rounded-full bg-[#3BC4C4]" />
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div
                  className="p-5 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExpand(experience.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#3BC4C4]/10 text-[#3BC4C4] rounded-lg">
                      <FaBriefcase size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      <p className="text-slate-600 font-medium">
                        {experience.company}
                      </p>

                      <div className="flex flex-wrap gap-x-4 mt-2 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <FaRegCalendarAlt />
                          <span>{experience.date}</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-slate-500">
                    {expandedId === experience.id ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>

                {expandedId === experience.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5"
                  >
                    <div className="pt-2 pb-4 border-t border-slate-100">
                      <h4 className="font-medium text-slate-700 mb-2">
                        Responsibilities:
                      </h4>

                      <ul className="space-y-2 ml-6 list-disc text-slate-600">
                        {experience.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>

                      <div className="mt-4">
                        <h4 className="font-medium text-slate-700 mb-2">
                          Technologies:
                        </h4>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
