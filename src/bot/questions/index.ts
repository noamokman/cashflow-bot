import type { Telegraf } from 'telegraf';
import type { AppContext } from '../../types/index.js';
import username from './username.js';
import name from './name.js';

export default (bot: Telegraf<AppContext>) => {
  name(bot);
  username(bot);
};
