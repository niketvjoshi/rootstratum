const highlights = [
  {
    title: "OTT-Scale Experience",
    desc: "Our team has built infrastructure serving millions of concurrent users during live cricket events and high-stakes media streams — zero tolerance for downtime.",
  },
  {
    title: "FinOps Champions",
    desc: "Our engineers have reduced cloud spend by 40%+ for multiple clients through Graviton migrations, Spot fleet management, and structured reserved capacity planning.",
  },
  {
    title: "AI-Driven Operations",
    desc: "We built OCCRA — our own AIOps platform — on top of Claude LLM and MCP Servers, and run ML-powered auto-scaling that predicts traffic before it spikes.",
  },
];

const expertise = [
  { label: "Platform Engineering",          sub: "IDP · Backstage · Port" },
  { label: "Multi-Cloud Architecture",       sub: "AWS · GCP · Azure" },
  { label: "Kubernetes & Container Ops",     sub: "EKS · GKE · AKS" },
  { label: "CI/CD & GitOps",                sub: "Jenkins · ArgoCD" },
  { label: "Infrastructure as Code",         sub: "Terraform · Helm" },
  { label: "Observability Stack",            sub: "LGTM · Prometheus" },
  { label: "Cloud Security & Compliance",    sub: "IAM · WAF · Vault" },
  { label: "FinOps & Cost Optimisation",     sub: "30–60% savings" },
];

const team = [
  { role: "Platform Engineering Lead",   bg: "10+ yrs — EKS, IDP, Backstage" },
  { role: "Cloud Architect",             bg: "AWS SA Pro — multi-cloud landing zones" },
  { role: "DevOps & SRE Engineer",       bg: "GitOps, Prometheus, incident mgmt" },
  { role: "FinOps Specialist",           bg: "Graviton, Spot fleets, cost governance" },
  { role: "Security Engineer",           bg: "Zero-trust, SOC2, AWS Control Tower" },
  { role: "AIOps Engineer",              bg: "ML scaling, OCCRA, OpenTelemetry" },
];

export default function About() {
  return (
    <section id="about" style={{ background: "#07091a", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Top — story + expertise */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "flex-start", marginBottom: 80 }}>

          {/* Left */}
          <div>
            <div className="label">About Us</div>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900,
              letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, marginBottom: 24,
            }}>
              A specialist team built for{" "}
              <span className="italic-accent">production-grade infrastructure</span>
            </h2>
            <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
              Rootstratum is a team of senior cloud and platform engineers who have spent years operating infrastructure at hyperscaler scale. We&apos;ve seen what breaks under pressure — and we build systems that don&apos;t.
            </p>
            <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
              Our engineers bring deep specialisations across platform engineering, cloud architecture, SRE, FinOps, and AIOps — so every engagement gets the right expert, not a generalist wearing multiple hats.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">Work with Our Team</a>
              <a href="#services" className="btn-outline">View All Services</a>
            </div>

            {/* Highlights */}
            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 24 }}>
              {highlights.map(h => (
                <div key={h.title} style={{ borderLeft: "2px solid #22d3ee", paddingLeft: 20 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#f1f5f9", marginBottom: 5 }}>{h.title}</div>
                  <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.65 }}>{h.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — expertise grid */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#475569", marginBottom: 8 }}>
              Core Expertise
            </div>
            <p style={{ fontSize: 13, color: "#64748b", marginBottom: 24 }}>Expert-level execution across the full cloud-native stack</p>
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(34,211,238,0.1)", borderRadius: 12, overflow: "hidden" }}>
              {expertise.map((e, i) => (
                <div key={e.label} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "14px 20px",
                  borderBottom: i < expertise.length - 1 ? "1px solid rgba(34,211,238,0.08)" : "none",
                  background: "rgba(34,211,238,0.02)",
                }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#cbd5e1" }}>{e.label}</span>
                  <span style={{ fontSize: 11, color: "#475569", fontWeight: 500 }}>{e.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team grid */}
        <div>
          <div style={{ marginBottom: 32 }}>
            <div className="label">Our Team</div>
            <h3 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, letterSpacing: "-1px", color: "#f1f5f9", lineHeight: 1.15 }}>
              Specialists, not generalists
            </h3>
            <p style={{ color: "#94a3b8", fontSize: 15, marginTop: 10, maxWidth: 520 }}>
              Each client engagement is staffed with engineers who have deep domain expertise in what you actually need — not whoever is available.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
            gap: 1, background: "rgba(34,211,238,0.06)",
            border: "1px solid rgba(34,211,238,0.1)", borderRadius: 14, overflow: "hidden",
          }}>
            {team.map((m, i) => (
              <div key={m.role} style={{
                padding: "24px 24px",
                borderRight: "1px solid rgba(34,211,238,0.08)",
                borderBottom: "1px solid rgba(34,211,238,0.08)",
                display: "flex", alignItems: "flex-start", gap: 14,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: `hsl(${190 + i * 20}, 60%, 18%)`,
                  border: "1px solid rgba(34,211,238,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: "#22d3ee", flexShrink: 0,
                }}>
                  {m.role.split(" ").map(w => w[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{m.role}</div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>{m.bg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          #about > div > div:first-child { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
