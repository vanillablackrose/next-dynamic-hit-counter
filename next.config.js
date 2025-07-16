// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/*': ['./src/database.json'],
  },
};

module.exports = nextConfig;
