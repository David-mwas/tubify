import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["clerk.dev", "clerk.com", "cdn.jsdelivr.net"],
  },
};

export default nextConfig;
