/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.unsplash.com"],
    // images: {
    //   remotePatterns: [
    // {
    //   protocol: "https",
    //   hostname: "example.com",
    //   port: "",
    //   pathname: "/account123/**",
    // },
    //   ],
    // },
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
