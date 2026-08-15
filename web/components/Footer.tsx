"use client";
export default function Footer() {
  return (
    <footer style={{ background: "#07091a", borderTop: "1px solid rgba(34,211,238,0.08)", padding: "64px 28px 36px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <svg width="42" height="42" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="ftr-lc"><circle cx="100" cy="100" r="92"/></clipPath>
                  <filter id="ftr-rg" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                <circle cx="100" cy="100" r="92" fill="#07101c"/>
                <g clipPath="url(#ftr-lc)">
                  <rect x="5" y="5" width="190" height="112" fill="#0d1828"/>
                  <path d="M5 70 L5 56 L24 40 L40 55 L54 36 L66 51 L76 34 L88 49 L96 26 L102 44 L110 28 L120 47 L132 32 L144 51 L158 36 L170 54 L184 38 L195 56 L195 70 Z" fill="#1a2840"/>
                  <path d="M5 68 Q32 63 58 68 Q84 73 110 67 Q136 61 162 66 Q180 69 195 65 L195 80 Q180 84 162 80 Q136 75 110 81 Q84 87 58 81 Q32 76 5 80 Z" fill="#1c2c44"/>
                  <path d="M5 79 Q32 74 58 79 Q84 85 110 79 Q136 73 162 79 Q180 82 195 78 L195 92 Q180 96 162 92 Q136 87 110 93 Q84 99 58 92 Q32 87 5 92 Z" fill="#162440"/>
                  <path d="M5 91 Q30 87 58 92 Q86 97 114 91 Q142 85 168 91 Q183 93 195 90 L195 104 Q183 107 168 104 Q142 98 114 104 Q86 110 58 104 Q30 99 5 104 Z" fill="#10203a"/>
                  <path d="M5 103 Q30 99 58 103 Q86 108 114 103 Q142 97 168 103 Q183 105 195 102 L195 116 L5 116 Z" fill="#0b1830"/>
                </g>
                <g clipPath="url(#ftr-lc)" filter="url(#ftr-rg)" stroke="#22d3ee" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
              <span style={{ fontWeight: 800, fontSize: 16, color: "#f1f5f9" }}>
                rootstratum
              </span>
            </div>
            <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.75, maxWidth: 280, marginBottom: 20 }}>
              Your trusted partner for Cloud Architecture, DevOps, DevSecOps, and AIOps. A specialist team with deep, production-grade expertise across AWS, GCP and Azure.
            </p>
            <a href="mailto:sales@rootstratum.com" style={{ fontSize: 13, color: "#22d3ee", textDecoration: "none" }}>
              sales@rootstratum.com
            </a>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#f1f5f9", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>Services</div>
            {["DevOps Engineering", "DevSecOps", "Cloud Architecture", "Cloud Migration", "Cost Optimisation", "AIOps (OCCRA)"].map(l => (
              <a key={l} href="#services" style={{
                display: "block", color: "#475569", fontSize: 13,
                textDecoration: "none", marginBottom: 10, transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
              >{l}</a>
            ))}
          </div>

          {/* Engage */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#f1f5f9", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>Engage</div>
            {["Fixed-Scope Project", "Monthly Retainer", "Fractional Head of Platform", "Book a Consultation"].map(l => (
              <a key={l} href="#engagement" style={{
                display: "block", color: "#475569", fontSize: 13,
                textDecoration: "none", marginBottom: 10, transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
              >{l}</a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#f1f5f9", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>Contact</div>
            <a href="mailto:sales@rootstratum.com" style={{ display: "block", color: "#475569", fontSize: 13, textDecoration: "none", marginBottom: 10 }}>
              sales@rootstratum.com
            </a>
            <a href="#contact-form" style={{ display: "block", color: "#475569", fontSize: 13, textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
            >Send a Message</a>
            <a href="https://www.linkedin.com/in/niket-joshi-03b3a524/" target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "#475569", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
            >LinkedIn — Niket Joshi</a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid rgba(34,211,238,0.07)",
          paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 12, color: "#334155" }}>© 2026 Rootstratum. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy", "Terms of Service"].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: "#334155", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
