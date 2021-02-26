import {Telegraf} from 'telegraf';
import {botToken} from '../framework/environment';
import type {AppContext} from '../types';
import middlewares from './middlewares';
import menus from './menus';
import commands from './commands';
import help from './help';

const bot = new Telegraf<AppContext>(botToken);

middlewares(bot);
menus(bot);
commands(bot);
help(bot);

bot.catch(async (err, ctx) => {
  ctx.log.error({err, updateType: ctx.updateType}, 'unexpected error occurred');
  await ctx.reply('Error occurred, please try again');
});

export default bot;