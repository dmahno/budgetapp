import {Suspense} from 'react';

import {AppRouter} from './Providers/AppRouter';

export function App() {
  return (
    <Suspense fallback={<></>}>
      <AppRouter />
    </Suspense>
  );
}
