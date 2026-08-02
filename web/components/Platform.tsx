"use client";

type IconFn = (props: { size: number; color?: string }) => React.ReactElement;

function BrainIcon({ size, color }: { size: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color ?? "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function EyeIcon({ size, color }: { size: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color ?? "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const features: { icon: IconFn; title: string; desc: string }[] = [
  { icon: EyeIcon,   title: "Full-Stack Observability",   desc: "Unified visibility across infra, app, and business metrics in a single pane." },
  { icon: BrainIcon, title: "AI Root Cause Analysis",     desc: "ML models surface the actual cause — not just the symptom — in seconds." },
  {
    icon: ({ size, color }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color ?? "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: "Intelligent Alerting",
    desc: "Context-aware alerts that know the difference between noise and an incident.",
  },
  {
    icon: ({ size, color }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color ?? "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
    title: "GitOps Integration",
    desc: "Every infra change tracked, auditable, and reversible via Git workflows.",
  },
  {
    icon: ({ size, color }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color ?? "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Cost Visibility",
    desc: "Real-time spend attribution across teams, services, and cloud accounts.",
  },
  {
    icon: ({ size, color }) => (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color ?? "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Compliance Guardrails",
    desc: "Policy-as-code enforced before deployment — not discovered after.",
  },
];

export default function Platform() {
  return (
    <section id="platform" style={{ background: "#0e1326", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="label">Platform</div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, maxWidth: 640,
          }}>
            Meet <span style={{ color: "#22d3ee" }}>OCCRA</span> —{" "}
            our <span className="italic-accent">AIOps engine</span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 17, maxWidth: 560, lineHeight: 1.7, marginTop: 20 }}>
            OCCRA ingests signals from every layer of your stack and uses AI to eliminate alert fatigue, accelerate incident response, and prevent outages before they happen.
          </p>
        </div>

        {/* Feature grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 1,
          background: "rgba(34,211,238,0.06)",
          border: "1px solid rgba(34,211,238,0.1)",
          borderRadius: 16, overflow: "hidden",
          marginBottom: 48,
        }}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={f.title} style={{
                padding: "32px 28px",
                borderRight: i % 3 !== 2 ? "1px solid rgba(34,211,238,0.08)" : "none",
                borderBottom: i < 3 ? "1px solid rgba(34,211,238,0.08)" : "none",
                display: "flex", gap: 16, alignItems: "flex-start",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(34,211,238,0.04)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <div style={{
                  flexShrink: 0, width: 40, height: 40, borderRadius: 8,
                  border: "1px solid rgba(34,211,238,0.2)", background: "rgba(34,211,238,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon size={18} color="#22d3ee" />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 5 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 24,
          background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.15)",
          borderRadius: 12, padding: "32px 40px",
        }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 }}>Ready to see OCCRA in action?</div>
            <p style={{ color: "#94a3b8", fontSize: 14, margin: 0 }}>Get a personalised demo tailored to your stack and team size.</p>
          </div>
          <a href="#contact" className="btn-primary">Request a Demo →</a>
        </div>
      </div>
    </section>
  );
}
