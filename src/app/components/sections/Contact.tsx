// "use client";

// import { useState, useRef, useEffect } from "react";
// import {
//   motion,
//   useInView,
//   useAnimation,
//   AnimatePresence,
// } from "framer-motion";
// import {
//   FaMapMarkerAlt,
//   FaPaperPlane,
//   FaGithub,
//   FaLinkedin,
//   FaCheck,
//   FaExclamationTriangle,
// } from "react-icons/fa";
// import { useForm } from "@formspree/react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [errorMessage, setErrorMessage] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [focusedInput, setFocusedInput] = useState<string | null>(null);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });
//   const controls = useAnimation();

//   // Formspree integration
//   const [state, handleFormspreeSubmit] = useForm("meojbrzj"); // Your formspree form ID

//   useEffect(() => {
//     if (isInView) {
//       controls.start({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6 },
//       });
//     }
//   }, [isInView, controls]);

//   // Handle form success
//   useEffect(() => {
//     if (state.succeeded) {
//       setShowSuccessMessage(true);

//       // Reset the form data
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });

//       // After 5 seconds, hide success message and show the form again
//       const timer = setTimeout(() => {
//         setShowSuccessMessage(false);
//       }, 5000);

//       return () => clearTimeout(timer);
//     }
//   }, [state.succeeded]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     if (!formData.fullName) return "Please fill in your full name.";
//     if (!formData.email) return "Please fill in your email.";
//     if (!formData.message) return "Please fill in your message.";
//     if (!/^\S+@\S+\.\S+$/.test(formData.email))
//       return "Please enter a valid email address.";
//     return "";
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Form validation
//     const error = validateForm();
//     if (error) {
//       setErrorMessage(error);
//       return;
//     }

//     setErrorMessage("");
//     setIsSubmitting(true);

//     // Submit form to Formspree
//     handleFormspreeSubmit(e);
//   };

//   // Create grid pattern background
//   const gridPatternStyles = {
//     backgroundSize: "30px 30px",
//     backgroundImage: `
//       linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
//       linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
//     `,
//   };

//   return (
//     <section
//       id="contact"
//       ref={ref}
//       className="py-16 relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900"
//     >
//       {/* Grid pattern overlay */}
//       <div className="absolute inset-0" style={gridPatternStyles}></div>

//       {/* Background decorative elements */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-0"></div>
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-0"></div>

//       <div className="w-full mx-auto px-2 sm:px-4 relative z-10">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={controls}
//         >
//           <motion.div
//             initial={{ width: 0 }}
//             animate={isInView ? { width: "100%" } : {}}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full max-w-md mx-auto mb-8"
//           />

//           <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
//               Contact Me
//             </span>
//             <motion.div
//               className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400"
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//             />
//           </h2>

//           <p className="text-lg text-slate-300 max-w-2xl mx-auto">
//             Have a question or want to work together? Feel free to reach out to
//             me.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-5 gap-8">
//           <motion.div
//             className="lg:col-span-2"
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl shadow-xl p-8 relative overflow-hidden">
//               {/* Decorative graphic element */}
//               <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl -z-0"></div>

//               <h3 className="text-2xl font-bold mb-8 text-white relative z-10">
//                 Get In Touch
//               </h3>

//               <div className="space-y-8 relative z-10">
//                 <motion.div
//                   className="flex items-start gap-5"
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <div className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20">
//                     <FaLinkedin size={20} />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-medium mb-1 text-white">
//                       Linkedin
//                     </h4>
//                     <a
//                       href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
//                       className="text-slate-300 hover:text-cyan-400 transition-colors"
//                     >
//                       Lets Talk
//                     </a>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="flex items-start gap-5"
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <div className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20">
//                     <FaGithub size={20} />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-medium mb-1 text-white">
//                       Github to Collaborate
//                     </h4>
//                     <a
//                       href="https://github.com/Mohamed-Y-Mohamed"
//                       className="text-slate-300 hover:text-cyan-400 transition-colors"
//                     >
//                       Lets Collaborate
//                     </a>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="flex items-start gap-5"
//                   whileHover={{ x: 5 }}
//                   transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                 >
//                   <div className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20">
//                     <FaMapMarkerAlt size={20} />
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-medium mb-1 text-white">
//                       Location
//                     </h4>
//                     <p className="text-slate-300">London, United Kingdom</p>
//                   </div>
//                 </motion.div>
//               </div>

