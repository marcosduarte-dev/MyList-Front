/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/homepage",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
