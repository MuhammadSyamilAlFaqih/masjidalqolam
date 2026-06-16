import React from 'react';
import { Link } from 'react-router-dom';

const years = [
  { label: "Kajian", path: "kajian", icon: "", img: "/public/gallery/kajian.jpeg" },
  { label: "Jumat Berkah", path: "jumat-berkah", icon: "", img: "/public/gallery/jumber.jpeg" },
  { label: "Ramadhan", path: "ramadhan", icon: "", img: "/public/gallery/WhatsApp Image 2026-06-16 at 15.00.29.jpeg" },
  { label: "Sosial", path: "sosial", icon: "", img: "/public/gallery/WNA08327.JPG" },
  { label: "Hari Besar Islam", path: "hari-besar", icon: "", img: "/public/gallery/ied.JPG" },
  { label: "Kegiatan Pemuda", path: "pemuda", icon: "", img: "/public/gallery/remaja.jpeg" },
];

const Gallery = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden">

      {/* Ornamen */}
      <img
        className="absolute top-0 left-0 h-3/5 opacity-40 pointer-events-none"
        src="/ornamen/bunga2q.png"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 h-3/5 opacity-40 pointer-events-none"
        src="/ornamen/bunga2.png"
        alt=""
      />

      {/* Judul */}
      <div className="relative text-center mt-14 mb-10 px-4">
        <h1 className="text-4xl font-extrabold text-gray-900 font-[merriweather]">
          Galeri Kegiatan
        </h1>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-500 mt-3 text-m">
          Dokumentasi perjalanan dan kegiatan Masjid Al Qolam
        </p>
      </div>

      {/* Grid Card */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-5 px-6 pb-16 max-w-4xl mx-auto w-full">
        {years.map((item) => (
          <Link key={item.label} to={`/gallery-${item.path}`}>
            <div className="group relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-md cursor-pointer">

              {/* Gambar thumbnail */}
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay gelap */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>

              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center px-2">
                <span className="text-white text-lg md:text-2xl font-bold tracking-wide drop-shadow-lg text-center">
                  {item.icon} {item.label}
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Gallery;