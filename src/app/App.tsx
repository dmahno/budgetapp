import {Suspense} from 'react';

import {Spinner} from 'shared/ui';

import {AppRouter} from './Providers/AppRouter';

export function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AppRouter data-testid="app-router" />
    </Suspense>
  );
}
