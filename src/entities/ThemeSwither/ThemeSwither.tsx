import {Switch} from 'antd';
import {observer} from 'mobx-react-lite';

import Light from 'shared/assets/icons/sun.svg';
import Dark from 'shared/assets/icons/moon.svg';
import {themeStore} from 'shared/store';

export const ThemeSwitcher = observer(() => {
  const {isDark, toggleTheme} = themeStore;

  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      checkedChildren={<Dark />}
      unCheckedChildren={<Light />}
      aria-label="Toggle theme"
    />
  );
});
