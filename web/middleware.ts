import { NextRequest, NextResponse } from 'next/server'

// Edge-compatible OCCRA request logging.
// Ships to the OCCRA ingestion API without Node.js built-ins (no zlib/os).
async function logToOccra(payload: Record<string, unknown>): Promise<void> {
  const apiKey   = process.env.OCCRA_API_KEY
  const endpoint = process.env.OCCRA_ENDPOINT
  if (!apiKey || !endpoint) return

  const event = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    level: 'INFO',
    message: `HTTP ${payload.method} ${payload.path}`,
    service: process.env.OTEL_SERVICE_NAME ?? 'rootstratum-website',
    host: 'edge',
    labels: { env: process.env.NODE_ENV ?? 'production' },
    fields: payload,
    source: 'middleware',
  }

  // Fire-and-forget — don't block the response.
  fetch(`${endpoint}/v1/ingest`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify([event]),
  }).catch(() => {/* best-effort */})
}

export function middleware(request: NextRequest) {
  const start = Date.now()

  // Clone the request pathname before it's consumed.
  const { pathname, search } = request.nextUrl
  const method = request.method

  // Skip Next.js internal routes and static assets.
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff2?)$/)
  ) {
    return NextResponse.next()
  }

  const response = NextResponse.next()

  // Log after the response is produced (non-blocking).
  const durationMs = Date.now() - start
  logToOccra({
    method,
    path: pathname,
    query: search || undefined,
    duration_ms: durationMs,
    user_agent: request.headers.get('user-agent') ?? undefined,
    referer: request.headers.get('referer') ?? undefined,
    // Status is not available in middleware (edge runs before response)
    // — status code instrumentation happens in the Node.js route handlers via OTel.
  })

  return response
}

export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files.
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
