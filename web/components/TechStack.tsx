const categories = [
  {
    label: "Cloud",
    items: ["AWS", "Google Cloud", "Microsoft Azure"],
  },
  {
    label: "Containers",
    items: ["Kubernetes", "Docker", "EKS", "GKE", "AKS"],
  },
  {
    label: "IaC",
    items: ["Terraform", "Ansible", "Helm", "Kustomize"],
  },
  {
    label: "CI / CD",
    items: ["Jenkins", "GitHub Actions", "ArgoCD", "Argo Rollouts"],
  },
  {
    label: "Observability",
    items: ["Prometheus", "Grafana", "Loki", "Tempo", "New Relic"],
  },
  {
    label: "Security",
    items: ["HashiCorp Vault", "AWS Secret Manager", "RBAC & IAM", "OPA / Gatekeeper"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "Aurora", "Redis", "DynamoDB", "MySQL"],
  },
  {
    label: "AIOps",
    items: ["OCCRA", "OpenTelemetry", "MLflow", "Claude LLM"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" style={{ background: "#0e1326", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="label">Tools &amp; Platforms</div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, maxWidth: 640,
          }}>
            Production-Proven{" "}
            <span className="italic-accent">Tech Stack</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 1, background: "rgba(34,211,238,0.06)", border: "1px solid rgba(34,211,238,0.1)", borderRadius: 16, overflow: "hidden" }}>
          {categories.map((cat, i) => (
            <div key={cat.label} style={{
              padding: "28px 24px",
              borderRight: "1px solid rgba(34,211,238,0.08)",
              borderBottom: "1px solid rgba(34,211,238,0.08)",
            }}>
              <div style={{
                fontSize: 10, fontWeight: 800, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "#22d3ee", marginBottom: 14,
              }}>{cat.label}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {cat.items.map(item => (
                  <div key={item} style={{ fontSize: 13, color: "#cbd5e1", fontWeight: 500 }}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
