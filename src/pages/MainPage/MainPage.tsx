import {observer} from 'mobx-react-lite';

import {FinanceManagmentArea} from 'features';
import {FadeInWelcome} from 'entities';

export const MainPage = observer(() => {
  return (
    <>
      <FadeInWelcome />
      <FinanceManagmentArea />
    </>
  );
});
