import type { Middleware } from 'grammy';
import type { AppContext } from '../../types/index.js';
import { logger } from '../../framework/logger.js';

export const log: Middleware<AppContext> = (ctx, next) => {
  ctx.log = logger.child({ user: ctx.from?.id, inlineMessageId: ctx.inlineMessageId, bot: ctx.me.username });

  return next();
};
