import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types/index.js';
import auth from './auth.js';
import db from './db.js';
import log from './log.js';

export default (bot: Telegraf<AppContext>) => {
  bot.use(log);
  bot.use(auth);
  bot.use(db);
};