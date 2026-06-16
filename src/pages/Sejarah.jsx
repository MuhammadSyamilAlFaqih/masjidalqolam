import React from 'react';

const Sejarah = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 px-4 md:px-6 bg-gray-50">

      <div className="max-w-4xl mx-auto">

        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 font-[merriweather] mb-3">
            Sejarah Masjid Al Qolam
          </h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Konten utama */}
        <div className="flex flex-col gap-10 text-gray-700 text-base md:text-lg leading-relaxed">

          {/* Paragraf 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="/masjid.jpg"
              alt="Masjid Al Qolam"
              className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-md shrink-0"
            />
            <div className="flex flex-col gap-4">
              <p className="text-gray-700 leading-relaxed">
                Masjid Al Qolam berawal dari sebidang tanah wakaf seluas sekitar
                1.600 m² di Kelurahan Jatimakmur, Pondok Gede, Bekasi. Dari
                tanah inilah kegiatan dakwah, pendidikan, dan ekonomi yang
                terpadu mulai dirintis, dengan dibukanya Taman Al-Qur'an untuk
                usia TK serta Ma'had Dirosah Islamiyah untuk para pemuda-pemudi.
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Berdiri di atas tanah wakaf seluas ±1.600 m²",
                  "Diawali dengan Taman Al-Qur'an dan Ma'had Dirosah Islamiyah",
                  "Berlokasi di Jatimakmur, Pondok Gede, Bekasi",
                  "Menjadi bagian dari Yayasan Iqro Bekasi",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Paragraf 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <img
              src="/gallery/sjrh.JPG"
              alt="Kegiatan Masjid"
              className="w-full md:w-1/2 h-64 object-cover rounded-2xl shadow-md shrink-0"
            />
            <div className="flex flex-col gap-4">
              <p className="text-gray-700 leading-relaxed">
                Bangunan fisik pertama yang didirikan adalah sebuah masjid dua
                lantai, difungsikan sebagai tempat ibadah, empat ruang kelas
                belajar, serta satu ruang guru dan tata usaha. Masjid inilah
                yang kemudian diberi nama <strong>Masjid Al-Qolam</strong>,
                disusul lembaga pendidikan formal SDIT IQRO', Lembaga Tahfidz
                Al-Qur'an, dan BMT Abdurahman Bin Auf.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { angka: "2", label: "Lantai Masjid" },
                  { angka: "4", label: "Ruang Kelas" },
                  { angka: "3", label: "Lembaga Awal" },
                ].map((item, i) => (
                  <div key={i} className="text-center bg-orange-50 border border-orange-100 rounded-xl py-3">
                    <p className="text-xl font-bold text-orange-600">{item.angka}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Paragraf 3 */}
          <p>
            Seluruh kegiatan awalnya digerakkan oleh sebuah lembaga payung
            bernama "Islamic Center Iqro", yang membawahi tiga lembaga:
            Dakwah, Pendidikan, serta Ekonomi dan Usaha. Seiring berjalannya
            waktu, nama lembaga payung tersebut melebur menjadi Yayasan Iqro
            Bekasi, dengan DKM Al Qolam sebagai salah satu lembaga dakwah di
            bawahnya. Kini, Masjid Al Qolam tidak hanya menjadi tempat sholat,
            ia adalah jantung komunitas — melalui pemuda masjid yang aktif,
            berbagai kegiatan rutin terus diselenggarakan: kajian mingguan,
            santunan anak yatim, pengajaran Al-Qur'an untuk anak-anak, hingga
            kegiatan sosial kemasyarakatan.
          </p>

        </div>

        {/* Timeline sederhana */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Perjalanan Kami
          </h3>
          <div className="flex flex-col gap-3">
            {[
              { tahun: "Awal", keterangan: "Menerima tanah wakaf ±1.600 m² di Jatimakmur, Pondok Gede, Bekasi." },
              { tahun: "Tahap 1", keterangan: "Dibuka Taman Al-Qur'an (TK) dan Ma'had Dirosah Islamiyah untuk pemuda-pemudi." },
              { tahun: "Tahap 2", keterangan: "Berdiri SDIT IQRO', Lembaga Tahfidz Al-Qur'an, dan BMT Abdurahman Bin Auf." },
              { tahun: "Tahap 3", keterangan: "Bangunan masjid dua lantai berdiri, diberi nama Masjid Al-Qolam, lengkap dengan 4 ruang kelas." },
              { tahun: "Tahap 4", keterangan: "Seluruh lembaga digerakkan oleh Islamic Center Iqro, menaungi Dakwah, Pendidikan, dan Ekonomi." },
              { tahun: "Kini", keterangan: "Melebur menjadi Yayasan Iqro Bekasi, dengan DKM Al Qolam aktif menjalankan kegiatan dakwah dan kepemudaan." },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shrink-0 px-2">
                    {item.tahun}
                  </div>
                  {index < 5 && <div className="w-0.5 h-full bg-orange-200 mt-1"></div>}
                </div>
                <div className="pb-4">
                  <p className="text-gray-600 mt-1">{item.keterangan}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sejarah;