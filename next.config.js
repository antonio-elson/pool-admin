// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})
const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    forceSwcTransforms: true
  },
  pwa: {
    dest: 'public',
    disable: !isProd
  }
}
module.exports = withPWA(nextConfig)
