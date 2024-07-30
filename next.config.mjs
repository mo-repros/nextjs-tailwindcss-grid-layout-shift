/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  output: "export",
  assetPrefix: isProd
    ? "https://mo-repros.github.io/nextjs-tailwindcss-grid-layout-shift/"
    : "",
}

export default nextConfig
