import TelegrafStatelessQuestion from 'telegraf-stateless-question';
import type {Telegraf} from 'telegraf';
import {replyMenuToContext} from 'telegraf-inline-menu';
import type {AppContext} from '../../types';
import menuTemplate from '../menus/main/template';

export const usernameQuestion = new TelegrafStatelessQuestion<AppContext>('username', async (ctx, additionalState) => {
  await replyMenuToContext(menuTemplate, ctx, additionalState);
});

export default (bot: Telegraf<AppContext>) => {
  bot.use(usernameQuestion.middleware());
};
