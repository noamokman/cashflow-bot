import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import type {Database} from '../types';
import {DB_PATH} from './environment';

const adapter = new FileAsync<Database>(DB_PATH);

const dbPromise = lowdb(adapter);

export const getDb = () => dbPromise;
