/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '', // Leave empty for default HTTPS port
        pathname: '/**', // Allow all paths under this domain
      },
    ],
  },
};

export default nextConfig;
