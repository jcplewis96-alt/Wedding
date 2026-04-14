import { Heart } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }

        .hero-name-1 {
          opacity: 0;
          animation: heroFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
        }
        .hero-amp {
          opacity: 0;
          animation: heroFadeIn 0.7s ease 0.5s forwards;
        }
        .hero-name-2 {
          opacity: 0;
          animation: heroFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) 0.8s forwards;
        }
        .hero-divider {
          opacity: 0;
          animation: heroFadeIn 0.7s ease 1.1s forwards;
        }
        .hero-date {
          opacity: 0;
          animation: heroFadeUp 0.7s ease 1.3s forwards;
        }
        .hero-place {
          opacity: 0;
          animation: heroFadeUp 0.7s ease 1.6s forwards;
        }
        .hero-heart {
          opacity: 0;
          animation: heroFadeIn 0.7s ease 0s forwards;
        }
        .hero-scroll {
          opacity: 0;
          animation: heroFadeIn 0.7s ease 1.9s forwards;
        }
      `}</style>

      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4">

        {/* Heart */}
        <Heart
          className="hero-heart w-12 h-12 mx-auto mb-8"
          style={{ color: "#f0d878" }}
        />

        {/* Name 1 */}
        <h1 className="hero-name-1" style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(3rem, 10vw, 7rem)",
          lineHeight: 1.1,
          marginBottom: "1.2rem",
          textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          fontWeight: 400,
        }}>
          María de los Ángeles
        </h1>

        {/* Ampersand */}
        <div className="hero-amp" style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(3rem, 8vw, 5.5rem)",
          lineHeight: 1.0,
          marginBottom: "1rem",
          textShadow: "0 2px 20px rgba(0,0,0,0.4)",
        }}>
          &
        </div>

        {/* Name 2 */}
        <h1 className="hero-name-2" style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "clamp(3rem, 10vw, 7rem)",
          lineHeight: 1.1,
          marginBottom: "2.5rem",
          textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          fontWeight: 400,
        }}>
          Juan Carlos
        </h1>

        {/* Decorative line */}
        <div className="hero-divider" style={{
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: "16px", marginBottom: "2rem",
        }}>
          <div style={{ width: "60px", height: "1px", background: "rgba(240,216,120,0.6)" }} />
          <div style={{ fontSize: "10px", color: "#f0d878", letterSpacing: "4px", fontFamily: "'Cormorant Upright', serif" }}>✦</div>
          <div style={{ width: "60px", height: "1px", background: "rgba(240,216,120,0.6)" }} />
        </div>

        {/* Date */}
        <div className="hero-date" style={{
          fontFamily: "'Cormorant Upright', serif",
          fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
          letterSpacing: "4px",
          marginBottom: "0.6rem",
          fontStyle: "italic",
        }}>
          18 de Julio de 2026
        </div>

        {/* Place */}
        <div className="hero-place" style={{
          fontFamily: "'Cormorant Upright', serif",
          fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
          letterSpacing: "3px",
          opacity: 0.85,
        }}>
          Hacienda El Salitre · Bogotá, Colombia
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{ borderColor: "rgba(240,216,120,0.6)" }}>
          <div className="w-1 h-3 rounded-full mt-2"
            style={{ background: "rgba(240,216,120,0.8)" }}></div>
        </div>
      </div>
    </div>
  );
}
