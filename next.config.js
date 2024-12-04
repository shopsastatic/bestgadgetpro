/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_WORDPRESS_API_HOSTNAME,
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|js|css|module.css)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=59'
          }
        ]
      }
    ]
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    turbotrace: true,
    optimizeCss: true,
  }
};

module.exports = nextConfig;
