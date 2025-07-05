import React from 'react';
import evoting from '@/assets/img/evoting.png';

const Hero = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto z-10 relative">
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src={evoting} 
          alt="Ilustrasi E-Voting" 
          className="w-72 sm:w-96 md:w-[420px] lg:w-[480px] h-auto" 
        />
      </div>

      <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          Sistem Informasi <span className="font-bold">E-Voting</span>
        </h1>
        <h2 className="text-lg sm:text-xl mb-1">Pemilihan Ketua Himpunan</h2>
        <h3 className="text-md sm:text-lg mb-6">Online Berbasis Web</h3>
        <p className="text-sm sm:text-base text-gray-200 max-w-md mx-auto lg:mx-0 mb-6">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.<br/>
          There is no one who loves pain itself, who seeks after it and wants to have it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
          <a 
            href="#" 
            className="px-5 py-2 text-xs sm:text-sm rounded-full border border-black bg-white text-black hover:bg-gray-100"
          >
            LIHAT KANDIDAT
          </a>
          <a 
            href="#" 
            className="px-5 py-2 text-xs sm:text-sm rounded-full border border-black bg-black text-white hover:bg-white hover:text-black"
          >
            VOTING SEKARANG
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;