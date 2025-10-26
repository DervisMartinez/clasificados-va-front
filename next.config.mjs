/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['panel.radioamerica.com.ve','localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'https', 
        hostname: 'panel.radioamerica.com.ve', 
        port: '', 
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
