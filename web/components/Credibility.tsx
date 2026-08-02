const achievements = [
  {
    metric: "₹1.5 Cr",
    label: "Annual AWS Cost Eliminated",
    desc: "Rearchitected compute and storage for a global entertainment conglomerate's India streaming & broadcast division — the broadcast home of Asia Cup cricket in India. Graviton migration, Spot fleet management, and structured reserved capacity planning cut their AWS bill by over ₹1.5 crore a year.",
    tag: "FinOps · Cloud Architecture",
  },
  {
    metric: "Zero Downtime",
    label: "Asia Cup 2025 India vs Pakistan",
    desc: "Designed and operated the mixed Spot + On-Demand Kubernetes infrastructure serving one of cricket's single highest-concurrent-viewer streaming events. Peak traffic, elastic auto-scaling, and cost-optimised — without a single incident during the match.",
    tag: "SRE · Kubernetes · Live Events",
  },
  {
    metric: "17+ Years",
    label: "Production-Grade Infrastructure",
    desc: "Our founder has spent 17+ years building and operating infrastructure at hyperscaler scale — across media, fintech, and enterprise — on AWS, GCP, and Azure. Not advisory experience. Hands-on, in production, under pressure.",
    tag: "Multi-Cloud · Platform Engineering",
  },
];

const founding = [
  { title: "20% below standard rates", sub: "Locked for 12 months" },
  { title: "Niket personally leads", sub: "Direct founder access throughout" },
  { title: "Co-authored case study", sub: "Published on completion" },
  { title: "3 spots only", sub: "Currently 3 slots open" },
];

export default function Credibility() {
  return (
    <section id="credibility" style={{ background: "#07091a", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 20 }}>
          <div className="label">Track Record</div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, maxWidth: 680,
          }}>
            Real Scale. Real Results.{" "}
            <span className="italic-accent">Before Rootstratum.</span>
          </h2>
        </div>
        <p style={{ color: "#64748b", fontSize: 15, maxWidth: 620, marginBottom: 64, lineHeight: 1.7 }}>
          We haven't launched with a polished client list — we're building that with you.
          What we bring is 17+ years of hands-on experience at production scale, with numbers that speak plainly.
        </p>

        {/* Achievement cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 1, background: "rgba(34,211,238,0.06)",
          border: "1px solid rgba(34,211,238,0.1)", borderRadius: 16, overflow: "hidden",
          marginBottom: 64,
        }}>
          {achievements.map((a, i) => (
            <div key={i} style={{
              padding: "40px 36px",
              borderRight: i < achievements.length - 1 ? "1px solid rgba(34,211,238,0.08)" : "none",
            }}>
              <div style={{
                fontSize: "clamp(32px, 4vw, 44px)", fontWeight: 900,
                color: "#22d3ee", letterSpacing: "-1.5px", lineHeight: 1, marginBottom: 8,
              }}>{a.metric}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#f1f5f9", marginBottom: 16 }}>{a.label}</div>
              <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.75, marginBottom: 20 }}>{a.desc}</p>
              <div style={{
                display: "inline-block", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#22d3ee", background: "rgba(34,211,238,0.08)",
                border: "1px solid rgba(34,211,238,0.15)", borderRadius: 4, padding: "4px 10px",
              }}>{a.tag}</div>
            </div>
          ))}
        </div>

        {/* Founding client callout */}
        <div style={{
          background: "rgba(34,211,238,0.04)",
          border: "1px solid rgba(34,211,238,0.2)",
          borderRadius: 16, padding: "48px 56px",
          backgroundImage: "radial-gradient(ellipse at 80% 50%, rgba(34,211,238,0.07) 0%, transparent 60%)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, alignItems: "center" }}>
            <div style={{ maxWidth: 520 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#22d3ee", background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.25)", borderRadius: 999, padding: "5px 14px",
                marginBottom: 20,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22d3ee", display: "inline-block", animation: "pulse 2s infinite" }} />
                Founding Client Spots — 3 Remaining
              </div>
              <h3 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 900, letterSpacing: "-0.8px", color: "#f1f5f9", lineHeight: 1.15, marginBottom: 16 }}>
                Be one of our first three clients.<br />
                <span className="italic-accent">Get terms we won't offer again.</span>
              </h3>
              <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.75, marginBottom: 0 }}>
                We're selectively working with a small number of founding clients who want
                direct access to senior engineers, not account managers — and who are willing
                to grow with us as we grow with them.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 260 }}>
              {founding.map(f => (
                <div key={f.title} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ color: "#22d3ee", fontWeight: 900, fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9" }}>{f.title}</div>
                    <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{f.sub}</div>
                  </div>
                </div>
              ))}
              <a href="#contact-form"
                className="btn-primary"
                style={{ marginTop: 8, alignSelf: "flex-start" }}>
                Apply for a Founding Spot →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 900px) {
          #credibility .achieve-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
