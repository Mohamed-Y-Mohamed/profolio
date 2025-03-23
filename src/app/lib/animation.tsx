// /app/lib/animations.js
"use client";

// Animation variants for Framer Motion
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const slideIn = (direction = "left", delay = 0) => {
  return {
    initial: {
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay,
      },
    },
  };
};

export const scaleIn = (delay = 0) => {
  return {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay,
      },
    },
    exit: { scale: 0.8, opacity: 0 },
  };
};

// Utility function to handle the glow effect on cards
interface GlowOptions {
  intensity?: number;
  size?: number;
}

export const handleGlowEffect = (
  element: HTMLElement,
  options: GlowOptions = {}
) => {
  const config = {
    intensity: 0.5,
    size: 80,
    ...options,
  };

  if (!element) return;

  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    element.style.setProperty("--x", `${x}px`);
    element.style.setProperty("--y", `${y}px`);
    element.style.setProperty("--glow-size", `${config.size}px`);
    element.style.setProperty("--glow-intensity", config.intensity.toString());
    element.classList.add("glowing");
  };

  const handleMouseLeave = () => {
    element.classList.remove("glowing");
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

// Animation for skills infinity loop
export const setupSkillsLoop = (container: HTMLElement) => {
  if (!container) return;

  const items = container.querySelectorAll(".skill-item");
  const totalItems = items.length;

  // Calculate the animation duration based on number of items for smooth scrolling
  const duration = totalItems * 2; // 2 seconds per item

  container.style.setProperty("--loop-duration", `${duration}s`);

  // Create duplicates for seamless looping
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    container.appendChild(clone);
  });
};

// Background particle animation setup
export const setupBackgroundAnimation = () => {
  // This function could initialize or configure the background particle animation
  // For this portfolio, we're using CSS animations defined in globals.css
  console.log("Background animation initialized");
};
