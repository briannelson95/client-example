/** @type {import('next').NextConfig} */

const STUDIO_REWRITE = {
  source: "/admin/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/admin/:path*"
      : "/studio/index.html",
}

const nextConfig = {
  rewrites: () => [STUDIO_REWRITE],
}

module.exports = nextConfig;