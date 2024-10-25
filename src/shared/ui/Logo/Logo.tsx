import {MAIN_PAGE_LINK} from 'shared/constants';
import {ReactRouterCustomLink} from 'shared/ui';
import LogoImage from 'shared/assets/logo.svg';

export const Logo = () => (
  <ReactRouterCustomLink disableAntColor to={MAIN_PAGE_LINK}>
    <LogoImage />
  </ReactRouterCustomLink>
);
