export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { NodeSDK }                    = await import('@opentelemetry/sdk-node')
    const { OTLPTraceExporter }          = await import('@opentelemetry/exporter-trace-otlp-http')
    const { OTLPMetricExporter }         = await import('@opentelemetry/exporter-metrics-otlp-http')
    const { PeriodicExportingMetricReader } = await import('@opentelemetry/sdk-metrics')
    const { HttpInstrumentation }        = await import('@opentelemetry/instrumentation-http')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { Resource } = (await import('@opentelemetry/resources') as any)

    const endpoint = process.env.OTLP_ENDPOINT ?? 'https://otlp.nr-data.net:4318'
    const apiKey   = process.env.NEW_RELIC_LICENSE_KEY ?? ''
    const headers: Record<string, string> = apiKey ? { 'api-key': apiKey } : {}

    const sdk = new NodeSDK({
      resource: new Resource({
        'service.name':              'rootstratum-web',
        'service.version':           '1.0.0',
        'deployment.environment':    process.env.NODE_ENV ?? 'production',
        'cloud.provider':            'aws',
        'cloud.region':              'ap-south-1',
        'telemetry.sdk.name':        'opentelemetry',
        'telemetry.sdk.language':    'nodejs',
      }),
      traceExporter: new OTLPTraceExporter({
        url: `${endpoint}/v1/traces`,
        headers,
      }),
      metricReader: new PeriodicExportingMetricReader({
        exporter: new OTLPMetricExporter({
          url: `${endpoint}/v1/metrics`,
          headers,
        }),
        exportIntervalMillis: 10_000,
      }),
      instrumentations: [
        new HttpInstrumentation({
          // Skip Next.js internal HMR + static routes from trace noise
          ignoreIncomingRequestHook: (req) =>
            Boolean(req.url?.startsWith('/_next/')),
        }),
      ],
    })

    sdk.start()
  }
}
