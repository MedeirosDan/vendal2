/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/vendal2" : "",
  assetPrefix: isProd ? "/vendal2/" : "",
};

export default nextConfig;
