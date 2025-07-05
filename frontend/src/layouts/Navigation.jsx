import React from 'react';

const Navigation = () => {
  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Kandidat', href: '#' },
    { label: 'Quick Count', href: '#' },
    { label: 'Voting', href: '#' }
  ];

  return (
    <nav className="backdrop-blur-md bg-white/90 shadow-md rounded-b-xl w-full max-w-7xl mx-auto px-6 py-3 z-20 relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-2">
        <div className="text-lg font-bold text-black">E-Voting</div>

        <div className="flex flex-wrap gap-4 text-sm md:text-base">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="text-black hover:text-purple-800 transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex space-x-2">
          <a 
            href="#" 
            className="text-sm px-4 py-2 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
          >
            Login Pemilih
          </a>
          <a 
            href="#" 
            className="text-sm px-4 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition"
          >
            Login admin/Panitia
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;