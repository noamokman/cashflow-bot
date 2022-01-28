import { Low, JSONFile } from 'lowdb';
import { merge } from 'lodash-es';
import type { Database } from '../types/index.js';
import { dbPath } from './environment.js';

const adapter = new JSONFile<Database>(dbPath);

const createDB = async () => {
  const db = new Low(adapter);

  await db.read();

  const defaultDB: Database = {
    scrapers: [],
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
