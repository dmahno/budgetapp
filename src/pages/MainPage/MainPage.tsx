import {observer} from 'mobx-react-lite';

import {FinanceManagmentArea} from 'features';

export const MainPage = observer(() => {
  return (
    <>
      <FinanceManagmentArea />
    </>
  );
});
