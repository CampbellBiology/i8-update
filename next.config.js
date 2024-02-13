// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   trailingSlash: true,
//   reactStrictMode: true,
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         // destination: `http://127.0.0.1:3004/api/:path*`,
//         destination: `http://183.101.208.3:14530/api/:path*`

//       },
//     ];
//   },
// };

// module.exports = nextConfig;

// /* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',

        destination: `http://183.101.208.3:14530/api/:path*/`

        //destination: `http://127.0.0.1:3004/api/:path*`,
      }
    ]
  }
}

module.exports = nextConfig
