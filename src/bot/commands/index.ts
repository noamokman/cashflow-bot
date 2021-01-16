import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types';
import info from './info';

export default (bot: Telegraf<AppContext>) => {
  bot.command('info', info);
};