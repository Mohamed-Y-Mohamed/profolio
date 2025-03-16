// /app/components/sections/Contact.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaCheck,
  FaExclamationTriangle,
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
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
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
      id="contact"
      ref={ref}
      className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-800 to-slate-900"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={gridPatternStyles}></div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-0"></div>

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
            className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full max-w-md mx-auto mb-8"
          />

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Contact Me
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to
            me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl shadow-xl p-8 relative overflow-hidden">
              {/* Decorative graphic element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl -z-0"></div>

              <h3 className="text-2xl font-bold mb-8 text-white relative z-10">
                Get In Touch
              </h3>

              <div className="space-y-8 relative z-10">
                <motion.div
                  className="flex items-start gap-5"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-white">
                      Email
                    </h4>
                    <a
                      href="mailto:mohamed.y.mohamed@example.com"
                      className="text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      mohamed.y.mohamed@example.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-5"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-white">
                      Phone
                    </h4>
                    <a
                      href="tel:+441234567890"
                      className="text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      +44 123 456 7890
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-5"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-white">
                      Location
                    </h4>
                    <p className="text-slate-300">London, United Kingdom</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12 relative z-10">
                <h4 className="text-lg font-medium mb-5 text-white">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(20, 184, 166, 0.3)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Mohamed-Y-Mohamed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-gradient-to-br from-cyan-500/20 to-cyan-500/10 text-cyan-400 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/50 hover:text-white transition-all duration-300"
                    aria-label="GitHub"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(20, 184, 166, 0.3)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-xl shadow-xl p-8 relative overflow-hidden">
              {/* Decorative graphic element */}
              <div className="absolute top-0 left-1/2 w-40 h-40 bg-teal-500/10 rounded-full blur-xl -z-0"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl -z-0"></div>

              <h3 className="text-2xl font-bold mb-6 text-white relative z-10">
                Send Me a Message
              </h3>

              <AnimatePresence>
                {state.succeeded && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6 p-4 bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 text-green-400 rounded-lg flex items-center gap-3"
                  >
                    <div className="p-1.5 bg-green-500/20 rounded-full">
                      <FaCheck className="text-green-400" size={12} />
                    </div>
                    Your message has been sent successfully! I'll get back to
                    you soon.
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-red-500/5 border border-red-500/20 text-red-400 rounded-lg flex items-center gap-3"
                  >
                    <div className="p-1.5 bg-red-500/20 rounded-full">
                      <FaExclamationTriangle
                        className="text-red-400"
                        size={12}
                      />
                    </div>
                    {errorMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="relative">
                    <motion.label
                      htmlFor="fullName"
                      className={`block text-sm font-medium mb-2 ${
                        focusedInput === "fullName"
                          ? "text-cyan-400"
                          : "text-slate-300"
                      } transition-colors duration-200`}
                      animate={
                        focusedInput === "fullName" ? { x: 5 } : { x: 0 }
                      }
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      Full Name
                    </motion.label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput("fullName")}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="relative">
                    <motion.label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        focusedInput === "email"
                          ? "text-cyan-400"
                          : "text-slate-300"
                      } transition-colors duration-200`}
                      animate={focusedInput === "email" ? { x: 5 } : { x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      Email
                    </motion.label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedInput("email")}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <motion.label
                    htmlFor="phone"
                    className={`block text-sm font-medium mb-2 ${
                      focusedInput === "phone"
                        ? "text-cyan-400"
                        : "text-slate-300"
                    } transition-colors duration-200`}
                    animate={focusedInput === "phone" ? { x: 5 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Phone Number (optional)
                  </motion.label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput("phone")}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                    placeholder="+44 123 456 7890"
                  />
                </div>

                <div className="mb-6">
                  <motion.label
                    htmlFor="subject"
                    className={`block text-sm font-medium mb-2 ${
                      focusedInput === "subject"
                        ? "text-cyan-400"
                        : "text-slate-300"
                    } transition-colors duration-200`}
                    animate={focusedInput === "subject" ? { x: 5 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Subject (optional)
                  </motion.label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput("subject")}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-8">
                  <motion.label
                    htmlFor="message"
                    className={`block text-sm font-medium mb-2 ${
                      focusedInput === "message"
                        ? "text-cyan-400"
                        : "text-slate-300"
                    } transition-colors duration-200`}
                    animate={focusedInput === "message" ? { x: 5 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Your Message
                  </motion.label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput("message")}
                    onBlur={() => setFocusedInput(null)}
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-700 bg-slate-800/60 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 resize-none"
                    placeholder="Hello, I'd like to discuss..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={state.submitting || isSubmitting}
                  className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-900 font-medium rounded-lg flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {state.submitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900"
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
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
