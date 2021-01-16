import type {Middleware} from 'telegraf';
import {getDb} from '../../framework/db';
import type {AppContext} from '../../types';

const middleware: Middleware<AppContext> = async (ctx, next) => {
  ctx.db = await getDb();

  return next();
};

export default middleware;