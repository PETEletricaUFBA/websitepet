/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'http://localhost:3000',
  },
  images: {
    loader: "custom"
  }
}

module.exports = nextConfig
