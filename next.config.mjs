// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'flagsapi.com',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  