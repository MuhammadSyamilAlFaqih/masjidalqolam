import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import About from './pages/About';
import Jadwal from './pages/Jadwal';
import Gallery from './pages/Gallery';
import Kegiatan from './pages/Kegiatan';
import Contact from './pages/Contact';
import GalleryResq from './pages/Gallery/GalleryResq';
import GalleryRamadhan from './pages/Gallery/Galleryramadhan';
import GalleryJumber from './pages/Gallery/Galleryjumber';
import GallerySosial from './pages/Gallery/Gallerysosial';
import GalleryPemuda from './pages/Gallery/Gallerypemuda';
import GalleryIdulAdha from './pages/Gallery/Galleryiduladha';
import GalleryKajian from './pages/Gallery/Gallerykajian';
import Sejarah from './pages/Sejarah';



const App = () => {
  return (
    <div>                                                                 
    <BrowserRouter>
    <Layout>
      <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/kegiatan' element={<Kegiatan />}></Route>
      <Route path='/jadwal' element={<Jadwal />}></Route>
      <Route path='/gallery' element={<Gallery />}></Route>
      <Route path='/sejarah' element={<Sejarah />}></Route>
      <Route path='/gallery-kajian' element={<GalleryKajian />}></Route>
      <Route path='/gallery-ramadhan' element={<GalleryRamadhan />}></Route>
      <Route path='/gallery-jumat-berkah' element={<GalleryJumber />}></Route>
      <Route path='/gallery-sosial' element={<GallerySosial />}></Route>
      <Route path='/gallery-iduladha' element={<GalleryIdulAdha />}></Route>
      <Route path='/gallery-pemuda' element={<GalleryPemuda />}></Route>
    
      </Routes>
    </Layout>
    </BrowserRouter>
    </div>
  );
};

export default App;