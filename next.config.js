/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  experimental: {
    mdxRs: true,
  },
}

const withMDX = require('@next/mdx')()
const { withContentlayer } = require('next-contentlayer')
module.exports = withMDX(withContentlayer(nextConfig))
