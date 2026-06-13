import React from 'react';
import { Link } from 'react-router-dom';

const Kegiatan = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center ">
      {/* Gambar menyebar */}
      <img className="absolute bottom-10 left-16 h-80 w-80" src="/src/assets/ornamen/bunga9.png" alt="" />
      <img className="absolute bottom-20 right-20 h-80 w-80" src="/src/assets/ornamen/bunga10.png" alt="" />
     

      {/* Kontainer Teks */}
      <div className="flex flex-col space-y-5 text-center">
        <Link to="/gallery-resq">
          <div className="max-w-sm mx-auto text-white text-center rounded-xl bg-orange-900 p-5 shadow-lg transition-transform duration-300 hover:scale-[1.1]">
            Jumat Berkah
          </div>
        </Link>

        <Link to="/gallery-2019">
          <div className="max-w-sm mx-auto text-white text-center rounded-xl bg-orange-900 p-5 shadow-lg transition-transform duration-300 hover:scale-[1.1]">
            Ramadhan
          </div>
        </Link>

        <Link to="/gallery-2022">
          <div className="max-w-sm mx-auto text-white text-center rounded-xl bg-orange-900 p-5 shadow-lg transition-transform duration-300 hover:scale-[1.1]">
            Kajian Subuh
          </div>
        </Link>

        <Link to="/gallery-2023">
          <div className="max-w-sm mx-auto text-white text-center rounded-xl bg-orange-900 p-5 shadow-lg transition-transform duration-300 hover:scale-[1.1]">
            Kajian Kemuslimahan
          </div>
        </Link>

        <Link to="/gallery-2024">
          <div className="max-w-sm mx-auto text-white text-center rounded-xl bg-orange-900 p-5 shadow-lg transition-transform duration-300 hover:scale-[1.1]">
            Masjid Berbagi
          </div>
        </Link>

        <Link to="/gallery-2025">
          <div className="max-w-sm mx-auto text-white text-center rounded-xl bg-orange-900 p-5 shadow-lg transition-transform duration-300 hover:scale-[1.1]">
            Kemerdekaan
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Kegiatan;
