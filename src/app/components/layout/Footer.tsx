// /app/components/layout/Footer.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter, FaChevronUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0d1224] py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/assets/image/logo512.png"
                alt="Mohamed Yusuf Mohamed"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="ml-3 text-xl font-bold">Mohamed Y. Mohamed</span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 max-w-xs">
              Full Stack Developer passionate about creating seamless,
              user-friendly digital solutions.
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-slate-600 dark:text-slate-400 hover:text-[#3BC4C4] dark:hover:text-[#3BC4C4] transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-[#3BC4C4] dark:hover:text-[#3BC4C4] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#experience"
                  className="text-slate-600 dark:text-slate-400 hover:text-[#3BC4C4] dark:hover:text-[#3BC4C4] transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-[#3BC4C4] dark:hover:text-[#3BC4C4] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mohamed-yusuf-mohamed-896464161/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-[#3BC4C4] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Mohamed-Y-Mohamed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-[#3BC4C4] hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-[#3BC4C4] hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-center md:text-left mb-4 md:mb-0">
            © {currentYear} Mohamed Yusuf Mohamed. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-3 bg-[#3BC4C4] text-white rounded-full hover:bg-[#2aa3a3] transition-colors"
            aria-label="Scroll to top"
          >
            <FaChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
