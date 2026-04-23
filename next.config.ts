import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /** Allow maximum quality (`quality={100}` on `<Image>`) without extra compression. */
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
