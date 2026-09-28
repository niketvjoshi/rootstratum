import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: [
    "@opentelemetry/sdk-node",
    "@opentelemetry/exporter-trace-otlp-http",
    "@opentelemetry/exporter-metrics-otlp-http",
    "@opentelemetry/sdk-metrics",
    "@opentelemetry/instrumentation-http",
    "@opentelemetry/api",
  ],
};

export default nextConfig;
