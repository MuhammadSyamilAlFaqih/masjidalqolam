import React from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-12 text-white overflow-hidden">
      
      {/* Background */}
      <img
        src="/cntc.JPG"
        alt="Masjid Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl text-center">

        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          Hubungi Kami
        </h2>

        <p className="text-sm md:text-lg text-gray-200 mb-10">
          Silakan hubungi kami untuk informasi kegiatan, kajian, maupun
          program Masjid Al Qolam.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* WhatsApp */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-white/25 transition">
            <FaWhatsapp className="text-green-400 text-4xl md:text-5xl mx-auto mb-4" />

            <h3 className="text-lg md:text-xl font-semibold mb-2">
              WhatsApp
            </h3>

            <p className="text-sm md:text-base text-gray-200">
              Ketua DKM Masjid Al Qolam
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-green-300 font-semibold hover:text-green-200"
            >
              Chat Sekarang →
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-white/25 transition">
            <FaInstagram className="text-pink-400 text-4xl md:text-5xl mx-auto mb-4" />

            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Instagram
            </h3>

            <p className="text-sm md:text-base text-gray-200">
              Dokumentasi kegiatan dan informasi terbaru
            </p>

            <a
              href="https://instagram.com/resq_iqro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-pink-300 font-semibold hover:text-pink-200"
            >
              @resq_iqro →
            </a>
          </div>

          {/* YouTube */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:bg-white/25 transition">
            <FaYoutube className="text-red-400 text-4xl md:text-5xl mx-auto mb-4" />

            <h3 className="text-lg md:text-xl font-semibold mb-2">
              YouTube
            </h3>

            <p className="text-sm md:text-base text-gray-200">
              Kajian, dokumentasi, dan konten dakwah
            </p>

            <a
              href="https://www.youtube.com/@iqrotv7919"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-red-300 font-semibold hover:text-red-200"
            >
              Kunjungi Channel →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;