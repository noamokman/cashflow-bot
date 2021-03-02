import handleGraceful from './framework/handleGraceful';
import logger from './framework/logger';
import bot from './bot';

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