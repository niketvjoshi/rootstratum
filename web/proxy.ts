import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'
import { occra } from '@/lib/occra'

export function proxy(request: NextRequest, event: NextFetchEvent) {
  const { pathname, search } = request.nextUrl
  const method = request.method
  const start = Date.now()

  const response = NextResponse.next()

  event.waitUntil(
    Promise.resolve().then(() => {
      occra.info(`HTTP ${method} ${pathname}`, {
        method,
        path: pathname,
        query: search || undefined,
        duration_ms: Date.now() - start,
        user_agent: request.headers.get('user-agent') ?? undefined,
        referer: request.headers.get('referer') ?? undefined,
      })
    })
  )

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico).*)',
  ],
}
