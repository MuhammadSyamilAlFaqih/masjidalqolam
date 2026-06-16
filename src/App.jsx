import React from 'react';
import Homepage from './pages/Homepage';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import About from './pages/About';
import Jadwal from './pages/Jadwal';
import Gallery from './pages/Gallery';
import Kegiatan from './pages/Kegiatan';
import GalleryResq from './pages/Gallery/GalleryResq';
import Contact from './pages/Contact';
import Gallery2019 from './pages/Gallery/Gallery2019';
import Gallery2022 from './pages/Gallery/Gallery2022';
import Gallery2023 from './pages/Gallery/Gallery2023';
import Gallery2024 from './pages/Gallery/Gallery2024';
import Gallery2025 from './pages/Gallery/Gallery2025';
import Sejarah from './pages/Sejarah';
import GalleryDetail from './pages/GalleryDetail';


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
      <Route path='/gallery-kajian' element={<GalleryResq />}></Route>
      <Route path='/gallery-2019' element={<Gallery2019 />}></Route>
      <Route path='/gallery-2022' element={<Gallery2022 />}></Route>
      <Route path='/gallery-2023' element={<Gallery2023 />}></Route>
      <Route path='/gallery-2024' element={<Gallery2024 />}></Route>
      <Route path='/gallery-2025' element={<Gallery2025 />}></Route>
      <Route path="/gallery-:slug" element={<GalleryDetail />} />
      </Routes>
    </Layout>
    </BrowserRouter>
    </div>
  );
};

export default App;