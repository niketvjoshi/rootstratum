"use client";
export default function Footer() {
  return (
    <footer style={{ background: "#07091a", borderTop: "1px solid rgba(34,211,238,0.08)", padding: "64px 28px 36px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 42, height: 42, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                <img src="/logo.png" alt="RootStratum" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <span style={{ fontWeight: 800, fontSize: 16, color: "#22d3ee" }}>
                RootStratum
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
