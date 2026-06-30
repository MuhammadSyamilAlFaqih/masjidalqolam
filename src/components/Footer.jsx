import React from 'react';

const Footer = () => {
  return (
    <>
    <section className="bg-gray-100 py-16">
  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center text-red-950 mb-3">
      Kunjungi Kami
    </h2>

    <p className="text-center text-gray-600 mb-10">
      Masjid Al Qolam terbuka untuk seluruh jamaah.
      Klik kartu di bawah untuk membuka lokasi di Google Maps.
    </p>

    <a
      href="https://www.google.com/maps/place/MASJID+AL+QOLAM+ISLAMIC+CENTRE+IQRO/"
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div
        className="
        bg-white
        rounded-3xl
        shadow-lg
        p-8
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-2
        border
        border-gray-200
      "
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div>
            <div className="text-5xl mb-4">📍</div>

            <h3 className="text-2xl font-bold text-red-950">
              Masjid Al Qolam
            </h3>

            <p className="text-gray-600 mt-3">
              Islamic Centre IQRO
            </p>

            <p className="text-gray-500 mt-1">
              Bekasi Timur, Jawa Barat
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-red-900 font-semibold group-hover:gap-4 transition-all">
              Buka di Google Maps →
            </div>
          </div>

          <div
            className="
            w-44
            h-44
            rounded-2xl
            bg-red-50
            flex
            items-center
            justify-center
            group-hover:scale-105
            transition
          "
          >
            <img
              src="/logo.png"
              alt="Logo Masjid"
              className="w-28"
            />
          </div>

        </div>
      </div>
    </a>

  </div>
</section>
      {/* Footer */}
      <footer className="flex justify-center items-center bg-red-950 py-4">
        <div className="text-white text-center px-4">
          © 2024{" "}
          <a
            className="hover:text-red-300 transition"
            href="https://www.google.com/maps/place/MASJID+AL+QOLAM+ISLAMIC+CENTRE+IQRO/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Al Qolam
          </a>{" "}
          All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;