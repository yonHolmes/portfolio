import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: "/2048-in-react",
};

export default nextConfig;
