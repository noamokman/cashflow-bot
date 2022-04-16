import { MenuMiddleware } from 'grammy-inline-menu';
import type { Bot } from 'grammy';
import type { AppContext } from '../../../types/index.js';
import menuTemplate from './template.js';

export const menuMiddleware = new MenuMiddleware('/', menuTemplate);

export default (bot: Bot<AppContext>) => {
  bot.use(menuMiddleware);
};
