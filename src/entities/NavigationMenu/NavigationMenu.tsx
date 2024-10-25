import {menuLinks} from './model/data/menuLinks';
import {MenuItem} from './ui/MenuItem/MenuItem';
import styles from './NavigationMenu.module.scss';

export const NavigationMenu = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        {menuLinks.map((item) => {
          const {url, label} = item;
          return <MenuItem key={label} url={url} label={label} />;
        })}
      </ul>
    </nav>
  );
};
