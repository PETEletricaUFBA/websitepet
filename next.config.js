/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'https://peteletricaufba.github.io',
  },
  images: {
    loader: "custom"
  }
}

module.exports = nextConfig
