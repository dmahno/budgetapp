import EmptyImage from 'shared/assets/images/empty.png';

import styles from './EmptyState.module.scss';

export const EmptyState = () => {
  return (
    <div className={styles.emptyState}>
      <img src={EmptyImage} width={120} height={130} />
      <div className={styles.emptyStateText}>
        <p className={styles.title}>Кошелечек грустит</p>
        <p className={styles.description}>Пока нет транзакций</p>
      </div>
    </div>
  );
};
