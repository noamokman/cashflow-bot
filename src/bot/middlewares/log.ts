import type {Middleware} from 'telegraf';
import type {AppContext} from '../../types/index.js';
import logger from '../../framework/logger.js';

const middleware: Middleware<AppContext> = (ctx, next) => {
  ctx.log = logger.child({user: ctx.from?.id, inlineMessageId: ctx.inlineMessageId, bot: ctx.botInfo.username});

  return next();
};

export default middleware;