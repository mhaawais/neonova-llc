import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   output: 'export',
  images: {
    unoptimized: true, // Required if using next/image
  },
  trailingSlash: true, 
};

export default nextConfig;
