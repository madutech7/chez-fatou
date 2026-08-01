"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--linen)",
      }}
    >
      {/* Background Parallax */}
      <motion.div
        style={{
          position: "absolute",
          inset: "-10%",
          y: yBg,
          scale: scaleImage,
          zIndex: 1,
        }}
      >
        <Image
          src="/images/hero.webp"
          alt="Chez Fatou Vibe"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        {/* Stronger overlay for perfect contrast */}
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(to top, var(--linen) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.5) 100%)" 
          }} 
        />
      </motion.div>

      {/* Hero Typography */}
      <motion.div
        style={{
          position: "relative",
          zIndex: 10,
          y: yText,
          opacity: opacityText,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span 
            className="eyebrow" 
            style={{ 
              color: "#fff", 
              marginBottom: "20px", 
              display: "block",
              letterSpacing: "0.2em",
              fontSize: "14px"
            }}
          >
            Restaurant & Beach Club
          </span>
        </motion.div>
        
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(60px, 15vw, 220px)",
            fontWeight: 300,
            lineHeight: 0.8,
            letterSpacing: "-0.04em",
            color: "#fff",
            margin: 0,
            padding: 0,
            textTransform: "uppercase",
          }}
        >
          <motion.span
            initial={{ y: 100, opacity: 0, rotateZ: 5 }}
            animate={{ y: 0, opacity: 1, rotateZ: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{ display: "block" }}
          >
            CHEZ
          </motion.span>
          <motion.span
            initial={{ y: 100, opacity: 0, rotateZ: -5 }}
            animate={{ y: 0, opacity: 1, rotateZ: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            style={{ display: "block", marginLeft: "10vw" }}
          >
            FATOU
          </motion.span>
        </h1>
      </motion.div>
    </section>
  );
}
