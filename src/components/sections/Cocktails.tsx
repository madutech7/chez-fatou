"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";

const cocktailsList = [
  {
    id: "c1",
    name: "Atlantic Sunrise",
    desc: "Rhum ambré, sirop de grenadine artisanale, jus d'ananas frais & zeste de lime.",
    price: "7 500 FCFA",
    image: "/images/gallery-01.webp",
  },
  {
    id: "c2",
    name: "Mojito Passion",
    desc: "Menthe fraîche pilée, fruit de la passion, rhum blanc supérieur, sucre de canne.",
    price: "8 000 FCFA",
    image: "/images/gallery-02.webp",
  },
  {
    id: "c3",
    name: "Le Bar Panoramique",
    desc: "Spiritueux haut de gamme, vins sélectionnés et champagne face à l'océan.",
    price: "Sur demande",
    image: "/images/gallery-03.webp",
  },
  {
    id: "c4",
    name: "Sunset Sessions",
    desc: "Ambiance feutrée chaque soir de 18h à 20h pour accompagner la tombée du jour.",
    price: "Entrée libre",
    image: "/images/hero.webp",
  },
];

export default function Cocktails() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [hoveredCocktail, setHoveredCocktail] = useState<string | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="cocktails"
      ref={ref}
      style={{
        background: "var(--linen)",
        color: "var(--night)",
        padding: "clamp(60px, 8vw, 100px) 0",
        position: "relative",
        borderTop: "1px solid var(--teal-line)",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 80px)" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px" }} className="cocktails-layout">
          {/* Left: Title */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              style={{ position: "sticky", top: "120px" }}
            >
              <span className="eyebrow" style={{ marginBottom: "40px" }}>
                Sunset & Bar
              </span>
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(48px, 6vw, 100px)",
                  fontWeight: 300,
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  color: "var(--night)",
                  marginBottom: "40px",
                }}
              >
                Mixologie
                <br />
                <span style={{ color: "var(--teal)", fontStyle: "italic" }}>& Crépuscule.</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "18px",
                  fontWeight: 300,
                  color: "var(--night-70)",
                  maxWidth: "400px",
                  lineHeight: 1.6,
                }}
              >
                L'art du cocktail maîtrisé. Survolez notre carte pour découvrir nos créations.
              </p>
            </motion.div>
          </div>

          {/* Right: List with Hover Effect */}
          <div style={{ position: "relative" }}>
            <div style={{ borderTop: "1px solid var(--teal-line)" }}>
              {cocktailsList.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  onMouseEnter={() => setHoveredCocktail(item.image)}
                  onMouseLeave={() => setHoveredCocktail(null)}
                  data-cursor="hover"
                  style={{
                    padding: "40px 0",
                    borderBottom: "1px solid var(--teal-line)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "none",
                    position: "relative",
                    zIndex: 10,
                  }}
                  className="cocktail-item"
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(24px, 3vw, 40px)",
                        fontWeight: 300,
                        color: "var(--night)",
                        marginBottom: "16px",
                        lineHeight: 1.1,
                        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="cocktail-title"
                    >
                      {item.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--sans)",
                        fontSize: "15px",
                        fontWeight: 300,
                        color: "var(--night-70)",
                        lineHeight: 1.6,
                        maxWidth: "360px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "12px",
                      color: "var(--teal)",
                      letterSpacing: "0.1em",
                      whiteSpace: "nowrap",
                      fontWeight: 500,
                    }}
                  >
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Image Reveal */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "300px",
          height: "400px",
          pointerEvents: "none",
          zIndex: 50,
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hoveredCocktail ? 1 : 0,
          scale: hoveredCocktail ? 1 : 0.8,
          rotate: hoveredCocktail ? 5 : 0,
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.4 }, rotate: { duration: 0.4 } }}
        className="img-soft shadow-2xl hidden-mobile"
      >
        {hoveredCocktail && (
          <Image
            src={hoveredCocktail}
            alt="Cocktail Preview"
            fill
            style={{ objectFit: "cover" }}
          />
        )}
      </motion.div>

      <style>{`
        .cocktail-item:hover .cocktail-title { transform: translateX(20px); color: var(--teal) !important; font-style: italic; }
        @media (max-width: 900px) {
          .cocktails-layout { grid-template-columns: 1fr !important; gap: 60px !important; }
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </section>
  );
}
