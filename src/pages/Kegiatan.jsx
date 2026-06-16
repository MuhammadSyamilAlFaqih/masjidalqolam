import React from 'react';
import { Link } from 'react-router-dom';

const kegiatan = [
  {
    label: "Jumat Berkah",
    path: "/gallery-resq",
    img: "/icon/restaurant.png",
    desc: "Berbagi kebaikan setiap Jumat bersama jamaah dan warga sekitar. #jumatmustahillapar",
  },
  {
    label: "Ramadhan",
    path: "/gallery-2019",
    img: "/icon/ketupat.png",
    desc: "Rangkaian ibadah dan kegiatan spesial sepanjang bulan suci.",
  },
  {
    label: "Kajian Subuh",
    path: "/gallery-2022",
    img: "/icon/conference.png",
    desc: "Menimba ilmu di hari sabtu dan minggu pagi dengan tema-tema yang komprehensif.",
  },
  {
    label: "Kajian Kemuslimahan",
    path: "/gallery-2023",
    img: "/icon/muslim.png",
    desc: "Ruang belajar dan berbagi khusus untuk muslimah.",
  },
  {
    label: "Masjid Berbagi",
    path: "/gallery-2024",
    img: "/icon/charity.png",
    desc: "Program berbagi dan pembinaan sosial untuk masyarakat sekitar.",
  },
  {
    label: "Kemerdekaan",
    path: "/gallery-2025",
    img: "/icon/indonesia.png",
    desc: "Merayakan HUT RI dengan semangat kebersamaan dan pancasila.",
  },
];

const Kegiatan = () => {
  return (
    <div className="relative min-h-screen bg-[#fdf6ec] overflow-hidden px-6 py-16">

      {/* Ornamen */}
      <img
        className="absolute bottom-10 left-0 h-80 w-80 opacity-30 pointer-events-none"
        src="/ornamen/bunga9.png"
        alt=""
      />
      <img
        className="absolute bottom-10 right-0 h-80 w-80 opacity-30 pointer-events-none"
        src="/ornamen/bunga9.png"
        alt=""
      />

      {/* Judul */}
      <div className="relative text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 font-[merriweather]">
          Agenda Masjid
        </h1>
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-500 mt-3 text-sm">
          Berbagai program rutin Masjid Al Qolam
        </p>
      </div>

      {/* Grid Card */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {kegiatan.map((item) => (
          <Link key={item.label} to={item.path}>
            <div className="group bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 border border-orange-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">

              {/* Ikon */}
              <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center overflow-hidden">
                <img src={item.img} alt={item.label} className="w-10 h-10 object-contain" />
              </div>

              {/* Label */}
              <h3 className="text-gray-900 font-bold text-lg group-hover:text-orange-700 transition-colors duration-200">
                {item.label}
              </h3>

              {/* Deskripsi */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Lihat selengkapnya */}
              <span className="mt-auto text-orange-600 text-sm font-semibold group-hover:underline">
                Lihat galeri →
              </span>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Kegiatan;