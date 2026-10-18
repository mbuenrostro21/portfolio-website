import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Projects now live on the home page
  async redirects() {
    return [{ source: "/projects", destination: "/#work", permanent: true }];
  },
  // Keep the resume (and its contact details) out of search results
  async headers() {
    return [
      {
        source: "/Michael_Buenrostro_Resume_2025.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
      },
    ];
  },
};

export default nextConfig;
