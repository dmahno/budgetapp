import {openDB} from 'idb';

const DATABASE_NAME = 'financeApp';
const STORE_NAME = 'operations';

export const getDatabase = () => {
  return openDB(DATABASE_NAME, 1, {
    upgrade(database) {
      if (!database.objectStoreNames.contains(STORE_NAME)) {
        database.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        });
      }
    },
  });
};
