import { useEffect, useState } from "react";

export function Footer() {
  const [dias, setDias] = useState(0);

  useEffect(() => {
    const boda = new Date("2026-07-18T16:00:00");
    const hoy  = new Date();
    const diff = Math.ceil((boda.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
    setDias(Math.max(0, diff));
  }, []);

  return (
    <footer style={{
      background: "linear-gradient(135deg, #2a1a08 0%, #3a2810 50%, #2a1a08 100%)",
      color: "white",
      padding: "clamp(48px, 8vw, 80px) 20px clamp(32px, 5vw, 48px)",
      textAlign: "center",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;1,300;1,400&display=swap');
      `}</style>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>

        {/* Heart ornament */}
        <div style={{
          fontSize: "22px", color: "#c9a96e",
          marginBottom: "20px", letterSpacing: "8px",
        }}>✦ ♥ ✦</div>

        {/* Names */}
        <p style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(44px, 9vw, 72px)",
          color: "#c9a96e",
          margin: "0 0 4px",
          lineHeight: 1.1,
          textShadow: "0 2px 12px rgba(201,169,110,0.3)",
        }}>María de los Ángeles</p>
        <p style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(30px, 6vw, 48px)",
          color: "#e8c97a",
          margin: "0 0 4px",
          lineHeight: 1.0,
        }}>&</p>
        <p style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(44px, 9vw, 72px)",
          color: "#c9a96e",
          margin: "0 0 20px",
          lineHeight: 1.1,
          textShadow: "0 2px 12px rgba(201,169,110,0.3)",
        }}>Juan Carlos</p>

        {/* Gold divider */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: "14px",
          marginBottom: "20px",
        }}>
          <div style={{ height: "1px", width: "70px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
          <span style={{ color: "#c9a96e", fontSize: "12px" }}>✦</span>
          <div style={{ height: "1px", width: "70px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
        </div>

        {/* Date and place */}
        <p style={{
          fontFamily: "'Cormorant Upright', serif",
          fontStyle: "italic",
          fontSize: "clamp(14px, 2.2vw, 18px)",
          color: "#d4b896",
          margin: "0 0 6px",
          letterSpacing: "2px",
        }}>18 de Julio de 2026</p>
        <p style={{
          fontFamily: "'Cormorant Upright', serif",
          fontStyle: "italic",
          fontSize: "clamp(12px, 1.8vw, 15px)",
          color: "#a89070",
          margin: "0 0 32px",
          letterSpacing: "2px",
        }}>Hacienda El Salitre · Bogotá, Colombia</p>

        {/* Countdown */}
        {dias > 0 && (
          <div style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px 32px",
            border: "1px solid rgba(201,169,110,0.3)",
            borderRadius: "2px",
            marginBottom: "32px",
            background: "rgba(201,169,110,0.06)",
          }}>
            <p style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(44px, 8vw, 64px)",
              color: "#c9a96e",
              margin: 0,
              lineHeight: 1,
            }}>{dias}</p>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(11px, 1.8vw, 13px)",
              color: "#a89070",
              margin: "4px 0 0",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}>días para celebrar</p>
          </div>
        )}

        {/* Gold divider */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: "14px",
          marginBottom: "24px",
        }}>
          <div style={{ height: "1px", width: "50px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
          <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
          <div style={{ height: "1px", width: "50px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
        </div>

        {/* Closing phrase */}
        <p style={{
          fontFamily: "'Cormorant Upright', serif",
          fontStyle: "italic",
          fontSize: "clamp(15px, 2.2vw, 19px)",
          color: "#d4b896",
          margin: 0,
          lineHeight: 1.8,
        }}>
          Con amor y gratitud los esperamos<br />
          para compartir el día más especial de nuestras vidas.
        </p>

      </div>
    </footer>
  );
}
