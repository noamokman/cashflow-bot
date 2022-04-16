import type { AppContext } from '../types/index.js';
import type { Credentials } from '../types/credentials.js';

export const getOngoingCredentials = (ctx: AppContext) => ctx.db.chain.get('ongoing').value().credentials;

export const assignOngoingCredentials = async (ctx: AppContext, credentials: Partial<Credentials>) => {
  ctx.db.chain.get('ongoing').assign({ credentials });
  await ctx.db.write();
};
