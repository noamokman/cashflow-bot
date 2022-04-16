import type { Middleware } from 'grammy';
import { allowlistUsers } from '../../framework/environment.js';
import type { AppContext } from '../../types/index.js';

export const auth: Middleware<AppContext> = async (ctx, next) => {
  const user = ctx.from?.id;

  if (user && allowlistUsers.includes(user)) {
    ctx.userId = user;

    return next();
  }

  ctx.log.info('user not allowed tried to login');

  await ctx.reply(`User${user ? ` (${user})` : ''} is not allowed, add it to the ALLOWLIST_USERS environment variable to continue`);
};
