/** @type {import('next').NextConfig} */
//const ContentSecPolicy = `default-src 'self' ka-f.fontawesome.com localhost:4000 web-curso-frances.azurewebsites.net webcursosfrances.blob.core.windows.net; script-src 'self' 'unsafe-eval' kit.fontawesome.com; style-src 'self' 'unsafe-inline' *.fontawesome.com fonts.googleapis.com; font-src 'self' fonts.googleapis.com ka-f.fontawesome.com;  kit.fontawesome.com; img-src 'self' data:`;

const nextConfig = {
  reacStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["webcursosfrances.blob.core.windows.net"],
  },

  /*async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: ContentSecPolicy,
          },
        ],
      },
    ];
  },*/
};

export default nextConfig;
