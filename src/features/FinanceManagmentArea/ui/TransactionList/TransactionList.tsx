import {observer} from 'mobx-react-lite';
import {Button, Tag, Select, Input, Space, Popconfirm} from 'antd';
import {useState, useMemo} from 'react';
import {format, isToday, isYesterday} from 'date-fns';

import EditIcon from 'shared/assets/icons/edit.svg';
import DeleteIcon from 'shared/assets/icons/delete.svg';
import SaveIcon from 'shared/assets/icons/save.svg';

import {financeStore} from '../../model/store/FinanceStore';
import {categories} from '../../model/constants/categories';
import styles from './TransactionList.module.scss';

interface IOperation {
  id?: number;
  date: Date;
  amount: number;
  amountOperation: string;
  description: string;
  category: string;
  type: 'add' | 'exclude';
}

interface IEditedData {
  amount: string;
  category: string;
  amountOperation: string;
  description: string;
}

interface ITransactionListProps {
  operations: IOperation[];
}

export const TransactionList: React.FC<ITransactionListProps> = observer(
  ({operations}) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedData, setEditedData] = useState<IEditedData | null>(null);

    const handleEdit = (operation: IOperation) => {
      setEditingId(operation.id!);
      setEditedData({
        amount: operation.amount.toString(),
        category: operation.category,
        amountOperation: operation.amountOperation,
        description: operation.description,
      });
    };

    const handleSave = async (id: number) => {
      if (editedData) {
        await financeStore.updateOperation(id, {
          amount: parseFloat(editedData.amount),
          category: editedData.category,
          amountOperation: editedData.amountOperation,
          description: editedData.description,
          type: editedData.amountOperation === 'Пополнение' ? 'add' : 'exclude',
        });
        setEditingId(null);
        setEditedData(null);
      }
    };

    const getDateTitle = (date: Date): string => {
      if (isToday(date)) return 'Сегодня';
      if (isYesterday(date)) return 'Вчера';
      return format(date, 'dd.MM.yyyy (EEEE)');
    };

    const groupedOperations = useMemo(() => {
      return operations.reduce(
        (acc, operation) => {
          const dateKey = format(operation.date, 'yyyy-MM-dd');
          if (!acc[dateKey]) {
            acc[dateKey] = [];
          }
          acc[dateKey].push(operation);
          return acc;
        },
        {} as Record<string, IOperation[]>,
      );
    }, [operations]);

    const renderTransactionItem = (operation: IOperation) => {
      const isEditing = editingId === operation.id;
      const category = categories.find(
        (cat) => cat.value === operation.category,
      );

      return (
        <div key={operation.id} className={styles.transactionItem}>
          <div className={styles.transactionDetailLeft}>
            {isEditing && editedData ? (
              <>
                <Input
                  value={editedData.amount}
                  onChange={(e) =>
                    setEditedData({...editedData, amount: e.target.value})
                  }
                />
                <Select
                  value={editedData.amountOperation}
                  onChange={(value) =>
                    setEditedData({...editedData, amountOperation: value})
                  }
                >
                  <Select.Option value="Пополнение">Пополнение</Select.Option>
                  <Select.Option value="Списание">Списание</Select.Option>
                </Select>
                <Input.TextArea
                  value={editedData.description}
                  onChange={(e) =>
                    setEditedData({...editedData, description: e.target.value})
                  }
                  rows={2}
                />
              </>
            ) : (
              <>
                <span
                  className={styles.amount}
                  style={{
                    color: operation.type === 'add' ? 'green' : 'red',
                  }}
                >
                  {operation.type === 'add' ? '+' : '-'}
                  {operation.amount.toLocaleString('ru-RU')} ₽
                </span>
                <span className={styles.description}>
                  {operation.description.length > 20
                    ? `${operation.description.slice(0, 20)}...`
                    : operation.description}
                </span>
              </>
            )}
          </div>

          <div className={styles.transactionDetailRight}>
            <Space>
              {isEditing ? (
                <Button
                  type="link"
                  icon={<SaveIcon />}
                  onClick={() => handleSave(operation.id!)}
                >
                  Сохранить
                </Button>
              ) : (
                <>
                  <Button
                    type="link"
                    icon={<EditIcon />}
                    onClick={() => handleEdit(operation)}
                  />
                  <Popconfirm
                    title="Удаление записи"
                    onConfirm={() => financeStore.handleDelete(operation.id!)}
                    okText="Да"
                    cancelText="Нет"
                  >
                    <Button icon={<DeleteIcon />} type="link" />
                  </Popconfirm>
                </>
              )}
            </Space>
            {isEditing && editedData ? (
              <Select
                value={editedData.category}
                onChange={(value) =>
                  setEditedData({...editedData, category: value})
                }
              >
                {categories.map((cat) => (
                  <Select.Option key={cat.value} value={cat.value}>
                    {cat.label}
                  </Select.Option>
                ))}
              </Select>
            ) : (
              <Tag color={category?.color || 'default'}>
                {category?.label || 'Other'}
              </Tag>
            )}
          </div>
        </div>
      );
    };

    return (
      <div className={styles.transactionList}>
        {Object.keys(groupedOperations).map((dateKey) => {
          const date = new Date(dateKey);
          return (
            <div key={dateKey} className={styles.dateGroup}>
              <div className={styles.headerTitle}>
                <h3>{getDateTitle(date)}</h3>
              </div>
              <div className={styles.transactionsForDate}>
                {groupedOperations[dateKey].map(renderTransactionItem)}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);
