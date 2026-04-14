import { FadeIn } from "./FadeIn";

export function OurStory() {
  return (
    <section style={{ background: "#ffffff", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
      `}</style>

      {/* ── HERO PHOTO — full width with champagne overlay ── */}
      <div style={{
        position: "relative",
        height: "clamp(480px, 75vh, 720px)",
        overflow: "hidden",
      }}>
        <img
          src="/OurStory.jpg"
          alt="María de los Ángeles y Juan Carlos"
          style={{
            width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center 20%",
            display: "block",
          }}
        />
        {/* Champagne overlay — fully opaque at top to blend with wave */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(250,246,237,0.6) 0%, rgba(240,235,226,0.2) 25%, rgba(240,235,226,0.1) 60%, rgba(255,255,255,1) 100%)",
        }} />

        {/* Title over photo */}
        <div style={{
          position: "absolute", bottom: "clamp(32px,6vw,60px)",
          left: 0, right: 0, textAlign: "center",
        }}>
          <FadeIn direction="up" duration={1000}>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontSize: "clamp(14px, 2.5vw, 18px)",
              letterSpacing: "6px",
              color: "#ffffff",
              textTransform: "uppercase",
              margin: "0 0 8px",
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
            }}>Nuestra Historia</p>
            <h2 style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(48px, 9vw, 80px)",
              color: "#b8902a",
              margin: "0 0 12px",
              lineHeight: 1.0,
              textShadow: "0 2px 12px rgba(255,255,255,0.6)",
            }}>Cómo nos conocimos</h2>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "14px",
            }}>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "12px" }}>✦</span>
              <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>
            {/* Date badge */}
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(15px, 2.2vw, 18px)",
              color: "#ffffff",
              marginTop: "8px",
              letterSpacing: "2px",
              textShadow: "0 1px 8px rgba(0,0,0,0.4)",
            }}>18 de Agosto de 2018</p>
          </FadeIn>
        </div>
      </div>

      {/* ── THREE MOMENTS ── */}
      <div style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "clamp(32px, 5vw, 56px) clamp(20px, 6vw, 40px)",
      }}>

        {/* Moment 1 */}
        <FadeIn direction="up" duration={900} delay={0}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#c9a96e", fontSize: "20px" }}>✦</span>
            </div>
            <h3 style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(30px, 5vw, 44px)",
              color: "#b8902a",
              margin: "0 0 20px",
              lineHeight: 1.1,
            }}>El encuentro</h3>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#7a6040",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "680px",
              marginLeft: "auto", marginRight: "auto",
            }}>
              Nuestra historia comenzó en Bogotá, una ciudad vibrante que se convirtió
              en el escenario perfecto para el destino. Juan Carlos, recién llegado desde
              Barranquilla para iniciar una nueva etapa laboral, y María de los Ángeles,
              quien estaba culminando con ilusión sus estudios universitarios, jamás
              imaginaron que sus caminos se cruzarían de una manera tan mágica.
            </p>
          </div>
        </FadeIn>

        {/* Gold divider */}
        <FadeIn direction="none" duration={800} delay={100}>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "16px",
            marginBottom: "36px",
          }}>
            <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
            <span style={{ color: "#d4c4a0", fontSize: "8px" }}>✦</span>
            <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
            <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
          </div>
        </FadeIn>

        {/* Moment 2 */}
        <FadeIn direction="up" duration={900} delay={100}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#c9a96e", fontSize: "20px" }}>✦</span>
            </div>
            <h3 style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(30px, 5vw, 44px)",
              color: "#b8902a",
              margin: "0 0 20px",
              lineHeight: 1.1,
            }}>El video</h3>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#7a6040",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "680px",
              marginLeft: "auto", marginRight: "auto",
            }}>
              Todo ocurrió en una fiesta de amigos, entre risas y música. María, con su
              espontaneidad encantadora, comenzó a grabar un video, y en ese instante,
              sin planearlo, Juan Carlos apareció en la escena. Lo que parecía ser solo
              un recuerdo casual se transformó en el primer hilo de una conexión especial.
            </p>
          </div>
        </FadeIn>

        {/* Highlighted quote */}
        <FadeIn direction="up" duration={1000} delay={150}>
          <div style={{
            margin: "0 auto 56px",
            maxWidth: "640px",
            padding: "clamp(16px, 3vw, 28px) clamp(28px, 5vw, 52px)",
            borderLeft: "3px solid #c9a96e",
            borderRight: "3px solid #c9a96e",
            textAlign: "center",
            position: "relative",
          }}>
            {/* Opening quote mark */}
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "80px",
              color: "#e8d4a0",
              position: "absolute",
              top: "-20px",
              left: "clamp(10px, 3vw, 20px)",
              lineHeight: 1,
              pointerEvents: "none",
            }}>"</span>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(16px, 2.2vw, 20px)",
              color: "#8B6F47",
              lineHeight: 1.6,
              margin: 0,
              position: "relative",
              zIndex: 1,
            }}>
              Lo que parecía ser solo un recuerdo casual se transformó
              en el primer hilo de una conexión especial.
            </p>
            <span style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "80px",
              color: "#e8d4a0",
              position: "absolute",
              bottom: "-40px",
              right: "clamp(10px, 3vw, 20px)",
              lineHeight: 1,
              pointerEvents: "none",
            }}>"</span>
          </div>
        </FadeIn>

        {/* Gold divider */}
        <FadeIn direction="none" duration={800} delay={100}>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "16px",
            marginBottom: "36px",
          }}>
            <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
            <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
            <span style={{ color: "#d4c4a0", fontSize: "8px" }}>✦</span>
            <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
            <div style={{ height: "1px", flex: 1, maxWidth: "120px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
          </div>
        </FadeIn>

        {/* Moment 3 */}
        <FadeIn direction="up" duration={900} delay={100}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ color: "#c9a96e", fontSize: "20px" }}>✦</span>
            </div>
            <h3 style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(30px, 5vw, 44px)",
              color: "#b8902a",
              margin: "0 0 20px",
              lineHeight: 1.1,
            }}>El inicio</h3>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "#7a6040",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "680px",
              marginLeft: "auto", marginRight: "auto",
            }}>
              El simple gesto de enviarle aquel video abrió la puerta a conversaciones
              interminables, mensajes llenos de complicidad y encuentros que poco a poco
              fueron construyendo algo más profundo. Lo que empezó como un detalle inocente
              se convirtió en el inicio de una historia marcada por la ternura, la alegría
              y la certeza de que el amor había llegado para quedarse.
            </p>
          </div>
        </FadeIn>

        {/* Closing signature */}
        <FadeIn direction="up" duration={900} delay={150}>
          <div style={{ textAlign: "center", paddingTop: "0px" }}>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "16px",
              marginBottom: "16px",
            }}>
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
              <div style={{ height: "1px", width: "80px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>
            <p style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(32px, 5vw, 46px)",
              color: "#c9a96e",
              margin: 0,
              lineHeight: 1,
            }}>María de los Ángeles & Juan Carlos</p>
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontStyle: "italic",
              fontSize: "clamp(11px, 1.6vw, 13px)",
              color: "#a89070",
              letterSpacing: "3px",
              marginTop: "10px",
            }}>18 · 08 · 2018</p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
