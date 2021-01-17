import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types';
import auth from './auth';
import db from './db';
import log from './log';

export default (bot: Telegraf<AppContext>) => {
  bot.use(log);
  bot.use(auth);
  bot.use(db);
};