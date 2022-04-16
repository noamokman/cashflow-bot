import type { Bot } from 'grammy';
import type { AppContext } from '../../types/index.js';
import { auth } from './auth.js';
import { db } from './db.js';
import { log } from './log.js';

export const middlewares = (bot: Bot<AppContext>) => {
  bot.use(log);
  bot.use(auth);
  bot.use(db);
};
