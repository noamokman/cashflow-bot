import handleGraceful from './framework/handleGraceful.js';
import logger from './framework/logger.js';
import bot from './bot/index.js';

const startup = async () => {
  await bot.telegram.setMyCommands([
    {command: 'main', description: 'display the main menu'},
    {command: 'help', description: 'help message'}
  ]);

  await bot.launch();

  logger.info('Bot started!', {bot: bot.botInfo?.username});

  handleGraceful(bot);
};

void startup();