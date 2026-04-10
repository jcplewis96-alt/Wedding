export function DressCode() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #e8e2d8 0%, #e0d9ce 50%, #e8e2d8 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
      `}</style>

      <div
        style={{
          width: "100%",
          maxWidth: "780px",
          background: "linear-gradient(160deg, #fefefe 0%, #fbf8f0 40%, #f8f4ea 70%, #faf6ed 100%)",
          padding: "8px",
          boxShadow: "0 20px 80px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
          position: "relative",
        }}
      >
        {/* Gold border */}
        <div style={{
          position: "absolute", inset: "8px",
          border: "1px solid #c9a96e",
          pointerEvents: "none", zIndex: 1,
        }} />

        {/* Inner content */}
        <div style={{
          padding: "clamp(28px, 6vw, 52px) clamp(20px, 6vw, 52px)",
          position: "relative", zIndex: 2,
        }}>

          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontSize: "clamp(10px, 2vw, 13px)",
              letterSpacing: "4px",
              color: "#c9a96e",
              textTransform: "uppercase",
              margin: "0 0 10px",
            }}>
              Vestimenta
            </p>
            <h2 style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(36px, 7vw, 58px)",
              color: "#b8902a",
              margin: 0,
              lineHeight: 1.1,
            }}>
              Dress Code
            </h2>
            {/* Gold divider */}
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "12px", marginTop: "16px",
            }}>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>
          </div>

          {/* Two columns: Dress Code | Detalles */}
          <div style={{
            display: "flex",
            gap: "0",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}>

            {/* LEFT — Dress Code */}
            <div style={{
              flex: "1 1 280px",
              textAlign: "center",
              paddingRight: "clamp(16px, 4vw, 40px)",
              paddingBottom: "24px",
            }}>

              {/* Hombre */}
              <div style={{ marginBottom: "32px" }}>
                <p style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(28px, 5vw, 40px)",
                  color: "#b8902a",
                  margin: "0 0 4px",
                  lineHeight: 1.1,
                }}>
                  Hombre
                </p>
                <div style={{
                  width: "40px", height: "1px",
                  background: "#c9a96e", margin: "8px auto 10px",
                }} />
                <p style={{
                  fontFamily: "'Cormorant Upright', serif",
                  fontSize: "clamp(13px, 2.2vw, 16px)",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#7a6040",
                  margin: 0,
                  fontWeight: 500,
                }}>
                  Smoking
                </p>
              </div>

              {/* Mujer */}
              <div>
                <p style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(28px, 5vw, 40px)",
                  color: "#b8902a",
                  margin: "0 0 4px",
                  lineHeight: 1.1,
                }}>
                  Mujer
                </p>
                <div style={{
                  width: "40px", height: "1px",
                  background: "#c9a96e", margin: "8px auto 10px",
                }} />
                <p style={{
                  fontFamily: "'Cormorant Upright', serif",
                  fontSize: "clamp(13px, 2.2vw, 16px)",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "#7a6040",
                  margin: 0,
                  fontWeight: 500,
                }}>
                  Vestido largo
                </p>
                <p style={{
                  fontFamily: "'Cormorant Upright', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(11px, 1.8vw, 13px)",
                  color: "#a89070",
                  margin: "6px 0 0",
                }}>
                  sin estampados
                </p>
              </div>
            </div>

            {/* Vertical divider */}
            <div style={{
              width: "1px",
              alignSelf: "stretch",
              background: "linear-gradient(to bottom, transparent, #c9a96e 20%, #c9a96e 80%, transparent)",
              flexShrink: 0,
              minHeight: "200px",
            }} />

            {/* RIGHT — Detalles */}
            <div style={{
              flex: "1 1 280px",
              textAlign: "center",
              paddingLeft: "clamp(16px, 4vw, 40px)",
              paddingBottom: "24px",
            }}>
              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontSize: "clamp(10px, 2vw, 13px)",
                letterSpacing: "4px",
                color: "#c9a96e",
                textTransform: "uppercase",
                margin: "0 0 16px",
              }}>
                Detalles
              </p>

              {/* Message */}
              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontStyle: "italic",
                fontSize: "clamp(12px, 2vw, 15px)",
                color: "#7a6040",
                lineHeight: 1.8,
                margin: "0 0 24px",
              }}>
                Tu presencia es nuestro mejor regalo.<br />
                Si deseas tener un gesto adicional,<br />
                encontrarás a continuación un código QR<br />
                y nuestros datos bancarios.<br />
                También contaremos con lluvia de sobres<br />
                el día del evento.
              </p>

              {/* QR Code */}
              <div style={{
                display: "inline-block",
                padding: "10px",
                background: "white",
                border: "1px solid #d0c0a0",
                borderRadius: "4px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              }}>
                <img
                  src="/qr.jpeg"
                  alt="Código QR datos bancarios"
                  style={{
                    width: "clamp(120px, 22vw, 160px)",
                    height: "clamp(120px, 22vw, 160px)",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </div>

              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontStyle: "italic",
                fontSize: "clamp(10px, 1.8vw, 12px)",
                color: "#a89070",
                marginTop: "10px",
                letterSpacing: "1px",
              }}>
                Escanea para más información
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
