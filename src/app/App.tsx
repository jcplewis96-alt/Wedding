import { useEffect, useRef } from "react";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Wave } from "./components/Wave";
import { Card } from "./components/Card";
import { DressCode } from "./components/DressCode";
import { Detalles } from "./components/Detalles";
import { OurStory } from "./components/OurStory";
import { Gallery } from "./components/Gallery";
import { RSVP } from "./components/RSVP";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { useGuest } from "./hooks/useGuest";

export default function App() {
  const { guest, loading: guestLoading } = useGuest();
  const splashRef    = useRef<HTMLDivElement>(null);
  const sealRef      = useRef<HTMLDivElement>(null);
  const textRef      = useRef<HTMLDivElement>(null);
  const leftFlapRef  = useRef<HTMLDivElement>(null);
  const rightFlapRef = useRef<HTMLDivElement>(null);
  const topFlapRef   = useRef<HTMLDivElement>(null);
  const innerRef     = useRef<HTMLDivElement>(null);
  const skipRef      = useRef<HTMLButtonElement>(null);
  const sparkleRef   = useRef<HTMLDivElement>(null);

  const triggerSparkleTransition = () => {
    const splash   = splashRef.current;
    const sparkle  = sparkleRef.current;
    if (!splash || !sparkle) return;

    sparkle.style.display  = "block";
    sparkle.style.opacity  = "0";
    sparkle.style.transition = "opacity 0.6s ease";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sparkle.style.opacity = "1";
      });
    });

    setTimeout(() => {
      sparkle.style.transition = "opacity 4.2s ease";
      sparkle.style.opacity    = "0";
      splash.style.transition  = "opacity 4.2s ease";
      splash.style.opacity     = "0";
      splash.style.pointerEvents = "none";
    }, 900);

    setTimeout(() => {
      splash.style.display  = "none";
      sparkle.style.display = "none";
    }, 5300);
  };

  useEffect(() => {
    const splash = splashRef.current;
    if (!splash) return;

    // 4s idle → opening animation (~3.5s) → 10s reading time → fade at 17.5s → hide at 19s
    const openTimer = setTimeout(() => {
      if (sealRef.current)  { sealRef.current.style.transition  = "opacity 0.6s ease"; sealRef.current.style.opacity  = "0"; }
      if (textRef.current)  { textRef.current.style.transition  = "opacity 0.6s ease"; textRef.current.style.opacity  = "0"; }
      if (topFlapRef.current) {
        topFlapRef.current.style.transition = "transform 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.2s";
        topFlapRef.current.style.transform  = "rotateX(180deg)";
      }
      if (leftFlapRef.current) {
        leftFlapRef.current.style.transition = "transform 1.75s cubic-bezier(0.77, 0, 0.175, 1) 0.1s";
        leftFlapRef.current.style.transform  = "translateX(-100%)";
      }
      if (rightFlapRef.current) {
        rightFlapRef.current.style.transition = "transform 1.75s cubic-bezier(0.77, 0, 0.175, 1) 0.1s";
        rightFlapRef.current.style.transform  = "translateX(100%)";
      }
      if (innerRef.current) {
        innerRef.current.style.transition = "opacity 0.8s ease 0.8s";
        innerRef.current.style.opacity    = "1";
      }
    }, 4000);

    const fadeTimer = setTimeout(() => {
      triggerSparkleTransition();
    }, 11000);

    const hideTimer = setTimeout(() => {
      if (splash) splash.style.display = "none";
    }, 13500);

    // Show the button only after the card is fully visible (~4s idle + 1.75s open + 0.8s card fade = ~6.6s)
    const showButtonTimer = setTimeout(() => {
      if (skipRef.current) {
        skipRef.current.style.opacity = "0.8";
        skipRef.current.style.pointerEvents = "auto";
      }
    }, 6800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      clearTimeout(showButtonTimer);
    };
  }, []);

  return (
    <div className="min-h-screen">

      {/* Splash */}
      <div
        ref={splashRef}
        style={{
          position: "fixed", inset: 0, zIndex: 50,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg, #f0ebe2 0%, #e8e2d8 50%, #ede7dc 100%)",
        }}
      >
        {/* Subtle vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.18) 100%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Envelope */}
          <div style={{ position: "relative", width: "420px", height: "300px" }}>

            {/* Envelope body — Nube de Algodón: soft organic tone variations, no lines */}
            <div style={{
              position: "absolute", inset: 0,
              background: `
                radial-gradient(ellipse at 20% 30%, #faf6ee 0%, transparent 45%),
                radial-gradient(ellipse at 80% 15%, #f5eedf 0%, transparent 40%),
                radial-gradient(ellipse at 55% 75%, #ede4d2 0%, transparent 50%),
                radial-gradient(ellipse at 10% 80%, #f0e8d8 0%, transparent 38%),
                radial-gradient(ellipse at 90% 70%, #e8dece 0%, transparent 42%),
                radial-gradient(ellipse at 45% 40%, #f2ead8 0%, transparent 35%),
                linear-gradient(145deg, #f5ede0 0%, #ece3d0 50%, #e5dac8 100%)
              `,
              border: "1px solid #ccc0a8",
              borderRadius: "3px",
              boxShadow: `
                0 16px 60px rgba(0,0,0,0.25),
                0 4px 12px rgba(0,0,0,0.1),
                inset 0 1px 0 rgba(255,255,255,0.6),
                inset 0 -1px 0 rgba(0,0,0,0.04)
              `,
            }} />

            {/* Cotton cloud — secondary depth layer */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "3px", overflow: "hidden", pointerEvents: "none",
              background: `
                radial-gradient(ellipse at 65% 25%, rgba(255,251,242,0.55) 0%, transparent 30%),
                radial-gradient(ellipse at 30% 60%, rgba(255,250,240,0.45) 0%, transparent 28%),
                radial-gradient(ellipse at 75% 80%, rgba(235,226,210,0.4) 0%, transparent 32%),
                radial-gradient(ellipse at 15% 45%, rgba(250,244,232,0.5) 0%, transparent 25%),
                radial-gradient(ellipse at 50% 10%, rgba(255,252,244,0.5) 0%, transparent 28%)
              `,
            }} />

            {/* Edge vignette — soft */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "3px", overflow: "hidden", pointerEvents: "none",
              background: `
                linear-gradient(to right,  rgba(90,68,40,0.07) 0%, transparent 18%, transparent 82%, rgba(90,68,40,0.07) 100%),
                linear-gradient(to bottom, rgba(90,68,40,0.03) 0%, transparent 20%, transparent 80%, rgba(90,68,40,0.08) 100%)
              `,
            }} />

            {/* Inner letter — Piel de Huevo: near-perfect surface with micro brightness variations */}
            <div
              ref={innerRef}
              style={{
                position: "absolute", left: "18px", right: "18px", bottom: "18px", top: "34%",
                background: `
                  radial-gradient(ellipse at 38% 42%, #fffff8 0%, transparent 40%),
                  radial-gradient(ellipse at 70% 25%, #fefdf4 0%, transparent 35%),
                  radial-gradient(ellipse at 20% 75%, #fdfbf0 0%, transparent 38%),
                  radial-gradient(ellipse at 80% 78%, #faf7ec 0%, transparent 32%),
                  linear-gradient(155deg, #fefefа 0%, #fbf8f0 40%, #f8f4ea 70%, #faf6ed 100%)
                `,
                border: "1px solid #d0c0a0",
                borderRadius: "2px",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: 0,
                boxShadow: `
                  inset 0 1px 4px rgba(255,255,255,0.8),
                  inset 0 -1px 3px rgba(0,0,0,0.04),
                  inset 1px 0 3px rgba(255,255,255,0.5),
                  0 3px 12px rgba(0,0,0,0.13)
                `,
              }}
            >
              {/* Eggshell micro-sheen overlay */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: "2px", pointerEvents: "none",
                background: `
                  radial-gradient(ellipse at 30% 30%, rgba(255,255,250,0.7) 0%, transparent 45%),
                  radial-gradient(ellipse at 72% 65%, rgba(250,246,236,0.5) 0%, transparent 38%),
                  radial-gradient(ellipse at 55% 50%, rgba(255,253,245,0.3) 0%, transparent 50%)
                `,
              }} />

              <div style={{ color: "#5a3e20", textAlign: "center", padding: "16px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(18px, 4vw, 28px)",
                  lineHeight: 1.4,
                }}>
                  {guestLoading
                    ? <span style={{
                        display: "inline-flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center", gap: "10px",
                      }}>
                        <span style={{ display: "inline-flex", gap: "6px", alignItems: "center" }}>
                          <span style={{ animation: "dotPulse 1.4s ease-in-out infinite", animationDelay: "0s",
                            width: "8px", height: "8px", borderRadius: "50%",
                            background: "#c9a96e", display: "inline-block" }} />
                          <span style={{ animation: "dotPulse 1.4s ease-in-out infinite", animationDelay: "0.2s",
                            width: "8px", height: "8px", borderRadius: "50%",
                            background: "#c9a96e", display: "inline-block" }} />
                          <span style={{ animation: "dotPulse 1.4s ease-in-out infinite", animationDelay: "0.4s",
                            width: "8px", height: "8px", borderRadius: "50%",
                            background: "#c9a96e", display: "inline-block" }} />
                        </span>
                        <span style={{
                          fontFamily: "'Cormorant Upright', cursive",
                          fontSize: "13px",
                          color: "#a89070",
                          letterSpacing: "3px",
                          animation: "textFade 1.8s ease-in-out infinite",
                        }}>Abriendo tu invitación...</span>
                      </span>
                    : guest
                      ? `${guest.invitado}${guest.cupos > 0 ? ` (${guest.cupos})` : ""}`
                      : "María de los Ángeles & Juan Carlos"}
                </div>
              </div>
            </div>

            {/* Left flap — textured, darker tone as less light hits it */}
            <div
              ref={leftFlapRef}
              style={{
                position: "absolute", top: 0, bottom: 0, left: 0, width: "50%",
                transformOrigin: "left center",
                zIndex: 10, overflow: "hidden",
                borderRadius: "3px 0 0 3px",
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 210 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%"   stopColor="#f0e8d8" />
                    <stop offset="40%"  stopColor="#e8dece" />
                    <stop offset="100%" stopColor="#ddd4c2" />
                  </linearGradient>
                  <linearGradient id="lgShad" x1="1" y1="0" x2="0" y2="0">
                    <stop offset="0%"   stopColor="rgba(80,60,30,0.12)" />
                    <stop offset="100%" stopColor="rgba(80,60,30,0)" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 210,0 210,300 0,300" fill="url(#lg)" />
                {/* Shadow on right edge (fold) */}
                <polygon points="0,0 210,0 210,300 0,300" fill="url(#lgShad)" />
                {/* Texture fibers */}
                <line x1="0" y1="40"  x2="210" y2="40"  stroke="#b8aa95" strokeWidth="0.5" opacity="0.3" />
                <line x1="0" y1="90"  x2="210" y2="90"  stroke="#b8aa95" strokeWidth="0.4" opacity="0.2" />
                <line x1="0" y1="150" x2="210" y2="150" stroke="#b8aa95" strokeWidth="0.5" opacity="0.25" />
                <line x1="0" y1="210" x2="210" y2="210" stroke="#b8aa95" strokeWidth="0.4" opacity="0.2" />
                <line x1="0" y1="260" x2="210" y2="260" stroke="#b8aa95" strokeWidth="0.4" opacity="0.2" />
                {/* Diagonal fibers */}
                <line x1="30"  y1="0"   x2="0"   y2="50"  stroke="#b0a28e" strokeWidth="0.4" opacity="0.2" />
                <line x1="90"  y1="0"   x2="30"  y2="120" stroke="#b0a28e" strokeWidth="0.3" opacity="0.15" />
                <line x1="160" y1="0"   x2="80"  y2="200" stroke="#b0a28e" strokeWidth="0.4" opacity="0.2" />
                {/* Fold crease lines */}
                <line x1="0" y1="0"   x2="210" y2="150" stroke="#a89880" strokeWidth="1"   opacity="0.5" />
                <line x1="0" y1="300" x2="210" y2="150" stroke="#a89880" strokeWidth="1"   opacity="0.5" />
                {/* Crease highlight */}
                <line x1="0" y1="1"   x2="210" y2="151" stroke="rgba(255,248,235,0.4)" strokeWidth="1" />
                <line x1="0" y1="299" x2="210" y2="151" stroke="rgba(255,248,235,0.4)" strokeWidth="1" />
              </svg>
            </div>

            {/* Right flap — mirrored */}
            <div
              ref={rightFlapRef}
              style={{
                position: "absolute", top: 0, bottom: 0, right: 0, width: "50%",
                transformOrigin: "right center",
                zIndex: 10, overflow: "hidden",
                borderRadius: "0 3px 3px 0",
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 210 300" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="rg" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor="#f0e8d8" />
                    <stop offset="40%"  stopColor="#e8dece" />
                    <stop offset="100%" stopColor="#ddd4c2" />
                  </linearGradient>
                  <linearGradient id="rgShad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="rgba(80,60,30,0.12)" />
                    <stop offset="100%" stopColor="rgba(80,60,30,0)" />
                  </linearGradient>
                </defs>
                <polygon points="0,0 210,0 210,300 0,300" fill="url(#rg)" />
                <polygon points="0,0 210,0 210,300 0,300" fill="url(#rgShad)" />
                <line x1="0" y1="40"  x2="210" y2="40"  stroke="#b8aa95" strokeWidth="0.5" opacity="0.3" />
                <line x1="0" y1="90"  x2="210" y2="90"  stroke="#b8aa95" strokeWidth="0.4" opacity="0.2" />
                <line x1="0" y1="150" x2="210" y2="150" stroke="#b8aa95" strokeWidth="0.5" opacity="0.25" />
                <line x1="0" y1="210" x2="210" y2="210" stroke="#b8aa95" strokeWidth="0.4" opacity="0.2" />
                <line x1="0" y1="260" x2="210" y2="260" stroke="#b8aa95" strokeWidth="0.4" opacity="0.2" />
                <line x1="180" y1="0"   x2="210" y2="50"  stroke="#b0a28e" strokeWidth="0.4" opacity="0.2" />
                <line x1="120" y1="0"   x2="180" y2="120" stroke="#b0a28e" strokeWidth="0.3" opacity="0.15" />
                <line x1="50"  y1="0"   x2="130" y2="200" stroke="#b0a28e" strokeWidth="0.4" opacity="0.2" />
                <line x1="210" y1="0"   x2="0" y2="150" stroke="#a89880" strokeWidth="1"   opacity="0.5" />
                <line x1="210" y1="300" x2="0" y2="150" stroke="#a89880" strokeWidth="1"   opacity="0.5" />
                <line x1="210" y1="1"   x2="0" y2="151" stroke="rgba(255,248,235,0.4)" strokeWidth="1" />
                <line x1="210" y1="299" x2="0" y2="151" stroke="rgba(255,248,235,0.4)" strokeWidth="1" />
              </svg>
            </div>

            {/* Top flap — pointed V, darkest tone (most shadowed) */}
            <div
              ref={topFlapRef}
              style={{
                position: "absolute", left: 0, right: 0, top: 0, height: "56%",
                zIndex: 20, transformOrigin: "top center",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
              }}
            >
              <svg width="100%" height="100%" viewBox="0 0 420 168" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="tfg" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%"   stopColor="#e8e0ce" />
                    <stop offset="50%"  stopColor="#dfd6c4" />
                    <stop offset="100%" stopColor="#d6ccb8" />
                  </linearGradient>
                  <linearGradient id="tfgLight" x1="0.3" y1="0" x2="0.7" y2="1">
                    <stop offset="0%"   stopColor="rgba(255,248,235,0.35)" />
                    <stop offset="100%" stopColor="rgba(255,248,235,0)" />
                  </linearGradient>
                </defs>
                {/* Base flap */}
                <polygon points="0,0 420,0 210,168" fill="url(#tfg)" stroke="#c0b49e" strokeWidth="1.2" />
                {/* Light sheen across top */}
                <polygon points="0,0 420,0 210,168" fill="url(#tfgLight)" />
                {/* Coarse fiber lines */}
                <line x1="0"   y1="18"  x2="420" y2="18"  stroke="#b8aa95" strokeWidth="0.6" opacity="0.35" />
                <line x1="5"   y1="40"  x2="415" y2="40"  stroke="#b0a28e" strokeWidth="0.5" opacity="0.28" />
                <line x1="15"  y1="65"  x2="405" y2="65"  stroke="#b8aa95" strokeWidth="0.6" opacity="0.3" />
                <line x1="30"  y1="92"  x2="390" y2="92"  stroke="#b0a28e" strokeWidth="0.5" opacity="0.25" />
                <line x1="55"  y1="120" x2="365" y2="120" stroke="#b8aa95" strokeWidth="0.5" opacity="0.22" />
                <line x1="90"  y1="145" x2="330" y2="145" stroke="#b0a28e" strokeWidth="0.4" opacity="0.18" />
                {/* Diagonal texture fibers */}
                <line x1="80"  y1="0" x2="0"   y2="80"  stroke="#a89878" strokeWidth="0.4" opacity="0.18" />
                <line x1="200" y1="0" x2="60"  y2="168" stroke="#a89878" strokeWidth="0.3" opacity="0.14" />
                <line x1="340" y1="0" x2="420" y2="80"  stroke="#a89878" strokeWidth="0.4" opacity="0.18" />
                {/* Fold crease at bottom edge with highlight */}
                <line x1="0" y1="167" x2="210" y2="167" stroke="#a89070" strokeWidth="1.2" opacity="0.4" />
                <line x1="420" y1="167" x2="210" y2="167" stroke="#a89070" strokeWidth="1.2" opacity="0.4" />
              </svg>
            </div>

            {/* Gold botanical wax seal */}
            <div
              ref={sealRef}
              style={{
                position: "absolute", left: "50%", top: "52%",
                transform: "translate(-50%, -50%)",
                zIndex: 30,
                width: "72px", height: "72px",
                borderRadius: "50%",
                background: `
                  radial-gradient(circle at 35% 28%,
                    #f0d878 0%,
                    #d4a832 25%,
                    #c09020 50%,
                    #a07018 70%,
                    #805810 100%
                  )
                `,
                boxShadow: `
                  0 4px 16px rgba(0,0,0,0.3),
                  0 1px 4px rgba(0,0,0,0.2),
                  inset 0 1px 4px rgba(255,235,120,0.4),
                  inset 0 -2px 6px rgba(80,50,0,0.3)
                `,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
                {/* Outer ring */}
                <circle cx="29" cy="29" r="26" stroke="#8B6510" strokeWidth="1.5" fill="none" opacity="0.7" />
                {/* Inner ring */}
                <circle cx="29" cy="29" r="22" stroke="#a07820" strokeWidth="0.8" fill="none" opacity="0.5" />

                {/* Botanical sprigs — top left */}
                <g transform="translate(29,29)" opacity="0.9">
                  {/* Stem */}
                  <line x1="0" y1="0" x2="0" y2="-12" stroke="#6b4c10" strokeWidth="1" />
                  {/* Top leaf */}
                  <ellipse cx="0" cy="-14" rx="3" ry="5" fill="#7a5810" transform="rotate(0)" />
                  {/* Left branch */}
                  <line x1="0" y1="-6" x2="-6" y2="-10" stroke="#6b4c10" strokeWidth="0.8" />
                  <ellipse cx="-7" cy="-11" rx="2.5" ry="4" fill="#7a5810" transform="rotate(-35,-7,-11)" />
                  {/* Right branch */}
                  <line x1="0" y1="-6" x2="6" y2="-10" stroke="#6b4c10" strokeWidth="0.8" />
                  <ellipse cx="7" cy="-11" rx="2.5" ry="4" fill="#7a5810" transform="rotate(35,7,-11)" />
                  {/* Lower left branch */}
                  <line x1="0" y1="-2" x2="-7" y2="-5" stroke="#6b4c10" strokeWidth="0.8" />
                  <ellipse cx="-8.5" cy="-5.5" rx="2.5" ry="4" fill="#7a5810" transform="rotate(-50,-8.5,-5.5)" />
                  {/* Lower right branch */}
                  <line x1="0" y1="-2" x2="7" y2="-5" stroke="#6b4c10" strokeWidth="0.8" />
                  <ellipse cx="8.5" cy="-5.5" rx="2.5" ry="4" fill="#7a5810" transform="rotate(50,8.5,-5.5)" />
                </g>

                {/* Initials J & M */}
                <text
                  x="29" y="38"
                  textAnchor="middle"
                  fontFamily="serif"
                  fontSize="11"
                  fontStyle="italic"
                  fill="#5a3c08"
                  opacity="0.95"
                  letterSpacing="1"
                >J &amp; M</text>

                {/* Highlight gleam */}
                <ellipse cx="21" cy="17" rx="5" ry="3" fill="rgba(255,240,150,0.25)" transform="rotate(-30,21,17)" />
              </svg>
            </div>

            {/* Bottom fold lines */}
            <svg style={{ position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none" }} width="100%" height="100%" viewBox="0 0 420 300">
              <line x1="0"   y1="300" x2="210" y2="150" stroke="#c8bfb0" strokeWidth="0.8" opacity="0.5" />
              <line x1="420" y1="300" x2="210" y2="150" stroke="#c8bfb0" strokeWidth="0.8" opacity="0.5" />
            </svg>
          </div>

          {/* Text + loading bar */}
          <div
            ref={textRef}
            style={{ marginTop: "40px", textAlign: "center", color: "#7a6040" }}
          >
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "28px", letterSpacing: "2px", marginBottom: "14px", opacity: 0.85, color: "#3a2810" }}>Una Invitación Especial</p>
            <div style={{ width: "180px", height: "1px", background: "rgba(180,150,100,0.3)", borderRadius: "2px", overflow: "hidden", margin: "0 auto" }}>
              <div style={{ height: "100%", background: "linear-gradient(to right, #c9a444, #e8c97a, #c9a444)", animation: "loadBar 3.8s ease forwards" }} />
            </div>
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "22px", letterSpacing: "1px", marginTop: "10px", opacity: 0.6, color: "#3a2810" }}>Abriendo Tu Invitación...</p>
          </div>

          {/* Open Invitation button — elegant redesign */}
          <button
            ref={skipRef}
            onClick={() => triggerSparkleTransition()}
            style={{
              marginTop: "14px",
              background: "linear-gradient(135deg, rgba(201,164,68,0.15) 0%, rgba(201,164,68,0.08) 100%)",
              border: "none",
              borderTop: "1px solid rgba(160,120,40,0.5)",
              borderBottom: "1px solid rgba(160,120,40,0.5)",
              color: "#2c1a08",
              fontFamily: "'Great Vibes', cursive",
              fontSize: "26px",
              letterSpacing: "2px",
              padding: "10px 40px",
              cursor: "pointer",
              opacity: 0,
              pointerEvents: "none",
              transition: "opacity 0.8s ease, background 0.4s ease, letter-spacing 0.4s ease",
              whiteSpace: "nowrap",
              position: "relative",
            }}
            onMouseEnter={e => {
              const btn = e.currentTarget;
              btn.style.background = "linear-gradient(135deg, rgba(201,164,68,0.28) 0%, rgba(201,164,68,0.14) 100%)";
              btn.style.letterSpacing = "3px";
            }}
            onMouseLeave={e => {
              const btn = e.currentTarget;
              btn.style.background = "linear-gradient(135deg, rgba(201,164,68,0.15) 0%, rgba(201,164,68,0.08) 100%)";
              btn.style.letterSpacing = "2px";
            }}
          >
            <span style={{ position: "relative" }}>
              <span style={{
                position: "absolute", left: "-18px", top: "50%",
                transform: "translateY(-50%)",
                fontSize: "14px", opacity: 0.5, color: "#8B6520",
              }}>✦</span>
              Abrir Invitación
              <span style={{
                position: "absolute", right: "-18px", top: "50%",
                transform: "translateY(-50%)",
                fontSize: "14px", opacity: 0.5, color: "#8B6520",
              }}>✦</span>
            </span>
          </button>
        </div>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright:ital,wght@0,300;0,400;1,300;1,400&family=Great+Vibes&display=swap');

          @keyframes loadBar {
            0%   { width: 0%; }
            100% { width: 100%; }
          }

          @keyframes crossAppear {
            0%   { transform: translate(-50%, -50%) scale(0) rotate(0deg);   opacity: 0; }
            30%  { transform: translate(-50%, -50%) scale(1) rotate(15deg);  opacity: 1; }
            65%  { transform: translate(-50%, -50%) scale(0.9) rotate(-5deg); opacity: 0.8; }
            100% { transform: translate(-50%, -50%) scale(1.3) rotate(20deg); opacity: 0; }
          }

          @keyframes crossFloat {
            0%   { transform: translate(-50%, -50%) scale(0) rotate(45deg); opacity: 0; }
            35%  { transform: translate(-50%, -50%) scale(1) rotate(45deg); opacity: 0.9; }
            100% { transform: translate(-50%, -50%) scale(0.6) rotate(80deg); opacity: 0; }
          }

          @keyframes crossGlow {
            0%   { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            25%  { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            75%  { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
            100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
          }

          .cross-item {
            position: absolute;
          }
        `}</style>
      </div>

      {/* Cross light transition overlay */}
      <div
        ref={sparkleRef}
        style={{
          display: "none",
          position: "fixed", inset: 0, zIndex: 100,
          pointerEvents: "none",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.97) 0%, rgba(255,253,248,0.75) 28%, rgba(255,250,242,0.4) 55%, transparent 100%)",
        }}
      >
        {/* Large central cross */}
        {[0, 45].map((rot, i) => (
          <div
            key={`main-cross-${i}`}
            className="cross-item"
            style={{
              left: "50%", top: "50%",
              width: "280px", height: "280px",
              animation: `crossAppear ${2.8 + i * 0.3}s ease-out forwards`,
              animationDelay: `${i * 0.1}s`,
            }}
          >
            <svg viewBox="0 0 280 280" width="280" height="280">
              <defs>
                <linearGradient id={`cg${i}`} x1="0" y1="0.5" x2="1" y2="0.5">
                  <stop offset="0%"   stopColor="rgba(255,255,255,0)" />
                  <stop offset="40%"  stopColor="rgba(255,252,235,0.9)" />
                  <stop offset="50%"  stopColor="rgba(255,255,255,1)" />
                  <stop offset="60%"  stopColor="rgba(255,252,235,0.9)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
                <linearGradient id={`cgv${i}`} x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%"   stopColor="rgba(255,255,255,0)" />
                  <stop offset="40%"  stopColor="rgba(255,252,235,0.9)" />
                  <stop offset="50%"  stopColor="rgba(255,255,255,1)" />
                  <stop offset="60%"  stopColor="rgba(255,252,235,0.9)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              <g transform={`rotate(${rot}, 140, 140)`}>
                {/* Horizontal beam */}
                <rect x="0" y="136" width="280" height="8" fill={`url(#cg${i})`} rx="4" />
                {/* Vertical beam */}
                <rect x="136" y="0" width="8" height="280" fill={`url(#cgv${i})`} rx="4" />
              </g>
            </svg>
          </div>
        ))}

        {/* Scattered small crosses */}
        {[
          { x: 30, y: 28, s: 60,  d: 0.08, rot: 20  },
          { x: 70, y: 22, s: 48,  d: 0.14, rot: 10  },
          { x: 18, y: 65, s: 52,  d: 0.05, rot: 35  },
          { x: 80, y: 68, s: 56,  d: 0.18, rot: -15 },
          { x: 50, y: 18, s: 44,  d: 0.10, rot: 45  },
          { x: 22, y: 42, s: 36,  d: 0.20, rot: 5   },
          { x: 78, y: 45, s: 40,  d: 0.06, rot: -30 },
          { x: 55, y: 78, s: 50,  d: 0.16, rot: 25  },
          { x: 38, y: 75, s: 38,  d: 0.12, rot: -10 },
          { x: 65, y: 35, s: 42,  d: 0.22, rot: 50  },
        ].map((c, i) => (
          <div
            key={`small-cross-${i}`}
            className="cross-item"
            style={{
              left: `${c.x}%`, top: `${c.y}%`,
              width: `${c.s}px`, height: `${c.s}px`,
              animation: `crossFloat ${2.2 + (i % 3) * 0.25}s ease-out forwards`,
              animationDelay: `${c.d}s`,
            }}
          >
            <svg viewBox={`0 0 ${c.s} ${c.s}`} width={c.s} height={c.s}>
              <g transform={`rotate(${c.rot}, ${c.s/2}, ${c.s/2})`}>
                <rect x="0" y={c.s/2 - 2} width={c.s} height="4"
                  fill="rgba(255,248,220,0.85)" rx="2"
                  style={{ filter: "blur(0.5px)" }}
                />
                <rect x={c.s/2 - 2} y="0" width="4" height={c.s}
                  fill="rgba(255,248,220,0.85)" rx="2"
                  style={{ filter: "blur(0.5px)" }}
                />
              </g>
            </svg>
          </div>
        ))}

        {/* Central glow core */}
        <div
          className="cross-item"
          style={{
            left: "50%", top: "50%",
            width: "90px", height: "90px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,252,235,0.8) 50%, transparent 100%)",
            animation: "crossGlow 3s ease-out forwards",
          }}
        />
      </div>

      {/* Main content */}
      <Navbar />
      <div id="hero"><Hero /></div>
      <div style={{ background: "#f0ebe2" }}><Wave color="#f0ebe2" /></div>
      <div id="invitacion"><Card /></div>
      <div style={{ background: "#f0ebe2" }}><Wave color="#e8e2d8" /></div>
      <div id="dresscode"><DressCode /></div>
      <div style={{ background: "#e8e2d8" }}><Wave color="#faf6ed" /></div>
      <div id="detalles"><Detalles /></div>
      <div style={{ background: "#faf6ed" }}><Wave color="#ffffff" /></div>
      <div id="historia"><OurStory /></div>
      <div style={{ background: "#ffffff" }}><Wave color="#f8fafc" /></div>
      <div id="galeria"><Gallery /></div>
      <div style={{ background: "#f8fafc" }}><Wave color="#faf6ed" /></div>
      <div id="rsvp"><RSVP /></div>
      <div style={{ background: "#faf6ed" }}><Wave color="#2a1a08" /></div>
      <Footer />
      <Toaster />
    </div>
  );
}
