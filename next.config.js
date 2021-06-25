const withMDX = require("@next/mdx")();
module.exports = {
  async redirects() {
    return [
      // {
      //   source: "/blog",
      //   destination: "https://blog.kishans.in/",
      //   permanent: false,
      // },
    ];
  },
};

module.exports = withMDX();
