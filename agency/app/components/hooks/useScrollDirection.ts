"use client";

import { useState, useEffect } from "react";

export const useScrollDirection = (threshold = 50) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollY;

      if (Math.abs(deltaY) < 5) {
        // Tiny scroll jitter → ignore
        return;
      }

      if (deltaY > threshold) {
        // User scrolled down enough
        setScrollDirection("down");
        setLastScrollY(currentScrollY);
      } else if (deltaY < -threshold) {
        // User scrolled up enough
        setScrollDirection("up");
        setLastScrollY(currentScrollY);
      }
      // Else: don't switch yet
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [lastScrollY, threshold]);

  return scrollDirection;
};
