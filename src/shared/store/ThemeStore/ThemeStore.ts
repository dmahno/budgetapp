import {makeAutoObservable} from 'mobx';
import {ThemeConfig} from 'antd';

import {configDarkTheme, configLightTheme} from 'shared/theme';

const THEME_KEY = 'theme';
const THEME_VALUES = {
  dark: 'dark',
  light: 'light',
} as const;

class ThemeStore {
  theme: ThemeConfig;
  isDark: boolean;

  constructor() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    this.isDark = storedTheme ? storedTheme === THEME_VALUES.dark : true;
    this.theme = this.isDark ? configDarkTheme : configLightTheme;
    makeAutoObservable(this);
  }

  toggleTheme = () => {
    this.isDark = !this.isDark;
    this.theme = this.isDark ? configDarkTheme : configLightTheme;
    localStorage.setItem(
      THEME_KEY,
      this.isDark ? THEME_VALUES.dark : THEME_VALUES.light,
    );
  };
}

export const themeStore = new ThemeStore();
