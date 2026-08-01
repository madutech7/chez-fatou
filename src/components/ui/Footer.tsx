"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

function LiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      setTime(new Date().toLocaleTimeString("fr-SN", { timeZone: "Africa/Dakar" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{time ? `${time} DKR` : "..."}</span>;
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--linen)",
        color: "var(--night)",
        padding: "clamp(80px, 10vw, 120px) 0 40px",
      }}
    >
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 80px)" }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", gap: "100px", marginBottom: "120px" }} className="footer-grid">
          
          <div>
            <Image 
              src="/images/logo.jpg" 
              alt="Chez Fatou Logo" 
              width={120} 
              height={120} 
              style={{ objectFit: "cover", borderRadius: "50%", mixBlendMode: "multiply", marginBottom: "24px" }} 
            />
            <p style={{ fontFamily: "var(--sans)", fontSize: "14px", color: "var(--night-70)", maxWidth: "300px", lineHeight: 1.6 }}>
              Restaurant & Beach Club. Une parenthèse sur l'océan, à la pointe des Almadies.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span className="eyebrow" style={{ marginBottom: "8px" }}>Navigation</span>
            {["L'Esprit", "La Carte", "Galerie", "Réservation"].map((item) => (
              <a key={item} href="#" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--night)", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span className="eyebrow" style={{ marginBottom: "8px" }}>Social</span>
            <a href="https://www.facebook.com/ChezFatou" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--night)", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>Facebook</a>
            <a href="https://www.instagram.com/chezfatou/?hl=fr" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--night)", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>Instagram</a>
            <a href="#" style={{ fontFamily: "var(--mono)", fontSize: "12px", color: "var(--night)", textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none" }}>TripAdvisor</a>
          </div>

        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "40px", borderTop: "1px solid var(--teal-line)", fontFamily: "var(--mono)", fontSize: "11px", color: "var(--night-70)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <span>© {year} Chez Fatou</span>
          <LiveClock />
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </footer>
  );
}
