import { MenuMiddleware } from 'telegraf-inline-menu';
import type { Telegraf } from 'telegraf';
import type { AppContext } from '../../../types/index.js';
import menuTemplate from './template.js';

export const menuMiddleware = new MenuMiddleware('/', menuTemplate);

export default (bot: Telegraf<AppContext>) => {
  bot.use(menuMiddleware);
};
