import React, { useState, useEffect, useRef } from 'react';

const heroPhotos = [
  "/masjid.JPG", "/masjid2.JPG", "/masjid3.JPG", "/masjid4.JPG", "/masjid5.JPG",
  "/masjid6.JPG", "/masjid7.JPG", "/masjid8.JPG", "/masjid9.JPG", "/masjid10.JPG",
  "/masjid11.JPG", "/masjid12.JPG", "/masjid13.JPG", "/masjid14.JPG", "/masjid15.JPG",
  "/masjid16.JPG", "/masjid17.JPG", "/masjid18.JPG", "/masjid19.JPG",
];

const Homepage = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Slideshow foto
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroPhotos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.4;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Audio sholawat/nasyid instrumental */}
      <audio ref={audioRef} loop>
        <source src="/audio/sholawat.mp3" type="audio/mpeg" />
      </audio>

      {/* Slideshow foto */}
      {heroPhotos.map((photo, i) => (
        <img
          key={photo}
          src={photo}
          alt="Hero"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
          Masjid Al Qolam
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-lg md:max-w-2xl">
          Rumah singgah jiwa yang rindu ketenangan,
          terbuka untuk semua, setiap saat.
        </p>
      </div>

      {/* Tombol kontrol musik */}
      <button
        onClick={togglePlay}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-white/20 hover:bg-white/30 active:bg-white/40 backdrop-blur-md text-white rounded-full p-2.5 sm:p-3 transition-all duration-300"
      >
        <img
          src="/icon/sound-waves.png"
          alt={isPlaying ? "Pause" : "Play"}
          className={`h-4 w-4 sm:h-5 sm:w-5 ${isPlaying ? '' : 'opacity-60'}`}
        />
      </button>
    </div>
  );
};

export default Homepage;