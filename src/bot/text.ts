import type { Bot } from 'grammy';
import type { AppContext } from '../types/index.js';

export default (bot: Bot<AppContext>) => {
  bot.on('message', async (ctx) => {
    await ctx.reply("I'm sorry, not sure I understand you. Please try again from the main menu with /main");
  });
};
