import React from 'react';
import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';
import {images, TImageKeys} from 'shared/assets';

export const Header: React.FC = observer(() => {
  const avatarKey = authStore.user?.avatar as TImageKeys | undefined;
  const userAvatar = avatarKey ? images[avatarKey] : '';

  return (
    <header>
      {authStore.isAuthenticated && (
        <>
          {userAvatar && <img src={userAvatar} alt="User Avatar" />}
          <span>{authStore.user?.first_name}</span>
          <button onClick={() => authStore.logout()}>Logout</button>
        </>
      )}
    </header>
  );
});
