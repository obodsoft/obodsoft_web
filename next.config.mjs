/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Use static exports
  images: {
    unoptimized: true, // For static export
  },
};

export default nextConfig;
