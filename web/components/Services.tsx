"use client";

const services = [
  {
    title: "DevOps & Platform Engineering",
    desc: "We build the golden path your developers actually use — CI/CD pipelines, Internal Developer Platforms, self-service infrastructure, and GitOps workflows that eliminate toil and ship faster.",
    bullets: [
      "CI/CD Pipelines — GitHub Actions, Jenkins, ArgoCD",
      "GitOps & Argo Rollouts (canary, blue-green deploys)",
      "Internal Developer Platform (IDP) — Backstage / Port",
      "Self-service environments via service catalogs",
      "Kubernetes platform on EKS / GKE / AKS",
      "Infrastructure as Code — Terraform, Helm, Kustomize",
      "Developer experience metrics & DORA tracking",
    ],
  },
  {
    title: "Cloud Architecture",
    desc: "Multi-cloud design and implementation on AWS, GCP and Azure — built for resilience, scale and security.",
    bullets: [
      "AWS EKS / GKE / AKS Architecture",
      "Multi-Cloud Landing Zones",
      "Serverless & Microservices Design",
      "DR & HA Architecture",
    ],
  },
  {
    title: "Cloud Migration",
    desc: "Lift-and-shift to full re-architecture — migrating workloads with minimal disruption and maximum ROI.",
    bullets: [
      "On-Prem to AWS / GCP / Azure",
      "Database Migration & Replication",
      "Legacy App Modernisation",
      "Zero-Downtime Cutovers",
    ],
  },
  {
    title: "Cost Optimisation",
    desc: "Slash cloud spend by 30–60% with right-sizing, Spot fleets, reserved capacity and FinOps practices.",
    bullets: [
      "Cloud Spend Audit & Rightsizing",
      "Graviton / ARM64 Migration",
      "Spot / Preemptible Workloads",
      "FinOps Dashboard & Governance",
    ],
  },
  {
    title: "AIOps & Observability",
    desc: "AI-powered root cause analysis and intelligent alerting. Stop chasing noise — fix what matters, before your users notice.",
    bullets: [
      "OCCRA AIOps Platform",
      "Prometheus / Grafana / Loki Stack",
      "Distributed Tracing (Tempo/Jaeger)",
      "SLO / SLA Design & Error Budgets",
    ],
  },
  {
    title: "Cloud Security & DevSecOps",
    desc: "Shift-left security baked into every pipeline — zero-trust networking, secrets management, compliance automation, and vulnerability scanning before code reaches production.",
    bullets: [
      "DevSecOps Pipeline Integration (SAST, DAST, SCA)",
      "Container & Image Scanning (Trivy, Snyk)",
      "AWS Control Tower / Landing Zone",
      "Secrets Management (Vault / AWS / GCP)",
      "RBAC & IAM Governance",
      "CIS / SOC2 Compliance Automation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#07091a", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="label">What We Do</div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, maxWidth: 640,
          }}>
            DevOps, DevSecOps, Platform Engineering &amp;{" "}
            <span className="italic-accent">Multi Cloud</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 1,
          background: "rgba(34,211,238,0.06)",
          border: "1px solid rgba(34,211,238,0.1)",
          borderRadius: 16, overflow: "hidden",
        }}>
          {services.map((s, i) => (
            <div key={s.title} style={{
              padding: "36px 32px",
              borderRight: i % 2 === 0 ? "1px solid rgba(34,211,238,0.08)" : "none",
              borderBottom: i < services.length - 2 ? "1px solid rgba(34,211,238,0.08)" : "none",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(34,211,238,0.03)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <h3 style={{ fontSize: 19, fontWeight: 800, color: "#f1f5f9", marginBottom: 10, letterSpacing: "-0.3px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#22d3ee", flexShrink: 0 }}>∨</span>
                    <span style={{ fontSize: 13, color: "#cbd5e1" }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
