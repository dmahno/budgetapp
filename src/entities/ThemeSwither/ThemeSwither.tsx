import {Switch} from 'antd';
import {observer} from 'mobx-react-lite';

import {themeStore} from 'shared/store';

export const ThemeSwitcher = observer(() => {
  const {isDark, toggleTheme} = themeStore;

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      checkedChildren="Dark"
      unCheckedChildren="Light"
      aria-label="Toggle theme"
    />
  );
});
