import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@opentelemetry/sdk-node", "@opentelemetry/exporter-trace-otlp-http"],
};

export default nextConfig;
