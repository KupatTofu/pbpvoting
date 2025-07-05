import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Hero from './Hero';
import WaveShape from './WaveShape';

const MainLayout = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#5a1e5a] via-[#5a1e5a] to-[#b66864] text-white">
      <Header />
      <Navigation />
      <Hero />
      <WaveShape />
    </div>
  );
};

export default MainLayout;
