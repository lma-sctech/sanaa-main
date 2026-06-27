import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const config: Record<string, unknown> = {
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

if (basePath) config.basePath = basePath;

const nextConfig = config as NextConfig;
export default nextConfig;
