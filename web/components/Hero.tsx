"use client";
import { useEffect, useState } from "react";

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
  cmd:     "#0d9488",
  comment: "#94a3b8",
  out:     "#059669",
  warn:    "#d97706",
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
      overflow: "hidden", background: "#edf1f5",
    }}>
      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: "linear-gradient(rgba(13,148,136,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(13,148,136,0.04) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      {/* Soft glow */}
      <div style={{ position: "absolute", top: "10%", right: "-8%", width: 640, height: 640, borderRadius: "50%", background: "radial-gradient(circle,rgba(13,148,136,0.06) 0%,transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(13,148,136,0.04) 0%,transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "120px 28px 80px", position: "relative", zIndex: 1, width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 72, alignItems: "center" }}>

          {/* ── Left: copy ── */}
          <div>
            <div className="fade-up" style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#0d9488" }}>
                Cloud · DevOps · DevSecOps · Platform Engineering · AIOps &nbsp;·&nbsp; India &amp; Global
              </span>
            </div>

            <h1 className="fade-up d1" style={{
              fontSize: "clamp(48px, 6.5vw, 84px)", fontWeight: 900,
              lineHeight: 1.0, letterSpacing: "-3px", color: "#0f1623", marginBottom: 28,
            }}>
              Ship Faster.<br />
              Scale <span className="italic-accent">Smarter.</span><br />
              Spend <span className="italic-accent">Less.</span>
            </h1>

            <p className="fade-up d2" style={{ fontSize: 17, color: "#4b5563", lineHeight: 1.75, maxWidth: 480, marginBottom: 40 }}>
              A team of senior cloud and DevOps engineers helping businesses build, migrate, and operate infrastructure at scale — across India and globally.
            </p>

            <div className="fade-up d3" style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 64 }}>
              <a href="#contact-form" className="btn-primary">Let&apos;s Connect →</a>
              <a href="#services" className="btn-outline">View Services</a>
            </div>

            {/* Stats */}
            <div className="fade-up d4" style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(15,22,35,0.1)", paddingTop: 36, flexWrap: "wrap" }}>
              {[
                { value: "17+",    label: "Years of Experience" },
                { value: "3",      label: "Cloud Platforms" },
                { value: "₹1.5Cr", label: "AWS Cost Eliminated" },
                { value: "99.99%", label: "Uptime SLA" },
              ].map((s, i) => (
                <div key={i} style={{
                  flex: "1 1 120px", paddingRight: 32,
                  borderRight: i < 3 ? "1px solid rgba(15,22,35,0.1)" : "none",
                  paddingLeft: i > 0 ? 32 : 0,
                }}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#0d9488", letterSpacing: "-1px", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 5, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: terminal ── */}
          <div className="fade-up d2" style={{
            background: "#1a2235",
            borderRadius: 16,
            boxShadow: "0 32px 80px rgba(15,22,35,0.18), 0 0 0 1px rgba(255,255,255,0.06)",
            overflow: "hidden",
          }}>
            {/* Title bar */}
            <div style={{
              background: "#222f47",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "13px 20px",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e", display: "inline-block" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840", display: "inline-block" }} />
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
                    <><span style={{ color: "#0d9488", marginRight: 8 }}>$</span><span style={{ color: "#94a3b8" }}>{line.text}</span></>
                  )}
                  {line.type !== "cmd" && line.text}
                </div>
              ))}
              {visible < LINES.length && (
                <div>
                  <span style={{ color: "#0d9488", marginRight: 8 }}>$</span>
                  <span className="terminal-cursor" />
                </div>
              )}
              {visible >= LINES.length && (
                <div style={{ marginTop: 4 }}>
                  <span style={{ color: "#0d9488", marginRight: 8 }}>$</span>
                  <span className="terminal-cursor" />
                </div>
              )}
            </div>
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
