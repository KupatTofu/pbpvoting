import React, { useState } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <div className="bg-white px-6 sm:px-8 py-4 rounded-b-2xl shadow-lg mx-auto max-w-7xl z-10 relative">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-lg font-semibold text-black">E-Voting</div>
          {/* Mobile menu button */}
          <button
            id="mobile-menu-button"
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-black hover:text-gray-600">
            Home
          </a>
          <a href="#kandidat" className="text-black hover:text-gray-600">
            Kandidat
          </a>
          <a href="#quick-count" className="text-black hover:text-gray-600">
            Quick Count
          </a>
          <a href="#voting" className="text-black hover:text-gray-600">
            Voting
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-2">
          <a
            href="../user/login.html"
            className="text-sm px-4 py-2 rounded-full text-white transition"
            style={{ backgroundColor: '#0F172A' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0284C7')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0F172A')}
          >
            Masuk
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        className={`mobile-menu md:hidden mt-4 space-y-2 ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <nav className="flex flex-col space-y-2">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#kandidat"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kandidat
          </a>
          <a
            href="#quick-count"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Quick Count
          </a>
          <a
            href="#voting"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Voting
          </a>
        </nav>
        <div className="flex flex-col space-y-2 pt-2">
          <a
            href="#admin"
            className="block text-center px-4 py-2 rounded-full text-white transition"
            style={{ backgroundColor: '#0F172A' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Login Admin/Panitia
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
