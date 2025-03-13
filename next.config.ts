import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["i.pravatar.cc", "source.unsplash.com", "plus.unsplash.com"],
    unoptimized: true,
  }
};

export default nextConfig;
