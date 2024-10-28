import {observer} from 'mobx-react-lite';

import {SumArea} from './ui/TotalSum/SumArea';
import {TransactionHistory} from './ui/TransactionHistory/TransactionHistory';
import {MoneyManagement} from './ui/MoneyManagment/MoneyManagement';
import styles from './FinanceManagmentArea.module.scss';

export const FinanceManagmentArea = observer(() => {
  return (
    <div className={styles.container}>
      <SumArea />
      <MoneyManagement />
      <TransactionHistory />
    </div>
  );
});
