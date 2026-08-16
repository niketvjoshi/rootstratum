import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { NextRequest, NextResponse } from "next/server";
import { trace, SpanStatusCode } from "@opentelemetry/api";
import { occra } from "@/lib/occra";

const ses = new SESClient({ region: "ap-south-1" });

const TO      = "sales@rootstratum.com";
const FROM    = "sales@rootstratum.com";
const MAX_LEN = 4000;

export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name    = String(body.name    ?? "").trim().slice(0, 200);
  const email   = String(body.email   ?? "").trim().slice(0, 200);
  const company = String(body.company ?? "").trim().slice(0, 200);
  const message = String(body.message ?? "").trim().slice(0, MAX_LEN);

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const subject = `New enquiry from ${name}${company ? ` (${company})` : ""}`;
  const bodyText = [
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Company: ${company || "—"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const tracer = trace.getTracer("rootstratum.contact", "1.0.0");

  return tracer.startActiveSpan("contact.form.submit", { attributes: {
    "contact.has_company": Boolean(company),
    "contact.email.provider": "aws.ses",
    "contact.email.recipient": TO,
  }}, async (span) => {
    try {
      await ses.send(new SendEmailCommand({
        Source:      FROM,
        Destination: { ToAddresses: [TO] },
        ReplyToAddresses: [email],
        Message: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body:    { Text: { Data: bodyText, Charset: "UTF-8" } },
        },
      }));

      span.setStatus({ code: SpanStatusCode.OK });
      span.end();
      occra.event('contact.form.submitted', {
        has_company: Boolean(company),
        email_provider: email.split('@')[1] ?? 'unknown',
      });
      return NextResponse.json({ ok: true });
    } catch (err) {
      span.recordException(err as Error);
      span.setStatus({ code: SpanStatusCode.ERROR, message: String(err) });
      span.end();
      occra.error('contact.form.failed', { error: String(err) });
      console.error("SES error:", err);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
  });
}
