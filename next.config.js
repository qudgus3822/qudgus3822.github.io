/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    images: {
        loader: 'akamai',
        path: '/',
    },
    // basePath: '/',
    aeestPrefix: './',
    reactStrictMode: true,
    staticDirs: ['/public/static'],
    env: {
        FileUrl: process.env.FileUrl,
        GitHubAccessToken: process.env.GitHubAccessToken
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig