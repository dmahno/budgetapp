import {render, screen} from '@testing-library/react';
import {describe, it, expect, vi, beforeEach} from 'vitest';

import {authStore} from 'shared/store';

import {FadeInWelcome} from './FadeInWelcome';
import * as greetingTimeModule from './model/lib/getGreetingTime/getGreetingTime';

vi.mock('shared/store', () => ({
  authStore: {
    userName: '',
    isWelcome: false,
  },
}));

describe('FadeInWelcome', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders null when isWelcome is false', () => {
    authStore.isWelcome = false;
    render(<FadeInWelcome />);
    expect(screen.queryByText(/Входим в приложение/)).toBeNull();
  });

  it('renders greeting with user first name when isWelcome is true and userName exists', () => {
    authStore.isWelcome = true;
    authStore.userName = 'Дмитрий Морозов';
    vi.spyOn(greetingTimeModule, 'getGreetingTime').mockReturnValue(
      'Доброе утро',
    );
    render(<FadeInWelcome />);

    const greetingText = screen.getByText(
      /Доброе утро, Дмитрий! Входим в приложение./,
    );
    expect(greetingText).toBeInTheDocument();
  });

  it('renders greeting without user name when isWelcome is true and userName is empty', () => {
    authStore.isWelcome = true;
    authStore.userName = '';
    vi.spyOn(greetingTimeModule, 'getGreetingTime').mockReturnValue(
      'Добрый день',
    );
    render(<FadeInWelcome />);

    const greetingText = screen.getByText(/Добрый день! Входим в приложение./);
    expect(greetingText).toBeInTheDocument();
  });

  it('renders correctly based on different greeting times', () => {
    authStore.isWelcome = true;
    authStore.userName = 'Дмитрий Морозов';

    vi.spyOn(greetingTimeModule, 'getGreetingTime').mockReturnValueOnce(
      'Доброе утро',
    );
    render(<FadeInWelcome />);
    expect(
      screen.getByText(/Доброе утро, Дмитрий! Входим в приложение./),
    ).toBeInTheDocument();

    vi.spyOn(greetingTimeModule, 'getGreetingTime').mockReturnValueOnce(
      'Добрый вечер',
    );
    render(<FadeInWelcome />);
    expect(
      screen.getByText(/Добрый вечер, Дмитрий! Входим в приложение./),
    ).toBeInTheDocument();
  });
  it('matches the snapshot', () => {
    const {asFragment} = render(<FadeInWelcome />);
    expect(asFragment()).toMatchSnapshot();
  });
});
