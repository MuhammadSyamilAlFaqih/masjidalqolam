import React from 'react';
import { Link } from 'react-router-dom';

const years = [
  { label: "Kajian", path: "kajian", img: "/gallery/kajian.jpeg" },
  { label: "Jumat Berkah", path: "jumat-berkah", img: "/gallery/jumber.jpeg" },
  { label: "Ramadhan", path: "ramadhan", img: "/gallery/ramadhan/001.jpg" },
  { label: "Sosial", path: "sosial", img: "/gallery/WNA08327.JPG" },
  { label: "Idul Adha", path: "iduladha", img: "/gallery/iduladha/005.JPG" },
  { label: "Kegiatan Pemuda", path: "pemuda", img:   "/gallery/pemuda/018.jpeg", },
];

const Gallery = () => {
  return (
    <div className="relative flex flex-col min-h-screen bg-white overflow-hidden">
      <img className="absolute top-0 left-0 h-40 md:h-3/5 opacity-40 pointer-events-none" src="/ornamen/bunga2q.png" alt="" />
      <img className="absolute bottom-0 right-0 h-40 md:h-3/5 opacity-40 pointer-events-none" src="/ornamen/bunga2.png" alt="" />

      <div className="relative text-center pt-28 md:pt-32 mb-8 md:mb-10 px-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 font-[merriweather]">
          Galeri Kegiatan
        </h1>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Dokumentasi perjalanan dan kegiatan Masjid Al Qolam
        </p>
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 px-4 md:px-6 pb-12 md:pb-16 max-w-4xl mx-auto w-full">
        {years.map((item) => (
          <Link key={item.label} to={`/gallery-${item.path}`}>
            <div className="group relative h-32 md:h-56 rounded-xl md:rounded-2xl overflow-hidden shadow-md cursor-pointer">
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center px-2">
                <span className="text-white text-sm md:text-2xl font-bold tracking-wide drop-shadow-lg text-center">
                  {item.label}
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