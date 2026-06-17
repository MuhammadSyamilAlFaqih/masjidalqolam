import React, { useState, useEffect } from 'react';

// =============================================
// FOTO HERO — pastikan semua file ada di folder public/
// =============================================
const heroPhotos = [
  "/iqro/masjid.JPG",
  "/iqro/masjid2.JPG",
  "/iqro/masjid3.JPG",
  "/iqro/masjid4.JPG",
  "/iqro/masjid5.JPG",
  "/iqro/masjid6.JPG",
  "/iqro/masjid7.JPG",
  "/iqro/masjid8.JPG",
  "/iqro/masjid9.JPG",
  "/iqro/masjid10.JPG",
  "/iqro/masjid11.JPG",
  "/iqro/masjid12.JPG",
  "/iqro/masjid13.JPG",
  "/iqro/masjid14.JPG",
  "/iqro/masjid15.JPG",
  "/iqro/masjid16.JPG",
  "/iqro/masjid17.JPG",
  "/iqro/masjid18.JPG",
  "/iqro/masjid19.JPG",
];

const Homepage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroPhotos.length);
    }, 3000); // ganti tiap 3 detik

    return () => clearInterval(interval); // bersihkan interval saat unmount
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Render semua foto, hanya yang aktif yang terlihat (fade transition) */}
      {heroPhotos.map((photo, i) => (
        <img
          key={photo}
          src={photo}
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">
          Masjid Al Qolam
        </h1>
        <p className="text-xl max-w-2xl">
          Rumah singgah jiwa yang rindu ketenangan,
          terbuka untuk semua, setiap saat.
        </p>
      </div>

      {/* Indikator titik (opsional) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 flex-wrap justify-center max-w-[90%]">
        {heroPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-white' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
