/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true }, // required for static export
  trailingSlash: true,
  /* output: "export",  // 👈 this is important */
};

module.exports = nextConfig;
