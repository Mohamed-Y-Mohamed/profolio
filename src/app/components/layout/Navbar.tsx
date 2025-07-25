// /app/components/layout/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { useScrollEffect } from "@/app/hooks/useScrollEffect";
import type { NavLink } from "@/app/types";

const navLinks: NavLink[] = [
  { name: "Home", path: "/", section: "hero" },
  { name: "About", path: "/#about", section: "about" },
  { name: "Skills", path: "/#skills", section: "skills" },
  { name: "Education", path: "/#education", section: "education" },
  { name: "Experience", path: "/#experience", section: "experience" },
  { name: "Projects", path: "/#projects", section: "projects" },
  { name: "Contact", path: "/#contact", section: "contact" },
];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const scrolled = useScrollEffect(50);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      // Define section order and get their positions
      const sectionIds = [
        "hero",
        "about",
        "skills",
        "education",
        "experience",
        "projects",
        "contact",
      ];

      // Special case for hero section (top of page)
      if (window.scrollY < 300) {
        setActiveSection("hero");
        return;
      }

      // Find the current section based on scroll position
      let currentSection = "hero";

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;

          // If scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId;
            break;
          }
          // If scroll position is past this section but before next, use this section
          else if (scrollPosition >= sectionTop) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Set initial state
    handleScroll();

    // Add scroll listener with throttling
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

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
    } else {
      // If section is not found, we're on a different page
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121417]/95 backdrop-blur-md shadow-lg border-b border-[#393E46]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative">
            <Image
              src="/assets/image/logo512.png"
              alt="Mohamed Yusuf Mohamed"
              width={48}
              height={48}
              className="rounded-full border-2 border-[#393E46] group-hover:border-[#00ADB5] transition-colors duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-[#00ADB5]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="ml-3 hidden sm:block">
            <span className="text-xl font-bold text-[#EEEEEE] group-hover:text-[#00ADB5] transition-colors duration-300">
              Mohamed Y. Mohamed
            </span>
            <p className="text-xs text-[#B0BEC5] group-hover:text-[#00ADB5] transition-colors duration-300">
              Graduate Software Engineer
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavItem
              key={link.name}
              link={link}
              scrollToSection={scrollToSection}
              isActive={activeSection === link.section}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <HamburgerButton
          isOpen={isNavOpen}
          toggleNav={() => setIsNavOpen(!isNavOpen)}
        />

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isNavOpen && (
            <MobileNav
              links={navLinks}
              scrollToSection={scrollToSection}
              closeNav={() => setIsNavOpen(false)}
              activeSection={activeSection}
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
  isActive: boolean;
}

function NavItem({ link, scrollToSection, isActive }: NavItemProps) {
  const handleClick = () => {
    if (link.section === "hero") {
      // For hero section, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (link.section) {
      scrollToSection(link.section);
    }
  };

  return (
    <div className="relative">
      {link.section ? (
        <motion.button
          onClick={handleClick}
          className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 relative group ${
            isActive
              ? "text-[#00ADB5] bg-[#00ADB5]/10"
              : "text-[#B0BEC5] hover:text-[#00ADB5] hover:bg-[#00ADB5]/5"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link.name}
          {isActive && (
            <motion.div
              className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#00ADB5] rounded-full"
              layoutId="activeIndicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transform: "translateX(-50%)" }}
            />
          )}
        </motion.button>
      ) : (
        <Link
          href={link.path}
          className="px-4 py-2 rounded-xl font-medium text-[#B0BEC5] hover:text-[#00ADB5] hover:bg-[#00ADB5]/5 transition-all duration-300"
        >
          {link.name}
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
    <motion.button
      onClick={toggleNav}
      className="md:hidden relative z-50 focus:outline-none w-10 h-10 flex flex-col justify-center items-center rounded-xl bg-[#1E2125]/60 border border-[#393E46] backdrop-blur-sm"
      whileHover={{ backgroundColor: "rgba(0, 173, 181, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? "Close Menu" : "Open Menu"}
    >
      <div className="w-6 h-6 flex flex-col justify-center items-center">
        <motion.span
          className="block w-5 h-0.5 bg-[#EEEEEE] rounded"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 1 : -2,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-5 h-0.5 bg-[#EEEEEE] rounded"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block w-5 h-0.5 bg-[#EEEEEE] rounded"
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -1 : 2,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.button>
  );
}

interface MobileNavProps {
  links: NavLink[];
  scrollToSection: (sectionId: string) => void;
  closeNav: () => void;
  activeSection: string;
}

function MobileNav({
  links,
  scrollToSection,
  closeNav,
  activeSection,
}: MobileNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#121417] w-full h-full"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Solid background overlay */}
      <div className="absolute inset-0 bg-[#121417] w-full h-full"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 173, 181, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(0, 173, 181, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-8 px-4">
        {links.map((link, index) => (
          <motion.div
            key={link.name}
            className="w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            {link.section ? (
              <motion.button
                onClick={() => {
                  if (link.section === "hero") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    closeNav();
                  } else {
                    scrollToSection(link.section!);
                  }
                }}
                className={`text-3xl font-medium px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeSection === link.section
                    ? "text-[#00ADB5] bg-[#00ADB5]/10 border border-[#00ADB5]/30"
                    : "text-[#EEEEEE] hover:text-[#00ADB5] hover:bg-[#00ADB5]/5"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.button>
            ) : (
              <Link
                href={link.path}
                className="text-3xl font-medium text-[#EEEEEE] hover:text-[#00ADB5] transition-colors duration-300 px-6 py-3 rounded-xl hover:bg-[#00ADB5]/5"
                onClick={closeNav}
              >
                {link.name}
              </Link>
            )}
          </motion.div>
        ))}

        {/* Mobile Contact CTA */}
        <motion.div
          className="mt-8 pt-8 border-t border-[#393E46] w-full max-w-xs"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="w-full px-8 py-4 bg-[#00ADB5] text-[#121417] font-medium rounded-xl hover:bg-[#00FFF5] transition-colors duration-300 shadow-lg border border-[#00ADB5]/50"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(0, 173, 181, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Connect
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
