/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    typescript: {
        // Disabling type checking during build
        ignoreBuildErrors: true,
    },
}

export default nextConfig