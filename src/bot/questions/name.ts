import { StatelessQuestion } from '@grammyjs/stateless-question';
import type { Bot } from 'grammy';
import type { AppContext } from '../../types/index.js';
import { menuMiddleware } from '../menus/main/index.js';
import { assignOngoingCredentials } from '../../services/credentials.js';

export const nameQuestion = new StatelessQuestion<AppContext>('name', async (ctx, additionalState) => {
  const { text } = ctx.message as { text?: string };

  await assignOngoingCredentials(ctx, { name: text });
  await menuMiddleware.replyToContext(ctx, additionalState);
});

export default (bot: Bot<AppContext>) => {
  bot.use(nameQuestion.middleware());
};
