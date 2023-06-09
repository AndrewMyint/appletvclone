/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/:any*", destination: "/" }];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
module.exports = nextConfig;
