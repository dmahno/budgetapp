import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';

import {authStore} from 'shared/store';
import {
  LOGIN_PAGE_LINK,
  MAIN_PAGE_LINK,
  SIGNUP_PAGE_LINK,
} from 'shared/constants';

import {AppRouter} from './AppRouter';

vi.mock('shared/store', async () => {
  return {
    authStore: {
      isAuthenticated: false,
    },
    themeStore: {
      isDark: false,
      toggleTheme: vi.fn(),
    },
  };
});

vi.mock('app/Routes/routes', () => ({
  routeConfig: {
    main: {
      path: MAIN_PAGE_LINK,
      element: <div>Main Page</div>,
      authorization: true,
    },
    login: {
      path: LOGIN_PAGE_LINK,
      element: <div>Login Page</div>,
      authorization: false,
    },
    signup: {
      path: SIGNUP_PAGE_LINK,
      element: <div>Sign Up Page</div>,
      authorization: false,
    },
  },
}));

vi.mock('pages', () => ({
  NotFoundPage: () => <div>404 Not Found</div>,
}));

describe('AppRouter', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders Login Page for unauthenticated users on login route', () => {
    render(
      <MemoryRouter initialEntries={[LOGIN_PAGE_LINK]}>
        <AppRouter />
      </MemoryRouter>,
    );

    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('redirects to Login Page for protected routes if unauthenticated', () => {
    render(
      <MemoryRouter initialEntries={[MAIN_PAGE_LINK]}>
        <AppRouter />
      </MemoryRouter>,
    );

    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });

  it('redirects to Main Page for authenticated users on login or signup routes', () => {
    authStore.isAuthenticated = true;

    render(
      <MemoryRouter initialEntries={[SIGNUP_PAGE_LINK]}>
        <AppRouter />
      </MemoryRouter>,
    );

    expect(screen.getByText('Main Page')).toBeInTheDocument();
  });

  it('renders the Main Page for authenticated users on protected route', () => {
    authStore.isAuthenticated = true;

    render(
      <MemoryRouter initialEntries={[MAIN_PAGE_LINK]}>
        <AppRouter />
      </MemoryRouter>,
    );

    expect(screen.getByText('Main Page')).toBeInTheDocument();
  });

  it('renders NotFoundPage for unmatched routes', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <AppRouter />
      </MemoryRouter>,
    );

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const {asFragment} = render(
      <MemoryRouter initialEntries={[MAIN_PAGE_LINK]}>
        <AppRouter />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