//               <div className="mt-12 relative z-10">
//                 <h4 className="text-lg font-medium mb-5 text-white">
//                   Follow Me
//                 </h4>
//                 <div className="flex gap-4">
//                   <motion.a
//                     href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 hover:text-white transition-all duration-300"
//                     aria-label="LinkedIn"
//                     whileHover={{
//                       scale: 1.1,
//                       backgroundColor: "rgba(20, 184, 166, 0.3)",
//                     }}
//                     whileTap={{ scale: 0.97 }}
//                   >
//                     <FaLinkedin size={20} />
//                   </motion.a>
//                   <motion.a
//                     href="https://github.com/Mohamed-Y-Mohamed"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 hover:text-white transition-all duration-300"
//                     aria-label="GitHub"
//                     whileHover={{
//                       scale: 1.1,
//                       backgroundColor: "rgba(20, 184, 166, 0.3)",
//                     }}
//                     whileTap={{ scale: 0.97 }}
//                   >
//                     <FaGithub size={20} />
//                   </motion.a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             className="lg:col-span-3"
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl shadow-xl p-8 relative overflow-hidden">
//               {/* Decorative graphic element */}
//               <div className="absolute top-0 left-1/2 w-40 h-40 bg-teal-500/10 rounded-full blur-xl -z-0"></div>
//               <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl -z-0"></div>

//               <h3 className="text-2xl font-bold mb-6 text-white relative z-10">
//                 Send Me a Message
//               </h3>

//               <AnimatePresence>
//                 {errorMessage && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.4 }}
//                     className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20 text-red-400 rounded-lg flex items-center gap-3"
//                   >
//                     <div className="p-1.5 bg-red-500/20 rounded-full">
//                       <FaExclamationTriangle
//                         className="text-red-400"
//                         size={12}
//                       />
//                     </div>
//                     {errorMessage}
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <AnimatePresence>
//                 {showSuccessMessage ? (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8 }}
//                     transition={{ duration: 0.5 }}
//                     className="flex flex-col items-center justify-center py-16 text-center"
//                   >
//                     <div className="mb-6 w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
//                       <FaCheck className="text-white" size={40} />
//                     </div>
//                     <h4 className="text-2xl font-bold mb-3 text-white">
//                       Thank You!
//                     </h4>
//                     <p className="text-slate-300 mb-6 max-w-md">
//                       Your message has been sent successfully. I&apos;ll be
//                       reaching out to you soon.
//                     </p>
//                   </motion.div>
//                 ) : (
//                   <motion.form
//                     initial={{ opacity: 1 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     onSubmit={handleSubmit}
//                     className="relative z-10"
//                   >
//                     <div className="grid md:grid-cols-2 gap-6 mb-6">
//                       <div className="relative">
//                         <motion.label
//                           htmlFor="fullName"
//                           className={`block text-sm font-medium mb-2 ${
//                             focusedInput === "fullName"
//                               ? "text-cyan-400"
//                               : "text-slate-300"
//                           } transition-colors duration-200`}
//                           animate={
//                             focusedInput === "fullName" ? { x: 5 } : { x: 0 }
//                           }
//                           transition={{
//                             type: "spring",
//                             stiffness: 400,
//                             damping: 17,
//                           }}
//                         >
//                           Full Name
//                         </motion.label>
//                         <input
//                           type="text"
//                           id="fullName"
//                           name="fullName"
//                           value={formData.fullName}
//                           onChange={handleInputChange}
//                           onFocus={() => setFocusedInput("fullName")}
//                           onBlur={() => setFocusedInput(null)}
//                           className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
//                           placeholder="John Doe"
//                         />
//                       </div>
//                       <div className="relative">
//                         <motion.label
//                           htmlFor="email"
//                           className={`block text-sm font-medium mb-2 ${
//                             focusedInput === "email"
//                               ? "text-cyan-400"
//                               : "text-slate-300"
//                           } transition-colors duration-200`}
//                           animate={
//                             focusedInput === "email" ? { x: 5 } : { x: 0 }
//                           }
//                           transition={{
//                             type: "spring",
//                             stiffness: 400,
//                             damping: 17,
//                           }}
//                         >
//                           Email
//                         </motion.label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           onFocus={() => setFocusedInput("email")}
//                           onBlur={() => setFocusedInput(null)}
//                           className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
//                           placeholder="john@example.com"
//                         />
//                       </div>
//                     </div>

