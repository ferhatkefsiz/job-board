/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "via.placeholder.com"
      },
      {
        hostname: "res.cloudinary.com"
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY"
          }
        ]
      }
    ]
  }
}

export default nextConfig
