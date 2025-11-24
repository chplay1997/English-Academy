import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Disable telemetry for faster builds
  eslint: {
    ignoreDuringBuilds: false, // Keep linting but can set to true for faster builds
  },
  typescript: {
    ignoreBuildErrors: false, // Keep type checking but can set to true for faster builds
  },

  // Enable optimizations
  swcMinify: true,

  images: {
    // List of domains from which images can be loaded from
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com',
        pathname: '/platform/profilepic/**',
      },
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
