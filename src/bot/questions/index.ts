import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types';
import username from './username';

export default (bot: Telegraf<AppContext>) => {
  username(bot);
};