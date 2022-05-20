import type { Bot } from 'grammy';
import { gracefulShutdown } from 'node-schedule';
import type { AppContext } from '../types/index.js';

export const handleGraceful = (bot: Bot<AppContext>) => {
  const shutdown = async () => {
    await gracefulShutdown();
    await bot.stop();
  };

  process.once('SIGINT', shutdown);
  process.once('SIGTERM', shutdown);
};
