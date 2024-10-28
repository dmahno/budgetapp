import {observer} from 'mobx-react-lite';

import {financeStore} from '../../model/store/FinanceStore';
import styles from './SumArea.module.scss';

export const SumArea = observer(() => {
  const {totalSum} = financeStore;

  const formattedSum = totalSum
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const [whole, cents] = formattedSum.split('.');

  return (
    <div className={styles.sum}>
      <p className={styles.sumTitle}>Мой бюджет</p>
      <h1 className={styles.totalSum}>
        <span>{whole}</span>
        <span className={styles.cents}>.{cents} ₽</span>
      </h1>
    </div>
  );
});
