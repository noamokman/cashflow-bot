import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types/index.js';
import main from './main/index.js';

export default (bot: Telegraf<AppContext>) => {
  main(bot);
};