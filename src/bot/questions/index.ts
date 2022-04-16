import type { Bot } from 'grammy';
import type { AppContext } from '../../types/index.js';
import username from './username.js';
import name from './name.js';

export default (bot: Bot<AppContext>) => {
  name(bot);
  username(bot);
};
