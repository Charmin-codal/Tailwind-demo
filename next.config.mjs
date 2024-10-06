/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      return {
        '/': { page: '/' },
        // Add more routes here if needed
      }
    },
    // Set custom output directory
    distDir: 'public',
  }
  
export default nextConfig;
