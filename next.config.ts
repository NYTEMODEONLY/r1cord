import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression and optimization
  compress: true,

  // Production optimizations
  productionBrowserSourceMaps: false,

  // Vercel-specific optimizations
  poweredByHeader: false,
  reactStrictMode: true,

  // Bundle analyzer (uncomment for build analysis)
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   if (!dev) {
  //     config.plugins.push(
  //       new webpack.DefinePlugin({
  //         'process.env.BUILD_ID': JSON.stringify(buildId),
  //       })
  //     );
  //   }
  //   return config;
  // },

  // Output configuration for Vercel
  output: 'standalone',
};

export default nextConfig;
