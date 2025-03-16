// /app/components/layout/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "@/app/utils/styles";
import { useScrollEffect } from "@/app/hooks/useScrollEffect";
import type { NavLink } from "@/app/types";

const navLinks: NavLink[] = [
  { name: "Home", path: "/", section: null },
  { name: "About", path: "/#about", section: "about" },
  { name: "Skills", path: "/#skills", section: "skills" },
  { name: "Education", path: "/#education", section: "education" },
  { name: "Experience", path: "/#experience", section: "experience" },
  { name: "Projects", path: "/#projects", section: null },
  { name: "Contact", path: "/#contact", section: null },
];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const scrolled = useScrollEffect(50);

  // Close mobile nav when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isNavOpen) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsNavOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1F44]/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`${styles.container} py-4 flex justify-between items-center`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/image/logo512.png"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="ml-2 text-xl font-bold hidden sm:block">
            Mohamed Digital resume
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavItem
              key={link.name}
              link={link}
              scrollToSection={scrollToSection}
            />
          ))}
        </div>

        <HamburgerButton
          isOpen={isNavOpen}
          toggleNav={() => setIsNavOpen(!isNavOpen)}
        />

        <AnimatePresence>
          {isNavOpen && (
            <MobileNav
              links={navLinks}
              scrollToSection={scrollToSection}
              closeNav={() => setIsNavOpen(false)}
            />
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

interface NavItemProps {
  link: NavLink;
  scrollToSection: (sectionId: string) => void;
}

function NavItem({ link, scrollToSection }: NavItemProps) {
  return (
    <div>
      {link.section ? (
        <button
          onClick={() => scrollToSection(link.section!)}
          className="py-2 px-1 relative group"
        >
          {link.name}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3BC4C4] group-hover:w-full transition-all duration-300" />
        </button>
      ) : (
        <Link href={link.path} className="py-2 px-1 relative group">
          {link.name}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3BC4C4] group-hover:w-full transition-all duration-300" />
        </Link>
      )}
    </div>
  );
}

interface HamburgerButtonProps {
  isOpen: boolean;
  toggleNav: () => void;
}

function HamburgerButton({ isOpen, toggleNav }: HamburgerButtonProps) {
  return (
    <button
      onClick={toggleNav}
      className="md:hidden relative z-150 focus:outline-none w-8 h-8 flex flex-col justify-center items-center"
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <span
          className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
          }`}
        />
      </div>
    </button>
  );
}

interface MobileNavProps {
  links: NavLink[];
  scrollToSection: (sectionId: string) => void;
  closeNav: () => void;
}

function MobileNav({ links, scrollToSection, closeNav }: MobileNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed inset-0 z-40 bg-[#0A1F44]"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        width: "100vw",
        overflowY: "auto",
      }}
    >
      <div
        className={`${styles.container} flex flex-col items-center space-y-8 pt-24`}
      >
        {links.map((link, index) => (
          <motion.div
            key={link.name}
            className="w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            {link.section ? (
              <button
                onClick={() => scrollToSection(link.section!)}
                className="text-2xl font-medium hover:text-[#3BC4C4] transition-colors"
              >
                {link.name}
              </button>
            ) : (
              <Link
                href={link.path}
                className="text-2xl font-medium hover:text-[#3BC4C4] transition-colors"
                onClick={closeNav}
              >
                {link.name}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
