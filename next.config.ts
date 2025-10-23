import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // List of domains from which images can be loaded from
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
        port: '',
        pathname: '/platform/profilepic/**',
      },
    ],
  },
}

export default nextConfig
