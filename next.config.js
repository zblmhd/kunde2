/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qdatsbsgcmkmijfsjhjt.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // SVG placeholders are used in Step 2 until Envato photos are sourced.
    // contentDispositionType + CSP keep SVGs safe from embedded scripts.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
