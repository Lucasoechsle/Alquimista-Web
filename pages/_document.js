import Document, { Html, Head, Main, NextScript } from 'next/document';
import Favicons from '../components/Favicons';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          <Favicons />
          <meta
            name='description'
            content='Alquimista Gin NFT Drop'
          />
          <meta
            property='og:description'
            content={`Alquimista Gin NFT Drop`}
          />
          <meta property='og:image' content='/favicons/favicon196x196.png' />
        </Head>
        <body className='bg-white dark:bg-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
