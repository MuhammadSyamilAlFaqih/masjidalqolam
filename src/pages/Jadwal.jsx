import React, { useEffect, useState } from 'react';
import { Sun, Moon, Clock, Bell } from 'lucide-react';
import { motion } from 'framer-motion';
import jadwalData1 from '../data/01.json';
import jadwalData2 from '../data/02.json';
import bgImage from '../assets/ornamen/75290.jpg';

const JadwalSholat = () => {
  const [jadwalHariIni, setJadwalHariIni] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const allJadwal = [...jadwalData1, ...jadwalData2];
    const dataHariIni = allJadwal.find(item => item.tanggal === today);
    setJadwalHariIni(dataHariIni || null);
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {jadwalHariIni ? (
        <motion.div
          className="bg-white p-10 rounded-2xl shadow-xl border w-[500px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl text-gray-900 font-bold text-center mb-6 flex items-center justify-center gap-2">
            <Bell className="text-orange-600" /> Jadwal Sholat {jadwalHariIni.tanggal}
          </h1>
          <ul className="space-y-4 text-gray-800 text-lg">
            <li className="flex items-center gap-3"><Moon className="text-blue-600" /> <strong>Imsyak:</strong> {jadwalHariIni.imsyak}</li>
            <li className="flex items-center gap-3"><Sun className="text-yellow-500" /> <strong>Shubuh:</strong> {jadwalHariIni.shubuh}</li>
            <li className="flex items-center gap-3"><Clock className="text-orange-500" /> <strong>Terbit:</strong> {jadwalHariIni.terbit}</li>
            <li className="flex items-center gap-3"><Sun className="text-yellow-400" /> <strong>Dhuha:</strong> {jadwalHariIni.dhuha}</li>
            <li className="flex items-center gap-3"><Clock className="text-blue-700" /> <strong>Dzuhur:</strong> {jadwalHariIni.dzuhur}</li>
            <li className="flex items-center gap-3"><Clock className="text-green-600" /> <strong>Ashar:</strong> {jadwalHariIni.ashr}</li>
            <li className="flex items-center gap-3"><Moon className="text-red-600" /> <strong>Maghrib:</strong> {jadwalHariIni.magrib}</li>
            <li className="flex items-center gap-3"><Moon className="text-indigo-700" /> <strong>Isya:</strong> {jadwalHariIni.isya}</li>
          </ul>
        </motion.div>
      ) : (
        <p className="text-gray-600 text-lg">Jadwal sholat untuk hari ini tidak ditemukan.</p>
      )}
    </div>
  );
};

export default JadwalSholat;
