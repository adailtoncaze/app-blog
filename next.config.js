/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https'
      },
      {
        hostname: 'images.prismic.io',
        protocol: 'https'
      }
    ]
  }
}

module.exports = nextConfig
