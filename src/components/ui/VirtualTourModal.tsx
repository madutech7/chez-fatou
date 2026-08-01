"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VirtualTourModal({ isOpen, onClose }: VirtualTourModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999, // Above everything
            background: "#000000",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header Bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 40px",
              background: "rgba(0, 0, 0, 0.5)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                color: "#ffffff",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "12px",
              }}
            >
              Visite Immersive 3D
            </span>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                fontFamily: "var(--sans)",
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                cursor: "pointer",
                pointerEvents: "auto",
                padding: "8px 16px",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "20px",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              Fermer (X)
            </button>
          </div>

          {/* Matterport iframe */}
          <div style={{ flex: 1, width: "100%", height: "100%" }}>
            <iframe
              src="https://my.matterport.com/show/?m=nsb5xWW2Ssi&play=1&qs=1"
              style={{ width: "100%", height: "100%", border: "none" }}
              allowFullScreen
              allow="xr-spatial-tracking"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
