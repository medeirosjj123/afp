/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost']
  },
  basePath: '',
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig 