import React, { useEffect, useState } from 'react';

const BACKEND_HEALTH_URL = 'http://localhost:3000/health'; // Ganti sesuai URL backend Anda

const Client: React.FC = () => {
  const [backendStatus, setBackendStatus] = useState<string>('Memeriksa...');
  const [blockchainStatus, setBlockchainStatus] = useState<string>('Memeriksa...');

  useEffect(() => {
    // Cek status backend
    fetch(BACKEND_HEALTH_URL)
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Backend tidak merespon');
      })
      .then(data => setBackendStatus(data.status || 'Backend aktif'))
      .catch(() => setBackendStatus('Backend tidak aktif'));

    // Simulasi cek blockchain (ganti dengan implementasi asli jika ada)
    setTimeout(() => {
      setBlockchainStatus('Blockchain aktif');
    }, 1000);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h2>Status Sistem Voting</h2>
      <p><strong>Backend API:</strong> {backendStatus}</p>
      <p><strong>Blockchain Sepolia:</strong> {blockchainStatus}</p>
    </div>
  );
};

export default Client;
