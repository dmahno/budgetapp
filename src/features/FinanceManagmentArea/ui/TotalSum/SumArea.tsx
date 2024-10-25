import {observer} from 'mobx-react-lite';

import {financeStore} from '../../model/store/FinanceStore';
import styles from './SumArea.module.scss';

export const SumArea = observer(() => {
  const {totalSum} = financeStore;

  return (
    <div className={styles.sum}>
      <h1 className={styles.sumTitle}>Мой бюджет</h1>
      <h1 className={styles.totalSum}>
        {totalSum.toLocaleString()}
        <span className={styles.cents}> ₽</span>
      </h1>
    </div>
  );
});
