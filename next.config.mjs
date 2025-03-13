/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? process.env.BASE_PATH : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
