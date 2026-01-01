/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // for static export
  images: {
    unoptimized: true, // disables Image Optimization
  },
};

module.exports = nextConfig;
