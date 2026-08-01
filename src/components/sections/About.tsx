"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const bentoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="presentation"
      ref={ref}
      style={{
        background: "var(--linen)",
        padding: "clamp(80px, 10vw, 160px) 0",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 80px)" }}>
        
        {/* Title */}
        <div style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(48px, 6vw, 100px)",
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: "-0.03em",
              color: "var(--night)",
            }}
          >
            L'Esprit<br />
            <span style={{ fontStyle: "italic", color: "var(--teal)" }}>des Lieux.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          
          {/* Card 1: Text Presentation (Large) */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={bentoVariants}
            className="bento-card bento-text-main shadow-xl"
            style={{
              gridArea: "text1",
              background: "var(--night)",
              color: "#ffffff",
              padding: "clamp(32px, 4vw, 64px)",
              borderRadius: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <span className="eyebrow" style={{ color: "var(--night-70)", marginBottom: "40px", display: "block" }}>
              Notre Vision
            </span>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(24px, 2.5vw, 40px)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
            >
              Niché sur la mythique pointe des Almadies, un espace où le clapotis de l'Atlantique rythme une cuisine vibrante.
            </p>
          </motion.div>

          {/* Card 2: Ocean Image */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={bentoVariants}
            className="bento-card shadow-lg"
            style={{
              gridArea: "img1",
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <Image src="/images/hero.webp" alt="Océan" fill style={{ objectFit: "cover" }} />
          </motion.div>

          {/* Card 3: Small Image */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={bentoVariants}
            className="bento-card shadow-lg"
            style={{
              gridArea: "img2",
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <Image src="/images/gallery-01.webp" alt="Détail Cuisine" fill style={{ objectFit: "cover" }} />
          </motion.div>

          {/* Card 4: Teal CTA Box */}
          <motion.a
            custom={3}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={bentoVariants}
            className="bento-card shadow-xl bento-cta"
            style={{
              gridArea: "cta",
              background: "var(--teal)",
              color: "#ffffff",
              padding: "clamp(24px, 3vw, 40px)",
              borderRadius: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              textDecoration: "none",
            }}
            href="#reservation"
          >
            <span style={{ fontFamily: "var(--serif)", fontSize: "32px", marginBottom: "16px" }}>Réserver</span>
            <span style={{ fontFamily: "var(--mono)", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Votre Table
            </span>
          </motion.a>

          {/* Card 5: Long Image */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={bentoVariants}
            className="bento-card shadow-lg"
            style={{
              gridArea: "img3",
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
            }}
          >
            <Image src="/images/gallery-02.webp" alt="Ambiance" fill style={{ objectFit: "cover" }} />
          </motion.div>

        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: minmax(150px, auto);
          grid-template-areas:
            "text1 text1 text1 text1 text1 text1 img1 img1 img1 img1 img1 img1"
            "text1 text1 text1 text1 text1 text1 img1 img1 img1 img1 img1 img1"
            "img2 img2 img2 cta cta cta img3 img3 img3 img3 img3 img3"
            "img2 img2 img2 cta cta cta img3 img3 img3 img3 img3 img3";
        }
        .bento-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bento-card:hover {
          transform: translateY(-8px);
        }
        .bento-cta:hover {
          background: #257c7c !important; /* Slightly darker teal on hover */
        }
        
        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-areas:
              "text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1"
              "text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1 text1"
              "img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 img1"
              "img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 img1 img1"
              "img2 img2 img2 img2 img2 img2 cta cta cta cta cta cta"
              "img3 img3 img3 img3 img3 img3 img3 img3 img3 img3 img3 img3"
              "img3 img3 img3 img3 img3 img3 img3 img3 img3 img3 img3 img3";
          }
        }
        
        @media (max-width: 600px) {
          .bento-grid {
            grid-template-areas:
              "text1"
              "img1"
              "img2"
              "cta"
              "img3";
            grid-template-columns: 1fr;
            grid-auto-rows: minmax(200px, auto);
          }
          .bento-text-main {
            grid-row: auto !important;
            padding: 32px 24px !important;
          }
          .bento-grid > div {
            grid-area: auto !important;
            min-height: 200px;
          }
        }
      `}</style>
    </section>
  );
}
