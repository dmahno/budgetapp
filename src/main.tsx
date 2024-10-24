import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ConfigProvider} from 'antd';

import {themeStore} from 'shared/store';

import {App} from './app/App.tsx';

import './assets/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={themeStore.theme}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
);
