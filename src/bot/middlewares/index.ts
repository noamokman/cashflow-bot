import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types';
import auth from './auth';
import db from './db';

export default (bot: Telegraf<AppContext>) => {
  bot.use(auth);
  bot.use(db);
};