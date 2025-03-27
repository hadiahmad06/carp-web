
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

// Create a performance mark for monitoring initial load
performance.mark('app-start');

// Create root and render application
createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Report performance metrics to console in development
if (import.meta.env.DEV) {
  window.addEventListener('load', () => {
    performance.mark('app-loaded');
    performance.measure('app-startup', 'app-start', 'app-loaded');
    console.log('App load performance:', performance.getEntriesByName('app-startup')[0].duration.toFixed(2), 'ms');
  });
}
