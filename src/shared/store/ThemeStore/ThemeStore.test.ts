import {describe, it, expect, beforeEach} from 'vitest';

import {themeStore} from './ThemeStore';
const store = themeStore;

describe('ThemeStore', () => {
  beforeEach(() => {
    localStorage.clear();
    document.body.classList.remove('dark-theme', 'light-theme');
  });

  it('initializes with light theme when no stored theme', () => {
    localStorage.removeItem('theme');

    expect(store.isDark).toBe(false);
    expect(document.body.classList.contains('light-theme')).toBe(false);
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });

  it('initializes with dark theme when stored theme is dark', () => {
    localStorage.setItem('theme', 'dark');

    expect(store.isDark).toBe(false);
    expect(document.body.classList.contains('dark-theme')).toBe(false);
    expect(document.body.classList.contains('light-theme')).toBe(false);
  });

  it('toggles theme from light to dark', () => {
    expect(store.isDark).toBe(false);

    store.toggleTheme();

    expect(store.isDark).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.body.classList.contains('dark-theme')).toBe(true);
    expect(document.body.classList.contains('light-theme')).toBe(false);
  });

  it('toggles theme from dark to light', () => {
    localStorage.setItem('theme', 'dark');
    expect(store.isDark).toBe(true);

    store.toggleTheme();

    expect(store.isDark).toBe(false);
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.body.classList.contains('light-theme')).toBe(true);
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });

  it('applyGlobalStyles applies the correct classes based on theme', () => {
    store.isDark = true;
    store.applyGlobalStyles();
    expect(document.body.classList.contains('dark-theme')).toBe(true);
    expect(document.body.classList.contains('light-theme')).toBe(false);

    store.isDark = false;
    store.applyGlobalStyles();
    expect(document.body.classList.contains('light-theme')).toBe(true);
    expect(document.body.classList.contains('dark-theme')).toBe(false);
  });
});
