import type {Middleware} from 'telegraf';
import type {AppContext} from '../../types';
import logger from '../../framework/logger';

const middleware: Middleware<AppContext> = (ctx, next) => {
  ctx.log = logger.child({user: ctx.from?.id, inlineMessageId: ctx.inlineMessageId});

  return next();
};

export default middleware;