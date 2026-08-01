"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const items = [
  { id: "g1", src: "/images/hero.webp" },
  { id: "g2", src: "/images/gallery-01.webp" },
  { id: "g3", src: "/images/gallery-02.webp" },
  { id: "g4", src: "/images/gallery-03.webp" },
  { id: "g5", src: "/images/hero.webp" },
  { id: "g6", src: "/images/gallery-01.webp" },
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="galerie"
      ref={containerRef}
      style={{
        background: "var(--linen)",
        padding: "clamp(60px, 8vw, 100px) 0",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "0 clamp(24px, 5vw, 80px)", maxWidth: "1600px", margin: "0 auto", marginBottom: "80px" }}>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(40px, 6vw, 120px)",
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "var(--night)",
          }}
        >
          L'Instant <br /><span style={{ color: "var(--teal)", fontStyle: "italic" }}>Présent.</span>
        </h2>
      </div>

      {/* Dynamic Parallax Grid */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          padding: "0 clamp(24px, 5vw, 80px)",
          maxWidth: "1600px",
          margin: "0 auto",
          height: "800px",
        }}
        className="gallery-layout"
      >
        {/* Column 1 */}
        <motion.div style={{ flex: 1, y: y1, display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="img-soft shadow-lg" style={{ position: "relative", width: "100%", height: "400px" }}>
            <Image src={items[0].src} alt="Gallery" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="img-soft shadow-lg" style={{ position: "relative", width: "100%", height: "500px" }}>
            <Image src={items[1].src} alt="Gallery" fill style={{ objectFit: "cover" }} />
          </div>
        </motion.div>

        {/* Column 2 (Reversed scroll) */}
        <motion.div style={{ flex: 1, y: y2, display: "flex", flexDirection: "column", gap: "24px", marginTop: "-200px" }}>
          <div className="img-soft shadow-lg" style={{ position: "relative", width: "100%", height: "600px" }}>
            <Image src={items[2].src} alt="Gallery" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="img-soft shadow-lg" style={{ position: "relative", width: "100%", height: "300px" }}>
            <Image src={items[3].src} alt="Gallery" fill style={{ objectFit: "cover" }} />
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ flex: 1, y: y3, display: "flex", flexDirection: "column", gap: "24px" }}>
          <div className="img-soft shadow-lg" style={{ position: "relative", width: "100%", height: "300px" }}>
            <Image src={items[4].src} alt="Gallery" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="img-soft shadow-lg" style={{ position: "relative", width: "100%", height: "700px" }}>
            <Image src={items[5].src} alt="Gallery" fill style={{ objectFit: "cover" }} />
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gallery-layout {
            flex-direction: column !important;
            height: auto !important;
            gap: 24px !important;
          }
          .gallery-layout > div {
            transform: none !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
