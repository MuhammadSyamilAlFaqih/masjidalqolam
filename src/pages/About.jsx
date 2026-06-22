import React from 'react';

const About = () => {
  const kegiatan = [
    { img: "/about/resqew.png", title: "Idul Fitri" },
    { img: "/about/cwe.jpg", title: "Halal bi Halal" },
    { img: "/about/rpatt.jpeg", title: "Rapat" },
    { img: "/about/rihlah.jpeg", title: "Rihlah" },
  ];

  return (
    <section className="pt-28 md:pt-32 pb-16 px-4 md:px-6 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 font-[merriweather] mb-3">
        Tentang Kami
      </h2>
      <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>

      <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
        Kami adalah pemuda masjid Al Qolam, sekumpulan anak muda yang
        bersatu untuk menghidupkan suasana masjid melalui berbagai
        kegiatan keagamaan, sosial, dan kebersamaan. Mulai dari kajian
        rutin, pengajian, kerja bakti, hingga acara-acara hari besar
        Islam, kami hadir untuk mempererat ukhuwah dan menjadikan masjid
        sebagai pusat aktivitas yang bermanfaat bagi seluruh jamaah dan
        masyarakat sekitar.
      </p>

      {/* Card foto kegiatan */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {kegiatan.map((item, index) => (
          <div
            key={index}
            className="bg-orange-900 rounded-2xl md:rounded-3xl shadow-lg p-2 md:p-3 overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-32 md:h-64 object-cover rounded-lg"
            />
            <p className="text-white text-center text-sm md:text-base font-semibold mt-2 md:mt-3">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;