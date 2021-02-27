import type {AppContext} from '../../types';

export default async (ctx: AppContext) => {
  await ctx.reply('info');
};