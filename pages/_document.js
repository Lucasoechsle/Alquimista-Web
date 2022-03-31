import Document, { Html, Head, Main, NextScript } from 'next/document';

import Favicons from '../components/Favicons';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <Favicons />
        </Head>
        <body className='bg-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
