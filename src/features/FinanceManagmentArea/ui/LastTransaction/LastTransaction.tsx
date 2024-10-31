import dateFormat from 'dateformat';
import {observer} from 'mobx-react-lite';

import Income from 'shared/assets/icons/income.svg';
import Outcome from 'shared/assets/icons/outcome.svg';

import {categories} from '../../model/constants/categories';
import {financeStore} from '../../model/store/FinanceStore';
import styles from './LastTransaction.module.scss';

export const LastTransaction = observer(() => {
  const lastOperation = financeStore.lastOperation;

  if (!lastOperation) {
    return null;
  }

  const {date, amount, category, type, description} = lastOperation;
  const categoryInfo = categories.find((cat) => cat.value === category);
  const styleMode = `${styles.amount} ${type === 'add' ? styles.add : styles.subtract}`;

  return (
    <div className={styles.lastTransactionDetails}>
      <div className={`${styles.iconArea} ${styleMode}`}>
        {type ? <Income /> : <Outcome />}
        <div className={styles.iconDescriptionArea}>
          <div className={styles.date}>{dateFormat(date, 'dd.mm.yyyy')}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
      <div className={styles.category}>
        <div
          className={`${styles.amount} ${type === 'add' ? styles.add : styles.subtract}`}
        >
          {type === 'add' ? '+' : '-'}
          {amount.toLocaleString('ru-RU')} ₽
        </div>
        <div>{categoryInfo?.label}</div>
      </div>
    </div>
  );
});
