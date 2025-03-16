// /app/components/sections/Contact.tsx
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Formspree integration
  const [state, handleFormspreeSubmit] = useForm("meojbrzj"); // Your formspree form ID

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.fullName) return "Please fill in your full name.";
    if (!formData.email) return "Please fill in your email.";
    if (!formData.phone) return "Please fill in your phone number.";
    if (!formData.subject) return "Please fill in the subject.";
    if (!formData.message) return "Please fill in your message.";
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
      className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#3BC4C4]/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#3BC4C4]/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
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

          <h2 className="inline-block text-4xl text-white md:text-5xl font-bold mb-4 relative">
            Contact Me
            <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#3BC4C4]/50"></div>
          </h2>

          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to
            me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#3BC4C4]/10 text-[#3BC4C4] rounded-lg mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-white">
                      Email
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      mohamed.y.mohamed@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#3BC4C4]/10 text-[#3BC4C4] rounded-lg mt-1">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-white">
                      Phone
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      +44 123 456 7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#3BC4C4]/10 text-[#3BC4C4] rounded-lg mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1 text-white">
                      Location
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      London, United Kingdom
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3 text-white">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#3BC4C4]/10 text-[#3BC4C4] rounded-lg hover:bg-[#3BC4C4] hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/Mohamed-Y-Mohamed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#3BC4C4]/10 text-[#3BC4C4] rounded-lg hover:bg-[#3BC4C4] hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={20} />
                  </a>
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
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send Me a Message
              </h3>

              {state.succeeded && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg">
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium mb-2 text-white"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3BC4C4]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3BC4C4]"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3BC4C4]"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3BC4C4]"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-white"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#3BC4C4]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={state.submitting || isSubmitting}
                  className="px-6 py-3 bg-[#3BC4C4] hover:bg-[#2aa3a3] text-white rounded-lg font-medium flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {state.submitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message <FaPaperPlane />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
