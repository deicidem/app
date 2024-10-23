import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/next-app",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
