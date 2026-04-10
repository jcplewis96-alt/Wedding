export function Card() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #f0ebe2 0%, #e8e2d8 50%, #ede7dc 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;1,300;1,400&display=swap');
 
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
 
      {/* Outer card with double border like the photo */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "680px",
          backgroundColor: "#faf8f3",
          background: "linear-gradient(160deg, #fefefe 0%, #fbf8f0 40%, #f8f4ea 70%, #faf6ed 100%)",
          padding: "8px",
          boxShadow: "0 20px 80px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
          animation: "cardFadeIn 1.2s ease forwards",
        }}
      >
        {/* Outer border */}
        <div
          style={{
            position: "absolute",
            inset: "8px",
            border: "1px solid #c9a96e",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
 
        {/* Inner content */}
        <div
          style={{
            padding: "52px 56px 48px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
 
          {/* Parents row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "32px",
              gap: "24px",
            }}
          >
            {/* Parents of bride */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontStyle: "italic",
                fontSize: "clamp(13px, 1.6vw, 16px)",
                color: "#7a6040",
                lineHeight: 1.7,
                margin: 0,
              }}>
                Luz Stella Rodríguez Sandoval<br />
                Ángel Custodio Gámez
              </p>
            </div>
 
            {/* Decorative center divider */}
            <div style={{
              width: "1px",
              background: "linear-gradient(to bottom, transparent, #c9a96e, transparent)",
              flexShrink: 0,
            }} />
 
            {/* Parents of groom */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontStyle: "italic",
                fontSize: "clamp(13px, 1.6vw, 16px)",
                color: "#7a6040",
                lineHeight: 1.7,
                margin: 0,
              }}>
                María Beatríz Lewis Porras<br />
                Juan Carlos Peñaranda Ávila
              </p>
            </div>
          </div>
 
          {/* Gold divider */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "12px",
            marginBottom: "24px",
          }}>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "12px" }}>✦</span>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
          </div>
 
          {/* Invitation phrase */}
          <p style={{
            fontFamily: "'Cormorant Upright', serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.8vw, 17px)",
            color: "#7a6040",
            marginBottom: "28px",
            lineHeight: 1.6,
          }}>
            tienen el gusto de invitar al matrimonio de sus hijos
          </p>
 
          {/* Names in gold Great Vibes */}
          <div style={{ marginBottom: "32px" }}>
            <p style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(42px, 7vw, 72px)",
              color: "#b8902a",
              margin: 0,
              lineHeight: 1.1,
              textShadow: "0 1px 4px rgba(180,140,40,0.15)",
            }}>
              María de los Ángeles
            </p>
            <p style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(32px, 5vw, 52px)",
              color: "#c9a96e",
              margin: "4px 0",
              lineHeight: 1.0,
            }}>
              &
            </p>
            <p style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(42px, 7vw, 72px)",
              color: "#b8902a",
              margin: 0,
              lineHeight: 1.1,
              textShadow: "0 1px 4px rgba(180,140,40,0.15)",
            }}>
              Juan Carlos
            </p>
          </div>
 
          {/* Gold divider */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "12px",
            marginBottom: "28px",
          }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
          </div>
 
          {/* Ceremony details */}
          <div style={{ marginBottom: "32px" }}>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(14px, 1.8vw, 17px)",
              color: "#7a6040",
              lineHeight: 1.9,
              margin: 0,
            }}>
              ceremonia que se celebrará<br />
              el sábado dieciocho de julio a las cuatro de la tarde<br />
              en la <strong style={{ fontWeight: 500, color: "#8B6F47" }}>Hacienda El Salitre</strong><br />
              y a la recepción que se ofrecerá a continuación
            </p>
          </div>
 
          {/* Gold divider */}
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "12px",
            marginBottom: "24px",
          }}>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "12px" }}>✦</span>
            <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
          </div>
 
          {/* City and date */}
          <p style={{
            fontFamily: "'Cormorant Upright', serif",
            fontStyle: "italic",
            fontSize: "clamp(14px, 1.8vw, 17px)",
            color: "#7a6040",
            margin: 0,
            letterSpacing: "1px",
          }}>
            Bogotá, 18 de Julio de 2026
          </p>
 
        </div>
      </div>
    </section>
  );
}
