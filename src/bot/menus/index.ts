import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types';
import main from './main';

export default (bot: Telegraf<AppContext>) => {
  main(bot);
};