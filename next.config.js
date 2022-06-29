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
        destination: '/files/Bircle-Deck-Proto.pdf',
        permanent: true,
      },
      {
        source: '/alquimistanft',
        destination: '/files/Bircle-Deck-Proto.pdf',
        permanent: true,
      },
      {
        source: '/alquimista',
        destination: '/files/Bircle-Deck-Proto.pdf',
        permanent: true,
      },
      {
        source: '/bircle',
        destination: '/files/Bircle-Deck-Proto.pdf',
        permanent: true,
      },
    ];
  },
};
