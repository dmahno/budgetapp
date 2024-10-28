import {observer} from 'mobx-react-lite';

import Light from 'shared/assets/icons/sun.svg';
import Dark from 'shared/assets/icons/moon.svg';
import {themeStore} from 'shared/store';
import {Button} from 'shared/ui';

export const ThemeSwitcher = observer(() => {
  const {isDark, toggleTheme} = themeStore;

  return <Button onClick={toggleTheme} size='s' appearance='thirdly' icon={isDark ? <Dark /> : <Light />} />;
});
