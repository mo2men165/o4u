/** @type {import('next').NextConfig} */
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  ...(isStaticExport ? { output: "export", trailingSlash: true } : {}),
  images: {
    ...(isStaticExport ? { unoptimized: true } : {}),
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
