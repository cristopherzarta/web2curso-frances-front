/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webcursosfrances.blob.core.windows.net",
        pathname: "**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `style-src 'self' *.fontawesome.com fonts.googleapis.com `,
          },
         
        ],
      },
    ]
  },
};

export default nextConfig;
