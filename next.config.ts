import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Required for GitHub Pages deployment to subdirectory
  basePath: isProd ? "/BricksInfraspaceWebsite" : "",
  assetPrefix: isProd ? "/BricksInfraspaceWebsite/" : "",
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Helps with GitHub Pages routing
};

export default nextConfig;
