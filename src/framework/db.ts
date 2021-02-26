import lowdb from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
import type {Database} from '../types';
import {dbPath} from './environment';

const adapter = new FileAsync<Database>(dbPath);

const dbPromise = lowdb(adapter);

export const getDb = () => dbPromise;
