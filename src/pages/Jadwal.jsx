import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const JadwalSholat = () => {
  const [jadwalHariIni, setJadwalHariIni] = useState(null);

  useEffect(() => {
    const ambilJadwal = async () => {
      try {
        const res = await axios.get(
          "https://api.aladhan.com/v1/timingsByCity",
          {
            params: {
              city: "Bekasi",
              country: "Indonesia",
              method: 11
            }
          }
        );

        const data = res.data.data;

        setJadwalHariIni({
          hari: data.date.gregorian.weekday.en,
          tanggal_lengkap: data.date.gregorian.date,
          imsak: data.timings.Imsak,
          subuh: data.timings.Fajr,
          terbit: data.timings.Sunrise,
          dzuhur: data.timings.Dhuhr,
          ashar: data.timings.Asr,
          maghrib: data.timings.Maghrib,
          isya: data.timings.Isha,
        });
      } catch (err) {
        console.error(err);
      }
    };

    ambilJadwal();
  }, []);

  const items = [
    { label: "Imsak", value: jadwalHariIni?.imsak, icon: "/public/icon/night.png", size: "w-8 h-8" },
    { label: "Subuh", value: jadwalHariIni?.subuh, icon: "/public/icon/moonset.png", size: "w-10 h-10" },
    { label: "Terbit", value: jadwalHariIni?.terbit, icon: "/public/icon/sunrise.png", size: "w-10 h-10" },
    { label: "Dzuhur", value: jadwalHariIni?.dzuhur, icon: "/public/icon/sun.png", size: "w-10 h-10" },
    { label: "Ashar", value: jadwalHariIni?.ashar, icon: "/public/icon/sunset.png", size: "w-10 h-10" },
    { label: "Maghrib", value: jadwalHariIni?.maghrib, icon: "/public/icon/moon.png", size: "w-10 h-10" },
    { label: "Isya", value: jadwalHariIni?.isya, icon: "/public/icon/moon (1).png", size: "w-9 h-9" },
  ];

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 p-4 overflow-hidden">
      {/* Ornamen */}
      <img
        className="absolute top-0 left-0 h-3/5 opacity-40 pointer-events-none"
        src="/ornamen/bunga2q.png"
        alt=""
      />
      <img
        className="absolute bottom-0 right-0 h-3/5 opacity-40 pointer-events-none"
        src="/ornamen/bunga2.png"
        alt=""
      />

      {jadwalHariIni ? (
        <motion.div
          className="relative z-10 bg-white p-10 rounded-2xl shadow-xl border w-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl text-gray-900 font-bold text-center mb-6">
            Jadwal Sholat Hari Ini
          </h1>

          <p className="text-center text-gray-500 mb-6">
            {jadwalHariIni.hari}, {jadwalHariIni.tanggal_lengkap}
          </p>

          <ul className="space-y-4 text-gray-800 text-lg">
            {items.map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <img src={item.icon} alt={item.label} className={item.size} />
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </motion.div>
      ) : (
        <p className="relative z-10 text-gray-600 text-lg">
          Memuat jadwal sholat...
        </p>
      )}
    </div>
  );
};

export default JadwalSholat;