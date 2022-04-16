import type { Middleware } from 'grammy';
import { getDb } from '../../framework/db.js';
import type { AppContext } from '../../types/index.js';

export const db: Middleware<AppContext> = async (ctx, next) => {
  ctx.db = await getDb();

  return next();
};
