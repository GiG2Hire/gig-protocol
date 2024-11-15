module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gig2hirelocal.s3.eu-north-1.amazonaws.com",
      },
    ],
  },

  experimental: {
    serverComponentsExternalPackages: [
      "@aws-sdk/client-s3",
      "@aws-sdk/s3-request-presigner",
    ],
  },
};
