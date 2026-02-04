import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // If deploying to a subdirectory (e.g., https://username.github.io/repo-name/)
  // uncomment and set basePath to your repo name:
  // basePath: "/repo-name",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
