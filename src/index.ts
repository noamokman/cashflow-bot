import handleGraceful from './framework/handleGraceful';
import logger from './framework/logger';
import bot from './bot';

void bot.launch();

logger.info('Bot started!');

handleGraceful(bot);