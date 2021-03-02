import type {Telegraf} from 'telegraf';
import type {AppContext} from '../types';

export default (bot: Telegraf<AppContext>) => {
  bot.on('text', async ctx => {
    await ctx.reply('I\'m sorry, not sure I understand you. Please try again from the main menu with /main');
  });
};