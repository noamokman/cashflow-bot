import {Telegraf} from 'telegraf';
import {BOT_TOKEN} from '../framework/environment';
import type {AppContext} from '../types';
import middlewares from './middlewares';
import menus from './menus';
import commands from './commands';

const bot = new Telegraf<AppContext>(BOT_TOKEN);

middlewares(bot);
menus(bot);
commands(bot);

bot.catch(async (err, ctx) => {
  ctx.log.error({err, updateType: ctx.updateType}, 'unexpected error occurred');
  await ctx.reply('Error occurred, please try again');
});
bot.help(ctx => ctx.reply('Send me a sticker'));
bot.on('sticker', ctx => ctx.reply('👍'));
bot.hears('hi', ctx => ctx.reply('Hey there'));

export default bot;