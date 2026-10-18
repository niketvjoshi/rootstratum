import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing use of the RootStratum website and consulting services.",
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "18 October 2026";
const CONTACT_EMAIL = "sales@rootstratum.com";

export default function TermsOfService() {
  return (
    <div style={{ background: "#07091a", minHeight: "100vh", color: "#cbd5e1" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 28px 100px" }}>

        {/* Back */}
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#22d3ee", fontSize: 13, textDecoration: "none", marginBottom: 48 }}>
          ← Back to RootStratum
        </Link>

        <h1 style={{ fontSize: 36, fontWeight: 900, color: "#f1f5f9", letterSpacing: "-1px", marginBottom: 8 }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: 13, color: "#475569", marginBottom: 56 }}>Effective date: {EFFECTIVE_DATE}</p>

        <Section title="1. About these terms">
          <p>These Terms of Service ("<strong>Terms</strong>") govern your use of the RootStratum website at <a href="https://rootstratum.com" style={linkStyle}>rootstratum.com</a> ("<strong>Site</strong>") and any consulting or professional services we provide to you ("<strong>Services</strong>"). By accessing the Site or engaging our Services, you agree to these Terms.</p>
          <p style={{ marginTop: 12 }}>RootStratum is operated by Niket Joshi ("<strong>we</strong>", "<strong>us</strong>", "<strong>our</strong>"). For questions, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a>.</p>
        </Section>

        <Section title="2. Use of the website">
          <p>You may use the Site for lawful purposes only. You must not:</p>
          <ul style={listStyle}>
            <li>Use the Site in any way that violates applicable local, national, or international law or regulation</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its underlying infrastructure</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
            <li>Use automated tools to scrape, crawl, or extract data from the Site without our written consent</li>
          </ul>
        </Section>

        <Section title="3. Consulting services">
          <p>Any consulting, implementation, or advisory work we perform for you will be governed by a separate written agreement (such as a Statement of Work or Service Agreement) agreed between us before work begins. These Terms apply to the extent not superseded by that agreement.</p>
          <p style={{ marginTop: 12 }}>Until a written agreement is signed by both parties, no consulting engagement exists and we have no obligation to perform any work.</p>
        </Section>

        <Section title="4. Intellectual property">
          <p><strong style={{ color: "#f1f5f9" }}>Site content.</strong> All content on the Site — including text, graphics, logos, and code — is owned by or licensed to RootStratum and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from Site content without our prior written permission.</p>
          <p style={{ marginTop: 12 }}><strong style={{ color: "#f1f5f9" }}>Deliverables.</strong> Ownership of deliverables produced under a consulting engagement will be set out in the relevant written agreement. In the absence of any agreement, all intellectual property in deliverables remains with RootStratum until payment in full is received.</p>
        </Section>

        <Section title="5. Confidentiality">
          <p>Any technical or business information you share with us in the course of an enquiry or engagement will be treated as confidential and not disclosed to third parties, except as required to deliver the Services or as required by law. Formal NDA terms can be included in a project agreement on request.</p>
        </Section>

        <Section title="6. Disclaimer of warranties">
          <p>The Site and any information on it are provided "<strong>as is</strong>" without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. General information on the Site does not constitute professional advice and should not be relied upon as such without engaging us formally.</p>
        </Section>

        <Section title="7. Limitation of liability">
          <p>To the fullest extent permitted by applicable law, RootStratum shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site. Our total liability to you in connection with the Site shall not exceed INR 10,000.</p>
          <p style={{ marginTop: 12 }}>Liability in connection with consulting Services will be addressed in the applicable written agreement.</p>
        </Section>

        <Section title="8. Third-party links">
          <p>The Site may contain links to third-party websites. We are not responsible for the content, privacy practices, or availability of those sites. A link does not imply endorsement.</p>
        </Section>

        <Section title="9. Governing law and disputes">
          <p>These Terms are governed by the laws of India. Any dispute arising in connection with these Terms or the Site shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.</p>
        </Section>

        <Section title="10. Changes to these terms">
          <p>We may update these Terms at any time. The effective date at the top of this page will reflect any changes. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.</p>
        </Section>

        <Section title="11. Contact">
          <p>For any questions about these Terms, contact us at <a href={`mailto:${CONTACT_EMAIL}`} style={linkStyle}>{CONTACT_EMAIL}</a>.</p>
        </Section>

        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(34,211,238,0.08)", display: "flex", gap: 24, fontSize: 13 }}>
          <Link href="/privacy" style={linkStyle}>Privacy Policy →</Link>
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
