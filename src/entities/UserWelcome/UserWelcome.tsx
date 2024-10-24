import {observer} from 'mobx-react-lite';

import {authStore} from 'shared/store';

export const UserWelcome = observer(() => {
  if (!authStore.user) {
    return null;
  }

  return (
    <div>
      <h2>Добро пожаловать, {authStore.user.userNameInfo}!</h2>
      {authStore.user.avatar && (
        <img
          src={`../../shared/assets/${authStore.user?.avatar}`}
          alt="User Avatar"
        />
      )}
    </div>
  );
});
