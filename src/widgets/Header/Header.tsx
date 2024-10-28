import {observer} from 'mobx-react-lite';

import {UserInfo} from 'entities';
import {Logo} from 'shared/ui';

import styles from './Header.module.scss';

export const Header = observer(() => {
  return (
    <header className={styles.header}>
      <Logo />
      {/* <NavigationMenu /> */}
      <UserInfo />
    </header>
  );
});
