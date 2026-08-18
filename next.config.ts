
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.jaqilinmakeover.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.fbcdn.net",
      }
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  allowedDevOrigins: ['*.cluster-y3k7ko3fang56qzieg3trwgyfg.cloudworkstations.dev'],
  async rewrites() {
    return [
      {
        source: '/contact',
        destination: '/connect',
      },
    ]
  },
};

export default nextConfig;
