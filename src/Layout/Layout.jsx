import Container from './Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ( {children}) => {
  return (
  <div className='flex flex-col min-h-screen'>  
    <Navbar/>
   <main className=' pt-20 flex-1'>
    <Container>
    {children}
    </Container>
   </main>
    <Footer/>
    </div>
  );
};

export default Layout;