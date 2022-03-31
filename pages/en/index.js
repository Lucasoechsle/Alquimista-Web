import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>bircle</title>
      </Head>
      <main className='mx-auto grid h-screen min-h-full max-w-7xl items-center justify-center px-4'>
        <span className='sr-only'>bircle</span>
        <img className='w-40' src='/images/bircle-logo.jpg' alt='' />
      </main>
    </>
  );
}
