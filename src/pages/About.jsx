import React from 'react';

const About = () => {
  const kegiatan = [
     { img: "/public/resqew.png", title: "Idul Fitri" },
    { img: "/public/cwe.jpg", title: "Halal bi Halal" },
      { img: "/public/rpatt.jpeg", title: "Rapat" },
          { img: "/public/WhatsApp Image 2025-07-04 at 14.49.04 (1).jpeg", title: "Rihlah" },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 font-[merriweather] mb-3">
        Tentang Kami
      </h2>
      <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>

      <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
        Kami adalah pemuda masjid Al Qolam, sekumpulan anak muda yang
        bersatu untuk menghidupkan suasana masjid melalui berbagai
        kegiatan keagamaan, sosial, dan kebersamaan. Mulai dari kajian
        rutin, pengajian, kerja bakti, hingga acara-acara hari besar
        Islam, kami hadir untuk mempererat ukhuwah dan menjadikan masjid
        sebagai pusat aktivitas yang bermanfaat bagi seluruh jamaah dan
        masyarakat sekitar.
      </p>

      {/* Card foto kegiatan */}
      <div className="flex flex-wrap justify-center gap-6">
        {kegiatan.map((item, index) => (
          <div
            key={index}
            className="bg-orange-900 rounded-3xl shadow-lg p-3 w-full md:w-1/2 lg:w-1/3 overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-white text-center font-semibold mt-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;