/** @type {import('next').NextConfig} */

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3-eu-west-1.amazonaws.com',
          port: '',
          pathname: '/fid-media-prod/**',
        },
      ],
    },
  }