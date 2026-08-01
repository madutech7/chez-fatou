"use client";

import { useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";

const items = [
  "EAT · BEACH · RELAX",
  "CUISINE AFRO-MÉDITERRANÉENNE",
  "VUE PANORAMIQUE SUR L'ATLANTIQUE",
  "DAKAR · POINTE DES ALMADIES",
  "COCKTAILS SIGNATURE & SUNSET SESSIONS",
  "LE GRAND BRUNCH DU WEEKEND",
  "PÊCHE LOCALE DU JOUR",
  "OUVERT 7J/7 · 11H–00H",
];

// We need enough copies so that half of the total width covers the screen completely.
const repeatItems = [...items, ...items, ...items, ...items];

export default function Ticker() {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef<number>(-1);

  useAnimationFrame((t, delta) => {
    // Extremely slow, elegant speed
    let moveBy = directionFactor.current * 0.0008 * delta;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      style={{
        background: "var(--linen)",
        padding: "24px 0",
        position: "relative",
        borderTop: "1px solid var(--teal-line)",
        borderBottom: "1px solid var(--teal-line)",
        overflow: "hidden",
        display: "flex",
        width: "100%",
      }}
    >
      <motion.div
        style={{ x, display: "flex", whiteSpace: "nowrap", width: "max-content" }}
      >
        {repeatItems.map((text, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              paddingRight: "32px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                color: "var(--night)",
                textTransform: "uppercase",
              }}
            >
              {text}
            </span>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--teal)",
                display: "inline-block",
                boxShadow: "0 0 8px rgba(94, 161, 145, 0.4)",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
