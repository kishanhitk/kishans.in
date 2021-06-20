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
    ];
  },
};
