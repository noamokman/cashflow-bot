import type {Middleware} from 'telegraf';
import {getDb} from '../../framework/db.js';
import type {AppContext} from '../../types/index.js';

const middleware: Middleware<AppContext> = async (ctx, next) => {
  ctx.db = await getDb();

  return next();
};

export default middleware;