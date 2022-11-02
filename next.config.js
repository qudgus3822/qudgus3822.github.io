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
    aeestPrefix: './',
    reactStrictMode: true,
    staticDirs: ['/public/static'],
}

module.exports = nextConfig