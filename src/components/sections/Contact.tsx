"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "var(--linen)",
        color: "var(--night)",
        padding: "clamp(60px, 8vw, 100px) 0",
        borderTop: "1px solid var(--linen-15)",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 80px)" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end" }} className="contact-grid">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <span className="eyebrow" style={{ marginBottom: "60px" }}>
              Adresse
            </span>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(40px, 5vw, 72px)",
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "40px",
              }}
            >
              Pointe des Almadies,
              <br />
              Bord de Mer.
              <br />
              Dakar, Sénégal.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontFamily: "var(--sans)", fontSize: "16px", fontWeight: 300, color: "var(--night-70)" }}>
              <p style={{ margin: 0, color: "var(--night)", fontWeight: 400 }}>Ouvert tous les jours : 08h30 – 00h00</p>
              <a href="tel:+221338209238" style={{ color: "inherit", textDecoration: "none" }}>+221 33 820 92 38</a>
              <a href="mailto:contact@chezfatou.com" style={{ color: "inherit", textDecoration: "none" }}>contact@chezfatou.com</a>
              <a href="https://www.facebook.com/ChezFatou" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>facebook.com/ChezFatou</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ width: "100%", aspectRatio: "1", minHeight: "400px", filter: "grayscale(100%) contrast(1.2)" }}
          >
            <iframe
              title="Localisation Chez Fatou"
              src="https://maps.google.com/maps?q=14.7409283,-17.5213934&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 60px !important; }
        }
      `}</style>
    </section>
  );
}
