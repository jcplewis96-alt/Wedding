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

          {/* SVG Couple */}
          <div style={{ margin: "0 auto 32px", maxWidth: "240px" }}>
            <svg viewBox="0 0 220 340" width="100%" style={{ display: "block" }}>
              {/* ===== WOMAN ===== */}
              <g>
                <ellipse cx="82" cy="42" rx="18" ry="20" fill="#c8b898"/>
                <path d="M64 48 C60 60 62 75 65 85" stroke="#b8a07a" strokeWidth="2" fill="none"/>
                <path d="M100 48 C102 58 100 70 97 82" stroke="#b8a07a" strokeWidth="1.5" fill="none"/>
                <ellipse cx="82" cy="28" rx="10" ry="8" fill="#c8b898"/>
                <ellipse cx="82" cy="26" rx="7" ry="5" fill="#d4c4a0"/>
                <rect x="78" y="62" width="8" height="14" rx="3" fill="#d4b896"/>
                <ellipse cx="82" cy="50" rx="16" ry="18" fill="#d4b896"/>
                <ellipse cx="76" cy="48" rx="2.5" ry="3" fill="#b89070" opacity="0.5"/>
                <ellipse cx="88" cy="48" rx="2.5" ry="3" fill="#b89070" opacity="0.5"/>
                <path d="M79 56 Q82 59 85 56" stroke="#b89070" strokeWidth="1.2" fill="none"/>
                <circle cx="66" cy="52" r="2" fill="#c9a96e"/>
                <line x1="66" y1="54" x2="66" y2="60" stroke="#c9a96e" strokeWidth="1"/>
                <circle cx="66" cy="61" r="1.5" fill="#c9a96e"/>
                <path d="M68 76 C65 80 63 90 64 100 L100 100 C101 90 99 80 96 76 Q89 72 82 72 Q75 72 68 76Z"
                  fill="#e8dece" stroke="#d4c4a8" strokeWidth="0.8"/>
                <path d="M96 76 C100 72 104 70 106 74 C108 78 106 82 102 84 L100 100"
                  fill="#e8dece" stroke="#d4c4a8" strokeWidth="0.8"/>
                <path d="M64 100 C58 120 54 150 52 180 C50 210 52 240 54 270 C56 290 60 310 62 330 L102 330 C104 310 108 290 110 270 C112 240 114 210 112 180 C110 150 106 120 100 100Z"
                  fill="#ede4d4" stroke="#d4c4a8" strokeWidth="0.8"/>
                <path d="M72 110 C70 140 68 170 66 200" stroke="#d4c4a8" strokeWidth="0.6" fill="none" opacity="0.7"/>
                <path d="M82 106 C82 140 82 175 82 210" stroke="#d4c4a8" strokeWidth="0.6" fill="none" opacity="0.5"/>
                <path d="M92 110 C94 140 96 170 98 200" stroke="#d4c4a8" strokeWidth="0.6" fill="none" opacity="0.7"/>
                <path d="M66 102 Q82 106 98 102" stroke="#c9a96e" strokeWidth="0.8" fill="none"/>
                <circle cx="74" cy="118" r="8" fill="#e0d4c0" stroke="#c8b898" strokeWidth="0.8"/>
                <circle cx="80" cy="115" r="6" fill="#e8dece" stroke="#c8b898" strokeWidth="0.8"/>
                <path d="M77 126 L77 138" stroke="#b8a878" strokeWidth="1.2"/>
                <ellipse cx="64" cy="333" rx="6" ry="3" fill="#c8b898"/>
                <ellipse cx="100" cy="333" rx="6" ry="3" fill="#c8b898"/>
              </g>

              {/* ===== MAN ===== */}
              <g>
                <path d="M134 35 C130 28 128 22 132 18 C136 14 146 14 150 18 C154 22 152 28 148 35" fill="#4a3828"/>
                <ellipse cx="141" cy="48" rx="16" ry="18" fill="#c8a880"/>
                <ellipse cx="135" cy="46" rx="2.5" ry="3" fill="#a07848" opacity="0.5"/>
                <ellipse cx="147" cy="46" rx="2.5" ry="3" fill="#a07848" opacity="0.5"/>
                <path d="M138 55 Q141 58 144 55" stroke="#a07848" strokeWidth="1.2" fill="none"/>
                <rect x="137" y="62" width="8" height="14" rx="3" fill="#c8a880"/>
                <rect x="135" y="74" width="12" height="10" rx="1" fill="#f5f0e8"/>
                <path d="M139 76 L141 80 L143 76 L141 78Z" fill="#2a2018"/>
                <path d="M120 78 C118 84 116 95 116 110 L166 110 C166 95 164 84 162 78 C158 74 152 70 141 70 C130 70 124 74 120 78Z" fill="#2a2018"/>
                <path d="M141 70 L135 78 L141 86 L147 78Z" fill="#3a3028"/>
                <path d="M135 78 C133 76 130 74 126 76 L124 80 L135 82Z" fill="#f5f0e8"/>
                <path d="M147 78 C149 76 152 74 156 76 L158 80 L147 82Z" fill="#f5f0e8"/>
                <path d="M155 82 L158 80 L160 84 L157 86Z" fill="#e8d8b8"/>
                <path d="M116 110 L112 200 L130 200 L141 150 L152 200 L170 200 L166 110Z" fill="#2a2018"/>
                <line x1="122" y1="112" x2="118" y2="198" stroke="#3a3028" strokeWidth="0.6"/>
                <line x1="160" y1="112" x2="164" y2="198" stroke="#3a3028" strokeWidth="0.6"/>
                <rect x="112" y="200" width="18" height="120" rx="4" fill="#2a2018"/>
                <rect x="152" y="200" width="18" height="120" rx="4" fill="#2a2018"/>
                <path d="M110 318 C108 322 108 328 116 330 L132 330 C134 328 132 322 130 318Z" fill="#1a1208"/>
                <path d="M150 318 C148 322 148 328 156 330 L172 330 C174 328 172 322 170 318Z" fill="#1a1208"/>
                <path d="M116 80 C110 90 106 110 108 130 L118 128 C116 112 118 94 122 84Z" fill="#2a2018"/>
                <path d="M166 80 C172 90 176 110 174 130 L164 128 C166 112 164 94 160 84Z" fill="#2a2018"/>
                <ellipse cx="112" cy="133" rx="6" ry="7" fill="#c8a880"/>
                <ellipse cx="170" cy="133" rx="6" ry="7" fill="#c8a880"/>
                <rect x="108" y="126" width="8" height="4" rx="1" fill="#c9a96e"/>
                <rect x="166" y="126" width="8" height="4" rx="1" fill="#c9a96e"/>
              </g>
              <line x1="40" y1="335" x2="180" y2="335" stroke="#d4c4a8" strokeWidth="0.8" opacity="0.5"/>
            </svg>
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
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
