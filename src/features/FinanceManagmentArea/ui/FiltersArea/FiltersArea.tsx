// FiltersArea.tsx
import {observer} from 'mobx-react-lite';
import {Button, Select, DatePicker} from 'antd';

import {categories} from 'features/FinanceManagmentArea/model/constants/categories';

import {financeStore} from '../../model/store/FinanceStore';
import styles from './FiltersArea.module.scss';

const {RangePicker} = DatePicker;

export const FiltersArea = observer(() => {
  return (
    <div className={styles.transactionHistoryFilters}>
      <div className={styles.fastFilters}>
        <Button
          type={
            financeStore.selectedTimeFilter === 'week' ? 'primary' : 'default'
          }
          onClick={() =>
            financeStore.setTimeFilter(
              financeStore.selectedTimeFilter === 'week' ? null : 'week',
            )
          }
        >
          Неделя
        </Button>
        <Button
          type={
            financeStore.selectedTimeFilter === 'month' ? 'primary' : 'default'
          }
          onClick={() =>
            financeStore.setTimeFilter(
              financeStore.selectedTimeFilter === 'month' ? null : 'month',
            )
          }
        >
          Месяц
        </Button>
        <Button
          type={
            financeStore.selectedTimeFilter === 'quarter'
              ? 'primary'
              : 'default'
          }
          onClick={() =>
            financeStore.setTimeFilter(
              financeStore.selectedTimeFilter === 'quarter' ? null : 'quarter',
            )
          }
        >
          Квартал
        </Button>
        <Button
          type={
            financeStore.selectedTimeFilter === 'year' ? 'primary' : 'default'
          }
          onClick={() =>
            financeStore.setTimeFilter(
              financeStore.selectedTimeFilter === 'year' ? null : 'year',
            )
          }
        >
          Год
        </Button>
      </div>
      <Select
        placeholder="Выбрать категорию"
        allowClear
        value={financeStore.selectedCategory}
        onChange={(value) => financeStore.setCategory(value || null)}
        style={{width: 150}}
      >
        {categories.map((cat) => (
          <Select.Option key={cat.value} value={cat.value}>
            {cat.label}
          </Select.Option>
        ))}
      </Select>
      <RangePicker
        placeholder={['Начальная дата', 'Конечная дата']}
        onChange={(dates) =>
          financeStore.setDateRange(
            dates
              ? [dates[0]?.toDate() || null, dates[1]?.toDate() || null]
              : null,
          )
        }
        format="DD.MM.YYYY"
      />
    </div>
  );
});
