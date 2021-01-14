import type {Telegraf} from 'telegraf';

export default (bot: Telegraf) => {
  process.once('SIGINT', () => {
    bot.stop('SIGINT');
  });
  process.once('SIGTERM', () => {
    bot.stop('SIGTERM');
  });
};