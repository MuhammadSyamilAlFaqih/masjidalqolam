import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from "/logo/logo.png"

const menuItems = [
  { label: "Beranda", path: "/" },
  { label: "Kegiatan", path: "/kegiatan" },
  { label: "Jadwal", path: "/jadwal" },
  { label: "Sejarah", path: "/sejarah" },
  { label: "Gallery", path: "/gallery" },
  { label: "Tentang Kami", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full h-20 md:h-24 bg-red-950 shadow-md z-50 px-4 md:px-8 flex items-center justify-between">

      {/* Logo di kiri */}
      <Link to="/" onClick={() => setIsOpen(false)}>
        <img className="w-14 h-14 md:w-20 md:h-20 brightness-0 contrast-200 invert" src={Logo} alt="logo" />
      </Link>

      {/* Menu Desktop */}
      <ul className="hidden md:flex space-x-6 text-stone-100 font-medium">
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

      {/* Tombol Hamburger (Mobile) */}
      <button
        className="md:hidden text-stone-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-red-950 md:hidden shadow-lg">
          <ul className="flex flex-col text-stone-100 font-medium">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path} className="border-b border-red-900/50">
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-6 py-4 transition duration-300 ${
                      isActive ? "text-orange-400 bg-red-900/30" : "hover:bg-red-900/30"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;