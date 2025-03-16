// /app/components/ui/Loader.jsx
"use client";

import React, { useEffect, useState } from "react";

function Loader({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out animation after a short delay
    const timer = setTimeout(() => {
      setFadeOut(true);

      // After fade-out duration, call onFinish
      const fadeOutTimer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 500); // 500ms fade-out duration

      return () => clearTimeout(fadeOutTimer);
    }, 1000); // Show for at least 1 second

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#0A1F44] text-white z-[210] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-32 sm:h-32">
        <g
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        >
          <path d="M 21 40 V 59">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              values="0 21 59; 180 21 59"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M 79 40 V 59">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              values="0 79 59; -180 79 59"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M 50 21 V 40">
            <animate
              attributeName="d"
              values="M 50 21 V 40; M 50 59 V 40"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M 50 60 V 79">
            <animate
              attributeName="d"
              values="M 50 60 V 79; M 50 98 V 79"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M 50 21 L 79 40 L 50 60 L 21 40 Z">
            <animate
              attributeName="stroke"
              values="rgba(255,255,255,1); rgba(100,100,100,0)"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M 50 40 L 79 59 L 50 79 L 21 59 Z" />
          <path d="M 50 59 L 79 78 L 50 98 L 21 78 Z">
            <animate
              attributeName="stroke"
              values="rgba(100,100,100,0); rgba(255,255,255,1)"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            values="0 0; 0 -19"
            dur="2s"
            repeatCount="indefinite"
          />
        </g>
      </svg>

      <p className="mt-4 text-lg sm:text-xl">Loading...</p>
    </div>
  );
}

export default Loader;
