import React from 'react';
import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';
import {images, TImageKeys} from 'shared/assets';
import {ThemeSwitcher} from 'entities';

export const Header: React.FC = observer(() => {
  const avatarKey = authStore.user?.avatar as TImageKeys;
  const userAvatar = avatarKey ? images[avatarKey] : '';

  return (
    <header>
      {authStore.isAuthenticated && (
        <>
          <ThemeSwitcher />
          {userAvatar && <img src={userAvatar} alt="User Avatar" />}
          <span>{authStore.user?.userNameInfo}</span>
          <button onClick={() => authStore.logout()}>Выйти</button>
        </>
      )}
    </header>
  );
});
