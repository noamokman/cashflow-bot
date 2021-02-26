import {MenuMiddleware} from 'telegraf-inline-menu';
import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../../types';
import menuTemplate from './template';


const menuMiddleware = new MenuMiddleware('/', menuTemplate);

export default (bot: Telegraf<AppContext>) => {
  bot.command('main', ctx => menuMiddleware.replyToContext(ctx));
  bot.use(menuMiddleware);
};