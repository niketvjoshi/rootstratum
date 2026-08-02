const expertise = [
  { label: "DevOps & Platform Engineering",  sub: "CI/CD · GitOps · IDP" },
  { label: "DevSecOps",                      sub: "SAST · DAST · Shift-Left" },
  { label: "Multi-Cloud Architecture",       sub: "AWS · GCP · Azure" },
  { label: "Kubernetes & Container Ops",     sub: "EKS · GKE · AKS" },
  { label: "Infrastructure as Code",         sub: "Terraform · Helm" },
  { label: "Observability Stack",            sub: "LGTM · Prometheus" },
  { label: "Cloud Security & Compliance",    sub: "IAM · WAF · Vault" },
  { label: "FinOps & Cost Optimisation",     sub: "30–60% savings" },
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
              Rootstratum is founded by senior cloud and platform engineers who have spent years
              operating infrastructure at hyperscaler scale. We've seen what breaks under
              pressure — and we build systems that don't.
            </p>
            <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.8, marginBottom: 36 }}>
              We bring deep specialisations across platform engineering, cloud architecture,
              SRE, FinOps, DevSecOps, and AIOps — so every engagement gets the right
              expert, not a generalist wearing multiple hats.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#contact-form" className="btn-primary">Work with Our Team</a>
              <a href="#services" className="btn-outline">View All Services</a>
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

        {/* Founding Team */}
        <div id="founding-team" style={{ scrollMarginTop: 88 }}>
          <div style={{ marginBottom: 32 }}>
            <div className="label">Founding Team</div>
            <h3 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, letterSpacing: "-1px", color: "#f1f5f9", lineHeight: 1.15 }}>
              Specialists, not generalists
            </h3>
            <p style={{ color: "#94a3b8", fontSize: 15, marginTop: 10, maxWidth: 520 }}>
              We're building a founding team of three senior engineers. Every client engagement
              is led by a founder — not delegated to a junior.
            </p>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}>
            {/* Niket — real founder card */}
            <div style={{
              background: "rgba(34,211,238,0.04)",
              border: "1px solid rgba(34,211,238,0.25)",
              borderRadius: 14, padding: "32px 28px",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0,
                fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#07091a", background: "#22d3ee",
                padding: "4px 12px", borderRadius: "0 14px 0 8px",
              }}>Founder</div>

              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                background: "linear-gradient(135deg, #22d3ee 0%, #0e7490 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 900, color: "#07091a", marginBottom: 16,
              }}>NJ</div>

              <div style={{ fontSize: 18, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 }}>Niket Joshi</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#22d3ee", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
                CEO
              </div>
              <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.7, marginBottom: 20 }}>
                17+ years building production infrastructure at scale — OTT live events,
                FinOps, Kubernetes, multi-cloud architecture. Led cloud engineering for
                some of India's highest-traffic streaming workloads.
              </p>
              <a
                href="https://www.linkedin.com/in/niket-joshi-03b3a524/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 12, fontWeight: 700, color: "#22d3ee",
                  textDecoration: "none", letterSpacing: "0.04em",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>

            {/* Co-founder 2 — coming soon */}
            <div style={{
              background: "rgba(14,19,38,0.5)",
              border: "1px solid rgba(34,211,238,0.08)",
              borderRadius: 14, padding: "32px 28px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              minHeight: 260,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                border: "1.5px dashed rgba(34,211,238,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                <svg width="20" height="20" fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#475569", marginBottom: 6 }}>CTO</div>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#334155", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, padding: "4px 10px",
                display: "inline-block", marginBottom: 14,
              }}>Joining Soon</div>
              <p style={{ fontSize: 12, color: "#334155", lineHeight: 1.65 }}>
                Technical co-founder. Finalising details.
              </p>
            </div>

            {/* Co-founder 3 — coming soon */}
            <div style={{
              background: "rgba(14,19,38,0.5)",
              border: "1px solid rgba(34,211,238,0.08)",
              borderRadius: 14, padding: "32px 28px",
              display: "flex", flexDirection: "column", justifyContent: "center",
              minHeight: 260,
            }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                border: "1.5px dashed rgba(34,211,238,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                <svg width="20" height="20" fill="none" stroke="rgba(34,211,238,0.4)" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#475569", marginBottom: 6 }}>Head of Delivery</div>
              <div style={{
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                color: "#334155", background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)", borderRadius: 4, padding: "4px 10px",
                display: "inline-block", marginBottom: 14,
              }}>Joining Soon</div>
              <p style={{ fontSize: 12, color: "#334155", lineHeight: 1.65 }}>
                Delivery co-founder. Finalising details.
              </p>
            </div>
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
