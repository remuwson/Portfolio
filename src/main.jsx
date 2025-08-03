import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Przykład pliku src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ten import jest kluczowy!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
