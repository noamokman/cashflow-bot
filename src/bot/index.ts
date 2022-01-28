import { Telegraf } from 'telegraf';
import { botToken } from '../framework/environment.js';
import type { AppContext } from '../types/index.js';
import middlewares from './middlewares/index.js';
import menus from './menus/index.js';
import commands from './commands/index.js';
import help from './help.js';
import text from './text.js';
import questions from './questions/index.js';

const bot = new Telegraf<AppContext>(botToken);

middlewares(bot);
menus(bot);
commands(bot);
questions(bot);
help(bot);
text(bot);

bot.catch(async (error, ctx) => {
  ctx.log.error({ err: error, updateType: ctx.updateType }, 'unexpected error occurred');
  await ctx.reply('Error occurred, please try again');
});

export default bot;
