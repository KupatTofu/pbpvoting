import React from 'react';
import VisiMisi from './VisiMisi';
import InfoVoting from './InfoVoting';
import FAQ from './FAQ';

const MainContent = () => (
  <main className="max-w-3xl mx-auto px-4 py-8">
    <section className="mb-8">
      <h1 className="text-3xl font-bold mb-2">Sistem Informasi E-Voting</h1>
      <h2 className="text-xl font-semibold mb-2">Pemilihan Ketua Himpunan</h2>
      <h3 className="text-lg font-medium mb-4">Online Berbasis Web</h3>
      <p className="mb-2">
        Sistem pemilihan ketua himpunan secara online yang aman, transparan, dan efisien. Memberikan pengalaman voting yang mudah dan dapat diakses dari mana saja.
      </p>
      <p className="mb-2">
        Sistem pemilihan ketua himpunan secara online yang aman, transparan, dan efisien. Memberikan pengalaman voting yang mudah dan dapat diakses dari mana saja.
      </p>
    </section>
    <VisiMisi />
    <InfoVoting />
    <FAQ />
  </main>
);

export default MainContent;
