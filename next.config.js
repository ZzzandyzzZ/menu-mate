/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tropicalcomidarapida.com', 'assets.tmecosys.com', 'upload.wikimedia.org', 'newluxbrand.com', 'encrypted-tbn0.gstatic.com', 'elcomercio.pe', 'images.unsplash.com'],
  },
  async rewrites() {
    return [
      {
        source: '/platos/editar',
        destination: '/dishes/edit',
      },
    ]
  },
}

module.exports = nextConfig
