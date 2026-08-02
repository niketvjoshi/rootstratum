"use client";
import { useState } from "react";

const CALENDLY = "https://calendly.com/rootstratum-sales/30min";

const trust = [
  "Senior engineers on every engagement — not juniors",
  "Direct access to the founder — not an account manager",
  "Reply within 1 business day",
  "No pitch decks. Just an honest conversation.",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px",
    background: "rgba(34,211,238,0.03)",
    border: "1px solid rgba(34,211,238,0.15)",
    borderRadius: 8, color: "#f1f5f9",
    fontSize: 14, outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section id="contact" style={{ background: "#07091a", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ marginBottom: 64 }}>
          <div className="label">Get Started</div>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900,
            letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, marginBottom: 16,
          }}>
            Ready to Build Something That{" "}
            <span className="italic-accent">Actually Scales?</span>
          </h2>
          <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}>
            Start with a free 30-minute discovery call. No pitch, no pressure —
            just an honest conversation about your infrastructure and where we can help.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "flex-start" }}>

          {/* Left — primary CTA + founding client */}
          <div>
            {/* Calendly CTA block */}
            <div style={{
              background: "rgba(34,211,238,0.04)",
              border: "1px solid rgba(34,211,238,0.2)",
              borderRadius: 16, padding: "40px 36px",
              marginBottom: 28,
            }}>
              <div style={{ fontSize: 19, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>
                Book a Free Discovery Call
              </div>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>
                30 minutes with Niket — Founder & CEO. We'll look at your current setup,
                understand your goals, and tell you exactly where we think we can add value.
              </p>

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14, padding: "16px 28px", width: "100%", justifyContent: "center", boxSizing: "border-box" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book a Free 30-Min Call →
              </a>

              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                {trust.map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <span style={{ color: "#22d3ee", fontWeight: 900, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ fontSize: 13, color: "#64748b" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right — form */}
          <div
            id="contact-form"
            style={{
              background: "rgba(14,19,38,0.6)",
              border: "1px solid rgba(34,211,238,0.1)",
              borderRadius: 16, padding: "40px 36px",
              scrollMarginTop: 88,
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 44, marginBottom: 16 }}>✅</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>Message sent!</div>
                <p style={{ color: "#94a3b8" }}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#f1f5f9", marginBottom: 6, letterSpacing: "-0.4px" }}>
                  Send us a message
                </h3>
                <p style={{ fontSize: 13, color: "#475569", marginBottom: 28 }}>
                  Prefer async? Fill this in and we'll get back to you within 24 hours.
                </p>
                <form onSubmit={async e => {
                  e.preventDefault();
                  setLoading(true);
                  setError("");
                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(form),
                    });
                    if (!res.ok) {
                      const d = await res.json().catch(() => ({}));
                      throw new Error(d.error || "Something went wrong");
                    }
                    setSent(true);
                  } catch (err: unknown) {
                    setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
                  } finally {
                    setLoading(false);
                  }
                }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#64748b", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Name</label>
                      <input required style={inputStyle} placeholder="Your name"
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        onFocus={e => (e.target.style.borderColor = "rgba(34,211,238,0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(34,211,238,0.15)")} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#64748b", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Work Email</label>
                      <input required type="email" style={inputStyle} placeholder="you@company.com"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        onFocus={e => (e.target.style.borderColor = "rgba(34,211,238,0.5)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(34,211,238,0.15)")} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#64748b", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Company</label>
                    <input style={inputStyle} placeholder="Your company"
                      value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = "rgba(34,211,238,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(34,211,238,0.15)")} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#64748b", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Tell us about your stack &amp; challenges</label>
                    <textarea required rows={4} style={{ ...inputStyle, resize: "vertical" }}
                      placeholder="What are you trying to solve?"
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = "rgba(34,211,238,0.5)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(34,211,238,0.15)")} />
                  </div>
                  {error && <p style={{ fontSize: 13, color: "#f87171", margin: 0 }}>{error}</p>}
                  <button type="submit" disabled={loading} className="btn-primary"
                    style={{ alignSelf: "flex-start", opacity: loading ? 0.7 : 1 }}>
                    {loading ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
