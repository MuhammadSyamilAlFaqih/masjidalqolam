import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Maps */}
      <section className="bg-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-red-950 mb-2">
            Lokasi Masjid
          </h2>

          <p className="text-center text-gray-600 mb-8">
            Temukan lokasi Masjid Al Qolam melalui Google Maps.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              title="Masjid Al Qolam"
              src="https://www.google.com/maps?q=MASJID+AL+QOLAM+ISLAMIC+CENTRE+IQRO&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/place/MASJID+AL+QOLAM+ISLAMIC+CENTRE+IQRO/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-900 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
            >
              📍 Buka di Google Maps
            </a>
          </div>

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