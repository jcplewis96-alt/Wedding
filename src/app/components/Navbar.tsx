import { useState, useEffect, useRef } from "react";

const links = [
  { label: "Inicio",          href: "#hero"      },
  { label: "Invitación",      href: "#invitacion" },
  { label: "Dress Code",      href: "#dresscode"  },
  { label: "Detalles",        href: "#detalles"   },
  { label: "Nuestra Historia",href: "#historia"   },
  { label: "Ceremonia",       href: "#ceremonia"  },
  { label: "RSVP",            href: "#rsvp"       },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [heroLight, setHeroLight] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      // Hero is dark overlay — text stays white until past first section
      setHeroLight(y < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const textColor  = scrolled ? "#5a3e20" : heroLight ? "#fff" : "#5a3e20";
  const goldColor  = scrolled ? "#c9a96e" : heroLight ? "rgba(240,216,120,0.8)" : "#c9a96e";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400&display=swap');

        .nav-link {
          position: relative;
          text-decoration: none;
          padding-bottom: 2px;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #c9a96e;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .mobile-link {
          text-decoration: none;
          display: block;
          padding: 14px 0;
          border-bottom: 1px solid rgba(201,169,110,0.2);
          transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .mobile-link:hover {
          color: #c9a96e !important;
          padding-left: 8px;
        }
        .mobile-link:last-child { border-bottom: none; }

        .hamburger span {
          display: block;
          width: 22px; height: 1.5px;
          margin: 5px 0;
          transition: all 0.3s ease;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(20px, 5vw, 60px)",
          height: "64px",
          background: scrolled
            ? "rgba(250,246,237,0.96)"
            : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,169,110,0.25)" : "none",
          transition: "background 0.4s ease, border-bottom 0.4s ease",
        }}
      >
        {/* Logo / Names */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); handleLink("#hero"); }}
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(22px, 3.5vw, 28px)",
            color: textColor,
            textDecoration: "none",
            transition: "color 0.3s ease",
            letterSpacing: "1px",
            lineHeight: 1,
          }}
        >
          M & JC
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: "clamp(16px, 2.5vw, 32px)",
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={e => { e.preventDefault(); handleLink(link.href); }}
              style={{
                fontFamily: "'Cormorant Upright', serif",
                fontSize: "clamp(12px, 1.2vw, 14px)",
                letterSpacing: "2px",
                color: textColor,
                transition: "color 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className={`hamburger ${menuOpen ? "open" : ""}`}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "none",
          }}
          aria-label="Menú"
        >
          <span style={{ background: textColor, transition: "background 0.3s ease" }} />
          <span style={{ background: textColor, transition: "background 0.3s ease" }} />
          <span style={{ background: textColor, transition: "background 0.3s ease" }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0, right: 0,
          width: "min(300px, 85vw)",
          height: "100vh",
          zIndex: 300,
          background: "linear-gradient(160deg, #fefefe 0%, #fbf8f0 40%, #f8f4ea 100%)",
          borderLeft: "1px solid rgba(201,169,110,0.3)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.77,0,0.175,1)",
          display: "flex",
          flexDirection: "column",
          padding: "80px 32px 40px",
          boxShadow: menuOpen ? "-8px 0 40px rgba(0,0,0,0.12)" : "none",
        }}
      >
        {/* Gold ornament */}
        <div style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: "36px",
          color: "#c9a96e",
          marginBottom: "8px",
          lineHeight: 1,
        }}>M & JC</div>
        <div style={{
          width: "40px", height: "1px",
          background: "linear-gradient(to right, #c9a96e, transparent)",
          marginBottom: "32px",
        }} />

        {links.map(link => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-link"
            onClick={e => { e.preventDefault(); handleLink(link.href); }}
            style={{
              fontFamily: "'Cormorant Upright', serif",
              fontSize: "16px",
              letterSpacing: "2px",
              color: "#5a3e20",
            }}
          >
            {link.label}
          </a>
        ))}

        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: "auto",
            background: "none",
            border: "1px solid rgba(201,169,110,0.4)",
            color: "#a89070",
            fontFamily: "'Cormorant Upright', serif",
            fontSize: "11px",
            letterSpacing: "3px",
            padding: "10px 0",
            cursor: "pointer",
            textTransform: "uppercase",
          }}
        >
          Cerrar
        </button>
      </div>

      {/* Backdrop overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: "fixed", inset: 0,
          zIndex: 250,
          background: "rgba(0,0,0,0.3)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: block !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}
