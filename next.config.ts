import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/work/:slug", destination: "/portfolio/:slug", permanent: true },
    ];
  },
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
