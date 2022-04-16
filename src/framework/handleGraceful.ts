import type { Bot } from 'grammy';
import type { AppContext } from '../types/index.js';

export const handleGraceful = (bot: Bot<AppContext>) => {
  const stopBot = () => {
    void bot.stop();
  };

  process.once('SIGINT', stopBot);
  process.once('SIGTERM', stopBot);
};
