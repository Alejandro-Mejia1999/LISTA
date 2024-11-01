import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase/firebaseConf.ts';  // Importa solo firebaseConfig

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={'conectado'}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </StrictMode>,
);

