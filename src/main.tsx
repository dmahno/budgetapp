import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';

import ErrorBoundary from 'app/ErrorBoundry/ErrorBoundry.tsx';
import {configTheme} from 'shared/theme';

import {App} from './app/App.tsx';

import './assets/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter basename={__APP_BASE_URL__}>
        <ConfigProvider theme={configTheme}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
