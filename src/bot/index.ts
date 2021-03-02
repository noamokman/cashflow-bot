import {Telegraf} from 'telegraf';
import {botToken} from '../framework/environment';
import type {AppContext} from '../types';
import middlewares from './middlewares';
import menus from './menus';
import commands from './commands';
import help from './help';
import text from './text';
import questions from './questions';

const bot = new Telegraf<AppContext>(botToken);

middlewares(bot);
menus(bot);
commands(bot);
questions(bot);
help(bot);
text(bot);

bot.catch(async (err, ctx) => {
  ctx.log.error({err, updateType: ctx.updateType}, 'unexpected error occurred');
  await ctx.reply('Error occurred, please try again');
});

export default bot;