import { FadeIn } from "./FadeIn";
 
export function OurStory() {
  return (
    <section className="py-20 px-4 bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;1,300;1,400&display=swap');
      `}</style>
 
      <FadeIn direction="up" duration={900}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
 
          {/* Section title */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontSize: "clamp(10px, 2vw, 13px)",
              letterSpacing: "5px",
              color: "#c9a96e",
              textTransform: "uppercase",
              margin: "0 0 8px",
            }}>
              Nuestra Historia
            </p>
            <h2 style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(44px, 8vw, 72px)",
              color: "#b8902a",
              margin: "0 0 16px",
              lineHeight: 1.1,
            }}>
              Cómo nos conocimos
            </h2>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "14px",
            }}>
              <div style={{ height: "1px", width: "70px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "12px" }}>✦</span>
              <div style={{ height: "1px", width: "70px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>
          </div>
 
          {/* Two column layout */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(32px, 6vw, 80px)",
            alignItems: "center",
          }}>
 
            {/* Photo */}
            <FadeIn direction="left" duration={1000} delay={200}>
              <div style={{
                position: "relative",
                borderRadius: "2px",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              }}>
                {/* Gold border accent */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  border: "1px solid rgba(201,169,110,0.3)",
                  zIndex: 1,
                  pointerEvents: "none",
                }} />
                <img
                  src="/OurStory.jpg"
                  alt="María de los Ángeles y Juan Carlos"
                  style={{
                    width: "100%",
                    height: "clamp(400px, 60vw, 600px)",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </div>
            </FadeIn>
 
            {/* Text */}
            <FadeIn direction="right" duration={1000} delay={300}>
              <div style={{ padding: "clamp(0px, 2vw, 20px) 0" }}>
 
                <p style={{
                  fontFamily: "'Cormorant Upright', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(15px, 2vw, 18px)",
                  color: "#7a6040",
                  lineHeight: 2.0,
                  margin: "0 0 28px",
                }}>
                  Nuestra historia comenzó en Bogotá, una ciudad vibrante que se convirtió
                  en el escenario perfecto para el destino. Juan Carlos, recién llegado desde
                  Barranquilla para iniciar una nueva etapa laboral, y María de los Ángeles,
                  quien estaba culminando con ilusión sus estudios universitarios, jamás
                  imaginaron que sus caminos se cruzarían de una manera tan mágica.
                </p>
 
                <p style={{
                  fontFamily: "'Cormorant Upright', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(15px, 2vw, 18px)",
                  color: "#7a6040",
                  lineHeight: 2.0,
                  margin: "0 0 28px",
                }}>
                  Todo ocurrió en una fiesta de amigos, entre risas y música. María, con su
                  espontaneidad encantadora, comenzó a grabar un video, y en ese instante,
                  sin planearlo, Juan Carlos apareció en la escena. Lo que parecía ser solo
                  un recuerdo casual se transformó en el primer hilo de una conexión especial.
                </p>
 
                <p style={{
                  fontFamily: "'Cormorant Upright', serif",
                  fontStyle: "italic",
                  fontSize: "clamp(15px, 2vw, 18px)",
                  color: "#7a6040",
                  lineHeight: 2.0,
                  margin: 0,
                }}>
                  El simple gesto de enviarle aquel video abrió la puerta a conversaciones
                  interminables, mensajes llenos de complicidad y encuentros que poco a poco
                  fueron construyendo algo más profundo. Lo que empezó como un detalle inocente
                  se convirtió en el inicio de una historia marcada por la ternura, la alegría
                  y la certeza de que el amor había llegado para quedarse.
                </p>
 
                {/* Decorative closing */}
                <div style={{
                  display: "flex", alignItems: "center",
                  gap: "14px", marginTop: "40px",
                }}>
                  <div style={{ height: "1px", width: "50px", background: "linear-gradient(to right, #c9a96e, transparent)" }} />
                  <span style={{
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "28px",
                    color: "#c9a96e",
                    lineHeight: 1,
                  }}>M & JC</span>
                  <div style={{ height: "1px", flex: 1, background: "linear-gradient(to right, transparent, #c9a96e, transparent)" }} />
                </div>
 
              </div>
            </FadeIn>
 
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
 
