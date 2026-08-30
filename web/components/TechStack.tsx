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
    label: "DevSecOps",
    items: ["Trivy", "Snyk", "SonarQube", "OWASP ZAP", "Falco"],
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
    items: ["OCCRA", "OpenTelemetry", "MLflow", "Bedrock LLM"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" style={{ background: "#edf1f5", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="label">Tools &amp; Platforms</div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#0f1623", lineHeight: 1.1, maxWidth: 640,
          }}>
            Production-Proven{" "}
            <span className="italic-accent">Tech Stack</span>
          </h2>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 12,
        }}>
          {categories.map((cat) => (
            <div key={cat.label} style={{
              padding: "24px",
              background: "#ffffff",
              border: "1px solid rgba(15,22,35,0.08)",
              borderRadius: 12,
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(13,148,136,0.25)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(13,148,136,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(15,22,35,0.08)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div style={{
                fontSize: 10, fontWeight: 800, letterSpacing: "0.16em",
                textTransform: "uppercase", color: "#0d9488", marginBottom: 14,
              }}>{cat.label}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {cat.items.map(item => (
                  <div key={item} style={{ fontSize: 13, color: "#4b5563", fontWeight: 500 }}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
