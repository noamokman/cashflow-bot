import TelegrafStatelessQuestion from 'telegraf-stateless-question';
import type {Telegraf} from 'telegraf';
import type {AppContext} from '../../types/index.js';
import {menuMiddleware} from '../menus/main/index.js';
import {assignOngoingCredentials} from '../../services/credentials.js';

export const nameQuestion = new TelegrafStatelessQuestion<AppContext>('name', async (ctx, additionalState) => {
  const {text} = ctx.message as {text?: string};

  await assignOngoingCredentials(ctx, {name: text});
  await menuMiddleware.replyToContext(ctx, additionalState);
});

export default (bot: Telegraf<AppContext>) => {
  bot.use(nameQuestion.middleware());
};
