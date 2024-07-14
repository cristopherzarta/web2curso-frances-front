/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["webcursosfrances.blob.core.windows.net"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
