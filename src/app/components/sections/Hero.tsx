// // /app/components/sections/Hero.jsx
// "use client";

// import { useState, useEffect, useRef, useMemo, useCallback } from "react";
// import Image from "next/image";
// import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from "react-icons/fa";
// import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

// export default function Hero() {
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [delta, setDelta] = useState(200);

//   const toRotate = useMemo(
//     () => [
//       "Full Stack Developer",
//       "Creative Problem Solver",
//       "Technology Enthusiast",
//     ],
//     []
//   );

//   const period = 2000;
//   const controls = useAnimation();
//   const heroRef = useRef(null);

//   // For parallax effect
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   const createParticles = useMemo(() => {
//     if (typeof window === "undefined") return null;

//     return Array.from({ length: 40 }).map((_, index) => (
//       <motion.div
//         key={index}
//         className="absolute rounded-full bg-cyan-400/10"
//         initial={{
//           x: Math.random() * window.innerWidth,
//           y: Math.random() * window.innerHeight,
//           scale: Math.random() * 0.5 + 0.5,
//           opacity: Math.random() * 0.4 + 0.1,
//         }}
//         animate={{
//           y: [0, Math.random() * -50 - 20, 0],
//           x: [0, Math.random() * 50 - 25, 0],
//         }}
//         transition={{
//           duration: Math.random() * 10 + 10,
//           repeat: Infinity,
//           repeatType: "mirror",
//         }}
//         style={{
//           width: `${Math.random() * 15 + 5}px`,
//           height: `${Math.random() * 15 + 5}px`,
//         }}
//       />
//     ));
//   }, []);

//   const gridPatternStyles = useMemo(
//     () => ({
//       backgroundSize: "30px 30px",
//       backgroundImage: `
//       linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
//       linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
//     `,
//     }),
//     []
//   );

//   const scrollToAbout = useCallback(() => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: "smooth" });
//     }
//   }, []);

//   const handleTyping = useCallback(() => {
//     const i = loopNum % toRotate.length;
//     const fullTxt = toRotate[i];

//     if (isDeleting) {
//       setText(fullTxt.substring(0, text.length - 1));
//     } else {
//       setText(fullTxt.substring(0, text.length + 1));
//     }

//     let typingSpeed = 200 - Math.random() * 100;

//     if (isDeleting) {
//       typingSpeed /= 2;
//     }

//     if (!isDeleting && text === fullTxt) {
//       setTimeout(() => setIsDeleting(true), period);
//       typingSpeed = period;
//     } else if (isDeleting && text === "") {
//       setIsDeleting(false);
//       setLoopNum((prev) => prev + 1);
//       typingSpeed = 500;
//     }

//     setDelta(typingSpeed);
//   }, [text, isDeleting, loopNum, toRotate, period]);

//   useEffect(() => {
//     const ticker = setTimeout(handleTyping, delta);
//     return () => clearTimeout(ticker);
//   }, [handleTyping, delta]);

//   useEffect(() => {
//     controls.start({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8 },
//     });
//   }, [controls]);

//   return (
//     <div
//       ref={heroRef}
//       className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800 pt-20"
//     >
//       {/* Background elements */}
//       <div className="absolute inset-0 -z-10">
//         {/* Grid pattern using CSS instead of SVG */}
//         <div
//           className="absolute inset-0 opacity-10"
//           style={gridPatternStyles}
//         ></div>

//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-600/5 via-transparent to-blue-600/5"></div>
//         {createParticles}

//         {/* Glow spots with reduced repaints */}
//         <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10 will-change-transform"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10 will-change-transform"></div>
//       </div>

//       <div className="w-full mx-auto px-2 sm:px-4 py-8 md:py-12">
//         <div className="flex flex-col lg:flex-row items-center gap-16">
//           <motion.div
//             className="lg:w-3/5 relative z-10"
//             initial={{ opacity: 0, y: 30 }}
//             animate={controls}
//             style={{ opacity }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//             >
//               <div className="mb-6">
//                 <motion.div
//                   className="inline-block text-sm font-semibold px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-400 mb-6"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.4, duration: 0.5 }}
//                 >
//                   Welcome to my portfolio
//                 </motion.div>
//               </div>

//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
//                 {`I am a `}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
//                   {text}
//                   <span className="animate-blink">|</span>
//                 </span>
//               </h1>

//               <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 my-8"></div>

//               <p className="text-lg md:text-xl mb-10 max-w-2xl text-slate-300 leading-relaxed">
//                 Hi, I&apos;m Mohamed Yusuf Mohamed, a Full Stack Developer
//                 passionate about building user-friendly solutions. With
//                 expertise in both front-end and back-end development, I strive
//                 to create impactful technology that simplifies people&apos;s
//                 lives.
//               </p>
//             </motion.div>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//             >
//               <motion.a
//                 href="https://drive.google.com/file/d/1FDoD5EMmgFN1-jL57-_jfgRl8AdORTA3/view?usp=sharing"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <span>Download Resume</span>
//                 <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
//               </motion.a>

//               <div className="flex items-center gap-4 mt-2 sm:mt-0">
//                 <motion.a
//                   href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 text-blue-400 shadow-lg h-12 w-12 flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300 border border-blue-500/20"
//                   whileHover={{
//                     scale: 1.15,
//                     backgroundColor: "rgba(59, 130, 246, 0.3)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <FaLinkedin size={22} />
//                 </motion.a>
//                 <motion.a
//                   href="https://github.com/Mohamed-Y-Mohamed"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 text-blue-400 shadow-lg h-12 w-12 flex items-center justify-center rounded-full hover:scale-110 transition-all duration-300 border border-blue-500/20"
//                   whileHover={{
//                     scale: 1.15,
//                     backgroundColor: "rgba(59, 130, 246, 0.3)",
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <FaGithub size={22} />
//                 </motion.a>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="lg:w-2/5 mt-12 lg:mt-0 relative z-10"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             style={{ y, opacity }}
//           >
//             <div className="relative">
//               {/* Decorative circles behind the hero image */}
//               <motion.div
//                 className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/5 blur-xl"
//                 animate={{
//                   scale: [1, 1.1, 1],
//                   opacity: [0.5, 0.7, 0.5],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//               />
//               <motion.div
//                 className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/5 blur-xl"
//                 animate={{
//                   scale: [1, 1.2, 1],
//                   opacity: [0.3, 0.5, 0.3],
//                 }}
//                 transition={{
//                   duration: 7,
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                   delay: 1,
//                 }}
//               />

//               {/* Hero image with glow effect */}
//               <motion.div
//                 className="rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-2 relative z-10"
//                 whileHover={{ scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Image
//                   src="/assets/image/hero.svg"
//                   width={500}
//                   height={500}
//                   alt="Hero Illustration"
//                   className="w-full max-w-md mx-auto filter drop-shadow-xl"
//                   priority
//                 />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll down indicator */}
//         <motion.div
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1, duration: 0.8 }}
//         >
//           <motion.button
//             onClick={scrollToAbout}
//             className="flex flex-col items-center text-slate-400 hover:text-cyan-400 transition-colors"
//             animate={{ y: [0, 10, 0] }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//               repeatType: "loop",
//             }}
//             whileHover={{ scale: 1.1 }}
//           >
//             <span className="text-sm font-medium mb-2">Scroll Down</span>
//             <FaArrowDown />
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
// /app/components/sections/Hero.jsx
"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);

  const toRotate = useMemo(
    () => [
      "Graduate Software Engineer",
      "Full Stack Developer",
      "Problem Solver",
      "Team Collaborator",
    ],
    []
  );

  const period = 2000;
  const controls = useAnimation();
  const heroRef = useRef(null);

  const scrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleTyping = useCallback(() => {
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
      setLoopNum((prev) => prev + 1);
      typingSpeed = 500;
    }

    setDelta(typingSpeed);
  }, [text, isDeleting, loopNum, toRotate, period]);

  useEffect(() => {
    const ticker = setTimeout(handleTyping, delta);
    return () => clearTimeout(ticker);
  }, [handleTyping, delta]);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    });
  }, [controls]);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#121417] pt-20"
    >
      {/* Simple background accents */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#00ADB5] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00FFF5] opacity-3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="relative z-10 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                className="inline-block text-sm font-semibold px-4 py-2 rounded-xl bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5] mb-6 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                👋 Open to Opportunities
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#EEEEEE]">
                {`Hi, I'm a `}
                <span className="text-[#00ADB5]">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>

              <motion.div
                className="w-24 h-1 bg-[#00ADB5] my-8 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              <div className="space-y-4 mb-10 text-[#B0BEC5]">
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="text-[#EEEEEE] font-medium">
                    Passionate about technology
                  </span>{" "}
                  and driven to make an impact in the software development
                  field. As a recent graduate, I bring fresh perspectives,
                  modern skills, and an eagerness to contribute to innovative
                  projects.
                </p>

                <p className="text-lg leading-relaxed">
                  <span className="text-[#00ADB5] font-medium">
                    Curious by nature, proactive in approach, and collaborative
                    in spirit
                  </span>{" "}
                  — I thrive in team environments where I can learn from
                  experienced developers while contributing my technical skills
                  in full-stack development.
                </p>

                <p className="text-lg leading-relaxed">
                  Ready to bring{" "}
                  <span className="text-[#EEEEEE] font-medium">
                    dedication, modern technical expertise, and a growth mindset
                  </span>{" "}
                  to your development team.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1FDoD5EMmgFN1-jL57-_jfgRl8AdORTA3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#00ADB5] hover:bg-[#00FFF5] hover:text-[#121417] text-[#EEEEEE] rounded-xl font-medium transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group border border-[#00ADB5]/50"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0, 255, 245, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Resume</span>
                <FaDownload className="group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              <div className="flex items-center gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E2125]/60 text-[#00ADB5] border border-[#393E46] h-12 w-12 flex items-center justify-center rounded-xl hover:bg-[#00ADB5]/10 hover:border-[#00ADB5]/50 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(0, 173, 181, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={20} />
                </motion.a>
                <motion.a
                  href="https://github.com/Mohamed-Y-Mohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1E2125]/60 text-[#00ADB5] border border-[#393E46] h-12 w-12 flex items-center justify-center rounded-xl hover:bg-[#00ADB5]/10 hover:border-[#00ADB5]/50 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(0, 173, 181, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image Section */}
          <motion.div
            className="relative z-10 order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative max-w-md mx-auto">
              {/* Simple decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 rounded-full bg-[#00ADB5]/20 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-[#00FFF5]/10 blur-xl"></div>

              {/* Hero image container */}
              <motion.div
                className="rounded-3xl overflow-hidden border border-[#393E46] shadow-2xl bg-[#1E2125]/40 backdrop-blur-sm"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(0, 173, 181, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-[#EEEEEE]/95 to-[#B0BEC5]/90 rounded-2xl p-8 m-4">
                  <Image
                    src="/assets/image/hero.svg"
                    width={400}
                    height={400}
                    alt="Hero Illustration"
                    className="w-full max-w-sm mx-auto"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-[#B0BEC5] hover:text-[#00ADB5] transition-colors group"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-medium mb-2">Learn More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <FaArrowDown className="group-hover:text-[#00FFF5] transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Custom styles for blinking cursor */}
      <style jsx>{`
        @keyframes pulse {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
        .animate-pulse {
          animation: pulse 1s infinite;
        }
      `}</style>
    </div>
  );
}
