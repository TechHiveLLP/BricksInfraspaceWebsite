import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
};

export default nextConfig;
