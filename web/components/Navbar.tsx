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
          <svg width="44" height="44" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="nav-lc">
                <circle cx="100" cy="100" r="92"/>
              </clipPath>
              <filter id="nav-rg" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <circle cx="100" cy="100" r="92" fill="#07101c"/>
            <g clipPath="url(#nav-lc)">
              <rect x="5" y="5" width="190" height="112" fill="#0d1828"/>
              {/* Mountain silhouette */}
              <path d="M5 70 L5 56 L24 40 L40 55 L54 36 L66 51 L76 34 L88 49 L96 26 L102 44 L110 28 L120 47 L132 32 L144 51 L158 36 L170 54 L184 38 L195 56 L195 70 Z" fill="#1a2840"/>
              {/* Strata 1 */}
              <path d="M5 68 Q32 63 58 68 Q84 73 110 67 Q136 61 162 66 Q180 69 195 65 L195 80 Q180 84 162 80 Q136 75 110 81 Q84 87 58 81 Q32 76 5 80 Z" fill="#1c2c44"/>
              {/* Strata 2 */}
              <path d="M5 79 Q32 74 58 79 Q84 85 110 79 Q136 73 162 79 Q180 82 195 78 L195 92 Q180 96 162 92 Q136 87 110 93 Q84 99 58 92 Q32 87 5 92 Z" fill="#162440"/>
              {/* Strata 3 */}
              <path d="M5 91 Q30 87 58 92 Q86 97 114 91 Q142 85 168 91 Q183 93 195 90 L195 104 Q183 107 168 104 Q142 98 114 104 Q86 110 58 104 Q30 99 5 104 Z" fill="#10203a"/>
              {/* Strata 4 */}
              <path d="M5 103 Q30 99 58 103 Q86 108 114 103 Q142 97 168 103 Q183 105 195 102 L195 116 L5 116 Z" fill="#0b1830"/>
            </g>
            <g clipPath="url(#nav-lc)" filter="url(#nav-rg)" stroke="#22d3ee" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M100 115 L100 136" strokeWidth="3.5"/>
              <path d="M100 132 Q87 138 70 155" strokeWidth="2.8"/>
              <path d="M100 132 Q113 138 130 155" strokeWidth="2.8"/>
              <path d="M70 155 Q55 163 40 180" strokeWidth="2"/>
              <path d="M70 155 Q65 167 58 184" strokeWidth="1.8"/>
              <path d="M130 155 Q135 167 140 184" strokeWidth="1.8"/>
              <path d="M130 155 Q145 163 160 180" strokeWidth="2"/>
              <path d="M40 180 Q32 188 26 197" strokeWidth="1.2"/>
              <path d="M40 180 Q36 189 33 198" strokeWidth="1.1"/>
              <path d="M58 184 Q52 192 46 200" strokeWidth="1.1"/>
              <path d="M140 184 Q148 192 154 200" strokeWidth="1.1"/>
              <path d="M160 180 Q165 189 167 198" strokeWidth="1.1"/>
              <path d="M160 180 Q168 188 174 197" strokeWidth="1.2"/>
            </g>
            <circle cx="100" cy="100" r="92" fill="none" stroke="#22d3ee" strokeWidth="3"/>
          </svg>
          <span style={{ fontWeight: 800, fontSize: 16, color: "#f1f5f9", letterSpacing: "-0.3px" }}>
            rootstratum
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
