// <== IMPORTS ==>
import type { NextConfig } from "next";

// <== NEXT JS CONFIGURATION ==>
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
      },
    ],
  },
};

// <== EXPORTING NEXT JS CONFIGURATION ==>
export default nextConfig;
