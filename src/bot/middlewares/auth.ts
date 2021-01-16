import type {Middleware} from 'telegraf';
import {ALLOWLIST_USERS} from '../../framework/environment';
import type {AppContext} from '../../types';

const middleware: Middleware<AppContext> = async (ctx, next) => {
  const user = ctx.from?.id;

  if (user && ALLOWLIST_USERS.includes(user)) {
    return next();
  }

  await ctx.reply(`User${user ? ` (${user})` : ''} is not allowed, add it to the ALLOWLIST_USERS environment variable`);
};

export default middleware;