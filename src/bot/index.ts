import {Telegraf} from 'telegraf';
import {BOT_TOKEN} from '../framework/environment';

const bot = new Telegraf(BOT_TOKEN);

bot.start(ctx => ctx.reply('Welcome'));
bot.help(ctx => ctx.reply('Send me a sticker'));
bot.on('sticker', ctx => ctx.reply('👍'));
bot.hears('hi', ctx => ctx.reply('Hey there'));

export default bot;