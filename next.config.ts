import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ["i.pravatar.cc", "source.unsplash.com", "plus.unsplash.com"],
  },
  basePath: "/wedding-web-fe", // ตั้ง basePath ให้เป็นชื่อ repo
  assetPrefix: "/wedding-web-fe/",
};

export default nextConfig;
