"use client";

import type { ReactNode } from "react";

const stroke = {
  fill: "none", stroke: "#22d3ee", strokeWidth: 2,
  strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
};

const features: { icon: ReactNode; title: string; desc: ReactNode }[] = [
  {
    icon: <><rect x="3" y="3" width="5" height="18" rx="1" /><rect x="10" y="3" width="5" height="12" rx="1" /><rect x="17" y="3" width="4" height="8" rx="1" /></>,
    title: "Boards, Backlog & Roadmap",
    desc: "Kanban board, list and backlog views, sprints, epics, initiatives and a cross-project roadmap.",
  },
  {
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    title: "Real-Time Collaboration",
    desc: "Changes appear on every open board and issue within about a second, with presence showing who is looking at what.",
  },
  {
    icon: <><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
    title: "Keyboard-First Search",
    desc: (
      <>
        Command palette (Cmd/Ctrl+K) and a filter language such as{" "}
        <code style={{ fontFamily: "var(--font-mono), monospace", fontSize: 12, color: "#cbd5e1" }}>
          assignee:me priority&gt;=high -label:infra
        </code>.
      </>
    ),
  },
  {
    icon: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>,
    title: "Incidents & Services",
    desc: "Service catalogue, incident tracking and alerts alongside the issues that fix them.",
  },
  {
    icon: <><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></>,
    title: "Automation & AI",
    desc: "Rule-based automation, AI assistance and semantic search, with support for your own model provider.",
  },
  {
    icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
    title: "Enterprise-Ready Security",
    desc: "SSO, 2FA and passkeys, role-based access, audit log, API keys and webhooks.",
  },
];

export default function Kanvas() {
  return (
    <section id="kanvas" style={{ background: "#07091a", padding: "100px 28px", scrollMarginTop: 68 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div className="label">Product</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
            <h2 style={{
              fontSize: "clamp(30px, 4.5vw, 52px)", fontWeight: 900,
              letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, margin: 0,
            }}>
              <span style={{ color: "#22d3ee" }}>Kanvas</span>
            </h2>
            <span style={{
              fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#22d3ee", background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.3)", borderRadius: 999, padding: "5px 12px",
            }}>Early access</span>
          </div>
          <p style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, lineHeight: 1.3, marginTop: 16, maxWidth: 640 }}>
            Issue tracking built for <span className="italic-accent">engineering teams</span>
          </p>
          <p style={{ color: "#94a3b8", fontSize: 17, maxWidth: 640, lineHeight: 1.7, marginTop: 16 }}>
            Fast, opinionated project and issue tracking that connects planning to operations.
            Boards, backlog and roadmap sit next to incidents, services and alerts, so the team
            that ships the work and the team that runs it share one tool. Self-hosted on your
            own infrastructure.
          </p>
        </div>

        {/* Product screenshot */}
        <div style={{
          maxWidth: 1040, marginBottom: 48,
          border: "1px solid rgba(34,211,238,0.2)", borderRadius: 12, overflow: "hidden",
          boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
        }}>
          <img
            src="/kanvas-board.jpg"
            alt="The Kanvas board view, showing a demo project with issues in Backlog, Todo, In Progress, In Review and Done columns"
            width={1456}
            height={540}
            loading="lazy"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </div>

        {/* Feature grid */}
        <div className="kanvas-grid" style={{
          display: "grid",
          gap: 0,
          background: "rgba(34,211,238,0.06)",
          border: "1px solid rgba(34,211,238,0.1)",
          borderRadius: 16, overflow: "hidden",
          marginBottom: 24,
        }}>
          {features.map((f, i) => (
            <div key={f.title} className="kanvas-tile" style={{
              padding: "32px 28px",
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
                <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden="true" {...stroke}>{f.icon}</svg>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#f1f5f9", marginBottom: 5 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, marginBottom: 48 }}>
          Self-hosted with Docker Compose or Helm. Import from your existing tracker. Your data stays in your environment.
        </p>

        {/* CTA */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 24,
          background: "rgba(34,211,238,0.04)", border: "1px solid rgba(34,211,238,0.15)",
          borderRadius: 12, padding: "32px 40px",
        }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9", marginBottom: 4 }}>Want to see Kanvas with your team&apos;s workflow?</div>
            <p style={{ color: "#94a3b8", fontSize: 14, margin: 0 }}>Kanvas is in early access. We&apos;ll walk you through it live.</p>
          </div>
          <a href="#contact-form" className="btn-primary">Request a Kanvas demo →</a>
        </div>
      </div>
    </section>
  );
}
