import type { Bot } from 'grammy';
import type { AppContext } from '../../types/index.js';
import main from './main/index.js';

export default (bot: Bot<AppContext>) => {
  main(bot);
};
