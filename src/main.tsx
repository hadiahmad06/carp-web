
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx'
import './index.css'

// Create a performance mark for monitoring initial load
performance.mark('app-start');

// Check if user prefers dark mode
const setInitialColorMode = () => {
  // Check if dark mode is preferred
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Listen for changes in color scheme preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
};

// Set initial color mode before rendering
setInitialColorMode();

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
