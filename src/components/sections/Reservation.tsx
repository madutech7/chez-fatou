"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Reservation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "2" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="reservation"
      ref={ref}
      style={{
        background: "var(--linen)",
        color: "var(--night)",
        padding: "clamp(60px, 8vw, 100px) 0",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 80px)" }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          style={{ marginBottom: "80px", textAlign: "center" }}
        >
          <span className="eyebrow" style={{ marginBottom: "40px", justifyContent: "center" }}>
            Privilège
          </span>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Réserver.
          </h2>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: "center", padding: "60px 0", borderTop: "1px solid var(--teal-line)", borderBottom: "1px solid var(--teal-line)" }}
          >
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "32px", fontWeight: 300, marginBottom: "16px" }}>
              Demande confirmée.
            </h3>
            <p style={{ fontFamily: "var(--sans)", fontSize: "16px", color: "var(--night-70)", fontWeight: 300 }}>
              Notre équipe prendra contact avec vous dans les plus brefs délais.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}
            className="reservation-form"
          >
            <div className={`field ${form.name ? "is-filled" : ""}`}>
              <input type="text" id="name" name="name" required placeholder=" " value={form.name} onChange={handleChange} />
              <label className="field-label" htmlFor="name">Nom Complet</label>
            </div>

            <div className={`field ${form.phone ? "is-filled" : ""}`}>
              <input type="tel" id="phone" name="phone" required placeholder=" " value={form.phone} onChange={handleChange} />
              <label className="field-label" htmlFor="phone">Téléphone</label>
            </div>

            <div className={`field ${form.date ? "is-filled" : ""}`}>
              <input type="date" id="date" name="date" required placeholder=" " value={form.date} onChange={handleChange} />
              <label className="field-label" htmlFor="date">Date</label>
            </div>

            <div className={`field ${form.guests ? "is-filled" : ""}`}>
              <select id="guests" name="guests" required value={form.guests} onChange={handleChange}>
                <option value="1">1 Personne</option>
                <option value="2">2 Personnes</option>
                <option value="3">3 Personnes</option>
                <option value="4">4 Personnes</option>
                <option value="5+">5+ Personnes</option>
              </select>
              <label className="field-label" htmlFor="guests">Couverts</label>
            </div>

            <div style={{ gridColumn: "1 / -1", marginTop: "40px", display: "flex", justifyContent: "center" }}>
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Soumettre la demande
              </button>
            </div>
          </motion.form>
        )}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .reservation-form { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
