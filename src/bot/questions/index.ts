import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types';
import username from './username';
import name from './name';

export default (bot: Telegraf<AppContext>) => {
  name(bot);
  username(bot);
};