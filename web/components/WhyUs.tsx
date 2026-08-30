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
    <section id="why-us" style={{ background: "#f4f7fa", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="label">Why Rootstratum</div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#0f1623", lineHeight: 1.1, maxWidth: 640,
          }}>
            Built for teams that can&apos;t afford to get{" "}
            <span className="italic-accent">infrastructure wrong</span>
          </h2>
        </div>

        {/* Pillars */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 24 }}>
          {pillars.map((p) => (
            <div key={p.number} style={{
              background: "#ffffff",
              border: "1px solid rgba(15,22,35,0.08)",
              borderRadius: 14, padding: "28px 24px",
              transition: "box-shadow 0.2s, border-color 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(13,148,136,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(13,148,136,0.2)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(15,22,35,0.08)";
              }}
            >
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
                color: "#0d9488", marginBottom: 14,
              }}>{p.number}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f1623", marginBottom: 10, lineHeight: 1.3, letterSpacing: "-0.2px" }}>{p.title}</h3>
              <p style={{ color: "#4b5563", fontSize: 14, lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          background: "#ffffff",
          border: "1px solid rgba(15,22,35,0.08)",
          borderRadius: 16,
          overflow: "hidden",
        }}>
          <div style={{ padding: "48px 48px", borderRight: "1px solid rgba(15,22,35,0.06)" }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#0f1623", marginBottom: 8, letterSpacing: "-0.5px" }}>
              What makes us different
            </h3>
            <p style={{ color: "#4b5563", fontSize: 15, lineHeight: 1.65 }}>
              We don&apos;t just hand over a Terraform repo and disappear. We stay embedded until your team is confident and your systems are stable.
            </p>
          </div>
          <div style={{ padding: "36px 40px", display: "flex", flexDirection: "column", gap: 14, justifyContent: "center" }}>
            {differentiators.map((d) => (
              <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <CheckCircle2 size={16} color="#0d9488" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.5 }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          #why-us .diff-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
