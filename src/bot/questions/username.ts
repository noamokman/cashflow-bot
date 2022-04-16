import { StatelessQuestion } from '@grammyjs/stateless-question';
import type { Bot } from 'grammy';
import { replyMenuToContext } from 'grammy-inline-menu';
import type { AppContext } from '../../types/index.js';
import menuTemplate from '../menus/main/template.js';

export const usernameQuestion = new StatelessQuestion<AppContext>('username', async (ctx, additionalState) => {
  await replyMenuToContext(menuTemplate, ctx, additionalState);
});

export default (bot: Bot<AppContext>) => {
  bot.use(usernameQuestion.middleware());
};
