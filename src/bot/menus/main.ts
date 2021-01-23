import {MenuTemplate, MenuMiddleware} from 'telegraf-inline-menu';
import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types';

const menuTemplate = new MenuTemplate<AppContext>(ctx => `Hey ${ctx.from?.first_name}!`);

menuTemplate.interact('I am excited!', 'a', {
  do: async ctx => {
    await ctx.reply('As am I!');

    return true;
  }
});

const menuMiddleware = new MenuMiddleware('/', menuTemplate);

export default (bot: Telegraf<AppContext>) => {
  bot.command('start', ctx => menuMiddleware.replyToContext(ctx));
  bot.use(menuMiddleware);
};