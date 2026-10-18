import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Projects now live on the home page
  async redirects() {
    return [{ source: "/projects", destination: "/#work", permanent: true }];
  },
};

export default nextConfig;
