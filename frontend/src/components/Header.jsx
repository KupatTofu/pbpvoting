import React from 'react';
import logo from '../assets/logo-iwu.png';

const Header = () => {
  return (
    <header className="gradient-bg font-poppins relative min-h-[100px] flex items-center px-6 py-4">
      <div className="wave-shape"></div>
      <div className="relative z-10 flex justify-between w-full max-w-7xl mx-auto items-center">
        <div className="flex items-center gap-3 text-white opacity-90">
          <img src={logo} alt="Logo IWU" style={{ width: 38, height: 38 }} />
          <span className="text-2xl font-semibold">E-Voting IWU</span>
        </div>
        <div>{/* Navigasi atau tombol bisa ditambahkan di sini */}</div>
      </div>
    </header>
  );
};

export default Header;
