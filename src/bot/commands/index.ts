import type { Bot } from 'grammy';
import type { AppContext } from '../../types/index.js';
import { main } from './main.js';
import { help } from './help.js';

export const commands = (bot: Bot<AppContext>) => {
  bot.command('main', main);
  bot.command('help', help);
};
