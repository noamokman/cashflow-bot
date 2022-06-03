import { Bot } from 'grammy';
import { botToken } from '../framework/environment.js';
import type { AppContext } from '../types/index.js';
import { middlewares } from './middlewares/index.js';
import menus from './menus/index.js';
import { commands } from './commands/index.js';
import text from './text.js';
import questions from './questions/index.js';

export const bot = new Bot<AppContext>(botToken);

middlewares(bot);
menus(bot);
commands(bot);
questions(bot);
text(bot);

// eslint-disable-next-line unicorn/prefer-top-level-await
bot.catch(async ({ error, ctx }) => {
  ctx.log.error({ err: error, updateId: ctx.update.update_id }, 'unexpected error occurred');
  await ctx.reply('Error occurred, please try again');
});
