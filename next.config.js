/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add remote domains here if you later pull images from a CDN or CMS.
    // e.g. domains: ["cdn.example.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
