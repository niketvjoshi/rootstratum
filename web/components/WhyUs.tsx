import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Infrastructure-first thinking",
    desc: "We don't retrofit security, reliability, or observability. We design them into every layer from day one — before a single resource is provisioned.",
  },
  {
    number: "02",
    title: "Automation over manual effort",
    desc: "Everything we build is code. Infrastructure, compliance policies, runbooks — all version-controlled, reproducible, and auditable.",
  },
  {
    number: "03",
    title: "SRE principles at every layer",
    desc: "SLOs, error budgets, and blameless postmortems are standard practice. We measure reliability the way it matters to your users.",
  },
  {
    number: "04",
    title: "Cost consciousness built in",
    desc: "Every architecture decision is evaluated for cost impact. We help you scale without letting your cloud bill scale with you.",
  },
];

const differentiators = [
  "Multi-cloud expertise across AWS, GCP, and Azure",
  "Open-source tooling — no lock-in to proprietary platforms",
  "Embedded team model — we work inside your Slack and Jira",
  "24/7 on-call support with documented runbooks",
  "Knowledge transfer included — we don't create dependencies",
  "Outcome-based pricing available for qualified engagements",
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: "#050b18", padding: "100px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Why Rootstratum</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px", color: "#f1f5f9", marginBottom: 16 }}>
            Built for teams that can&apos;t
            <br />
            <span className="gradient-text">afford to get infrastructure wrong</span>
          </h2>
        </div>

        {/* Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, marginBottom: 72 }}>
          {pillars.map((p) => (
            <div key={p.number} className="gradient-border-card" style={{ borderRadius: 14, padding: "28px 24px" }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                color: "#3b82f6", marginBottom: 14, fontVariantNumeric: "tabular-nums"
              }}>{p.number}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 10, lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          background: "#0d1f3c",
          border: "1px solid rgba(59,130,246,0.18)",
          borderRadius: 16,
          overflow: "hidden",
        }}>
          <div style={{ padding: "48px 48px", borderRight: "1px solid rgba(59,130,246,0.12)" }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>
              What makes us different
            </h3>
            <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.65, marginBottom: 0 }}>
              We don&apos;t just hand over a Terraform repo and disappear. We stay embedded until your team is confident and your systems are stable.
            </p>
          </div>
          <div style={{ padding: "36px 40px", display: "flex", flexDirection: "column", gap: 14, justifyContent: "center" }}>
            {differentiators.map((d) => (
              <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <CheckCircle2 size={16} color="#3b82f6" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 14, color: "#cbd5e1", lineHeight: 1.5 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
