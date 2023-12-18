/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['tmdb.org', 'themoviedb.org','image.tmdb.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tmdb.org',
      },
      {
        protocol: 'https',
        hostname: 'themoviedb.org',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
};

module.exports = nextConfig;
