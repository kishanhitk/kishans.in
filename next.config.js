module.exports = {
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
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};
