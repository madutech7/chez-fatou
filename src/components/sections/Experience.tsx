"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    id: "exp1",
    num: "01",
    title: "Cuisine Fraîcheur & Braise",
    desc: "Produits de la pêche locale du jour, poissons braisés à la perfection et accompagnements parfumés.",
    image: "/images/gallery-03.webp",
  },
  {
    id: "exp2",
    num: "02",
    title: "Sunset & Cocktail Lounge",
    desc: "Savourer un cocktail signature en contemplant le soleil se coucher à l'horizon des Almadies.",
    image: "/images/gallery-07.webp",
  },
  {
    id: "exp3",
    num: "03",
    title: "Terrasse & Vagues Panoramiques",
    desc: "Un cadre exceptionnel bercé par le bruit de l'océan, idéal pour vos déjeuners et dîners.",
    image: "/images/gallery-04.webp",
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        background: "var(--linen)",
        color: "var(--night)",
        padding: "clamp(80px, 10vw, 140px) clamp(24px, 5vw, 72px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* Header row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "clamp(48px, 7vw, 96px)",
            paddingBottom: "28px",
            borderBottom: "1px solid var(--teal-line)",
          }}
          className="exp-header"
        >
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(40px, 5.5vw, 88px)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Moments<br />
            <em style={{ color: "var(--teal)", fontStyle: "italic" }}>d'exception.</em>
          </motion.h2>

          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--night-70)",
            }}
          >
            L'Expérience Chez Fatou
          </motion.span>
        </div>

        {/* Asymmetric layout */}
        <div className="exp-layout">

          {/* Left: large hero image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="exp-img-main"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "16px",
            }}
          >
            <Image
              src={experiences[0].image}
              alt={experiences[0].title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            {/* Gradient label at bottom */}
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              padding: "60px 32px 32px",
              background: "linear-gradient(to top, rgba(var(--night-rgb, 10,34,30),0.8) 0%, transparent 100%)",
            }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: "10px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#7BBFB8" }}>
                {experiences[0].num}
              </span>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: "24px", fontWeight: 300, color: "#F6F2EA", margin: "8px 0 0" }}>
                {experiences[0].title}
              </h3>
            </div>
          </motion.div>

          {/* Right: Two stacked text+image blocks */}
          <div className="exp-stack">
            {experiences.slice(1).map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.15 }}
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  padding: "28px 0",
                  borderBottom: i === 0 ? "1px solid var(--teal-line)" : "none",
                }}
              >
                {/* Small thumbnail */}
                <div style={{
                  position: "relative",
                  flexShrink: 0,
                  width: "120px",
                  aspectRatio: "1",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}>
                  <Image src={exp.image} alt={exp.title} fill style={{ objectFit: "cover" }} sizes="120px" />
                </div>

                {/* Text */}
                <div style={{ flex: 1 }}>
                  <span style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--teal)",
                    display: "block",
                    marginBottom: "10px",
                  }}>
                    {exp.num}
                  </span>
                  <h3 style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(20px, 2vw, 26px)",
                    fontWeight: 300,
                    color: "var(--night)",
                    margin: "0 0 10px",
                    lineHeight: 1.1,
                  }}>
                    {exp.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--sans)",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "var(--night-70)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .exp-layout {
          display: grid;
          grid-template-columns: 55fr 45fr;
          gap: clamp(32px, 5vw, 80px);
          align-items: start;
        }
        .exp-img-main {
          aspect-ratio: 3/4;
        }
        .exp-stack {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 16px;
        }
        .exp-header {
          flex-wrap: wrap;
          gap: 16px;
        }
        @media (max-width: 900px) {
          .exp-layout { grid-template-columns: 1fr !important; }
          .exp-img-main { aspect-ratio: 16/10 !important; }
        }
      `}</style>
    </section>
  );
}
