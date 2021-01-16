import type {Telegraf} from 'telegraf';
import type {AppContext} from '../types';

export default (bot: Telegraf<AppContext>) => {
  process.once('SIGINT', () => {
    bot.stop('SIGINT');
  });
  process.once('SIGTERM', () => {
    bot.stop('SIGTERM');
  });
};