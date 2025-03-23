// app/not-found.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaSearch, FaExclamationTriangle } from "react-icons/fa";

export default function NotFound() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);

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

  // Create grid pattern background
  const gridPatternStyles = {
    backgroundSize: "30px 30px",
    backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
    `,
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={gridPatternStyles}></div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-0"></div>

      {/* Animated particles - only render on client side */}
      <div className="absolute inset-0 z-0">
        {isMounted &&
          Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-cyan-400/10"
              style={{
                width: `${Math.random() * 80 + 10}px`,
                height: `${Math.random() * 80 + 10}px`,
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
          className="text-[150px] md:text-[250px] font-bold leading-none relative"
          style={{
            transform: isMounted
              ? `translate(${coordinates.x}px, ${coordinates.y}px)`
              : "none",
          }}
        >
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            4
            <motion.span
              className="absolute top-0 left-0 text-cyan-400/70"
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
          </motion.span>
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            0
            <motion.span
              className="absolute top-0 left-0 text-cyan-400/70"
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
          </motion.span>
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            4
            <motion.span
              className="absolute top-0 left-0 text-cyan-400/70"
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
          </motion.span>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="mb-8 flex justify-center">
            <div className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20">
              <FaExclamationTriangle size={28} />
            </div>
          </div>

          <h2 className="text-2xl md:text-4xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 font-bold">
            Page Not Found
          </h2>

          <p className="text-lg text-slate-300 mb-12 max-w-xl mx-auto">
            The page you&apos;re looking for doesn&apos;t seem to exist. It may
            have been moved or deleted.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-medium hover:from-cyan-400 hover:to-teal-400 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              <FaHome /> Go Home
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/#projects"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-slate-800/60 text-white font-medium border border-slate-700/50 hover:bg-slate-700/90 transition-all duration-300"
            >
              <FaSearch /> Browse Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
