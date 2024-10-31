import dateFormat from 'dateformat';
import {action, makeAutoObservable, runInAction} from 'mobx';
import {message} from 'antd';

import {
  getDatabase,
  STORE_OPERATIONS_NAME,
} from '../lib/getDatabase/getDatabase';

export type TTransaction = 'add' | 'exclude';
export type TSelectedTabs = 'all' | 'add' | 'exclude';
export type TSelectedTimeFilter = 'week' | 'month' | 'quarter' | 'year';
export interface IOperation {
  id?: number;
  amount: number;
  amountOperation: string;
  description: string;
  type: TTransaction;
  date: Date;
  category: string;
}

export class FinanceStore {
  operationsList: IOperation[] = [];
  selectedTab: TSelectedTabs = 'all';
  selectedTimeFilter: TSelectedTimeFilter | null = null;
  selectedCategory: string | null = null;
  selectedDates: [Date | null, Date | null] | null = null;
  lastOperation: IOperation | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadOperations();
  }

  setTab = action((tab: TSelectedTabs) => {
    this.selectedTab = tab;
  });

  setTimeFilter = action((filter: TSelectedTimeFilter | null) => {
    this.selectedTimeFilter = filter;
  });

  setCategory = action((category: string | null) => {
    this.selectedCategory = category;
  });

  setDateRange = action((dates: [Date | null, Date | null] | null) => {
    this.selectedDates = dates;
  });

  handleDelete = action((id: number) => {
    this.deleteOperation(id);
  });

  async loadOperations() {
    try {
      const database = await getDatabase();
      const operations = await database.getAll(STORE_OPERATIONS_NAME);
      runInAction(() => {
        this.operationsList = operations;
        this.lastOperation = this.findLatestOperation();
      });
    } catch (error) {
      console.error('Failed to load operations:', error);
      message.error('Не удалось загрузить операции.');
    }
  }

  async addOperation(
    amount: number,
    amountOperation: string,
    type: TTransaction,
    category: string,
    description: string,
  ) {
    if (type === 'exclude' && amount > this.totalSum) {
      throw new Error(
        `Вы не можете списать сумму больше, чем у вас в кошельке. Максимальная сумма для списания: ${this.totalSum.toLocaleString('ru-RU')} ₽`,
      );
    }

    try {
      const database = await getDatabase();
      const newOperation: IOperation = {
        amount,
        amountOperation,
        type,
        category,
        description,
        date: new Date(),
      };

      const operationId = await database.add(
        STORE_OPERATIONS_NAME,
        newOperation,
      );

      if (typeof operationId === 'number') {
        runInAction(() => {
          const operationWithId = {...newOperation, id: operationId};
          this.operationsList.unshift(operationWithId);
          if (
            !this.lastOperation ||
            operationWithId.date > this.lastOperation.date
          ) {
            this.lastOperation = operationWithId;
          }
        });
      }
    } catch (error) {
      console.error('Failed to add operation:', error);
      throw new Error('Не удалось добавить операцию.');
    }
  }

  async deleteOperation(operationId: number) {
    try {
      const database = await getDatabase();
      await database.delete(STORE_OPERATIONS_NAME, operationId);
      runInAction(() => {
        const deletedOperation = this.operationsList.find(
          (operation) => operation.id === operationId,
        );
        this.operationsList = this.operationsList.filter(
          (operation) => operation.id !== operationId,
        );
        if (deletedOperation && this.lastOperation?.id === operationId) {
          this.lastOperation = this.findLatestOperation();
        }
      });
    } catch (error) {
      console.error('Failed to delete operation:', error);
      message.error('Не удалось удалить операцию.');
    }
  }

  async updateOperation(id: number, updatedData: Partial<IOperation>) {
    try {
      const database = await getDatabase();
      const operation = this.operationsList.find(
        (operation) => operation.id === id,
      );

      if (operation) {
        const updatedOperation = {...operation, ...updatedData};
        await database.put(STORE_OPERATIONS_NAME, updatedOperation);

        runInAction(() => {
          const index = this.operationsList.findIndex(
            (operation) => operation.id === id,
          );
          this.operationsList[index] = updatedOperation;

          if (this.lastOperation?.id === id) {
            if (updatedOperation.date > this.lastOperation.date) {
              this.lastOperation = updatedOperation;
            } else {
              this.lastOperation = this.findLatestOperation();
            }
          } else if (updatedOperation.date > (this.lastOperation?.date || 0)) {
            this.lastOperation = updatedOperation;
          }
        });

        message.success('Операция успешно обновлена.');
      }
    } catch (error) {
      console.error('Failed to update operation:', error);
      message.error('Не удалось обновить операцию.');
    }
  }

  async clearDatabase() {
    try {
      const database = await getDatabase();
      await database.clear(STORE_OPERATIONS_NAME);
      runInAction(() => {
        this.operationsList = [];
        this.lastOperation = null;
      });
      message.success('База данных успешно очищена.');
    } catch (error) {
      console.error('Failed to clear database:', error);
      message.error('Не удалось очистить базу данных.');
    }
  }

  private isDateWithinSelectedFilter(date: Date): boolean {
    if (this.selectedTimeFilter === 'week') return this.isCurrentWeek(date);
    if (this.selectedTimeFilter === 'month') return this.isCurrentMonth(date);
    if (this.selectedTimeFilter === 'quarter')
      return this.isCurrentQuarter(date);
    if (this.selectedTimeFilter === 'year') return this.isCurrentYear(date);
    return true;
  }

  private findLatestOperation(): IOperation | null {
    if (this.operationsList.length === 0) return null;
    let latest = this.operationsList[0];
    for (const operation of this.operationsList) {
      if (operation.date > latest.date) {
        latest = operation;
      }
    }
    return latest;
  }

  private isCurrentWeek(date: Date): boolean {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return date >= startOfWeek && date <= endOfWeek;
  }

  private isCurrentMonth(date: Date): boolean {
    const startOfMonth = new Date(dateFormat(new Date(), 'yyyy-mm-01'));
    const endOfMonth = new Date(dateFormat(new Date(), 'yyyy-mm-31'));

    return date >= startOfMonth && date <= endOfMonth;
  }

  private isCurrentQuarter(date: Date): boolean {
    const currentDate = new Date();
    const startOfQuarter = new Date(currentDate);
    startOfQuarter.setMonth(
      currentDate.getMonth() - (currentDate.getMonth() % 3),
    );
    startOfQuarter.setDate(1);

    return date >= startOfQuarter && date <= currentDate;
  }

  private isCurrentYear(date: Date): boolean {
    const startOfYear = new Date(new Date().getFullYear(), 0, 1);
    const endOfYear = new Date(new Date().getFullYear(), 11, 31);

    return date >= startOfYear && date <= endOfYear;
  }

  get filteredOperations() {
    return this.operationsList.filter((operation) => {
      const operationDate = new Date(operation.date);

      if (this.selectedTab !== 'all' && operation.type !== this.selectedTab) {
        return false;
      }

      if (
        this.selectedCategory &&
        operation.category !== this.selectedCategory
      ) {
        return false;
      }

      if (!this.isDateWithinSelectedFilter(operationDate)) {
        return false;
      }

      if (
        this.selectedDates &&
        (operationDate < this.selectedDates[0]! ||
          operationDate > this.selectedDates[1]!)
      ) {
        return false;
      }

      return true;
    });
  }

  get totalSum() {
    return this.operationsList.reduce((accumulatedSum, operation) => {
      return operation.type === 'add'
        ? accumulatedSum + operation.amount
        : accumulatedSum - operation.amount;
    }, 0);
  }

  get sortedOperations() {
    return this.filteredOperations
      .slice()
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}

export const financeStore = new FinanceStore();
