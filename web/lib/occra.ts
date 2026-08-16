/**
 * OCCRA instrumentation client for rootstratum.com
 * Ships structured logs and business events to the OCCRA ingestion API.
 * Adapted from the LogPulse Node.js SDK (logging_tool/sdks/nodejs/src/client.ts).
 */

import * as os from 'os'
import * as zlib from 'zlib'
import { randomUUID } from 'crypto'

interface OccraConfig {
  apiKey: string
  endpoint: string
  service: string
  labels?: Record<string, string>
  batchSize?: number
  flushInterval?: number
}

type Fields = Record<string, unknown>

interface LogEvent {
  id: string
  timestamp: string
  level: string
  message: string
  service: string
  host: string
  labels: Record<string, string>
  fields: Fields
  source: string
}

class OccraClient {
  private readonly config: Required<OccraConfig>
  private buffer: LogEvent[] = []
  private timer: ReturnType<typeof setInterval> | null = null
  private readonly host: string

  constructor(config: OccraConfig) {
    this.config = {
      labels: {},
      batchSize: 100,
      flushInterval: 5000,
      ...config,
    }
    this.host = os.hostname()
    this.timer = setInterval(() => this.flush(), this.config.flushInterval)
    if (this.timer.unref) this.timer.unref()
  }

  debug(message: string, fields?: Fields): void { this.log('DEBUG', message, fields) }
  info(message: string, fields?: Fields): void  { this.log('INFO',  message, fields) }
  warn(message: string, fields?: Fields): void  { this.log('WARN',  message, fields) }
  error(message: string, fields?: Fields): void { this.log('ERROR', message, fields) }

  event(name: string, fields?: Fields): void {
    this.log('INFO', name, { ...fields, event: name })
  }

  private log(level: string, message: string, fields?: Fields): void {
    if (message.length > 65536) message = message.slice(0, 65536)
    this.buffer.push({
      id: randomUUID(),
      timestamp: new Date().toISOString(),
      level,
      message,
      service: this.config.service,
      host: this.host,
      labels: this.config.labels,
      fields: fields ?? {},
      source: 'sdk',
    })
    if (this.buffer.length >= this.config.batchSize) {
      this.flush()
    }
  }

  async flush(): Promise<void> {
    if (this.buffer.length === 0) return
    const batch = this.buffer.splice(0)
    await this.send(batch)
  }

  private async send(events: LogEvent[], attempt = 0): Promise<void> {
    try {
      const json = JSON.stringify(events)
      const compressed = await new Promise<Buffer>((resolve, reject) => {
        zlib.gzip(Buffer.from(json), (err, buf) => (err ? reject(err) : resolve(buf)))
      })

      const response = await fetch(`${this.config.endpoint}/v1/ingest`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Encoding': 'gzip',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: compressed as unknown as BodyInit,
      })

      if (!response.ok && attempt < 2) {
        await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt))
        return this.send(events, attempt + 1)
      }
    } catch (err) {
      if (attempt < 2) {
        await new Promise((r) => setTimeout(r, 1000 * 2 ** attempt))
        return this.send(events, attempt + 1)
      }
      process.stderr.write(`occra: send failed: ${err}\n`)
    }
  }

  destroy(): void {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}

// Singleton — instantiated once per Node.js process (server-side only).
// Guarded so the module can be imported in edge/browser contexts without crashing.
let _client: OccraClient | null = null

function getClient(): OccraClient | null {
  if (typeof window !== 'undefined') return null // browser — no-op
  if (_client) return _client

  const apiKey   = process.env.OCCRA_API_KEY ?? ''
  const endpoint = process.env.OCCRA_ENDPOINT ?? ''
  if (!apiKey || !endpoint) return null // not configured — no-op

  _client = new OccraClient({
    apiKey,
    endpoint,
    service: process.env.OTEL_SERVICE_NAME ?? 'rootstratum-website',
    labels: { env: process.env.NODE_ENV ?? 'production' },
    batchSize: 100,
    flushInterval: 5000,
  })
  return _client
}

export const occra = {
  debug: (message: string, fields?: Fields) => getClient()?.debug(message, fields),
  info:  (message: string, fields?: Fields) => getClient()?.info(message, fields),
  warn:  (message: string, fields?: Fields) => getClient()?.warn(message, fields),
  error: (message: string, fields?: Fields) => getClient()?.error(message, fields),
  event: (name: string,    fields?: Fields) => getClient()?.event(name, fields),
  flush: ()                                 => getClient()?.flush(),
}
