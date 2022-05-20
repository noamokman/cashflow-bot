import { Low, JSONFile } from 'lowdb';
import type { ExpChain } from 'lodash';
import { merge, chain } from 'lodash-es';
import type { Database } from '../types/index.js';
import { dbPath } from './environment.js';

const adapter = new JSONFile<Database>(dbPath);

export class LowWithLodash<T> extends Low<T> {
  chain: ExpChain<this['data']> = chain(this).get('data');
}

const createDB = async () => {
  const db = new LowWithLodash(adapter);

  await db.read();

  const defaultDB: Database = {
    integrations: [],
    credentials: [],
    ongoing: {
      integration: {},
      credentials: {},
    },
  };

  db.data = merge(defaultDB, db.data);

  await db.write();

  return db;
};

const dbPromise = createDB();

export const getDb = () => dbPromise;