//                     <div className="mb-6">
//                       <motion.label
//                         htmlFor="phone"
//                         className={`block text-sm font-medium mb-2 ${
//                           focusedInput === "phone"
//                             ? "text-cyan-400"
//                             : "text-slate-300"
//                         } transition-colors duration-200`}
//                         animate={focusedInput === "phone" ? { x: 5 } : { x: 0 }}
//                         transition={{
//                           type: "spring",
//                           stiffness: 400,
//                           damping: 17,
//                         }}
//                       >
//                         Phone Number (optional)
//                       </motion.label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         onFocus={() => setFocusedInput("phone")}
//                         onBlur={() => setFocusedInput(null)}
//                         className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
//                         placeholder="+44 123 456 7890"
//                       />
//                     </div>

//                     <div className="mb-6">
//                       <motion.label
//                         htmlFor="subject"
//                         className={`block text-sm font-medium mb-2 ${
//                           focusedInput === "subject"
//                             ? "text-cyan-400"
//                             : "text-slate-300"
//                         } transition-colors duration-200`}
//                         animate={
//                           focusedInput === "subject" ? { x: 5 } : { x: 0 }
//                         }
//                         transition={{
//                           type: "spring",
//                           stiffness: 400,
//                           damping: 17,
//                         }}
//                       >
//                         Subject (optional)
//                       </motion.label>
//                       <input
//                         type="text"
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleInputChange}
//                         onFocus={() => setFocusedInput("subject")}
//                         onBlur={() => setFocusedInput(null)}
//                         className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
//                         placeholder="Project Inquiry"
//                       />
//                     </div>

//                     <div className="mb-8">
//                       <motion.label
//                         htmlFor="message"
//                         className={`block text-sm font-medium mb-2 ${
//                           focusedInput === "message"
//                             ? "text-cyan-400"
//                             : "text-slate-300"
//                         } transition-colors duration-200`}
//                         animate={
//                           focusedInput === "message" ? { x: 5 } : { x: 0 }
//                         }
//                         transition={{
//                           type: "spring",
//                           stiffness: 400,
//                           damping: 17,
//                         }}
//                       >
//                         Your Message
//                       </motion.label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleInputChange}
//                         onFocus={() => setFocusedInput("message")}
//                         onBlur={() => setFocusedInput(null)}
//                         rows={5}
//                         className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 resize-none"
//                         placeholder="Hello, I'd like to discuss..."
//                       ></textarea>
//                     </div>

