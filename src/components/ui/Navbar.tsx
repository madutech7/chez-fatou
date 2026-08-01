"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "L'Esprit",    href: "#presentation" },
  { label: "La Carte",    href: "#cuisine" },
  { label: "Galerie",     href: "#galerie" },
  { label: "Sunset",      href: "#cocktails" },
  { label: "Contact",     href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, menuOpen ? 600 : 0);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: scrolled ? "72px" : "100px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 clamp(24px, 4vw, 48px)",
          background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--teal-line)" : "1px solid transparent",
          transition: "height 0.4s, background 0.4s, border-color 0.4s",
        }}
      >
        <a
          href="#hero"
          onClick={(e) => handleAnchor(e, "#hero")}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Image 
            src="/images/logo.jpg" 
            alt="Chez Fatou Logo" 
            width={80} 
            height={80} 
            style={{ 
              objectFit: "cover", 
              borderRadius: "50%",
              transition: "transform 0.4s",
              transform: scrolled ? "scale(0.8)" : "scale(1)"
            }} 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden-mobile">
          <ul style={{ display: "flex", gap: "40px", listStyle: "none" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchor(e, link.href)}
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: scrolled ? "var(--night)" : "#ffffff",
                    textDecoration: "none",
                    opacity: 0.8,
                    transition: "opacity 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.color = "var(--teal)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.8"; e.currentTarget.style.color = scrolled ? "var(--night)" : "#ffffff"; }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a
            href="#reservation"
            onClick={(e) => handleAnchor(e, "#reservation")}
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: "10px" }}
          >
            Réserver
          </a>

          {/* Hamburger Mobile Only */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: scrolled ? "var(--night)" : "#ffffff",
              fontFamily: "var(--mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              cursor: "pointer",
            }}
          >
            Menu
          </button>
        </div>
      </motion.header>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--linen)",
              zIndex: 200,
              display: "flex",
              flexDirection: "column",
              padding: "clamp(24px, 4vw, 48px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "72px" }}>
              <Image 
                src="/images/logo.jpg" 
                alt="Chez Fatou Logo" 
                width={60} 
                height={60} 
                style={{ objectFit: "cover", borderRadius: "50%", mixBlendMode: "multiply" }} 
              />
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: "none", border: "none",
                  color: "var(--night)", fontFamily: "var(--mono)", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em",
                  cursor: "pointer"
                }}
              >
                Fermer
              </button>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "24px" }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchor(e, link.href)}
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(48px, 10vw, 80px)",
                      color: "var(--night)",
                      textDecoration: "none",
                      lineHeight: 1,
                      display: "block",
                    }}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .hidden-mobile { display: block; }
        .show-mobile { display: none; }
        @media (max-width: 900px) {
          .hidden-mobile { display: none; }
          .show-mobile { display: block; }
        }
      `}</style>
    </>
  );
}
