import {Tabs} from 'antd';
import {observer} from 'mobx-react-lite';
import classNames from 'classnames';

import {EmptyState} from 'shared/ui';

import {financeStore} from '../../model/store/FinanceStore';
import {TransactionList} from '../TransactionList/TransactionList';
import {LastTransaction} from '../LastTransaction/LastTransaction';
import styles from './TransactionHistory.module.scss';

export const TransactionHistory = observer(() => {
  const {lastOperation, operationsList, selectedTab, setTab, sortedOperations} =
    financeStore;

  const totalOperations = operationsList.length;
  const addOperations = operationsList.filter(
    (operation) => operation.type === 'add',
  ).length;
  const excludeOperations = operationsList.filter(
    (operation) => operation.type === 'exclude',
  ).length;

  const initialTabItems = [
    {label: `Все (${totalOperations})`, key: 'all', count: totalOperations},
    {label: `Поступления (${addOperations})`, key: 'add', count: addOperations},
    {
      label: `Списания (${excludeOperations})`,
      key: 'exclude',
      count: excludeOperations,
    },
  ];

  const tabItems = initialTabItems.filter((item) => item.count > 0);

  if (tabItems.length === 0) {
    tabItems.push({label: 'Все (0)', key: 'all', count: 0});
  }

  return (
    <div className={styles.transactionHistoryArea}>
      {lastOperation && (
        <div className={styles.transactionHistoryLastTransaction}>
          <LastTransaction />
        </div>
      )}

      <div
        className={classNames(styles.transactionHistory, {
          [styles.initial]: !lastOperation,
        })}
      >
        <h2>История транзакций</h2>
        {operationsList.length > 0 ? (
          <>
            <Tabs
              size="large"
              className={styles.tabs}
              items={tabItems}
              defaultActiveKey="all"
              onChange={(key) => setTab(key as 'all' | 'add' | 'exclude')}
              activeKey={selectedTab}
            />
            <TransactionList operations={sortedOperations} />
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
});
