"use client";

import { useState, useEffect, useCallback } from "react";
import Loader from "../ui/Loader";

export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  const finishLoading = useCallback(() => {
    if (resourcesLoaded && minTimeElapsed) {
      setLoading(false);
    }
  }, [resourcesLoaded, minTimeElapsed]);

  useEffect(() => {
    // Check if this is a first visit in the session
    const hasVisited = sessionStorage.getItem("portfolioVisited");

    if (hasVisited) {
      // Skip loader for subsequent visits in the same session
      setLoading(false);
      return;
    }

    // Mark as visited
    sessionStorage.setItem("portfolioVisited", "true");

    // Set minimum display time (3 seconds for professional appearance)
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 3000);

    // Check if page is already loaded
    if (document.readyState === "complete") {
      setResourcesLoaded(true);
    } else {
      // Wait for all resources to load
      const handleLoad = () => {
        // Additional delay to ensure images and fonts are loaded
        setTimeout(() => {
          setResourcesLoaded(true);
        }, 500);
      };

      window.addEventListener("load", handleLoad);

      // Fallback: Maximum loading time of 8 seconds
      const maxTimer = setTimeout(() => {
        setResourcesLoaded(true);
        setMinTimeElapsed(true);
      }, 8000);

      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(minTimer);
        clearTimeout(maxTimer);
      };
    }

    return () => clearTimeout(minTimer);
  }, []);

  useEffect(() => {
    finishLoading();
  }, [finishLoading]);

  // Preload critical images when loader is shown
  useEffect(() => {
    if (loading) {
      const criticalImages = [
        "/assets/image/hero.svg",
        "/assets/image/logo512.png",
        "/assets/image/image1.jpeg",
        "/assets/image/image2.jpg",
        "/assets/image/image3.jpg",
      ];

      criticalImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div
        className={`transition-opacity duration-500 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
