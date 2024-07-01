/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "./",
  images: {
    loader: "akamai",
    path: "",
  },
  output: "export"
};

export default nextConfig;
