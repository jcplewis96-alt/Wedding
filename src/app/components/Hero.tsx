import { Heart } from "lucide-react";
 
export function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/home/ubuntu/Wedding/images/Hero.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
 
      <div className="relative z-10 text-center text-white px-4">
        <Heart className="w-12 h-12 mx-auto mb-8 animate-pulse" style={{ color: "#f0d878" }} />
 
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            lineHeight: 1.1,
            marginBottom: "1.2rem",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            fontWeight: 400,
          }}
        >
          María de los Ángeles
        </h1>
 
        <div
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            lineHeight: 1.0,
            marginBottom: "1rem",
            opacity: 0.95,
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
          }}
        >
          &
        </div>
 
        <h1
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(3rem, 10vw, 7rem)",
            lineHeight: 1.1,
            marginBottom: "2.5rem",
            textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            fontWeight: 400,
          }}
        >
          Juan Carlos
        </h1>
 
        {/* Decorative line */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "16px", marginBottom: "2rem",
        }}>
          <div style={{ width: "60px", height: "1px", background: "rgba(240,216,120,0.6)" }} />
          <div style={{ fontSize: "10px", color: "#f0d878", letterSpacing: "4px", fontFamily: "'Cormorant Upright', serif" }}>✦</div>
          <div style={{ width: "60px", height: "1px", background: "rgba(240,216,120,0.6)" }} />
        </div>
 
        <div
          style={{
            fontFamily: "'Cormorant Upright', serif",
            fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
            letterSpacing: "4px",
            marginBottom: "0.6rem",
            opacity: 0.9,
            fontStyle: "italic",
          }}
        >
          18 de Julio de 2026
        </div>
 
        <div
          style={{
            fontFamily: "'Cormorant Upright', serif",
            fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)",
            letterSpacing: "3px",
            opacity: 0.75,
          }}
        >
          Hacienda El Salitre · Bogotá, Colombia
        </div>
      </div>
 
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center" style={{ borderColor: "rgba(240,216,120,0.6)" }}>
          <div className="w-1 h-3 bg-white rounded-full mt-2" style={{ background: "rgba(240,216,120,0.8)" }}></div>
        </div>
      </div>
 
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;1,300;1,400&display=swap');
      `}</style>
    </div>
  );
}
