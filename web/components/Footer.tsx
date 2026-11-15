"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#07091a", borderTop: "1px solid rgba(34,211,238,0.08)", padding: "64px 28px 36px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <img src="/logo.svg" alt="RootStratum" style={{ width: 38, height: 38, flexShrink: 0, alignSelf: "center" }} />
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
            <div style={{ marginTop: 18 }}>
              <a
                href="https://www.linkedin.com/company/rootstratum"
                target="_blank" rel="noopener noreferrer"
                aria-label="RootStratum on LinkedIn" title="Follow RootStratum on LinkedIn"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 36, height: 36, borderRadius: 8,
                  border: "1px solid rgba(34,211,238,0.25)", color: "#22d3ee",
                  fontSize: 15, fontWeight: 800, letterSpacing: "-0.5px",
                  textDecoration: "none", transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#22d3ee"; e.currentTarget.style.color = "#07091a"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#22d3ee"; }}
              >in</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#f1f5f9", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>Services</div>
            {["DevOps Engineering", "DevSecOps", "Cloud Architecture", "Cloud Migration", "Cost Optimisation", "AIOps (Helios)"].map(l => (
              <a key={l} href="#services" style={{
                display: "block", color: "#475569", fontSize: 13,
                textDecoration: "none", marginBottom: 10, transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
              >{l}</a>
            ))}
            <a href="#kanvas" style={{
              display: "block", color: "#475569", fontSize: 13,
              textDecoration: "none", marginBottom: 10, transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
            >Kanvas</a>
          </div>

          {/* Engage */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#f1f5f9", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 18 }}>Engage</div>
            {["Cloud Cost Audit", "Fixed-Scope Project", "Time & Materials", "Managed Services", "Book a Consultation"].map(l => (
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
            <a href="https://www.linkedin.com/company/rootstratum" target="_blank" rel="noopener noreferrer" style={{ display: "block", color: "#475569", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#94a3b8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#475569")}
            >LinkedIn — RootStratum</a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid rgba(34,211,238,0.07)",
          paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 12, color: "#334155" }}>© 2026 RootStratum. All rights reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="/privacy" style={{ fontSize: 12, color: "#334155", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ fontSize: 12, color: "#334155", textDecoration: "none" }}>Terms of Service</Link>
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
