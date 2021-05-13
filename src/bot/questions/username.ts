import TelegrafStatelessQuestion from 'telegraf-stateless-question';
import type {Telegraf} from 'telegraf';
import {replyMenuToContext} from 'telegraf-inline-menu';
import type {AppContext} from '../../types/index.js';
import menuTemplate from '../menus/main/template.js';

export const usernameQuestion = new TelegrafStatelessQuestion<AppContext>('username', async (ctx, additionalState) => {
  await replyMenuToContext(menuTemplate, ctx, additionalState);
});

export default (bot: Telegraf<AppContext>) => {
  bot.use(usernameQuestion.middleware());
};
