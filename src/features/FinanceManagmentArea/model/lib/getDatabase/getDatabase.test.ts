import {describe, it, expect, vi, beforeEach, Mock} from 'vitest';
import {openDB} from 'idb';

import {getDatabase, DATABASE_NAME, STORE_OPERATIONS_NAME} from './getDatabase';

vi.mock('idb', () => ({
  openDB: vi.fn(),
}));

describe('getDatabase', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call openDB with correct parameters', async () => {
    await getDatabase();

    expect(openDB).toHaveBeenCalledWith(DATABASE_NAME, 1, expect.any(Object));
  });

  it('should create object store and indexes on upgrade', async () => {
    const mockDatabase = {
      objectStoreNames: {
        contains: vi.fn().mockReturnValue(false),
      },
      createObjectStore: vi.fn().mockImplementation(() => ({
        createIndex: vi.fn(),
      })),
    };

    (openDB as Mock).mockImplementationOnce((_name, _version, {upgrade}) =>
      upgrade(mockDatabase),
    );

    await getDatabase();

    expect(mockDatabase.objectStoreNames.contains).toHaveBeenCalledWith(
      STORE_OPERATIONS_NAME,
    );
    expect(mockDatabase.createObjectStore).toHaveBeenCalledWith(
      STORE_OPERATIONS_NAME,
      {keyPath: 'id', autoIncrement: true},
    );

    const createdStore = mockDatabase.createObjectStore.mock.results[0].value;
    expect(createdStore.createIndex).toHaveBeenCalledWith(
      'category',
      'category',
      {unique: false},
    );
    expect(createdStore.createIndex).toHaveBeenCalledWith('date', 'date', {
      unique: false,
    });
  });

  it('should not create object store if it already exists', async () => {
    const mockDatabase = {
      objectStoreNames: {
        contains: vi.fn().mockReturnValue(true),
      },
      createObjectStore: vi.fn(),
    };

    (openDB as Mock).mockImplementationOnce((_name, _version, {upgrade}) =>
      upgrade(mockDatabase),
    );

    await getDatabase();

    expect(mockDatabase.objectStoreNames.contains).toHaveBeenCalledWith(
      STORE_OPERATIONS_NAME,
    );
    expect(mockDatabase.createObjectStore).not.toHaveBeenCalled();
  });
});
