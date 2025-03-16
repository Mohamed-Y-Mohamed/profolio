// app/not-found.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted to true once component mounts
  useEffect(() => {
    setIsMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCoordinates({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Generate random positions without using window during initial render
  const getRandomPosition = (max: number) => Math.random() * max;

  return (
    <div className="bg-[#0A1F44] min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Animated particles - only render on client side */}
      <div className="absolute inset-0 z-0">
        {isMounted &&
          Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#3BC4C4]/20"
              style={{
                width: `${Math.random() * 100 + 10}px`,
                height: `${Math.random() * 100 + 10}px`,
                x: getRandomPosition(windowSize.width || 1000),
                y: getRandomPosition(windowSize.height || 800),
              }}
              animate={{
                x: [null, getRandomPosition(windowSize.width || 1000)],
                y: [null, getRandomPosition(windowSize.height || 800)],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* 404 Number with Glitch Effect */}
        <motion.div
          className="text-[150px] md:text-[250px] font-bold leading-none text-white relative"
          style={{
            textShadow: "6px 6px 0px rgba(59, 196, 196, 0.5)",
            transform: isMounted
              ? `translate(${coordinates.x}px, ${coordinates.y}px)`
              : "none",
          }}
        >
          <span className="relative">
            4
            <motion.span
              className="absolute top-0 left-0 text-[#3BC4C4]"
              animate={{
                opacity: [1, 0.5, 1],
                x: [0, -4, 0, 4, 0],
                y: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              4
            </motion.span>
          </span>
          <span className="relative">
            0
            <motion.span
              className="absolute top-0 left-0 text-[#3BC4C4]"
              animate={{
                opacity: [1, 0.5, 1],
                x: [0, 4, 0, -4, 0],
                y: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.1,
              }}
            >
              0
            </motion.span>
          </span>
          <span className="relative">
            4
            <motion.span
              className="absolute top-0 left-0 text-[#3BC4C4]"
              animate={{
                opacity: [1, 0.5, 1],
                x: [0, -3, 0, 3, 0],
                y: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.2,
              }}
            >
              4
            </motion.span>
          </span>
        </motion.div>

        {/* Error Message */}
        <h2 className="text-2xl md:text-4xl mb-6 text-white font-bold">
          Page Not Found
        </h2>

        <p className="text-lg text-slate-300 mb-12 max-w-xl mx-auto">
          The page you&apos;re looking for doesn&apos;t seem to exist. It may
          have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#3BC4C4] text-white font-medium hover:bg-[#2aa3a3] transition-colors"
          >
            <FaHome /> Go Home
          </Link>

          <Link
            href="/#projects"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-700 text-white font-medium hover:bg-slate-600 transition-colors"
          >
            <FaSearch /> Browse Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
