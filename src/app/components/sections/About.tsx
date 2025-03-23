// /app/components/sections/About.jsx
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useAnimation,
  useScroll,
  useTransform,
} from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const imageContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for images
  const image1Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const image2Y = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const image3Y = useTransform(scrollYProgress, [0, 1], [0, -70]);

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
      id="about"
      ref={ref}
      className="py-16 relative bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={gridPatternStyles}></div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-0"></div>

      <div className="w-full mx-auto px-2 sm:px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full max-w-md mx-auto mb-8"
          />

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              About Me
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2"
            ref={imageContainerRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="grid grid-cols-2 gap-6 relative">
              <div className="space-y-6">
                <motion.div
                  className="overflow-hidden rounded-2xl shadow-xl border border-slate-700/50 bg-slate-800"
                  style={{ y: image1Y }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <Image
                      src="/assets/image/image1.jpeg"
                      width={400}
                      height={500}
                      alt="About me image 1"
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>

                <motion.div
                  className="overflow-hidden rounded-2xl shadow-xl border border-slate-700/50 bg-slate-800"
                  style={{ y: image2Y }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <Image
                      src="/assets/image/image2.jpg"
                      width={400}
                      height={300}
                      alt="About me image 2"
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </div>

              <div className="pt-12">
                <motion.div
                  className="overflow-hidden rounded-2xl shadow-xl border border-slate-700/50 bg-slate-800"
                  style={{ y: image3Y }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <Image
                      src="/assets/image/image3.jpg"
                      width={400}
                      height={600}
                      alt="About me image 3"
                      className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-blue-500/20 blur-md"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-cyan-500/20 blur-md"></div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700/50 p-8 shadow-xl relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-xl -z-0"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl -z-0"></div>

              <motion.h3
                className="text-2xl md:text-3xl font-bold mb-6 text-white relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Technology-driven. Solution-focused.
                </span>
              </motion.h3>

              <div className="space-y-6 text-slate-300 relative z-10">
                <motion.p
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  I&apos;m Mohamed Yusuf Mohamed, a Full Stack Developer with a
                  strong foundation in creating solutions that aim to simplify
                  processes and enhance user experience. With a background
                  rooted in diverse environments, I approach challenges with a
                  global perspective, always driven by the desire to innovate
                  and optimise workflows.
                </motion.p>

                <motion.p
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  My expertise extends across front-end and back-end
                  development, allowing me to craft seamless and efficient
                  digital solutions. I am passionate about transforming complex
                  problems into clear, manageable solutions, consistently
                  delivering results that make a tangible impact.
                </motion.p>
              </div>

              <motion.div
                className="mt-8 relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center py-3.5 px-8 font-medium text-slate-900 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let&apos;s Connect
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
