import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const photos = [
  "/gallery/WNA08327.JPG",
];

const GallerySosial = () => {
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="relative flex flex-col min-h-screen bg-white overflow-hidden">
        {/* Ornamen */}
        <img className="absolute top-0 left-0 h-40 md:h-2/5 opacity-30 pointer-events-none" src="/ornamen/bunga2q.png" alt="" />
        <img className="absolute bottom-0 right-0 h-40 md:h-2/5 opacity-30 pointer-events-none" src="/ornamen/bunga2.png" alt="" />

        {/* Header */}
        <div className="relative text-center pt-28 md:pt-32 mb-8 px-4">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 md:left-8 top-28 md:top-32 flex items-center gap-1 text-gray-500 hover:text-orange-500 transition-colors text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali
          </button>
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 font-[merriweather]">Sosial</h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-400 mt-2 text-sm">{photos.length} foto</p>
        </div>

        {/* Grid foto */}
        <div className="relative grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 px-4 md:px-8 pb-16 max-w-5xl mx-auto w-full">
          {photos.map((src, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative h-36 md:h-60 rounded-xl overflow-hidden shadow-md cursor-zoom-in"
            >
              <img
                src={src}
                alt={`Sosial ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
          style={{ animation: 'fadeIn 0.2s ease' }}
        >
          <button className="absolute top-4 right-5 text-white text-3xl hover:text-orange-400 transition-colors" onClick={() => setLightbox(null)}>✕</button>
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm">{lightbox + 1} / {photos.length}</span>

          <button className="absolute left-3 md:left-8 text-white text-4xl hover:text-orange-400 px-2"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p - 1 + photos.length) % photos.length); }}>‹</button>

          <img key={lightbox} src={photos[lightbox]} alt="" className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
            style={{ animation: 'zoomIn 0.25s ease' }} onClick={(e) => e.stopPropagation()} />

          <button className="absolute right-3 md:right-8 text-white text-4xl hover:text-orange-400 px-2"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p + 1) % photos.length); }}>›</button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.88); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </>
  );
};

export default GallerySosial;