"use client";
import { useState } from "react";

const trust = [
  "No lock-in contracts",
  "24hr response time",
  "You own all deliverables",
  "India & global remote",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

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

        {/* Top CTA banner */}
        <div style={{
          background: "rgba(34,211,238,0.03)",
          border: "1px solid rgba(34,211,238,0.15)",
          borderRadius: 16, padding: "64px 64px 56px",
          marginBottom: 64,
          backgroundImage: "radial-gradient(ellipse at 60% 0%, rgba(34,211,238,0.06) 0%, transparent 60%)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40, alignItems: "flex-start" }}>
            <div style={{ maxWidth: 560 }}>
              <div className="label">Get Started</div>
              <h2 style={{
                fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 900,
                letterSpacing: "-1.5px", color: "#f1f5f9", lineHeight: 1.1, marginBottom: 16,
              }}>
                Ready to Reduce Your Cloud Bill &amp;{" "}
                <span className="italic-accent">Ship Faster?</span>
              </h2>
              <p style={{ color: "#94a3b8", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
                Schedule a consultation. We will assess your infrastructure and deliver concrete, actionable recommendations within 5 business days.
              </p>
              <a href="mailto:hello@rootstratum.com" style={{
                fontSize: 18, fontWeight: 700, color: "#22d3ee", textDecoration: "none",
                display: "block", marginBottom: 28,
                letterSpacing: "-0.3px",
              }}>hello@rootstratum.com</a>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {trust.map(t => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: "#22d3ee", fontWeight: 800 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#94a3b8" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact-form" className="btn-primary" style={{ fontSize: 14, padding: "16px 32px" }}>
              Let&apos;s Connect →
            </a>
          </div>
        </div>

        {/* Form */}
        <div id="contact-form" style={{
          background: "rgba(14,19,38,0.6)",
          border: "1px solid rgba(34,211,238,0.1)",
          borderRadius: 16, padding: "48px",
          maxWidth: 720, margin: "0 auto",
        }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 44, marginBottom: 16 }}>✅</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", marginBottom: 8 }}>Message sent!</div>
              <p style={{ color: "#94a3b8" }}>We&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: "#f1f5f9", marginBottom: 32, letterSpacing: "-0.5px" }}>Send us a message</h3>
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
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
                <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                  Send Message →
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
