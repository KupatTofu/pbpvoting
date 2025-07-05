import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0F172A] via-[#0284C7] to-[#E0F2FE] overflow-hidden font-poppins">
      <div className="wave-shape absolute bottom-0 left-0 w-full h-40 pointer-events-none"></div>

      <Header />
      <Navigation />
      <MainContent />
    </div>
  );
}

export default App;
