"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="reviews"
      ref={ref}
      style={{
        background: "var(--linen)",
        color: "var(--night)",
        padding: "clamp(60px, 8vw, 100px) 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 80px)", textAlign: "center" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow" style={{ marginBottom: "60px", justifyContent: "center" }}>
            L&apos;Expérience
          </span>

          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(40px, 7vw, 110px)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1,
              letterSpacing: "-0.01em",
              color: "var(--night)",
              maxWidth: "1200px",
              margin: "0 auto 60px",
            }}
          >
            "Une parenthèse suspendue où l'océan dicte le rythme. Incontestablement l'une des tables les plus remarquables de la côte ouest-africaine."
          </h2>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                fontWeight: 500,
                color: "var(--night)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Le Guide des Almadies
            </span>
            <span
              style={{
                fontFamily: "var(--sans)",
                fontSize: "13px",
                color: "var(--night-70)",
              }}
            >
              Édition 2026
            </span>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
