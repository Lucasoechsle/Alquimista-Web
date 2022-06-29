import Head from 'next/head';
import Favicons from '../../components/Favicons';
import Navbar from '../../components/es/navigation/NavBar';
import Footer from '../../components/es/navigation/Footer';
import Fondo from '../../components/es/navigation/Fondo';
import HomeScreen from '../../components/es/HomeScreen';

export default function Home() {
  return (
    <>
      <Head>
        <title>AlquimistaGin</title>
        <Favicons />
      </Head>
      
      {/* <header>
        <Navbar />
      </header> */}
     
      
          <span className='sr-only'>AlquimistaGin</span>
          <HomeScreen />

          <Footer />
  
    
        
    


      
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
