import React from 'react';
import ReactDOM from 'react-dom/client';
import { registerSW } from 'virtual:pwa-register';
import App from './App';
import './index.css';
import { initializeFirebase } from './utils/firebaseClient';

registerSW({ immediate: true });

// Initialize Firebase
initializeFirebase().then((initialized) => {
  if (initialized) {
    console.log('Firebase initialized successfully');
  } else {
    console.warn('Firebase initialization failed - app will continue with reduced features');
  }
});

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);