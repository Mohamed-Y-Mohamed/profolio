// /app/components/ui/Loader.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    "Initializing portfolio...",
    "Loading projects...",
    "Compiling skills...",
    "Preparing experience...",
    "Ready to impress!",
  ];

  useEffect(() => {
    // Typing animation for loading text
    let textIndex = 0;
    let charIndex = 0;

    const typeText = () => {
      if (textIndex < loadingSteps.length) {
        if (charIndex < loadingSteps[textIndex].length) {
          setLoadingText(loadingSteps[textIndex].substring(0, charIndex + 1));
          charIndex++;
          setTimeout(typeText, 50);
        } else {
          setTimeout(() => {
            setCurrentStep(textIndex);
            textIndex++;
            charIndex = 0;
            if (textIndex < loadingSteps.length) {
              setTimeout(typeText, 300);
            }
          }, 400);
        }
      }
    };

    typeText();

    // Start fade-out animation after steps complete
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 600);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#121417] to-[#1E2125] text-white z-[999] overflow-hidden`}
        initial={{ opacity: 1 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0, 173, 181, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(0, 173, 181, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Main loader content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo/Initials Animation */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-24 h-24 sm:w-32 sm:h-32">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 border-2 border-[#00ADB5]/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner rotating ring */}
              <motion.div
                className="absolute inset-2 border-2 border-[#00FFF5]/50 rounded-full border-dashed"
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-2xl sm:text-3xl font-bold text-[#00ADB5] mb-1"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(0, 173, 181, 0.5)",
                        "0 0 20px rgba(0, 255, 245, 0.8)",
                        "0 0 10px rgba(0, 173, 181, 0.5)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    MYM
                  </motion.div>
                  <div className="text-xs text-[#B0BEC5] font-medium">DEV</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code brackets animation */}
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.span
              className="text-2xl sm:text-3xl text-[#00ADB5] font-mono"
              animate={{
                x: [-5, 0, -5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {"<"}
            </motion.span>

            <motion.div
              className="flex space-x-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#00ADB5] rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>

            <motion.span
              className="text-2xl sm:text-3xl text-[#00ADB5] font-mono"
              animate={{
                x: [5, 0, 5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {"/>"}
            </motion.span>
          </motion.div>

          {/* Loading text with typing animation */}
          <motion.div
            className="text-center min-h-[60px] flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg sm:text-xl text-[#EEEEEE] font-medium mb-2 font-mono">
              {loadingText}
              <motion.span
                className="text-[#00ADB5]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            </p>

            {/* Progress indicator */}
            <div className="w-48 sm:w-64 h-1 bg-[#393E46] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00ADB5] to-[#00FFF5] rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((currentStep + 1) / loadingSteps.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <p className="text-sm text-[#B0BEC5] mt-2">
              {currentStep + 1} / {loadingSteps.length}
            </p>
          </motion.div>

          {/* Additional tech elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-8 h-8 border border-[#00ADB5]/30 rounded transform rotate-45"
            animate={{
              rotate: [45, 135, 45],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <motion.div
            className="absolute bottom-1/4 right-1/4 w-6 h-6 border border-[#00FFF5]/40 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Loader;
