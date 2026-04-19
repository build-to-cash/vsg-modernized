/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  outdir: 'out',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;