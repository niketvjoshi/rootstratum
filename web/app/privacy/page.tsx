import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RootStratum collects, uses, and protects your personal information.",
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "18 October 2026";
const CONTACT_EMAIL = "sales@rootstratum.com";

export default function PrivacyPolicy() {
  return (
    <div style={{ background: "#07091a", minHeight: "100vh", color: "#cbd5e1" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 28px 100px" }}>

        {/* Back */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#22d3ee", fontSize: 13, textDecoration: "none", marginBottom: 48 }}>
          ← Back to RootStratum
        </Link>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: "#f1f5f9", letterSpacing: "-1px", marginBottom: 8 }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: 13, color: "#475569", marginBottom: 56 }}>Effective date: {EFFECTIVE_DATE}</p>

        <Section title="1. Who we are">
          <p>RootStratum ("<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>") is a DevOps and Cloud consulting firm operated by Niket Joshi, based in India. Our website is <a href="https://rootstratum.com" style={linkStyle}>rootstratum.com</a>.</p>
          <p style={{ marginTop: 12 }}>Questions about this policy can be sent to <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a>.</p>
        </Section>

        <Section title="2. Information we collect">
          <p><strong style={{ color: "#f1f5f9" }}>Information you give us.</strong> When you fill in the contact form or send us an email, we collect your name, email address, company name (if provided), and the content of your message.</p>
          <p style={{ marginTop: 12 }}><strong style={{ color: "#f1f5f9" }}>Information collected automatically.</strong> We use Google Analytics 4 and New Relic Browser to understand how visitors use our site. These tools collect:</p>
          <ul style={listStyle}>
            <li>Pages visited, time on page, and referral source</li>
            <li>Browser type, device type, and approximate location (country/city)</li>
            <li>Performance metrics and JavaScript errors</li>
          </ul>
          <p style={{ marginTop: 12 }}>This data is collected via cookies and similar technologies. We do not collect precise location data or link analytics data to your identity.</p>
        </Section>

        <Section title="3. How we use your information">
          <ul style={listStyle}>
            <li>To respond to your enquiry or schedule a consultation</li>
            <li>To understand how visitors find and use our website so we can improve it</li>
            <li>To monitor site performance and diagnose technical issues</li>
            <li>To send you information you have specifically requested (we do not send unsolicited marketing email)</li>
          </ul>
        </Section>

        <Section title="4. Legal basis for processing (where applicable)">
          <ul style={listStyle}>
            <li><strong style={{ color: "#f1f5f9" }}>Legitimate interests</strong> — to operate and improve our website and respond to business enquiries</li>
            <li><strong style={{ color: "#f1f5f9" }}>Consent</strong> — for analytics cookies, where required by applicable law</li>
            <li><strong style={{ color: "#f1f5f9" }}>Contractual necessity</strong> — to communicate with you in connection with a project or engagement</li>
          </ul>
        </Section>

        <Section title="5. Cookies">
          <p>We use first-party and third-party cookies for analytics and performance monitoring. The main cookies set on this site are:</p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Cookie</th>
                <th style={thStyle}>Provider</th>
                <th style={thStyle}>Purpose</th>
                <th style={thStyle}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>_ga, _ga_*</td>
                <td style={tdStyle}>Google Analytics</td>
                <td style={tdStyle}>Distinguish visitors and track sessions</td>
                <td style={tdStyle}>2 years</td>
              </tr>
              <tr>
                <td style={tdStyle}>JSESSIONID (NR)</td>
                <td style={tdStyle}>New Relic</td>
                <td style={tdStyle}>Browser performance monitoring</td>
                <td style={tdStyle}>Session</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: 16 }}>You can disable cookies in your browser settings. Disabling analytics cookies will not affect your ability to use the site.</p>
        </Section>

        <Section title="6. Data sharing">
          <p>We do not sell your personal data. We share data only with the following service providers, who process it on our behalf under appropriate data processing terms:</p>
          <ul style={listStyle}>
            <li><strong style={{ color: "#f1f5f9" }}>Google LLC</strong> — Analytics (Google Analytics 4)</li>
            <li><strong style={{ color: "#f1f5f9" }}>New Relic, Inc.</strong> — Browser performance monitoring</li>
            <li><strong style={{ color: "#f1f5f9" }}>Amazon Web Services (AWS)</strong> — Website hosting</li>
          </ul>
          <p style={{ marginTop: 12 }}>We may disclose information if required to do so by law or in response to a valid legal request.</p>
        </Section>

        <Section title="7. Data retention">
          <p>Contact form submissions are retained for as long as necessary to handle your enquiry and any resulting engagement, and for up to 3 years thereafter for business record purposes. Analytics data is retained per the default retention period of each provider (26 months for Google Analytics 4).</p>
        </Section>

        <Section title="8. Your rights">
          <p>Depending on your location, you may have the right to access, correct, delete, or restrict processing of your personal data, and to object to certain processing. To exercise any of these rights, email us at <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a> and we will respond within 30 days.</p>
        </Section>

        <Section title="9. International transfers">
          <p>Our analytics and monitoring providers may process data outside India. Where this occurs, we rely on the providers' standard contractual clauses or equivalent safeguards.</p>
        </Section>

        <Section title="10. Children">
          <p>Our services are directed at businesses and professionals. We do not knowingly collect personal data from anyone under 18 years of age.</p>
        </Section>

        <Section title="11. Changes to this policy">
          <p>We may update this policy from time to time. The effective date at the top of this page will reflect any changes. Material changes will be noted on our website.</p>
        </Section>

        <Section title="12. Contact">
          <p>For any privacy-related questions, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a>.</p>
        </Section>

        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(34,211,238,0.08)", display: "flex", gap: 24, fontSize: 13 }}>
          <Link href="/terms" style={linkStyle}>Terms of Service →</Link>
          <Link href="/" style={{ color: "#475569", textDecoration: "none" }}>← Home</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(34,211,238,0.08)" }}>
        {title}
      </h2>
      <div style={{ fontSize: 14, lineHeight: 1.8, color: "#94a3b8" }}>{children}</div>
    </section>
  );
}

const linkStyle: React.CSSProperties = { color: "#22d3ee", textDecoration: "none" };
const listStyle: React.CSSProperties = { paddingLeft: 20, marginTop: 8, lineHeight: 2 };
const tableStyle: React.CSSProperties = { width: "100%", borderCollapse: "collapse", marginTop: 16, fontSize: 13 };
const thStyle: React.CSSProperties = { textAlign: "left", padding: "8px 12px", background: "rgba(34,211,238,0.05)", color: "#f1f5f9", fontWeight: 600, borderBottom: "1px solid rgba(34,211,238,0.1)" };
const tdStyle: React.CSSProperties = { padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.04)", verticalAlign: "top" };
