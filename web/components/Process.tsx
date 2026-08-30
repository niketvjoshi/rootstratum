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
    <section id="process" style={{ background: "#edf1f5", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 64 }}>
          <div className="label">Our Process</div>
          <h2 style={{
            fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#0f1623", lineHeight: 1.1, maxWidth: 600,
          }}>
            From First Call to Production —{" "}
            <span className="italic-accent">Fast</span>
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              padding: "36px 32px",
              background: "#ffffff",
              border: "1px solid rgba(15,22,35,0.08)",
              borderRadius: 14,
              position: "relative",
              transition: "box-shadow 0.2s, border-color 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(13,148,136,0.1)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(13,148,136,0.25)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(15,22,35,0.08)";
              }}
            >
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "rgba(13,148,136,0.08)",
                border: "1px solid rgba(13,148,136,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 800, color: "#0d9488",
                marginBottom: 20,
              }}>{s.n}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#0f1623", marginBottom: 12, lineHeight: 1.25, letterSpacing: "-0.3px" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
