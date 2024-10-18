import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/index.tsx';
import GlobalStyles from './globalStyles.tsx';
import mixpanel from 'mixpanel-browser';

// Inicializar Mixpanel
mixpanel.init('c2888e02eb2a6998c24a65a3847568ed', {
  debug: true, // Para logs no console
  track_pageview: true, // Para rastrear automaticamente as pageviews
  persistence: 'localStorage', // Mantém dados dos usuários entre sessões
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>
);
