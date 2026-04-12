import { FadeIn } from "./FadeIn";

export function Gallery() {
  return (
    <section style={{ background: "#f8fafc", padding: "60px 20px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;1,300;1,400&display=swap');
      `}</style>

      <FadeIn direction="up" duration={900}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>

          {/* Title */}
          <p style={{
            fontFamily: "'Cormorant Upright', serif",
            fontSize: "clamp(10px, 2vw, 12px)",
            letterSpacing: "5px", color: "#c9a96e",
            textTransform: "uppercase", margin: "0 0 6px",
          }}>Nosotros</p>
          <h2 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(44px, 8vw, 68px)",
            color: "#b8902a", margin: "0 0 12px", lineHeight: 1.1,
          }}>Nuestra Historia</h2>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "14px", marginBottom: "40px",
          }}>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "12px" }}>✦</span>
            <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
          </div>

          {/* Video container */}
          <div style={{
            position: "relative",
            borderRadius: "2px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
            border: "1px solid rgba(201,169,110,0.3)",
            background: "#000",
          }}>
            <video
              controls
              playsInline
              preload="metadata"
              style={{
                width: "100%",
                display: "block",
                maxHeight: "500px",
                objectFit: "contain",
              }}
            >
              <source src="/JUMA.mp4" type="video/mp4" />
              Tu navegador no soporta el video.
            </video>
          </div>

          {/* Caption */}
          <p style={{
            fontFamily: "'Cormorant Upright', serif",
            fontStyle: "italic",
            fontSize: "clamp(13px, 2vw, 16px)",
            color: "#a89070",
            marginTop: "20px",
            letterSpacing: "1px",
          }}>
            Un momento especial para compartir con ustedes
          </p>

        </div>
      </FadeIn>
    </section>
  );
}
