import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Photos come from Unsplash, which resizes them itself (see lib/image-loader.ts).
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
  poweredByHeader: false,
};

export default nextConfig;
