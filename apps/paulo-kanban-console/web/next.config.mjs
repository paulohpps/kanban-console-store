const nextConfig = {
  async rewrites() {
    return [{ source: '/api/:path*', destination: `${process.env.API_INTERNAL_URL || 'http://api:3001'}/api/:path*` }];
  },
};

export default nextConfig;
