// /app/components/sections/Hero.jsx
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);
  const toRotate = [
    "Full Stack Developer",
    "Creative Problem Solver",
    "Technology Enthusiast",
  ];
  const period = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeleting) {
        setText(fullTxt.substring(0, text.length - 1));
      } else {
        setText(fullTxt.substring(0, text.length + 1));
      }

      let typingSpeed = 200 - Math.random() * 100;

      if (isDeleting) {
        typingSpeed /= 2;
      }

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), period);
        typingSpeed = period;
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        typingSpeed = 500;
      }

      setDelta(typingSpeed);
    };

    const ticker = setTimeout(() => {
      handleTyping();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta, toRotate]);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-slate-800">
      <div className="absolute inset-0 -z-10">
        <BackgroundAnimation />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              {`I am a `}
              <span className="text-[#3BC4C4]">
                {text}
                <span className="animate-blink">|</span>
              </span>
            </h1>

            <div className="w-20 h-2 bg-[#3BC4C4] my-6"></div>

            <p className="text-lg md:text-xl mb-8 max-w-2xl text-white">
              Hi, I'm Mohamed Yusuf Mohamed, a Full Stack Developer passionate
              about building user-friendly solutions. With expertise in both
              front-end and back-end development, I strive to create impactful
              technology that simplifies people's lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <a
                href="https://drive.google.com/file/d/1R2lmWa5c1IHSu4_2cU9nyOhgUwBLez_o/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-3 bg-[#3BC4C4] hover:bg-[#2aa3a3] text-white rounded-full font-medium transition-colors">
                  Download Resume
                </button>
              </a>

              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                <a
                  href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bg-slate-800 text-[#3BC4C4] shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://github.com/Mohamed-Y-Mohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-[#3BC4C4] shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-2/5 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/assets/image/hero.svg"
              width={500}
              height={500}
              alt="Hero Illustration"
              className="w-full max-w-md mx-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Background Animation Component
function BackgroundAnimation() {
  return (
    <div className="area bg-gradient-to-r from-slate-100 to-slate-200 w-full h-full">
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index} className="bg-slate-700/10"></li>
        ))}
      </ul>
    </div>
  );
}
