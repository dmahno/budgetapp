// ThemeSwitcher.test.tsx
import {render, screen, fireEvent} from '@testing-library/react';
import {vi} from 'vitest';

import {themeStore} from 'shared/store';

import {ThemeSwitcher} from './ThemeSwitcher';

vi.mock('shared/store', () => ({
  themeStore: {
    isDark: false,
    toggleTheme: vi.fn(),
  },
}));

describe('ThemeSwitcher Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders Light icon when isDark is false', () => {
    themeStore.isDark = false;
    render(<ThemeSwitcher />);

    const lightIcon = screen.getByTestId('light-icon');
    expect(lightIcon).toBeInTheDocument();

    const darkIcon = screen.queryByTestId('dark-icon');
    expect(darkIcon).not.toBeInTheDocument();
  });

  it('renders Dark icon when isDark is true', () => {
    themeStore.isDark = true;
    render(<ThemeSwitcher />);

    const darkIcon = screen.getByTestId('dark-icon');
    expect(darkIcon).toBeInTheDocument();

    const lightIcon = screen.queryByTestId('light-icon');
    expect(lightIcon).not.toBeInTheDocument();
  });

  it('calls toggleTheme when button is clicked', () => {
    themeStore.isDark = false;

    render(<ThemeSwitcher />);
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(themeStore.toggleTheme).toHaveBeenCalledTimes(1);
  });

  it('matches the snapshot', () => {
    const {asFragment} = render(<ThemeSwitcher />);
    expect(asFragment()).toMatchSnapshot();
  });
});
