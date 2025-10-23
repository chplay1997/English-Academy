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
    ],
  },
}

export default nextConfig
