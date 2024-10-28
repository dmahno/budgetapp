import {observer} from 'mobx-react-lite';
import {Button} from 'antd';

import {authStore} from 'shared/store';
import {images} from 'shared/assets';
import ExitIcon from 'shared/assets/icons/exit.svg';
import {ThemeSwitcher} from 'entities';

import styles from './UserInfo.module.scss';

export const UserInfo = observer(() => {
  const {user, logout} = authStore;

  const avatarKey = user?.avatar;
  const userAvatar = avatarKey ? images[avatarKey] : '';

  return (
    <div className={styles.userInfo}>
      <ThemeSwitcher />
      <div className={styles.userAvatar}>
        {userAvatar && <img src={userAvatar} alt={`${user?.userNameInfo}`} />}
      </div>
      <div className={styles.userName}>{user?.userNameInfo}</div>
      <Button
        onClick={() => logout()}
        color="default"
        variant="link"
        icon={<ExitIcon />}
      />
    </div>
  );
});
