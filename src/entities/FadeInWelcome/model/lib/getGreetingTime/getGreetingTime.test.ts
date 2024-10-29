import {describe, it, expect, vi} from 'vitest';

import {getGreetingTime} from './getGreetingTime';

describe('getGreetingTime', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('returns "Доброй ночи" for hours between 0 and 4', () => {
    vi.setSystemTime(new Date(2023, 9, 10, 3));
    expect(getGreetingTime()).toBe('Доброй ночи');
  });

  it('returns "Доброе утро" for hours between 5 and 11', () => {
    vi.setSystemTime(new Date(2023, 9, 10, 7));
    expect(getGreetingTime()).toBe('Доброе утро');
  });

  it('returns "Добрый день" for hours between 12 and 17', () => {
    vi.setSystemTime(new Date(2023, 9, 10, 15));
    expect(getGreetingTime()).toBe('Добрый день');
  });

  it('returns "Добрый вечер" for hours between 18 and 23', () => {
    vi.setSystemTime(new Date(2023, 9, 10, 21));
    expect(getGreetingTime()).toBe('Добрый вечер');
  });
});
