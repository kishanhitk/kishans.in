module.exports = {
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "https://blog.kishans.in/",
        permanent: false,
      },
    ];
  },
};
