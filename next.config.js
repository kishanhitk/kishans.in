/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://blog.kishans.in/",
        permanent: false,
      },
      {
        source: "/stroll",
        destination: "https://stroll-land.vercel.app/",
        permanent: false,
      },
      {
        source: "/jums-reboot",
        destination:
          "https://play.google.com/store/apps/details?id=com.kishans.jumsRebootFlutter",
        permanent: false,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/kishanju",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/kishanhitk",
        permanent: false,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/jst_kishan",
        permanent: false,
      },
      {
        source: "/cv",
        destination:
          "https://drive.google.com/file/d/1pwXoDhTbHCIXZvDRXEPnmVboId8PceyI/view?usp=sharing",
        permanent: false,
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Note, preact is only enabled for production builds (`next build`)
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react/jsx-runtime.js": "preact/compat/jsx-runtime",
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      };
    }

    return config;
  },
};

module.exports = nextConfig;
