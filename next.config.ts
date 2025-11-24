import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // CRITICAL: Standalone output for 90% smaller deployments
  output: 'standalone',

  // Skip checks during build (do these in CI separately for speed)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Fix MongoDB bundling issues on AWS Amplify
  serverComponentsExternalPackages: ['mongodb', 'mongoose'],

  // Experimental features for React 19 compatibility
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Optimize production builds
  poweredByHeader: false,
  compress: true,

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
