import type {Telegraf} from 'telegraf';
import type {AppContext} from '../types';

export default (bot: Telegraf<AppContext>) => {
  bot.help(ctx => ctx.reply('Open main menu with /main'));
};