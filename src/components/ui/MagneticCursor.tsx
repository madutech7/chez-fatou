"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for the cursor (gives it that heavy, premium feel)
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8); // center of 16x16 cursor
      cursorY.set(e.clientY - 8);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    // Magnetic interaction logic
    const handleElementEnter = () => setIsHovering(true);
    const handleElementLeave = () => setIsHovering(false);

    // Attach listeners to all interactive elements
    const attachListeners = () => {
      const interactives = document.querySelectorAll("a, button, [data-cursor='hover']");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleElementEnter);
        el.addEventListener("mouseleave", handleElementLeave);
      });
      return interactives;
    };

    const interactiveElements = attachListeners();

    // Re-attach if DOM changes (simplified with a MutationObserver for a real app, but this works for basic Next.js navigation)
    const observer = new MutationObserver(() => {
      attachListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementEnter);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
      observer.disconnect();
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      <style>{`
        body { cursor: none !important; }
        a, button, [data-cursor="hover"] { cursor: none !important; }
      `}</style>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 16,
          height: 16,
          backgroundColor: "var(--teal)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 9999,
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
          mixBlendMode: "difference", // makes it visible on both light and dark backgrounds
        }}
        animate={{
          scale: isHovering ? 4 : 1,
          backgroundColor: isHovering ? "#ffffff" : "var(--teal)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
