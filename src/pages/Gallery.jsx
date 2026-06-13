import React from 'react';
import { Link } from 'react-router-dom';

const years = ["RESQ", "2019", "2022", "2023", "2024", "2025"];

const Gallery = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-beige">
      {/* Ornamen Kiri Atas */}
      <img 
        className="absolute top-0 left-0 h-3/5" 
        src="/src/assets/ornamen/bunga2q.png" 
        alt="Ornamen Kiri" 
      />

      {/* Ornamen Kanan Bawah */}
      <img 
        className="absolute bottom-0 right-0 h-3/5" 
        src="/src/assets/ornamen/bunga2.png" 
        alt="Ornamen Kanan" 
      />

      {/* Konten Gallery */}
      <div className="relative flex flex-col items-center justify-center mt-10 animate-fadeIn">
        {years.map((year, index) => (
          <Link key={year} to={`/gallery-${year.toLowerCase()}`} className="w-full max-w-sm">
            <div className={`mx-auto flex items-center justify-center text-white text-lg font-semibold gap-x-4 rounded-xl bg-orange-900 p-6 shadow-lg transition-transform duration-300 hover:scale-105 ${index !== 0 ? "mt-5" : ""}`}>
              {year}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