//                     <motion.button
//                       type="submit"
//                       disabled={state.submitting || isSubmitting}
//                       className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-900 font-medium rounded-lg flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-cyan-500/20"
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.97 }}
//                     >
//                       {state.submitting ? (
//                         <>
//                           <svg
//                             className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                           >
//                             <circle
//                               className="opacity-25"
//                               cx="12"
//                               cy="12"
//                               r="10"
//                               stroke="currentColor"
//                               strokeWidth="4"
//                             ></circle>
//                             <path
//                               className="opacity-75"
//                               fill="currentColor"
//                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                             ></path>
//                           </svg>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           Send Message <FaPaperPlane />
//                         </>
//                       )}
//                     </motion.button>
//                   </motion.form>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaCheck,
  FaExclamationTriangle,
  FaEnvelope,
} from "react-icons/fa";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  // Formspree integration
  const [state, handleFormspreeSubmit] = useForm("meojbrzj"); // Your formspree form ID

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
      });
    }
  }, [isInView, controls]);

  // Handle form success
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);

      // Reset the form data
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // After 5 seconds, hide success message and show the form again
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName) return "Please fill in your full name.";
    if (!formData.email) return "Please fill in your email.";
    if (!formData.message) return "Please fill in your message.";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form validation
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    // Submit form to Formspree
    handleFormspreeSubmit(e);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 relative overflow-hidden bg-[#121417]"
    >
      {/* Simple background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ADB5] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-[#EEEEEE]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-[#00ADB5] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p
            className="text-lg text-[#B0BEC5] max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Ready to contribute to your team? Let&apos;s discuss how my skills
            and passion can help drive your projects forward.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-[#1E2125]/60 backdrop-blur-sm border border-[#393E46] rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-[#EEEEEE]">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-[#00ADB5] text-[#121417] rounded-xl flex items-center justify-center shadow-lg">
                    <FaLinkedin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-[#EEEEEE]">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B0BEC5] hover:text-[#00ADB5] transition-colors"
                    >
                      Professional Network
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-[#00ADB5] text-[#121417] rounded-xl flex items-center justify-center shadow-lg">
                    <FaGithub size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-[#EEEEEE]">
                      GitHub
                    </h4>
                    <a
                      href="https://github.com/Mohamed-Y-Mohamed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B0BEC5] hover:text-[#00ADB5] transition-colors"
                    >
                      Code Portfolio
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-[#00ADB5] text-[#121417] rounded-xl flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-[#EEEEEE]">
                      Location
                    </h4>
                    <p className="text-[#B0BEC5]">London, United Kingdom</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-3 bg-[#00ADB5] text-[#121417] rounded-xl flex items-center justify-center shadow-lg">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-[#EEEEEE]">
                      Availability
                    </h4>
                    <p className="text-[#00ADB5] font-medium">
                      Open for Full-time Opportunities
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#393E46]">
                <h4 className="text-lg font-medium mb-4 text-[#EEEEEE]">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1E2125] text-[#00ADB5] border border-[#393E46] rounded-xl flex items-center justify-center hover:bg-[#00ADB5] hover:text-[#121417] hover:border-[#00ADB5] transition-all duration-300 shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(0, 173, 181, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Mohamed-Y-Mohamed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1E2125] text-[#00ADB5] border border-[#393E46] rounded-xl flex items-center justify-center hover:bg-[#00ADB5] hover:text-[#121417] hover:border-[#00ADB5] transition-all duration-300 shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(0, 173, 181, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-[#1E2125]/60 backdrop-blur-sm border border-[#393E46] rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-[#EEEEEE]">
                Send a Message
              </h3>

              <AnimatePresence>
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-center gap-3"
                  >
                    <FaExclamationTriangle size={16} />
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showSuccessMessage ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="mb-6 w-20 h-20 bg-[#00ADB5] rounded-full flex items-center justify-center shadow-lg">
                      <FaCheck className="text-[#121417]" size={32} />
                    </div>
                    <h4 className="text-2xl font-bold mb-3 text-[#EEEEEE]">
                      Message Sent!
                    </h4>
                    <p className="text-[#B0BEC5] mb-6 max-w-md">
                      Thank you for reaching out! I&apos;ll get back to you
                      within 24 hours to discuss potential opportunities.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                  >
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium mb-2 text-[#EEEEEE]"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedInput("fullName")}
                          onBlur={() => setFocusedInput(null)}
                          className="w-full px-4 py-3 rounded-xl border border-[#393E46] bg-[#121417]/60 text-[#EEEEEE] placeholder-[#B0BEC5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/50 focus:border-[#00ADB5]/50 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2 text-[#EEEEEE]"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedInput("email")}
                          onBlur={() => setFocusedInput(null)}
                          className="w-full px-4 py-3 rounded-xl border border-[#393E46] bg-[#121417]/60 text-[#EEEEEE] placeholder-[#B0BEC5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/50 focus:border-[#00ADB5]/50 transition-all duration-300"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2 text-[#EEEEEE]"
                      >
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedInput("phone")}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full px-4 py-3 rounded-xl border border-[#393E46] bg-[#121417]/60 text-[#EEEEEE] placeholder-[#B0BEC5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/50 focus:border-[#00ADB5]/50 transition-all duration-300"
                        placeholder="+44 123 456 7890"
                      />
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-[#EEEEEE]"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedInput("subject")}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full px-4 py-3 rounded-xl border border-[#393E46] bg-[#121417]/60 text-[#EEEEEE] placeholder-[#B0BEC5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/50 focus:border-[#00ADB5]/50 transition-all duration-300"
                        placeholder="Graduate Developer Opportunity"
                      />
                    </div>

                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-[#EEEEEE]"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedInput("message")}
                        onBlur={() => setFocusedInput(null)}
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-[#393E46] bg-[#121417]/60 text-[#EEEEEE] placeholder-[#B0BEC5] focus:outline-none focus:ring-2 focus:ring-[#00ADB5]/50 focus:border-[#00ADB5]/50 transition-all duration-300 resize-none"
                        placeholder="I'd like to discuss opportunities for a graduate developer position..."
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={state.submitting || isSubmitting}
                      className="w-full px-8 py-3 bg-[#00ADB5] hover:bg-[#00FFF5] hover:text-[#121417] text-[#EEEEEE] font-medium rounded-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg border border-[#00ADB5]/50"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 25px rgba(0, 255, 245, 0.3)",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {state.submitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message <FaPaperPlane />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
