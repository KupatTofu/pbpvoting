import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="w-40 opacity-80">
        <img 
          src="https://pmb.iwu.ac.id/front_v2/assets/images/brand/logos/logo_iwu_white.png" 
          alt="Logo IWU" 
          className="w-full h-auto"
        />
      </div>
    </header>
  );
};

export default Header;