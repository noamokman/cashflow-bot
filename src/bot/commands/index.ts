import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types/index.js';
import main from './main.js';

export default (bot: Telegraf<AppContext>) => {
  bot.command('main', main);
};