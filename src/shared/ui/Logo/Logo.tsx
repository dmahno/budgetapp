import {MAIN_PAGE_LINK} from 'shared/constants';
import {ReactRouterCustomLink} from 'shared/ui';
import LogoImage from 'shared/assets/logo.svg';

import * as styles from './Logo.module.scss';

export const Logo = () => (
  <ReactRouterCustomLink
    className={styles.logo}
    disableAntColor
    to={MAIN_PAGE_LINK}
  >
    <LogoImage />
  </ReactRouterCustomLink>
);
