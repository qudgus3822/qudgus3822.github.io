/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    images: {
        loader: 'akamai',
        path: '/',
    },
    basePath: '/nextjs-blog',
    reactStrictMode: true,
}

module.exports = nextConfig