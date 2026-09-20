const steps = [
  {
    n: "01",
    title: "Discovery & Audit",
    desc: "Deep-dive session to map your stack, goals, and challenges. We deliver a written assessment with prioritised recommendations within 5 business days.",
  },
  {
    n: "02",
    title: "Architecture & Plan",
    desc: "Detailed design documents, runbooks, and a phased execution plan tailored to your team's capacity and risk tolerance.",
  },
  {
    n: "03",
    title: "Execute & Deliver",
    desc: "Hands-on implementation — infrastructure code, CI/CD, migrations, observability. Weekly syncs, daily async updates. You own everything we build.",
  },
  {
    n: "04",
    title: "Optimise & Handover",
    desc: "Runbooks, team knowledge transfer, dashboards, and an optional ongoing retainer. Your team runs it confidently from day one.",
  },
];

export default function Process() {
  return (
    <section id="process" style={{ background: "#0e1326", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="label">Our Process</div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, maxWidth: 600,
          }}>
            From First Call to Production —{" "}
            <span className="italic-accent">Fast</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 2,
          background: "rgba(34,211,238,0.06)",
          border: "1px solid rgba(34,211,238,0.12)",
          borderRadius: 16, overflow: "hidden",
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: "40px 32px",
              borderRight: i < steps.length - 1 ? "1px solid rgba(34,211,238,0.1)" : "none",
              position: "relative",
            }}>
              <div style={{
                fontSize: 11, fontWeight: 800, letterSpacing: "0.16em",
                color: "#22d3ee", marginBottom: 20, display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{
                  width: 28, height: 28, borderRadius: "50%",
                  border: "1px solid rgba(34,211,238,0.3)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 800,
                }}>{s.n}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#f1f5f9", marginBottom: 12, lineHeight: 1.25 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
