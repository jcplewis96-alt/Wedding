import { useState } from "react";
import { FadeIn } from "./FadeIn";

const photos = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section style={{ background: "#e8e2d8", padding: "60px 20px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        .gallery-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .gallery-img:hover {
          transform: scale(1.03);
          box-shadow: 0 12px 40px rgba(0,0,0,0.18);
        }
        .gallery-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.88);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          cursor: zoom-out;
        }
        .gallery-overlay img {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border: 1px solid rgba(201,169,110,0.3);
          box-shadow: 0 0 60px rgba(0,0,0,0.5);
        }
        .gallery-close {
          position: fixed;
          top: 20px;
          right: 28px;
          color: #c9a96e;
          font-size: 36px;
          cursor: pointer;
          z-index: 1001;
          background: none;
          border: none;
          line-height: 1;
        }
      `}</style>

      <FadeIn direction="up" duration={900}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>

          {/* Title */}
          <p style={{
            fontFamily: "'Cormorant Upright', serif",
            fontSize: "clamp(10px, 2vw, 12px)",
            letterSpacing: "5px", color: "#c9a96e",
            textTransform: "uppercase", margin: "0 0 6px",
          }}>Momentos</p>
          <h2 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(44px, 8vw, 68px)",
            color: "#b8902a", margin: "0 0 12px", lineHeight: 1.1,
          }}>Galería</h2>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "14px", marginBottom: "40px",
          }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "12px" }}>✦</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
          </div>

          {/* Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
          }}>
            {photos.map((src, i) => (
              <div key={i} style={{
                overflow: "hidden",
                borderRadius: "2px",
                border: "1px solid rgba(201,169,110,0.2)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}>
                <img
                  src={src}
                  alt={`Foto ${i + 1}`}
                  className="gallery-img"
                  onClick={() => setSelected(src)}
                />
              </div>
            ))}
          </div>

        </div>
      </FadeIn>

      {/* Lightbox */}
      {selected && (
        <div className="gallery-overlay" onClick={() => setSelected(null)}>
          <button className="gallery-close" onClick={() => setSelected(null)}>✕</button>
          <img src={selected} alt="Foto ampliada" onClick={e => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
