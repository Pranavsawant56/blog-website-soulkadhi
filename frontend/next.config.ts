import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.fbcdn.net",  // Instagram CDN
      },
      {
        protocol: "https",
        hostname: "*.fna.fbcdn.net", // Another Instagram CDN
      },
      {
        protocol: "https",
        hostname: "instagram.*", // instagram.com / subdomains
      }
    ],
  },
};

export default nextConfig;
