/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove experimental appDir as it's now stable in Next.js 15
  output: 'standalone',
  images: {
    unoptimized: false,
  },
}

module.exports = nextConfig

