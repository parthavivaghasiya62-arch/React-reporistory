/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 
  // experimental: {
  //   nextScriptWorkers: true,
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/admin/dashbord/dashbord',
  //       destination: '/admin/dashbord',
  //       permanent: true,
  //     },
  //   ]
  // },
  images: {
    // formats: ['image/png', 'image/jpg'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/storage/**',
      },
    ],
  },
}

module.exports = nextConfig
// /** @type {import('next').NextConfig} */
// module.exports = {
  
// }
