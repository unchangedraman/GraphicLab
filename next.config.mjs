/** @type {import('next').NextConfig} */
const nextConfig = {
    images:
    {
        remotePatterns: [{
            protocol: "https",
            hostname : "img.clerk.com" // if error is something of other type then change it to.
        }]
    }
};

export default nextConfig;
