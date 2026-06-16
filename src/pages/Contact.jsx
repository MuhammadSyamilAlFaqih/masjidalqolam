import React from "react";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* Background Image */}
      <img
        src="/public/cntc.JPG"
        alt="Masjid Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten */}
      <div className="relative z-10 text-center -translate-y-32">
        <h2 className="text-4xl font-bold mb-8">Hubungi Kami</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {/* WhatsApp */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center">
            <FaWhatsapp className="text-green-400 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">WhatsApp</h3>
            <p>Ketua DKM Masjid Al Qolam</p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 font-medium mt-2"
            >
              Chat Sekarang
            </a>
          </div>

          {/* Instagram */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center">
            <FaInstagram className="text-pink-400 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Instagram</h3>
            <p>Follow kami di Instagram</p>
            <a
              href="https://instagram.com/resq_iqro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-300 font-medium mt-2"
            >
              @RESQ AL Qolam
            </a>
          </div>

          {/* YouTube */}
          <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center">
            <FaYoutube className="text-red-400 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">YouTube</h3>
            <p>Tonton video kajian kami</p>
            <a
              href="https://www.youtube.com/@iqrotv7919"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-300 font-medium mt-2"
            >
              Masjid Al Qolam
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
