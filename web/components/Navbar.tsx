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
      background: scrolled ? "rgba(237,241,245,0.92)" : "rgba(237,241,245,0.7)",
      backdropFilter: "blur(16px)",
      borderBottom: scrolled ? "1px solid rgba(15,22,35,0.1)" : "1px solid transparent",
      transition: "all 0.3s",
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", height: 64 }}>

        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          <img src="/logo.png" alt="RootStratum" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover" }} />
          <span style={{ fontWeight: 800, fontSize: 16, color: "#0f1623", letterSpacing: "-0.4px" }}>
            RootStratum
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", gap: 36, alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} style={{
              fontSize: 14, fontWeight: 500, color: "#4b5563",
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0f1623")}
              onMouseLeave={e => (e.currentTarget.style.color = "#4b5563")}
            >{n.label}</a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact-form" className="btn-primary" style={{ fontSize: 13, padding: "10px 20px" }}>
          Let&apos;s Connect
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ display: "none", marginLeft: 16, background: "none", border: "none", cursor: "pointer", color: "#0f1623", padding: 6 }}
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
          background: "#edf1f5", borderTop: "1px solid rgba(15,22,35,0.08)",
          padding: "20px 28px 28px",
        }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)} style={{
              display: "block", padding: "12px 0",
              fontSize: 15, fontWeight: 500, color: "#4b5563",
              textDecoration: "none",
              borderBottom: "1px solid rgba(15,22,35,0.06)",
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
