import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  async redirects() {
    return [
      // rota antiga renomeada para /50anos — mantém links/SEO com redirect permanente
      { source: "/50-anos", destination: "/50anos", permanent: true },
    ];
  },
};

export default nextConfig;
