/**
 * OCCRA custom instrumentation client for rootstratum.com
 *
 * Sends alerts and business events to OCCRA's webhook ingest endpoint
 * using OCCRA's flat event format (title + severity).
 *
 * Required env vars:
 *   OCCRA_ENDPOINT      e.g. http://65.0.246.204
 *   OCCRA_INGEST_SECRET The OCCRA_INGEST_SECRET from /opt/occra/.env
 *   OCCRA_TENANT_SLUG   occra
 */

type Severity = 'critical' | 'high' | 'medium' | 'low'

interface OccraEvent {
  title: string
  severity: Severity
  description?: string
  service?: string
  host?: string
  env?: string
  source?: string
  tags?: Record<string, string>
}

const ENDPOINT    = process.env.OCCRA_ENDPOINT ?? ''
const SECRET      = process.env.OCCRA_INGEST_SECRET ?? ''
const TENANT_SLUG = process.env.OCCRA_TENANT_SLUG ?? 'occra'
const SERVICE     = process.env.OTEL_SERVICE_NAME ?? 'rootstratum-website'
const ENV         = process.env.NODE_ENV ?? 'production'

function send(event: OccraEvent): void {
  if (!ENDPOINT || !SECRET) return   // not configured — no-op

  const payload = {
    ...event,
    service: event.service ?? SERVICE,
    env:     event.env     ?? ENV,
    source:  event.source  ?? 'unknown',
    tags:    { app: SERVICE, ...event.tags },
  }

  // Fire-and-forget — never block the response path
  fetch(`${ENDPOINT}/webhook/ingest`, {
    method: 'POST',
    headers: {
      'Content-Type':    'application/json',
      'X-Tenant-ID':     TENANT_SLUG,
      'X-Webhook-Token': SECRET,
    },
    body: JSON.stringify(payload),
  }).catch(() => { /* best-effort */ })
}

export const occra = {
  /** Application error — creates a high-severity OCCRA alert */
  error(title: string, fields?: Record<string, unknown>): void {
    send({
      title,
      severity:    'high',
      description: fields ? JSON.stringify(fields) : undefined,
      tags:        fields ? Object.fromEntries(
        Object.entries(fields)
          .filter(([, v]) => typeof v === 'string')
          .map(([k, v]) => [k, v as string])
      ) : undefined,
    })
  },

  /** Business event — low-severity informational OCCRA alert */
  event(name: string, fields?: Record<string, unknown>): void {
    send({
      title:       name,
      severity:    'low',
      description: fields ? JSON.stringify(fields) : undefined,
      tags:        fields ? Object.fromEntries(
        Object.entries(fields)
          .filter(([, v]) => typeof v === 'string')
          .map(([k, v]) => [k, v as string])
      ) : undefined,
    })
  },

  /** Critical alert — for P1-level failures */
  critical(title: string, fields?: Record<string, unknown>): void {
    send({
      title,
      severity:    'critical',
      description: fields ? JSON.stringify(fields) : undefined,
    })
  },
}
