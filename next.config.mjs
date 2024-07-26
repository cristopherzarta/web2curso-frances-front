/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'webcursosfrances.blob.core.windows.net',
        pathname: "**",
      },
    ],
  },

  
};


export default nextConfig;
