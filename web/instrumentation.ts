export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { NodeSDK } = await import('@opentelemetry/sdk-node')
    const { OTLPTraceExporter } = await import('@opentelemetry/exporter-trace-otlp-http')
    const { OTLPMetricExporter } = await import('@opentelemetry/exporter-metrics-otlp-http')
    const { PeriodicExportingMetricReader } = await import('@opentelemetry/sdk-metrics')
    const { HttpInstrumentation } = await import('@opentelemetry/instrumentation-http')

    const sdk = new NodeSDK({
      traceExporter: new OTLPTraceExporter({
        url: 'https://otlp.nr-data.net:4318/v1/traces',
        headers: {
          'api-key': process.env.NEW_RELIC_LICENSE_KEY ?? '',
        },
      }),
      metricReader: new PeriodicExportingMetricReader({
        exporter: new OTLPMetricExporter({
          url: 'https://otlp.nr-data.net:4318/v1/metrics',
          headers: {
            'api-key': process.env.NEW_RELIC_LICENSE_KEY ?? '',
          },
        }),
        exportIntervalMillis: 10000,
      }),
      instrumentations: [new HttpInstrumentation()],
    })

    sdk.start()
  }
}
