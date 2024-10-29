import {describe, it, expect, vi, beforeEach} from 'vitest';
import {render, screen} from '@testing-library/react';

import {authStore} from 'shared/store';

import {UserWelcome} from './UserWelcome';

vi.mock('shared/store', () => ({
  authStore: {
    user: null,
  },
}));

describe('UserWelcome', () => {
  beforeEach(() => {
    authStore.user = null;
  });

  it('renders nothing when no user is logged in', () => {
    render(<UserWelcome />);
    expect(screen.queryByText(/Добро пожаловать/i)).not.toBeInTheDocument();
  });

  it('renders welcome message and avatar when user is logged in with avatar', () => {
    authStore.user = {
      id: 1,
      userNameInfo: 'Дмитрий',
      avatar: '1.jpg',
    };

    render(<UserWelcome />);
    expect(screen.getByText('Добро пожаловать, Дмитрий!')).toBeInTheDocument();
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', '../../shared/assets/1.jpg');
    expect(avatar).toHaveAttribute('alt', 'User Avatar');
  });
  it('matches the snapshot', () => {
    const {asFragment} = render(<UserWelcome />);
    expect(asFragment()).toMatchSnapshot();
  });
});
