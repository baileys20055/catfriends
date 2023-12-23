/** @type {import('next').NextConfig} */
const nextConfig = {
//   reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
