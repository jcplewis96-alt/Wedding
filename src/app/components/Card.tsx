import { FadeIn } from "./FadeIn";

export function Card() {

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        background: "#f0ebe2",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;1,300;1,400&display=swap');
      `}</style>

      <FadeIn direction="up" duration={900}>
        <div style={{
          position: "relative", width: "100%", maxWidth: "680px",
          backgroundColor: "#faf8f3",
          background: "linear-gradient(160deg, #fefefe 0%, #fbf8f0 40%, #f8f4ea 70%, #faf6ed 100%)",
          padding: "8px",
          boxShadow: "0 20px 80px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
        }}>

          <div style={{
            position: "absolute", inset: "8px",
            border: "1px solid #c9a96e", pointerEvents: "none", zIndex: 1,
          }} />

          <div style={{
            padding: "clamp(28px, 6vw, 52px) clamp(20px, 6vw, 56px) clamp(28px, 5vw, 48px)",
            textAlign: "center", position: "relative", zIndex: 2,
          }}>

            {/* Parents — stacked vertically, no overflow issues */}
            <div style={{
              display: "flex", justifyContent: "center",
              marginBottom: "28px", marginTop: "16px",
              gap: "0",
            }}>
              {/* Bride's parents */}
              <div style={{ flex: 1, textAlign: "center", paddingRight: "16px" }}>
                <p style={{
                  fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                  fontSize: "clamp(12px, 3vw, 16px)", color: "#5a3e20",
                  lineHeight: 1.8, margin: 0,
                }}>Ángel Custodio<br />Raga Gámez</p>
                <div style={{ width: "30px", height: "1px", background: "#c9a96e", margin: "6px auto" }} />
                <p style={{
                  fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                  fontSize: "clamp(12px, 3vw, 16px)", color: "#5a3e20",
                  lineHeight: 1.8, margin: 0,
                }}>Luz Stella<br />Rodríguez Sandoval</p>
              </div>

              {/* Vertical divider */}
              <div style={{
                width: "1px",
                background: "linear-gradient(to bottom, transparent, #c9a96e, transparent)",
                flexShrink: 0,
              }} />

              {/* Groom's parents */}
              <div style={{ flex: 1, textAlign: "center", paddingLeft: "16px" }}>
                <p style={{
                  fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                  fontSize: "clamp(12px, 3vw, 16px)", color: "#5a3e20",
                  lineHeight: 1.8, margin: 0,
                }}>Juan Carlos<br />Peñaranda Ávila</p>
                <div style={{ width: "30px", height: "1px", background: "#c9a96e", margin: "6px auto" }} />
                <p style={{
                  fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                  fontSize: "clamp(12px, 3vw, 16px)", color: "#5a3e20",
                  lineHeight: 1.8, margin: 0,
                }}>María Beatríz<br />Lewis Porras</p>
              </div>
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "22px" }}>
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "12px" }}>✦</span>
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>

            {/* Invitation phrase */}
            <p style={{
              fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
              fontSize: "clamp(15px, 2.2vw, 18px)", color: "#5a3e20",
              marginBottom: "24px", lineHeight: 1.6,
            }}>
              tienen el gusto de invitar al matrimonio de sus hijos
            </p>

            {/* Names */}
            <div style={{ marginBottom: "28px" }}>
              <p style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(42px, 7vw, 72px)",
                color: "#b8902a", margin: 0, lineHeight: 1.1,
                textShadow: "0 1px 4px rgba(180,140,40,0.15)",
              }}>María de los Ángeles</p>
              <p style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(32px, 5vw, 52px)",
                color: "#c9a96e", margin: "4px 0", lineHeight: 1.0,
              }}>&</p>
              <p style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(42px, 7vw, 72px)",
                color: "#b8902a", margin: 0, lineHeight: 1.1,
                textShadow: "0 1px 4px rgba(180,140,40,0.15)",
              }}>Juan Carlos</p>
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "24px" }}>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>

            {/* Ceremony details */}
            <div style={{ marginBottom: "28px" }}>
              <p style={{
                fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                fontSize: "clamp(15px, 2.2vw, 18px)", color: "#5a3e20",
                lineHeight: 2.0, margin: 0,
              }}>
                Ceremonia que se celebrará<br />
                el sábado 18 de julio a las 4:00 PM<br />
                en la <strong style={{ fontWeight: 500, color: "#8B6F47" }}>Hacienda El Salitre</strong><br />
                y a la recepción que se ofrecerá a continuación
              </p>
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "22px" }}>
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "12px" }}>✦</span>
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>

            {/* City and date */}
            <p style={{
              fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
              fontSize: "clamp(15px, 2.2vw, 18px)", color: "#5a3e20",
              margin: "0 0 24px", letterSpacing: "1px",
            }}>
              Bogotá, 18 de Julio de 2026
            </p>

            {/* Google Maps button */}
            <a
              href="https://maps.app.goo.gl/PJQuaTE4ZoGHqHMv6"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "10px 28px",
                border: "1px solid #c9a96e",
                color: "#8B6520",
                fontFamily: "'Cormorant Upright', serif",
                fontSize: "clamp(13px, 2vw, 15px)",
                letterSpacing: "2px", textDecoration: "none",
                textTransform: "uppercase", background: "transparent",
                transition: "background 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#c9a96e";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#8B6520";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Ver ubicación
            </a>

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
