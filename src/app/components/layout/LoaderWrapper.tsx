// /app/components/layout/LoaderWrapper.jsx
"use client";

import { useState, useEffect } from "react";
import Loader from "../ui/Loader";
export default function LoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the page has been visited before in this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      // If already visited, skip the loader
      setLoading(false);
    } else {
      // Mark as visited for future navigation
      sessionStorage.setItem("hasVisited", "true");

      // Optional: For demo purposes - always show loader even when developing
      // You can remove this in production if you want to skip loader during development
      // const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      // if (isLocalhost) {
      //   setLoading(false);
      // }
    }

    // Add a listener for the page being fully loaded
    window.addEventListener("load", () => {
      // Even if all resources aren't loaded yet, hide loader after a max delay
      setTimeout(() => {
        setLoading(false);
      }, 2500); // Max loading time of 2.5s
    });

    // If resources load quickly, we'll still show loader for at least a minimum time
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Minimum loading time of 1.5s
  }, []);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div className={loading ? "invisible" : "visible"}>{children}</div>
    </>
  );
}
