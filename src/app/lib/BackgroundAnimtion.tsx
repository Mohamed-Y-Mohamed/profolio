// /app/components/ui/BackgroundAnimation.jsx
"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function BackgroundAnimation() {
  return (
    <div className="area bg-gradient-to-r from-slate-700 to-slate-200 dark:from-[#0A1F44] dark:to-[#0A1F44] w-full h-full absolute inset-0 -z-10 overflow-hidden">
      <ul className="circles">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.li
            key={index}
            className="dark:bg-white/10 bg-slate-700/10 rounded-full"
            initial={{
              y: "100vh",
              x: `${Math.random() * 100}vw`,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: `-${Math.random() * 20 + 100}vh`,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${
                (index % 3 === 0 ? 80 : index % 3 === 1 ? 40 : 20) *
                (Math.random() * 0.5 + 0.8)
              }px`,
              height: `${
                (index % 3 === 0 ? 80 : index % 3 === 1 ? 40 : 20) *
                (Math.random() * 0.5 + 0.8)
              }px`,
            }}
          />
        ))}
      </ul>
    </div>
  );
}

// Enhanced version with interactive particles that respond to cursor
export function InteractiveBackground() {
  const particleCount = 20;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {Array.from({ length: particleCount }).map((_, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full  bg-slate-700/10
          }`}
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            scale: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            transition: {
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          style={{
            width: `${
              (index % 3 === 0 ? 100 : index % 3 === 1 ? 60 : 30) *
              (Math.random() * 0.5 + 0.5)
            }px`,
            height: `${
              (index % 3 === 0 ? 100 : index % 3 === 1 ? 60 : 30) *
              (Math.random() * 0.5 + 0.5)
            }px`,
            filter: "blur(8px)",
          }}
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.3 },
          }}
        />
      ))}
    </div>
  );
}

// Alternative implementation with Canvas for better performance with many particles
export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }

    const particles: Particle[] = [];

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 5 + 1,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        color: "rgba(255, 255, 255, 0.1)",
      });
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
