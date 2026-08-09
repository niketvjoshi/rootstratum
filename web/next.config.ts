import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@opentelemetry/sdk-node", "@opentelemetry/exporter-trace-otlp-http", "@opentelemetry/instrumentation-http"],
};

export default nextConfig;
