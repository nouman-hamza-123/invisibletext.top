/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['invisibletext.pro'],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  export default config;
  