"use client";

import { useEffect } from "react";

/**
 * Initialise Lenis pour un scroll smooth sur toute la page.
 * À appeler une seule fois dans le composant racine (layout ou page).
 */
export function useLenis() {
  useEffect(() => {
    let lenis: import("lenis").default | null = null;
    let rafId: number;

    async function init() {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({
          duration: 1.3,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis!.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
      } catch {
        // Lenis non disponible — fallback scroll natif
      }
    }

    init();

    return () => {
      if (lenis) lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);
}
