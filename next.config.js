/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'br'],
    defaultLocale: 'en',
  },
}

module.exports = nextConfig
