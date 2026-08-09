export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { NodeSDK } = await import('@opentelemetry/sdk-node')
    const { OTLPTraceExporter } = await import('@opentelemetry/exporter-trace-otlp-http')
    const sdk = new NodeSDK({
      traceExporter: new OTLPTraceExporter({
        url: 'https://otlp.nr-data.net:4318/v1/traces',
        headers: {
          'api-key': process.env.NEW_RELIC_LICENSE_KEY ?? '',
        },
      }),
    })

    sdk.start()
  }
}
