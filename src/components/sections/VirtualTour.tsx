"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VirtualTour() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["-20px", "20px"]);

  return (
    <section
      ref={ref}
      id="visite-virtuelle"
      style={{
        position: "relative",
        // Background matches the page so edges dissolve
        background: "var(--linen)",
        padding: "0 0 clamp(80px, 10vw, 140px)",
      }}
    >
      {/* Full-bleed wrapper — no max-width, extends edge to edge */}
      <div style={{ position: "relative", width: "100%" }}>

        {/* The iframe itself — full bleed, no border-radius on the frame */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            minHeight: "520px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://my.matterport.com/show/?m=nsb5xWW2Ssi&play=0&qs=1&dh=1&fp=1&brand=0"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              display: "block",
            }}
            allowFullScreen
            allow="xr-spatial-tracking; fullscreen"
            loading="lazy"
            title="Visite virtuelle 3D de Chez Fatou"
          />

          {/* === THE MAGIC: 4-sided gradient masks in linen color ===
              This makes the iframe "dissolve" into the page seamlessly.
              The iframe content is visible in the center but bleeds
              into the page background on all edges. */}

          {/* Top mask */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "5%",
            background: "linear-gradient(to bottom, var(--linen) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }} />

          {/* Bottom mask */}
          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "5%",
            background: "linear-gradient(to top, var(--linen) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }} />

          {/* Left mask */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, bottom: 0,
            width: "3%",
            background: "linear-gradient(to right, var(--linen) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }} />

          {/* Right mask */}
          <div style={{
            position: "absolute",
            top: 0, right: 0, bottom: 0,
            width: "3%",
            background: "linear-gradient(to left, var(--linen) 0%, transparent 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }} />

          {/* Editorial label — floated over the top-left of the iframe,
              above the gradient so it's readable */}
          <motion.div
            style={{
              position: "absolute",
              top: "clamp(20px, 4vw, 48px)",
              left: "clamp(20px, 4vw, 64px)",
              zIndex: 10,
              y: textY,
              pointerEvents: "none",
            }}
          >
            <span style={{
              display: "block",
              fontFamily: "var(--mono)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: "var(--teal)",
              marginBottom: "10px",
            }}>
              Visite Immersive 3D
            </span>
            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 4vw, 60px)",
              fontWeight: 300,
              color: "var(--night)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              margin: 0,
            }}>
              Entrez dans
              <br />
              <em style={{ fontStyle: "italic" }}>l'Espace.</em>
            </h2>
          </motion.div>

          {/* Bottom-right interaction hint */}
          <motion.div
            style={{
              position: "absolute",
              bottom: "clamp(20px, 4vw, 48px)",
              right: "clamp(20px, 4vw, 64px)",
              zIndex: 10,
              y: textY,
              pointerEvents: "none",
              textAlign: "right",
            }}
          >
            <span style={{
              fontFamily: "var(--sans)",
              fontSize: "12px",
              fontWeight: 300,
              color: "var(--night-70)",
              letterSpacing: "0.04em",
            }}>
              Cliquez et explorez librement →
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
