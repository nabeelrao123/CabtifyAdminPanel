/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'crow-results.s3.us-east-1.amazonaws.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'crow-results.s3.amazonaws.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
