// /app/components/layout/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
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
            Mohamed Y.
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

        <MobileNav
          isOpen={isNavOpen}
          setIsOpen={setIsNavOpen}
          links={navLinks}
          scrollToSection={scrollToSection}
        />
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

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  links: NavLink[];
  scrollToSection: (sectionId: string) => void;
}

function MobileNav({
  isOpen,
  setIsOpen,
  links,
  scrollToSection,
}: MobileNavProps) {
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative z-50 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div
          className={`w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? "opacity-0" : "mb-1.5"
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-current transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 z-40 bg-[#0A1F44] pt-20"
        >
          <div
            className={`${styles.container} flex flex-col items-center space-y-8 mt-10`}
          >
            {links.map((link) => (
              <div key={link.name} className="w-full text-center">
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
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
