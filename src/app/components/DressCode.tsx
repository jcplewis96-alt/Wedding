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
          maxWidth: "520px",
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

        <div style={{
          padding: "clamp(28px, 6vw, 52px) clamp(20px, 6vw, 52px)",
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
            margin: "0 0 6px",
          }}>Vestimenta</p>
          <h2 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(42px, 8vw, 64px)",
            color: "#b8902a",
            margin: "0 0 12px",
            lineHeight: 1.1,
          }}>Dress Code</h2>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "12px", marginBottom: "28px",
          }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
          </div>

          {/* Couple image */}
          <div style={{ margin: "0 auto 32px", maxWidth: "320px" }}>
            <img
              src="/dress.jpeg"
              alt="Vestimenta de gala — Smoking y Vestido largo"
              style={{
                width: "100%",
                display: "block",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Two columns: Hombre / Mujer */}
          <div style={{ display: "flex", gap: "0", justifyContent: "center" }}>

            <div style={{ flex: 1, textAlign: "center", paddingRight: "20px" }}>
              <p style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(28px, 5vw, 38px)",
                color: "#b8902a", margin: "0 0 4px", lineHeight: 1.1,
              }}>Hombre</p>
              <div style={{ width: "30px", height: "1px", background: "#c9a96e", margin: "6px auto 8px" }} />
              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontSize: "clamp(12px, 2vw, 15px)",
                letterSpacing: "3px", textTransform: "uppercase",
                color: "#7a6040", margin: 0, fontWeight: 500,
              }}>Smoking</p>
            </div>

            <div style={{ width: "1px", background: "linear-gradient(to bottom, transparent, #c9a96e, transparent)", flexShrink: 0 }} />

            <div style={{ flex: 1, textAlign: "center", paddingLeft: "20px" }}>
              <p style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: "clamp(28px, 5vw, 38px)",
                color: "#b8902a", margin: "0 0 4px", lineHeight: 1.1,
              }}>Mujer</p>
              <div style={{ width: "30px", height: "1px", background: "#c9a96e", margin: "6px auto 8px" }} />
              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontSize: "clamp(12px, 2vw, 15px)",
                letterSpacing: "3px", textTransform: "uppercase",
                color: "#7a6040", margin: 0, fontWeight: 500,
              }}>Vestido largo</p>
              <p style={{
                fontFamily: "'Cormorant Upright', serif",
                fontStyle: "italic",
                fontSize: "clamp(11px, 1.8vw, 13px)",
                color: "#a89070", margin: "4px 0 0",
              }}>sin estampados</p>
              <a
                href="https://pin.it/3Pg32udDG"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  padding: "8px 20px",
                  border: "1px solid #c9a96e",
                  color: "#8B6520",
                  fontFamily: "'Cormorant Upright', serif",
                  fontSize: "clamp(11px, 1.8vw, 13px)",
                  letterSpacing: "2px",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "background 0.3s ease, color 0.3s ease",
                  background: "transparent",
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
                Ideas de vestido
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
