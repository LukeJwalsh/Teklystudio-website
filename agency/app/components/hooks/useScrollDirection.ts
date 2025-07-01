"use client";

import { useState, useEffect } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 5) {
        // Ignore tiny scrolls
        return;
      }

      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, [lastScrollY]);

  return scrollDirection;
};
