import {makeAutoObservable} from 'mobx';

const THEME_KEY = 'theme';
const THEME_VALUES = {
  dark: 'dark',
  light: 'light',
} as const;

class ThemeStore {
  isDark: boolean;

  constructor() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    this.isDark = storedTheme ? storedTheme === THEME_VALUES.dark : false;
    this.applyGlobalStyles();
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    this.isDark = !this.isDark;
    localStorage.setItem(
      THEME_KEY,
      this.isDark ? THEME_VALUES.dark : THEME_VALUES.light,
    );
    this.applyGlobalStyles();
  };

  applyGlobalStyles = () => {
    if (this.isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  };
}

export const themeStore = new ThemeStore();
