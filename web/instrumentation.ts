export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { NodeSDK } = await import('@opentelemetry/sdk-node')
    const { OTLPTraceExporter } = await import('@opentelemetry/exporter-trace-otlp-http')
    const { Resource } = await import('@opentelemetry/resources')

    const sdk = new NodeSDK({
      resource: new Resource({ 'service.name': 'rootstratum-website' }),
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
