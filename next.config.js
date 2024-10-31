/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jamesli.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
