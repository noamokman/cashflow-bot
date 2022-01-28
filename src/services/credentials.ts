import type { AppContext } from '../types/index.js';
import type { Credentials } from '../types/credentials.js';

export const getOngoingCredentials = (ctx: AppContext) => ctx.db.get('ongoing').value().credentials;

export const assignOngoingCredentials = async (ctx: AppContext, credentials: Partial<Credentials>) => {
  await ctx.db.get('ongoing').assign({ credentials }).write();
};
