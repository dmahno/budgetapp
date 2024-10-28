import {observer} from 'mobx-react-lite';

import {FinanceManagmentArea} from 'features';
import {authStore} from 'shared/store';
import {FadeInWelcome} from 'entities';

export const MainPage = observer(() => {
  const {isWelcome = true} = authStore;
  return (
    <>
      {isWelcome && <FadeInWelcome />}
      <FinanceManagmentArea />
    </>
  );
});
