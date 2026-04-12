import { useState } from "react";
import { FadeIn } from "./FadeIn";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz9ULCEZBNtX6yLtW9O8bgdfUJKQXof5JI7a59G5yYL_T-rBA1aBMaNO8uvNY-akDcLKA/exec";

export function RSVP() {
  const params   = new URLSearchParams(window.location.search);
  const invitado = params.get("invitado")?.replace(/-/g, " ") || "";
  const cupos    = parseInt(params.get("cupos") || "1");

  const [confirma, setConfirma]   = useState<"si" | "no" | "">("");
  const [personas, setPersonas]   = useState(cupos);
  const [mensaje, setMensaje]     = useState("");
  const [estado, setEstado]       = useState<"idle" | "sending" | "ok" | "error">("idle");

  const handleSubmit = async () => {
    if (!confirma) return;
    setEstado("sending");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          invitado: invitado || "Invitado general",
          cupos,
          confirma: confirma === "si" ? "Confirma asistencia" : "No puede asistir",
          personas: confirma === "si" ? personas : 0,
          mensaje,
        }),
      });
      setEstado("ok");
    } catch {
      setEstado("error");
    }
  };

  return (
    <section
      id="rsvp"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #faf6ed 0%, #f5f0e4 50%, #faf6ed 100%)",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Upright:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        .rsvp-btn {
          fontFamily: 'Cormorant Upright', serif;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .rsvp-option {
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #d0c0a0;
          border-radius: 2px;
          padding: 12px 20px;
          background: transparent;
          width: 100%;
          text-align: center;
          font-family: 'Cormorant Upright', serif;
          font-style: italic;
          font-size: clamp(14px, 2vw, 16px);
          color: #7a6040;
        }
        .rsvp-option.selected-si {
          background: #c9a96e;
          border-color: #c9a96e;
          color: #fff;
        }
        .rsvp-option.selected-no {
          background: #a89070;
          border-color: #a89070;
          color: #fff;
        }
        .rsvp-option:hover {
          border-color: #c9a96e;
          color: #8B6520;
        }
        .rsvp-textarea {
          width: 100%;
          border: 1px solid #d0c0a0;
          background: rgba(255,255,255,0.6);
          padding: 12px;
          font-family: 'Cormorant Upright', serif;
          font-style: italic;
          font-size: clamp(13px, 2vw, 15px);
          color: #7a6040;
          resize: none;
          outline: none;
          border-radius: 2px;
          box-sizing: border-box;
        }
        .rsvp-textarea:focus { border-color: #c9a96e; }
        .rsvp-textarea::placeholder { color: #c0a880; }
        .rsvp-submit {
          width: 100%;
          padding: 12px;
          border: 1px solid #c9a96e;
          background: transparent;
          color: #8B6520;
          font-family: 'Cormorant Upright', serif;
          font-size: clamp(12px, 2vw, 14px);
          letter-spacing: 3px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .rsvp-submit:hover:not(:disabled) {
          background: #c9a96e;
          color: #fff;
        }
        .rsvp-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .qty-btn {
          width: 36px; height: 36px;
          border: 1px solid #c9a96e;
          background: transparent;
          color: #8B6520;
          font-size: 18px;
          cursor: pointer;
          border-radius: 2px;
          transition: all 0.2s ease;
          display: flex; align-items: center; justify-content: center;
        }
        .qty-btn:hover { background: #c9a96e; color: #fff; }
        .qty-btn:disabled { opacity: 0.3; cursor: not-allowed; }
      `}</style>

      <FadeIn direction="up" duration={900}>
        <div style={{
          position: "relative", width: "100%", maxWidth: "520px",
          background: "linear-gradient(160deg, #fefefe 0%, #fbf8f0 40%, #f8f4ea 70%, #faf6ed 100%)",
          padding: "8px",
          boxShadow: "0 20px 80px rgba(0,0,0,0.12), 0 4px 20px rgba(0,0,0,0.06)",
        }}>

          {/* Gold border */}
          <div style={{
            position: "absolute", inset: "8px",
            border: "1px solid #c9a96e",
            pointerEvents: "none", zIndex: 1,
          }} />

          <div style={{
            padding: "clamp(24px, 5vw, 40px) clamp(20px, 5vw, 40px)",
            position: "relative", zIndex: 2, textAlign: "center",
          }}>

            {/* Title */}
            <p style={{
              fontFamily: "'Cormorant Upright', serif",
              fontSize: "clamp(10px, 2vw, 12px)",
              letterSpacing: "4px", color: "#c9a96e",
              textTransform: "uppercase", margin: "0 0 4px",
            }}>Confirmación</p>
            <h2 style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(42px, 8vw, 60px)",
              color: "#b8902a", margin: "0 0 10px", lineHeight: 1.1,
            }}>RSVP</h2>
            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "center", gap: "12px", marginBottom: "24px",
            }}>
              <div style={{ height: "1px", width: "50px", background: "linear-gradient(to right, transparent, #c9a96e)" }} />
              <span style={{ color: "#c9a96e", fontSize: "10px" }}>✦</span>
              <div style={{ height: "1px", width: "50px", background: "linear-gradient(to left, transparent, #c9a96e)" }} />
            </div>

            {/* Guest name */}
            {invitado && (
              <div style={{ marginBottom: "20px" }}>
                <p style={{
                  fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                  fontSize: "clamp(12px, 2vw, 14px)", color: "#a89070",
                  letterSpacing: "2px", margin: "0 0 4px",
                }}>Invitado</p>
                <p style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(24px, 4vw, 32px)",
                  color: "#b8902a", margin: 0, lineHeight: 1.2,
                }}>{invitado}</p>
                <p style={{
                  fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                  fontSize: "clamp(11px, 1.8vw, 13px)", color: "#a89070",
                  margin: "4px 0 0", letterSpacing: "1px",
                }}>Cupos asignados: {cupos}</p>
              </div>
            )}

            {/* Success state */}
            {estado === "ok" ? (
              <div style={{ padding: "24px 0" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>✦</div>
                <p style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(28px, 5vw, 38px)",
                  color: "#b8902a", margin: "0 0 8px",
                }}>
                  {confirma === "si" ? "¡Nos alegra contar contigo!" : "Gracias por avisarnos"}
                </p>
                <p style={{
                  fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                  fontSize: "clamp(13px, 2vw, 15px)", color: "#7a6040",
                }}>Tu respuesta ha sido registrada.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

                {/* Attendance options */}
                <div>
                  <p style={{
                    fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                    fontSize: "clamp(12px, 2vw, 14px)", color: "#a89070",
                    letterSpacing: "2px", margin: "0 0 10px",
                    textTransform: "uppercase",
                  }}>¿Confirmas tu asistencia?</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      className={`rsvp-option ${confirma === "si" ? "selected-si" : ""}`}
                      onClick={() => setConfirma("si")}
                    >
                      Con alegría acepto
                    </button>
                    <button
                      className={`rsvp-option ${confirma === "no" ? "selected-no" : ""}`}
                      onClick={() => setConfirma("no")}
                    >
                      Con pena declino
                    </button>
                  </div>
                </div>

                {/* Number of people — only if attending */}
                {confirma === "si" && (
                  <div>
                    <p style={{
                      fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                      fontSize: "clamp(12px, 2vw, 14px)", color: "#a89070",
                      letterSpacing: "2px", margin: "0 0 10px",
                      textTransform: "uppercase",
                    }}>Número de personas</p>
                    <div style={{
                      display: "flex", alignItems: "center",
                      justifyContent: "center", gap: "16px",
                    }}>
                      <button
                        className="qty-btn"
                        onClick={() => setPersonas(p => Math.max(1, p - 1))}
                        disabled={personas <= 1}
                      >−</button>
                      <span style={{
                        fontFamily: "'Great Vibes', cursive",
                        fontSize: "36px", color: "#b8902a",
                        minWidth: "40px", textAlign: "center",
                      }}>{personas}</span>
                      <button
                        className="qty-btn"
                        onClick={() => setPersonas(p => Math.min(cupos, p + 1))}
                        disabled={personas >= cupos}
                      >+</button>
                    </div>
                    <p style={{
                      fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                      fontSize: "clamp(10px, 1.6vw, 12px)", color: "#c0a880",
                      margin: "6px 0 0",
                    }}>Máximo {cupos} {cupos === 1 ? "persona" : "personas"}</p>
                  </div>
                )}

                {/* Message */}
                <div>
                  <p style={{
                    fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                    fontSize: "clamp(12px, 2vw, 14px)", color: "#a89070",
                    letterSpacing: "2px", margin: "0 0 10px",
                    textTransform: "uppercase",
                  }}>Mensaje para los novios</p>
                  <textarea
                    className="rsvp-textarea"
                    rows={3}
                    placeholder="Escribe tus buenos deseos..."
                    value={mensaje}
                    onChange={e => setMensaje(e.target.value)}
                  />
                </div>

                {/* Submit */}
                <button
                  className="rsvp-submit"
                  onClick={handleSubmit}
                  disabled={!confirma || estado === "sending"}
                >
                  {estado === "sending" ? "Enviando..." : "Confirmar"}
                </button>

                {estado === "error" && (
                  <p style={{
                    fontFamily: "'Cormorant Upright', serif", fontStyle: "italic",
                    fontSize: "13px", color: "#c0392b", margin: 0,
                  }}>
                    Hubo un error. Por favor intenta nuevamente.
                  </p>
                )}

              </div>
            )}

          </div>
        </div>
      </FadeIn>
    </section>
  );
}
