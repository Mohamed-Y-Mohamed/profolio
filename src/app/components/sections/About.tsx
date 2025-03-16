// /app/components/sections/About.jsx
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-[#0d1224]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
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

          <h2 className="inline-block text-4xl md:text-5xl font-bold mb-4 text-white relative">
            About Me
            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#3BC4C4]/50"></div>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/assets/image/image1.jpeg"
                    width={400}
                    height={500}
                    alt="About me image 1"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/assets/image/image2.jpg"
                    width={400}
                    height={300}
                    alt="About me image 2"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="pt-10">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src="/assets/image/image3.jpg"
                    width={400}
                    height={600}
                    alt="About me image 3"
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800 dark:text-white">
              Technology-driven. Solution-focused.
            </h3>

            <div className="space-y-6 text-slate-600 dark:text-slate-300">
              <p className="text-lg leading-relaxed">
                I am Mohamed Yusuf Mohamed, a Full Stack Developer with a strong
                foundation in creating solutions that aim to simplify processes
                and enhance user experience. With a background rooted in diverse
                environments, I approach challenges with a global perspective,
                always driven by the desire to innovate and optimise workflows.
              </p>

              <p className="text-lg leading-relaxed">
                My expertise extends across front-end and back-end development,
                allowing me to craft seamless and efficient digital solutions. I
                am passionate about transforming complex problems into clear,
                manageable solutions, consistently delivering results that make
                a tangible impact.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center py-3 px-6 font-medium text-white rounded-full bg-[#3BC4C4] hover:bg-[#2aa3a3] transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
