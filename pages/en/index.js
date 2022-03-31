import Head from 'next/head';
import Navbar from '../../components/es/navigation/NavBar';
import Footer from '../../components/es/navigation/Footer';
import Fondo from '../../components/es/navigation/Fondo';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dreamurs</title>
      </Head>
      <header>
        <Navbar />
      </header>
     
      <main className='mx-auto grid h-screen min-h-full max-w-7xl bg-gradient-to-tr from-red-500 to-yellow-500 items-center justify-center'>
      

        <span className='sr-only'>Dreamurs</span>
        <img className='w-80 rounded-3xl' src='/images/Logo Dreamurs-03.svg' alt='' />
        
      </main>


      
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
