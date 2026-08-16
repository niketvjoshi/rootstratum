export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { NodeSDK }                       = await import('@opentelemetry/sdk-node')
    const { OTLPTraceExporter }             = await import('@opentelemetry/exporter-trace-otlp-http')
    const { OTLPMetricExporter }            = await import('@opentelemetry/exporter-metrics-otlp-http')
    const { PeriodicExportingMetricReader, AggregationTemporality } = await import('@opentelemetry/sdk-metrics')
    const { HttpInstrumentation }           = await import('@opentelemetry/instrumentation-http')

    // Resource attributes are set via env vars that NodeSDK reads automatically:
    //   OTEL_SERVICE_NAME=rootstratum-web
    //   OTEL_RESOURCE_ATTRIBUTES=service.version=1.0.0,...
    // This avoids the CJS/ESM interop issue with @opentelemetry/resources in Turbopack.
    const endpoint = process.env.OTLP_ENDPOINT ?? 'https://otlp.nr-data.net:4318'
    const apiKey   = process.env.NEW_RELIC_LICENSE_KEY ?? ''
    const headers: Record<string, string> = apiKey ? { 'api-key': apiKey } : {}

    const sdk = new NodeSDK({
      traceExporter: new OTLPTraceExporter({
        url: `${endpoint}/v1/traces`,
        headers,
      }),
      metricReaders: [new PeriodicExportingMetricReader({
        // New Relic requires Delta temporality — Cumulative (default) causes "Required metrics are missing"
        exporter: new OTLPMetricExporter({
          url: `${endpoint}/v1/metrics`,
          headers,
          temporalityPreference: AggregationTemporality.DELTA,
        }),
        exportIntervalMillis: 10_000,
      })],
      instrumentations: [
        new HttpInstrumentation({
          ignoreIncomingRequestHook: (req) =>
            Boolean(req.url?.startsWith('/_next/')),
        }),
      ],
    })

    sdk.start()
  }
}
