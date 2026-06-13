import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo/logo.png"

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-24 bg-red-950 shadow-md z-50 px-8 flex items-center justify-between">
      {/* Judul di kiri */}
      <Link to= "/"> 
      <img className='w-20 h-20 items-center brightness-0 contrast-200 invert' src={Logo} alt="logo" />
      </Link>
      {/* Menu di tengah */}
      <ul className="flex space-x-6  text-stone-100 font-medium">
        <li className='hover:text-red-800 transition duration-300 rounded-md'><a href="/">Beranda</a></li>
        <li className='hover:text-red-800 transition duration-300 rounded-md'><a href="kegiatan">Kegiatan</a></li>
        <li className='hover:text-red-800 transition duration-300 rounded-md'><a href="jadwal">Jadwal</a></li>
        <li className='hover:text-red-800 transition duration-300 rounded-md'><a href="sejarah">Sejarah</a></li>
        <li className='hover:text-red-800 transition duration-300 rounded-md'><a href="gallery">Gallery</a></li>
        <li className='hover:text-red-800 transition duration-300 rounded-md'><a href="about">Tentang Kami</a></li>
      </ul>

      {/* Social media di kanan */}
      <div className=" hover:text-red-800 transition duration-300 rounded-md text-stone-100 font-medium">
        <a href="contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
