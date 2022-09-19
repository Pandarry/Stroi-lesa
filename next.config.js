/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'stroi-lesa.kz'],
  },
  swcMinify: true,
}

module.exports = nextConfig
