import {openDB} from 'idb';

export const DATABASE_NAME = 'financeApp';
export const STORE_OPERATIONS_NAME = 'operations';

export const getDatabase = () => {
  return openDB(DATABASE_NAME, 1, {
    upgrade(database) {
      if (!database.objectStoreNames.contains(STORE_OPERATIONS_NAME)) {
        const store = database.createObjectStore(STORE_OPERATIONS_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });
        store.createIndex('category', 'category', {unique: false});
        store.createIndex('date', 'date', {unique: false});
      }
    },
  });
};
