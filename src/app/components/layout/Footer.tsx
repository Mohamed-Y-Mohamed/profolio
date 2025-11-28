// /app/components/layout/Footer.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaChevronUp,
  FaDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2125] border-t border-[#393E46] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00ADB5] opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-6 group">
              <div className="relative">
                <Image
                  src="/assets/image/logo512.png"
                  alt="Mohamed Yusuf Mohamed"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-[#393E46] group-hover:border-[#00ADB5] transition-colors duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-[#00ADB5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="ml-4">
                <span className="text-2xl font-bold text-[#EEEEEE] group-hover:text-[#00ADB5] transition-colors duration-300">
                  Mohamed Y. Mohamed
                </span>
                <p className="text-[#00ADB5] font-medium">
                  Graduate Software Engineer
                </p>
              </div>
            </Link>

            <p className="text-[#B0BEC5] max-w-md mb-6 leading-relaxed">
              Passionate graduate software engineer ready to contribute fresh
              perspectives, modern technical skills, and collaborative spirit to
              innovative development teams.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#121417]/40 rounded-xl p-4 border border-[#393E46]">
                <div className="flex items-center gap-2 text-[#00ADB5] mb-1">
                  <FaMapMarkerAlt size={14} />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-[#EEEEEE] font-medium">London, UK</p>
              </div>
              <div className="bg-[#121417]/40 rounded-xl p-4 border border-[#393E46]">
                <div className="flex items-center gap-2 text-[#00ADB5] mb-1">
                  <FaEnvelope size={14} />
                  <span className="text-sm font-medium">Status</span>
                </div>
                <p className="text-[#EEEEEE] font-medium">Available for work</p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://drive.google.com/file/d/1ZTts_zQbUmLqInuCmxonbsy0IrrehDh4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ADB5] text-[#121417] font-medium rounded-xl hover:bg-[#00FFF5] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload size={16} />
              view Resume
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#EEEEEE]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Me", section: "about" },
                { name: "Technical Skills", section: "skills" },
                { name: "Education", section: "education" },
                { name: "Experience", section: "experience" },
                { name: "Projects", section: "projects" },
                { name: "Contact", section: "contact" },
              ].map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.section)}
                    className="text-[#B0BEC5] hover:text-[#00ADB5] transition-colors duration-300 group flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-[#393E46] group-hover:bg-[#00ADB5] rounded-full mr-3 transition-colors duration-300"></span>
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#EEEEEE]">
              Let&apos;s Connect
            </h3>
            <p className="text-[#B0BEC5] mb-6">
              Ready to discuss opportunities or collaborate on exciting
              projects?
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: FaLinkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/",
                  description: "Professional Network",
                },
                {
                  icon: FaGithub,
                  label: "GitHub",
                  href: "https://github.com/Mohamed-Y-Mohamed",
                  description: "Code Portfolio",
                },
                {
                  icon: FaEnvelope,
                  label: "Contact",
                  href: "#contact",
                  description: "Send Message",
                  isInternal: true,
                },
              ].map((social) => (
                <motion.div key={social.label}>
                  {social.isInternal ? (
                    <motion.button
                      onClick={() => scrollToSection("contact")}
                      className="flex items-center gap-3 p-3 bg-[#121417]/40 rounded-xl border border-[#393E46] hover:border-[#00ADB5]/50 hover:bg-[#00ADB5]/5 transition-all duration-300 w-full"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-2 bg-[#00ADB5]/10 rounded-lg text-[#00ADB5]">
                        <social.icon size={16} />
                      </div>
                      <div className="text-left">
                        <p className="text-[#EEEEEE] font-medium text-sm">
                          {social.label}
                        </p>
                        <p className="text-[#B0BEC5] text-xs">
                          {social.description}
                        </p>
                      </div>
                    </motion.button>
                  ) : (
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-[#121417]/40 rounded-xl border border-[#393E46] hover:border-[#00ADB5]/50 hover:bg-[#00ADB5]/5 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-2 bg-[#00ADB5]/10 rounded-lg text-[#00ADB5]">
                        <social.icon size={16} />
                      </div>
                      <div>
                        <p className="text-[#EEEEEE] font-medium text-sm">
                          {social.label}
                        </p>
                        <p className="text-[#B0BEC5] text-xs">
                          {social.description}
                        </p>
                      </div>
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#393E46] flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-[#B0BEC5] mb-1">
              © {currentYear} Mohamed Yusuf Mohamed. All rights reserved.
            </p>
            <p className="text-[#B0BEC5] text-sm">
              Built with Next.js, React, and Tailwind CSS ⚡
            </p>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="group relative p-4 bg-[#00ADB5] text-[#121417] rounded-full hover:bg-[#00FFF5] transition-all duration-300 shadow-lg"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 10px 30px rgba(0, 173, 181, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <FaChevronUp
              size={18}
              className="group-hover:translate-y-[-2px] transition-transform duration-300"
            />

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-[#121417] text-[#EEEEEE] text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Back to top
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#121417]"></div>
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
