import {NavLink} from 'react-router-dom';

import {IMenuLinksProps} from '../../model/data/menuLinks';
import styles from './MenuItem.module.scss';

export const MenuItem: React.FC<IMenuLinksProps> = ({url, label}) => {
  return (
    <li>
      <NavLink
        className={({isActive}) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
        to={url}
      >
        {label}
      </NavLink>
    </li>
  );
};
