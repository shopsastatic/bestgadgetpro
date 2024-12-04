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
  webpack: (config) => {
    const oneOf = config.module.rules.find(
      (rule) => typeof rule.oneOf === 'object'
    );

    if (oneOf) {
      const moduleCssRule = oneOf.oneOf.find(
        (rule) => rule.test && rule.test.toString().includes('module\\.css')
      );

      if (moduleCssRule) {
        moduleCssRule.use.forEach((item) => {
          if (item.loader && item.loader.includes('css-loader')) {
            item.options = {
              ...item.options,
              modules: {
                ...item.options.modules,
                mode: 'global'
              }
            };
          }
        });
      }
    }

    return config;
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    scrollRestoration: true,
  },

  trailingSlash: false
};

module.exports = nextConfig;
