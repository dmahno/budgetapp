import {Tabs} from 'antd';
import {observer} from 'mobx-react-lite';

import {financeStore} from '../../model/store/FinanceStore';
import {TransactionList} from '../TransactionList/TransactionList';
import {LastTransaction} from '../LastTransaction/LastTransaction';
import styles from './TransactionHistory.module.scss';

export const TransactionHistory = observer(() => {
  return (
    <div className={styles.transactionHistoryArea}>
      <div className={styles.transactionHistoryLastTransaction}>
        <LastTransaction />
      </div>
      <div className={styles.transactionHistory}>
        <h2>История транзакций</h2>
        <Tabs
          className={styles.tabs}
          items={[
            {label: 'Все', key: 'all'},
            {label: 'Поступления', key: 'add'},
            {label: 'Списания', key: 'exclude'},
          ]}
          defaultActiveKey="all"
          onChange={(key) =>
            financeStore.setTab(key as 'all' | 'add' | 'exclude')
          }
          activeKey={financeStore.selectedTab}
        />
        <TransactionList operations={financeStore.sortedOperations} />
      </div>
    </div>
  );
});
