import React from 'react';

const Homepage = () => {
  return (
    <div className="relative h-screen">
  <img
    src="../../public/Desain tanpa judul.jpg"
    alt="Hero"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/50"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
  <h1 className="text-5xl font-bold mb-4">
    Masjid Al Qolam
  </h1>
  <p className="text-xl max-w-2xl">
    Rumah singgah jiwa yang rindu ketenangan —
    terbuka untuk semua, setiap saat.
  </p>
</div>
</div>

  
  );
  <section className="py-16">
  <h2 className="text-4xl font-bold text-center mb-8">
    Galeri Kegiatan
  </h2>

  <div className="grid md:grid-cols-4 gap-4">
    {photos.map((photo) => (
      <img
        src={photo}
        className="
          h-64
          w-full
          object-cover
          rounded-xl
          transition
          duration-300
          hover:scale-105
        "
      />
    ))}
  </div>
</section>
};

export default Homepage;
