import {observer} from 'mobx-react-lite';
import {Button, Tag, Select, Input, Space, Popconfirm} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import {useState} from 'react';
import dateFormat from 'dateformat';

import EditIcon from 'shared/assets/icons/edit.svg';
import DeleteIcon from 'shared/assets/icons/delete.svg';

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

interface ITransactionListProps {
  operations: IOperation[];
}

export const TransactionList: React.FC<ITransactionListProps> = observer(
  ({operations}) => {
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedData, setEditedData] = useState({
      amount: '',
      category: '',
      amountOperation: '',
      description: '',
    });

    const handleEdit = (operation: IOperation) => {
      setEditingId(operation.id || null);
      setEditedData({
        amount: operation.amount.toString(),
        category: operation.category || categories[0].value,
        amountOperation: operation.amountOperation,
        description: operation.description,
      });
    };

    const handleSave = (id: number) => {
      const updatedType =
        editedData.amountOperation === 'Пополнение' ? 'add' : 'exclude';
      financeStore.updateOperation(id, {
        amount: parseFloat(editedData.amount),
        category: editedData.category,
        amountOperation: editedData.amountOperation,
        description: editedData.description,
        type: updatedType,
      });
      setEditingId(null);
    };

    const getDateTitle = (date: Date): string => {
      const isToday =
        dateFormat(date, 'yyyy-mm-dd') === dateFormat(new Date(), 'yyyy-mm-dd');
      const isYesterday =
        dateFormat(date, 'yyyy-mm-dd') ===
        dateFormat(new Date(Date.now() - 86400000), 'yyyy-mm-dd');
      return isToday
        ? 'Сегодня'
        : isYesterday
          ? 'Вчера'
          : dateFormat(date, 'dd.mm.yyyy (dddd)');
    };

    const groupedOperations = operations.reduce(
      (acc, operation) => {
        const dateKey = dateFormat(new Date(operation.date), 'yyyy-mm-dd');
        if (!acc[dateKey]) {
          acc[dateKey] = [];
        }
        acc[dateKey].push(operation);
        return acc;
      },
      {} as Record<string, IOperation[]>,
    );

    return (
      <div className={styles.transactionList}>
        {Object.keys(groupedOperations).map((dateKey) => (
          <div key={dateKey} className={styles.dateGroup}>
            <div className={styles.headerTitle}>
              <h3>{getDateTitle(new Date(dateKey))}</h3>
            </div>
            <div className={styles.transactionsForDate}>
              {groupedOperations[dateKey].map((operation) => (
                <div key={operation.id} className={styles.transactionItem}>
                  <div className={styles.transactionDetailLeft}>
                    {editingId === operation.id ? (
                      <Input
                        value={editedData.amount}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            amount: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <span
                        className={styles.amount}
                        style={{
                          color: operation.type === 'add' ? 'green' : 'red',
                        }}
                      >
                        {operation.type === 'add' ? '+' : '-'}
                        {operation.amount.toLocaleString('ru-RU')} ₽
                      </span>
                    )}
                    {editingId === operation.id && (
                      <Select
                        value={editedData.amountOperation}
                        onChange={(value) =>
                          setEditedData({
                            ...editedData,
                            amountOperation: value,
                          })
                        }
                      >
                        <Select.Option value="Пополнение">
                          Пополнение
                        </Select.Option>
                        <Select.Option value="Списание">Списание</Select.Option>
                      </Select>
                    )}

                    {editingId === operation.id ? (
                      <Input.TextArea
                        value={editedData.description}
                        onChange={(e) =>
                          setEditedData({
                            ...editedData,
                            description: e.target.value,
                          })
                        }
                        rows={2}
                      />
                    ) : (
                      <span className={styles.description}>
                        {operation.description.length > 20
                          ? `${operation.description.slice(0, 20)}...`
                          : operation.description}
                      </span>
                    )}
                  </div>

                  <div className={styles.transactionDetailRight}>
                    <div>
                      <Space>
                        {editingId === operation.id ? (
                          <Button
                            type="link"
                            icon={<SaveOutlined />}
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
                              onConfirm={() =>
                                financeStore.handleDelete(operation.id!)
                              }
                              okText="Да"
                              cancelText="Нет"
                            >
                              <Button icon={<DeleteIcon />} type="link" />
                            </Popconfirm>
                          </>
                        )}
                      </Space>
                    </div>
                    {editingId === operation.id ? (
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
                      <Tag
                        color={
                          categories.find(
                            (cat) => cat.value === operation.category,
                          )?.color || 'default'
                        }
                      >
                        {categories.find(
                          (cat) => cat.value === operation.category,
                        )?.label || 'Other'}
                      </Tag>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
);
