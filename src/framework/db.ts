import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync.js';
import type {Database} from '../types/index.js';
import {dbPath} from './environment.js';

const adapter = new FileAsync<Database>(dbPath);

const createDB = async () => {
  const db = await lowdb(adapter);

  const defaultDB: Database = {
    scrapers: [],
    integrations: [],
    credentials: [],
    ongoing: {
      integration: {},
      credentials: {}
    }
  };

  await db.defaultsDeep(defaultDB).write();

  return db;
};

const dbPromise = createDB();

export const getDb = () => dbPromise;
