module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
      {
        source: '/manucoll',
        destination: '/files/manucoll.pdf',
        permanent: true,
      },
      {
        source: '/alquimistanft',
        destination: '/files/alquimistanft.pdf',
        permanent: true,
      },
      {
        source: '/alquimista',
        destination: '/files/alquimista.pdf',
        permanent: true,
      },
      {
        source: '/bircle',
        destination: '/files/bircle.pdf',
        permanent: true,
      },
    ];
  },
};
