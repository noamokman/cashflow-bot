import type {AppContext} from '../types';

export const getOngoingCredentials = (ctx: AppContext) => ctx.db.get('ongoing').value().credentials;

export const assignOngoingCredentials = (ctx: AppContext, name: string) => ctx.db.get('ongoing')
  .assign({credentials: {name}})
  .write();