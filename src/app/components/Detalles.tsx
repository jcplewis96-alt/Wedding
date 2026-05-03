import { FadeIn } from "./FadeIn";

export function Detalles() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background: "#faf6ed",
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
              fontSize: "clamp(14px, 2.5vw, 17px)",
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
              marginBottom: "24px",
            }}>
              <div style={{ height: "1px", width: "50px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
              <div style={{ height: "1px", width: "50px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>

            {/* Message */}
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(16px, 2.5vw, 19px)",
              color: "#5a3e20",
              lineHeight: 1.9,
              margin: "0 0 28px",
            }}>
              Tu presencia es el regalo más grande<br />
              que nos puedes dar.<br /><br />
              Si deseas hacernos un regalo adicional,<br />
              con mucho amor te compartimos<br />
              nuestros datos bancarios.<br /><br />
              También contaremos con<br />
              lluvia de sobres el día del evento.
            </p>

            {/* Gold divider */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "12px",
              marginBottom: "24px",
            }}>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>

            {/* Bank details */}
            <div style={{
              padding: "16px 20px",
              border: "1px solid #d0c0a0",
              borderRadius: "2px",
              background: "rgba(255,255,255,0.5)",
              textAlign: "center",
              maxWidth: "280px",
              margin: "0 auto",
            }}>
              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontSize: "clamp(11px, 2vw, 13px)",
                letterSpacing: "3px",
                color: "#c9a96e",
                textTransform: "uppercase",
                margin: "0 0 12px",
              }}>Datos bancarios</p>
              <div style={{
                fontFamily: "'Cormorant Upright', serif",
                fontStyle: "italic",
                fontSize: "clamp(14px, 2.5vw, 17px)",
                color: "#5a3e20",
                lineHeight: 2.0,
              }}>
                <p style={{ margin: 0 }}>No. de cuenta: <strong style={{ fontWeight: 500 }}>64050881961</strong></p>
                <p style={{ margin: 0 }}>María de los Ángeles Raga</p>
                <p style={{ margin: 0 }}>C.C. <strong style={{ fontWeight: 500 }}>1020825384</strong></p>
                <p style={{ margin: 0 }}>Bancolombia · Ahorros</p>
                <p style={{ margin: 0 }}>Llave: <strong style={{ fontWeight: 500 }}>1020825384</strong></p>
              </div>
            </div>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
