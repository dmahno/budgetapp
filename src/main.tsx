import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import ErrorBoundary from 'app/ErrorBoundry/ErrorBoundry.tsx';

import {App} from './app/App.tsx';

import './assets/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={__APP_BASE_URL__}>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
