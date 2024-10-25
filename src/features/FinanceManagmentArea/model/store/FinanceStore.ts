// FinanceStore.ts
import {makeAutoObservable} from 'mobx';
import {message} from 'antd';

import {getDatabase} from '../lib/getDatabase/getDatabase';

interface IOperation {
  id?: number;
  amount: number;
  description: string;
  type: 'add' | 'exclude';
  date: Date;
}

export class FinanceStore {
  operationsList: IOperation[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadOperations();
  }

  async loadOperations() {
    const database = await getDatabase();
    this.operationsList = await database.getAll('operations');
  }

  async addOperation(
    amount: number,
    description: string,
    type: 'add' | 'exclude',
  ) {
    if (type === 'exclude' && amount > this.totalSum) {
      message.error(
        `Недостаточно средств. Максимальная сумма для списания: ${this.totalSum} ₽`,
      );
      return;
    }

    const database = await getDatabase();
    const newOperation: IOperation = {
      amount,
      description,
      type,
      date: new Date(),
    };

    const operationId = (await database.add(
      'operations',
      newOperation,
    )) as number;
    this.operationsList.push({...newOperation, id: operationId});
  }

  async deleteOperation(operationId: number) {
    const database = await getDatabase();
    await database.delete('operations', operationId);
    this.operationsList = this.operationsList.filter(
      (operation) => operation.id !== operationId,
    );
  }

  get totalSum() {
    return this.operationsList.reduce((accumulatedSum, operation) => {
      return operation.type === 'add'
        ? accumulatedSum + operation.amount
        : accumulatedSum - operation.amount;
    }, 0);
  }
}

export const financeStore = new FinanceStore();
