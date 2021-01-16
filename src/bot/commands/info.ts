import type {AppContext} from '../../types';

export default async (ctx: AppContext) => {
  const scrapers = ctx.db.get('scrapers')
    .filter({user: ctx.from?.id})
    .value();

  await ctx.reply(JSON.stringify(scrapers));
};