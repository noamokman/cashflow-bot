import handleGraceful from './framework/handleGraceful';
import bot from './bot';

void bot.launch();

handleGraceful(bot);