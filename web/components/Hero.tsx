"use client";
import { useEffect, useState } from "react";

const LOGOS = [
  "Amazon Web Services", "Google Cloud", "Microsoft Azure", "Kubernetes",
  "Terraform", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana",
  "New Relic", "PostgreSQL", "Redis", "Docker", "Helm",
];

type LineType = "cmd" | "comment" | "out" | "warn";
const LINES: { type: LineType; text: string }[] = [
  { type: "cmd",     text: "./platform-audit.sh --env prod" },
  { type: "comment", text: "# Scanning Kubernetes platform..." },
  { type: "out",     text: "✓ EKS cluster: rs-platform-prod (ap-south-1)" },
  { type: "out",     text: "✓ Karpenter node groups: 4 active" },
  { type: "comment", text: "# Checking developer platform health..." },
  { type: "out",     text: "✓ ArgoCD apps: 18 / 18 healthy" },
  { type: "out",     text: "✓ IDP (Backstage): 34 services registered" },
  { type: "comment", text: "# Analysing cost opportunities..." },
  { type: "out",     text: "✓ Graviton migration: -41% compute cost" },
  { type: "out",     text: "✓ Spot workloads: -63% on batch jobs" },
  { type: "comment", text: "# OCCRA AIOps scan complete..." },
  { type: "out",     text: "✓ Alert noise reduced: 87% fewer pages" },
  { type: "warn",    text: "⚠ 3 nodes over-provisioned → save $420/mo" },
];

const COLOR: Record<LineType, string> = {
  cmd:     "#22d3ee",
  comment: "#475569",
  out:     "#00ffa3",
  warn:    "#fbbf24",
};

export default function Hero() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= LINES.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), visible === 0 ? 600 : 220);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", justifyContent: "center",
      overflow: "hidden", background: "#07091a",
    }}>
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(34,211,238,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.04) 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Glows */}
      <div style={{ position: "absolute", top: "5%", left: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(34,211,238,0.07) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(14,116,144,0.08) 0%,transparent 65%)", pointerEvents: "none" }} />

      {/* Two-column content */}
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px 28px 60px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 64, alignItems: "center" }}>

          {/* ── Left: copy ── */}
          <div>
            <div className="fade-up" style={{ marginBottom: 28 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#94a3b8" }}>
                <span style={{ color: "#22d3ee", marginRight: 10 }}>●</span>
                Cloud · DevOps · DevSecOps · Platform Engineering · AIOps &nbsp;·&nbsp; India &amp; Global
              </span>
            </div>

            <h1 className="fade-up d1" style={{
              fontSize: "clamp(48px, 6.5vw, 88px)", fontWeight: 900,
              lineHeight: 1.0, letterSpacing: "-3px", color: "#f1f5f9", marginBottom: 28,
            }}>
              Ship Faster.<br />
              Scale <span className="italic-accent">Smarter.</span><br />
              Spend <span className="italic-accent">Less.</span>
            </h1>

            <p className="fade-up d2" style={{ fontSize: 17, color: "#94a3b8", lineHeight: 1.75, maxWidth: 500, marginBottom: 40 }}>
              A team of senior cloud and platform engineers helping businesses build, migrate, and operate infrastructure at scale — across India and globally.
            </p>

            <div className="fade-up d3" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 64 }}>
              <a href="#contact-form" className="btn-primary">Let&apos;s Connect →</a>
              <a href="#services" className="btn-outline">View Services</a>
            </div>

            {/* Stats */}
            <div className="fade-up d4" style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(34,211,238,0.1)", paddingTop: 36, flexWrap: "wrap" }}>
              {[
                { value: "16+",    label: "Years of Experience" },
                { value: "50+",    label: "Projects Delivered" },
                { value: "40%",    label: "Avg. Cloud Cost Saved" },
                { value: "99.99%", label: "Uptime Guaranteed" },
              ].map((s, i) => (
                <div key={i} style={{
                  flex: "1 1 120px", paddingRight: 32,
                  borderRight: i < 3 ? "1px solid rgba(34,211,238,0.1)" : "none",
                  paddingLeft: i > 0 ? 32 : 0,
                }}>
                  <div style={{ fontSize: 30, fontWeight: 900, color: "#22d3ee", letterSpacing: "-1px", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 5, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: terminal ── */}
          <div className="fade-up d2" style={{
            background: "rgb(22,29,43)",
            border: "1px solid rgba(99,179,237,0.1)",
            borderRadius: 20,
            boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,211,238,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
            overflow: "hidden",
          }}>
            {/* Title bar */}
            <div style={{
              background: "rgb(30,42,61)",
              borderBottom: "1px solid rgba(99,179,237,0.1)",
              padding: "13px 20px",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
              <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
              <span style={{
                marginLeft: 12,
                fontFamily: "var(--font-mono, 'Space Mono', monospace)",
                fontSize: 12, color: "#64748b", fontWeight: 400,
              }}>platform-audit.sh</span>
            </div>

            {/* Body */}
            <div style={{
              padding: "20px 24px",
              fontFamily: "var(--font-mono, 'Space Mono', monospace)",
              fontSize: 12, lineHeight: "22px",
              minHeight: 340,
            }}>
              {LINES.slice(0, visible).map((line, i) => (
                <div key={i} style={{ color: COLOR[line.type], marginBottom: 1 }}>
                  {line.type === "cmd" && (
                    <><span style={{ color: "#22d3ee", marginRight: 8 }}>$</span><span style={{ color: "#94a3b8" }}>{line.text}</span></>
                  )}
                  {line.type !== "cmd" && line.text}
                </div>
              ))}
              {visible < LINES.length && (
                <div>
                  <span style={{ color: "#22d3ee", marginRight: 8 }}>$</span>
                  <span className="terminal-cursor" />
                </div>
              )}
              {visible >= LINES.length && (
                <div style={{ marginTop: 4 }}>
                  <span style={{ color: "#22d3ee", marginRight: 8 }}>$</span>
                  <span className="terminal-cursor" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Logo marquee */}
      <div style={{
        borderTop: "1px solid rgba(34,211,238,0.08)",
        borderBottom: "1px solid rgba(34,211,238,0.08)",
        background: "rgba(34,211,238,0.02)",
        padding: "16px 0",
        overflow: "hidden", position: "relative", zIndex: 1,
      }}>
        <p style={{ textAlign: "center", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#475569", marginBottom: 12 }}>
          Trusted Technologies &amp; Platforms
        </p>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span key={i} style={{
                display: "inline-flex", alignItems: "center", padding: "0 36px",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                color: "#475569", textTransform: "uppercase", whiteSpace: "nowrap",
              }}>
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-terminal { display: none; }
        }
      `}</style>
    </section>
  );
}
