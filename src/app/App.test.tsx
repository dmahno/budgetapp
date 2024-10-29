import {describe, it, expect, vi} from 'vitest';
import {Suspense} from 'react';

import {render, screen} from 'shared/tests/test-utils';
import {Spinner} from 'shared/ui';

import {App} from './App';

vi.mock('./Providers/AppRouter', () => ({
  AppRouter: () => <div data-testid="app-router">App Router Content</div>,
}));

describe('App', () => {
  it('renders AppRouter within Suspense', () => {
    render(<App />);
    const appRouterElement = screen.getByTestId('app-router');
    expect(appRouterElement).toBeInTheDocument();
    expect(appRouterElement).toHaveTextContent('App Router Content');
  });

  it('renders Suspense fallback while loading', async () => {
    const SuspendedComponent = () => {
      throw Promise.resolve();
    };

    render(
      <Suspense fallback={<Spinner />}>
        <SuspendedComponent />
      </Suspense>,
    );

    const fallbackElement = screen.getByTestId('spinner');
    expect(fallbackElement).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
