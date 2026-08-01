"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const menuItems = [
  {
    id: "thiof-grille",
    category: "Pêche du Jour",
    name: "Thiof Grillé & Attieké",
    desc: "Thiof saisi à la braise, accompagné de son authentique attieké, marinade chermoula et sauce rougail.",
    price: "18 000",
    image: "/images/menu/Thiof Grillé Attieké.webp",
  },
  {
    id: "brochettes-lotte",
    category: "Tradition",
    name: "Brochettes de Lotte",
    desc: "Brochettes de lotte tendres et braisées, riz rouge traditionnel aux épices douces.",
    price: "16 000",
    image: "/images/menu/Brochettes de Lotte.webp",
  },
  {
    id: "cassolette-fruits-mer",
    category: "Mer & Feu",
    name: "Cassolette de Fruits de Mer",
    desc: "Sélection de fruits de mer frais dans une sauce onctueuse au safran et herbes fraîches.",
    price: "19 000",
    image: "/images/menu/Cassolette de Fruits de Mers.webp",
  },
  {
    id: "american-breakfast",
    category: "Petit-Déjeuner",
    name: "American Breakfast Plate",
    desc: "L'incontournable petit-déjeuner américain avec œufs, bacon croustillant, saucisses et toasts.",
    price: "9 500",
    image: "/images/menu/American Breakfast Plate.webp",
  },
  {
    id: "brunch-americain",
    category: "Brunch",
    name: "Brunch Américain",
    desc: "Formule brunch complète avec pancakes, sirop d'érable, œufs brouillés et fruits frais.",
    price: "12 000",
    image: "/images/menu/Brunch Américain.webp",
  },
  {
    id: "fondant-chocolat",
    category: "Dessert",
    name: "Fondant Au Chocolat",
    desc: "Cœur coulant au chocolat noir intense, servi avec sa boule de glace vanille.",
    price: "6 000",
    image: "/images/menu/Fondant Au Chocolat.webp",
  },
  {
    id: "tarte-pommes",
    category: "Dessert",
    name: "Tarte Aux Pommes",
    desc: "Tarte fine aux pommes caramélisées et sa pointe de cannelle.",
    price: "5 500",
    image: "/images/menu/Tarte Aux Pommes.webp",
  },
  {
    id: "jus-bissap",
    category: "Boissons Fraîches",
    name: "Jus de Bissap",
    desc: "Fleur d'hibiscus infusée à la menthe fraîche, sucrée délicatement. Le classique sénégalais.",
    price: "3 000",
    image: "/images/menu/Jus de Bissap.webp",
  },
  {
    id: "virgin-mojito",
    category: "Mocktails",
    name: "Virgin Mojito Mangue",
    desc: "Menthe fraîche, citron vert, purée de mangue et eau gazeuse pour un rafraîchissement total.",
    price: "4 500",
    image: "/images/menu/Virgin Mojito Mangue.webp",
  },
  {
    id: "chemin-sables",
    category: "Vins Rosés",
    name: "Chemin de Sables Rosé",
    desc: "Un rosé léger et fruité, parfait pour accompagner les grillades et fruits de mer face à l'océan.",
    price: "24 000",
    image: "/images/menu/Chemin de Sables Rosé.webp",
  },
  {
    id: "vino-rose",
    category: "Vins Rosés",
    name: "Domaine de Caylus",
    desc: "Vin rosé élégant aux notes d'agrumes, idéal pour sublimer votre expérience culinaire.",
    price: "28 000",
    image: "/images/menu/Vino Rosé Domaine de Caylus.webp",
  },
];

function MenuItem({
  item,
  index,
  setActiveImage,
}: {
  item: typeof menuItems[0];
  index: number;
  setActiveImage: (src: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-45% 0px -45% 0px" });

  useEffect(() => {
    if (inView) {
      setActiveImage(item.image);
    }
  }, [inView, item.image, setActiveImage]);

  return (
    <div
      ref={ref}
      style={{
        padding: "12vh 0",
        opacity: inView ? 1 : 0.3,
        transition: "opacity 0.5s ease",
      }}
    >
      <span
        style={{
          display: "block",
          fontFamily: "var(--mono)",
          fontSize: "11px",
          color: "var(--teal)",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          marginBottom: "16px",
        }}
      >
        {String(index + 1).padStart(2, "0")} — {item.category}
      </span>
      <h3
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(32px, 4vw, 56px)",
          fontWeight: 300,
          color: "var(--night)",
          lineHeight: 1.1,
          marginBottom: "24px",
        }}
      >
        {item.name}
      </h3>
      <p
        style={{
          fontFamily: "var(--sans)",
          fontSize: "16px",
          fontWeight: 300,
          color: "var(--night-70)",
          lineHeight: 1.6,
          maxWidth: "400px",
          marginBottom: "32px",
        }}
      >
        {item.desc}
      </p>
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: "14px",
          color: "var(--teal)",
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        {item.price} FCFA
      </span>
    </div>
  );
}

export default function Cuisine() {
  const [activeImage, setActiveImage] = useState(menuItems[0].image);

  return (
    <section
      id="cuisine"
      style={{
        background: "var(--linen)",
        color: "var(--night)",
        position: "relative",
      }}
    >
      <div
        className="cuisine-layout"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100vh",
        }}
      >
        {/* Left: Sticky Image Container */}
        <div
          className="cuisine-img-col img-soft shadow-lg"
          style={{
            position: "sticky",
            top: "24px",
            height: "calc(100vh - 48px)",
            overflow: "hidden",
            background: "var(--teal-line)",
            marginLeft: "24px",
          }}
        >
          {menuItems.map((item) => (
            <motion.div
              key={item.id}
              initial={false}
              animate={{
                clipPath: activeImage === item.image ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                scale: activeImage === item.image ? 1 : 1.1,
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: activeImage === item.image ? 2 : 1,
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover", filter: "contrast(1.05) brightness(1.05)" }}
              />
            </motion.div>
          ))}
          
        </div>

        {/* Right: Scrolling Menu Content */}
        <div
          className="cuisine-text-col"
          style={{
            padding: "clamp(40px, 8vw, 100px) clamp(24px, 5vw, 60px)",
          }}
        >
          <div style={{ marginBottom: "20vh" }}>
            <span className="eyebrow" style={{ marginBottom: "40px" }}>
              La Carte
            </span>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(48px, 6vw, 100px)",
                fontWeight: 300,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              Cuisine
              <br />
              <em style={{ color: "var(--teal)", fontStyle: "normal" }}>Océanique.</em>
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
              Une sélection rigoureuse des meilleurs produits locaux, préparés avec précision. Faites défiler pour découvrir notre signature.
            </p>
          </div>

          <div>
            {menuItems.map((item, i) => (
              <MenuItem key={item.id} item={item} index={i} setActiveImage={setActiveImage} />
            ))}
          </div>

          <div style={{ padding: "10vh 0", borderTop: "1px solid var(--teal-line)", marginTop: "10vh" }}>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(24px, 3vw, 40px)",
                fontWeight: 300,
                color: "var(--night)",
                marginBottom: "40px",
                lineHeight: 1.2,
              }}
            >
              Découvrez l&apos;intégralité de notre carte sur place, renouvelée selon les arrivages.
            </p>
            <a href="#reservation" className="btn-primary">
              Réserver une table
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cuisine-layout { grid-template-columns: 1fr !important; }
          .cuisine-img-col { height: 60vh !important; position: sticky !important; top: 0; z-index: 0; }
          .cuisine-text-col { position: relative; z-index: 10; background: var(--linen); padding-top: 80px !important; }
        }
      `}</style>
    </section>
  );
}
