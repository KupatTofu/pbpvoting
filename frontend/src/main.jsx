import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css'; // Jika ada file CSS global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
