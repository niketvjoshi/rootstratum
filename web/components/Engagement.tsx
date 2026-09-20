const plans = [
  {
    emoji: "🎯",
    name: "Fixed-Scope Project",
    meta: "One-time · 2–12 weeks",
    desc: "Defined deliverable, fixed timeline and agreed price. Perfect for migrations, CI/CD builds, K8s cluster setups or cost optimisation sprints.",
    bullets: [
      "Clear SOW with acceptance criteria",
      "Weekly progress reports",
      "Full handover with runbooks",
      "30-day post-delivery support",
    ],
    cta: "Get a Quote →",
    popular: false,
  },
  {
    emoji: "🔄",
    name: "Monthly Retainer",
    meta: "Ongoing · Rolling monthly",
    desc: "Your infrastructure never stands still. Get a dedicated Senior DevOps / Cloud engineer embedded with your team — planning, execution and on-call escalation.",
    bullets: [
      "Dedicated async-first engineer",
      "Up to 60 hours / month",
      "Incident escalation support",
      "Monthly architecture review",
      "Cancel with 30-day notice",
    ],
    cta: "Start Conversation →",
    popular: true,
  },
  {
    emoji: "🏗️",
    name: "Fractional Head of Platform",
    meta: "Strategic · 1–2 days / week",
    desc: "For startups and scale-ups that need senior platform leadership without the full-time overhead. Own your platform roadmap, vendor decisions and team upskilling.",
    bullets: [
      "Platform roadmap ownership",
      "Hiring & vendor advisory",
      "Engineering team mentoring",
      "Board / CTO reporting",
    ],
    cta: "Let's Talk →",
    popular: false,
  },
  {
    emoji: "⚙️",
    name: "Managed Services",
    meta: "Ongoing · SLA-backed",
    desc: "We run your cloud and platform infrastructure end-to-end — monitoring, incident response, patching, and continuous optimisation — so your team can focus on product.",
    bullets: [
      "24×7 monitoring & alerting",
      "Incident response & RCA",
      "Patch management & upgrades",
      "Monthly cost & security review",
      "Defined SLA with escalation path",
    ],
    cta: "Discuss Requirements →",
    popular: false,
  },
  {
    emoji: "🕐",
    name: "Time & Materials",
    meta: "Flexible · Pay as you go",
    desc: "Need expert hours without a long commitment? Engage us on a T&M basis for audits, troubleshooting, architecture reviews, or ad-hoc engineering work.",
    bullets: [
      "Billed per hour, no minimums",
      "Senior engineer on every ticket",
      "Ideal for one-off audits & reviews",
      "Quick start — no long SOW needed",
    ],
    cta: "Get a Quote →",
    popular: false,
  },
];

export default function Engagement() {
  return (
    <section id="engagement" style={{ background: "#07091a", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="label">Engagement Models</div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, maxWidth: 640,
          }}>
            Flexible Ways to{" "}
            <span className="italic-accent">Work Together</span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 17, lineHeight: 1.7, marginTop: 16, maxWidth: 560 }}>
            Whether you need a focused project sprint, ongoing expert support, or embedded platform leadership — we have an engagement that fits.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {plans.map(p => (
            <div key={p.name} style={{
              background: p.popular ? "rgba(34,211,238,0.05)" : "rgba(14,19,38,0.8)",
              border: p.popular ? "1px solid rgba(34,211,238,0.4)" : "1px solid rgba(34,211,238,0.1)",
              borderRadius: 14, padding: "36px 32px",
              display: "flex", flexDirection: "column", position: "relative",
            }}>
              {p.popular && (
                <div style={{
                  position: "absolute", top: -13, left: 32,
                  background: "#22d3ee", color: "#07091a",
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "4px 12px", borderRadius: 999,
                }}>Most Popular</div>
              )}

              <div style={{ fontSize: 28, marginBottom: 16 }}>{p.emoji}</div>
              <div style={{ fontSize: 19, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: "#22d3ee", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>{p.meta}</div>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, marginBottom: 24 }}>{p.desc}</p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32, flex: 1 }}>
                {p.bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span style={{ color: "#22d3ee", fontWeight: 700, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "#cbd5e1" }}>{b}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact-form" style={{
                display: "inline-flex", alignItems: "center",
                fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                color: p.popular ? "#07091a" : "#22d3ee",
                background: p.popular ? "#22d3ee" : "transparent",
                border: p.popular ? "none" : "1px solid rgba(34,211,238,0.3)",
                borderRadius: 6, padding: "12px 20px", textDecoration: "none",
                transition: "all 0.2s",
              }}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
