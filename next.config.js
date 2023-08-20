/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/platos/editar',
        destination: '/dishes/edit',
      },
    ];
  },
}

module.exports = nextConfig
