
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.jaqilinmakeover.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  allowedDevOrigins: ['*.cluster-y3k7ko3fang56qzieg3trwgyfg.cloudworkstations.dev'],
};

export default nextConfig;
