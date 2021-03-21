import TelegrafStatelessQuestion from 'telegraf-stateless-question';
import type {Telegraf} from 'telegraf';
import {replyMenuToContext} from 'telegraf-inline-menu';
import type {AppContext} from '../../types';
import menuTemplate from '../menus/main/template';

export const nameQuestion = new TelegrafStatelessQuestion<AppContext>('name', async (ctx, additionalState) => {
  const answer = ctx.message.text;

  console.log(answer, additionalState);


  await replyMenuToContext(menuTemplate, ctx, additionalState);
});

export default (bot: Telegraf<AppContext>) => {
  bot.use(nameQuestion.middleware());
};
