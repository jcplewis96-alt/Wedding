import { FadeIn } from "./FadeIn";

export function Detalles() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #faf6ed 0%, #f5f0e4 50%, #faf6ed 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
      `}</style>

      <FadeIn direction="up" duration={900}>
        <div style={{
          width: "100%",
          maxWidth: "520px",
          background: "linear-gradient(160deg, #fefefe 0%, #fbf8f0 40%, #f8f4ea 70%, #faf6ed 100%)",
          padding: "8px",
          boxShadow: "0 20px 80px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
          position: "relative",
        }}>

          {/* Gold border */}
          <div style={{
            position: "absolute", inset: "8px",
            border: "1px solid #c9a96e",
            pointerEvents: "none", zIndex: 1,
          }} />

          <div style={{
            padding: "clamp(20px, 5vw, 36px) clamp(16px, 5vw, 36px)",
            position: "relative", zIndex: 2,
            textAlign: "center",
          }}>

            {/* Title */}
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontSize: "clamp(10px, 2vw, 12px)",
              letterSpacing: "4px",
              color: "#c9a96e",
              textTransform: "uppercase",
              margin: "0 0 4px",
            }}>Regalo</p>

            <h2 style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(42px, 8vw, 64px)",
              color: "#b8902a",
              margin: "0 0 10px",
              lineHeight: 1.1,
            }}>Detalles</h2>

            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "12px",
              marginBottom: "16px",
            }}>
              <div style={{ height: "1px", width: "50px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
              <div style={{ height: "1px", width: "50px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>

            {/* Message — compact */}
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(13px, 2vw, 16px)",
              color: "#7a6040",
              lineHeight: 1.6,
              margin: "0 0 16px",
            }}>
              Tu presencia es nuestro mejor regalo.
              Si deseas un gesto adicional, encontrarás
              un código QR y datos bancarios a continuación.
              También contaremos con lluvia de sobres.
            </p>

            {/* Bank details — compact */}
            <div style={{
              marginBottom: "14px",
              padding: "12px 16px",
              border: "1px solid #d0c0a0",
              borderRadius: "2px",
              background: "rgba(255,255,255,0.5)",
              textAlign: "left",
            }}>
              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontSize: "clamp(9px, 1.8vw, 11px)",
                letterSpacing: "3px",
                color: "#c9a96e",
                textTransform: "uppercase",
                margin: "0 0 8px",
                textAlign: "center",
              }}>Datos bancarios</p>
              <div style={{
                fontFamily: "'Cormorant Upright', serif",
                fontStyle: "italic",
                fontSize: "clamp(12px, 2vw, 14px)",
                color: "#7a6040",
                lineHeight: 1.7,
              }}>
                <p style={{ margin: 0 }}>No. de cuenta: <strong style={{ fontWeight: 500 }}>64050881961</strong></p>
                <p style={{ margin: 0 }}>María de los Ángeles Raga</p>
                <p style={{ margin: 0 }}>C.C. <strong style={{ fontWeight: 500 }}>1020825384</strong></p>
                <p style={{ margin: 0 }}>Bancolombia · Ahorros</p>
                <p style={{ margin: 0 }}>Llave: <strong style={{ fontWeight: 500 }}>1020825384</strong></p>
              </div>
            </div>

            {/* Gold divider */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "12px",
              marginBottom: "14px",
            }}>
              <div style={{ height: "1px", width: "40px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
              <div style={{ height: "1px", width: "40px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>

            {/* QR — smaller on mobile */}
            <div style={{
              display: "inline-block",
              padding: "8px",
              background: "white",
              border: "1px solid #d0c0a0",
              borderRadius: "4px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              marginBottom: "8px",
            }}>
              <img
                src="/qr.jpeg"
                alt="QR datos bancarios"
                style={{
                  width: "clamp(100px, 22vw, 140px)",
                  height: "clamp(100px, 22vw, 140px)",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>

            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(10px, 1.6vw, 12px)",
              color: "#a89070",
              margin: 0,
              letterSpacing: "1px",
            }}>
              Escanea para datos bancarios
            </p>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
