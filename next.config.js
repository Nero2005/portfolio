/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com", "res.cloudinary.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
