"use client";
import { useState, useEffect } from "react";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Process",  href: "#process" },
  { label: "Platform", href: "#platform" },
  { label: "About",    href: "#about" },
  { label: "Team",     href: "#founding-team" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(7,9,26,0.94)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(34,211,238,0.1)" : "1px solid transparent",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", height: 68 }}>

        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/logo.png" alt="RootStratum" width="44" height="44" style={{ borderRadius: "50%", display: "block" }} />
          <span style={{ fontWeight: 800, fontSize: 16, color: "#22d3ee", letterSpacing: "-0.3px" }}>
            RootStratum
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 32, alignItems: "center", margin: "0 auto" }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} style={{
              fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#64748b", textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f1f5f9")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}
            >{n.label}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact-form" style={{
          fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
          color: "#22d3ee", textDecoration: "none",
          border: "1px solid rgba(34,211,238,0.4)", borderRadius: 6,
          padding: "10px 18px", transition: "all 0.2s", whiteSpace: "nowrap",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(34,211,238,0.1)"; e.currentTarget.style.borderColor = "#22d3ee"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)"; }}
        >
          Let&apos;s Connect
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ display: "none", marginLeft: 16, background: "none", border: "none", cursor: "pointer", color: "#f1f5f9", padding: 6 }}
          className="nav-mobile-btn"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
            {open
              ? <><line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" /></>
              : <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "rgba(7,9,26,0.98)", borderTop: "1px solid rgba(34,211,238,0.08)",
          padding: "20px 28px 28px",
        }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "12px 0",
              fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#64748b", textDecoration: "none",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>{n.label}</a>
          ))}
          <a href="#contact-form" className="btn-primary" style={{ marginTop: 20, display: "inline-flex" }}>
            Let&apos;s Connect
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-mobile-btn { display: block !important; }
          nav > div > div:nth-child(2) { display: none !important; }
          nav > div > a:last-of-type { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
