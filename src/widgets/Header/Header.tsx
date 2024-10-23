import React from 'react';
import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';

export const Header: React.FC = observer(() => {
  return (
    <header>
      {authStore.isAuthenticated && (
        <>
          <img src={authStore.user?.avatar} alt="User Avatar" />
          <span>{authStore.user?.first_name}</span>
          <button onClick={() => authStore.logout()}>Logout</button>
        </>
      )}
    </header>
  );
});
