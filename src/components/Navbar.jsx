import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "/logo/logo.png"

const menuItems = [
  { label: "Beranda", path: "/" },
  { label: "Kegiatan", path: "/kegiatan" },
  { label: "Jadwal", path: "/jadwal" },
  { label: "Sejarah", path: "/sejarah" },
  { label: "Gallery", path: "/gallery" },
  { label: "Tentang Kami", path: "/about" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full h-24 bg-red-950 shadow-md z-50 px-8 flex items-center justify-between">
      {/* Logo di kiri */}
      <Link to="/">
        <img className="w-20 h-20 items-center brightness-0 contrast-200 invert" src={Logo} alt="logo" />
      </Link>

      {/* Menu di tengah */}
      <ul className="flex space-x-6 text-stone-100 font-medium">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} className="relative py-2">
              <Link
                to={item.path}
                className={`transition duration-300 ${
                  isActive ? "text-white" : "hover:text-red-300"
                }`}
              >
                {item.label}
              </Link>
              {isActive && (
                <span className="absolute left-0 -bottom-0.5 w-full h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </li>
          );
        })}
      </ul>

      {/* Contact di kanan */}
      <div className="text-stone-100 font-medium">
        <Link to="/contact" className="hover:text-red-300 transition duration-300">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;