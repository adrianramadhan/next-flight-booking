/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lekvyfigudvhxcpxuaex.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
